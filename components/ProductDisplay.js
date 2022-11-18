app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template:
        // Below triggers es6-string-html
        /*html*/
        `<div class="product-display">
            <div class="product-container">

            <div class="product-image">
                <img :src="image" :class="{'out-of-stock-img': !inventory}">
            </div>
            <!-- :src is short for v-bind:src -->

            <div class="product-info">
                <h1>{{ title }}</h1>

                <product-details :details="details"></product-details>

                <div v-for="(variant,index) in variants" :key="variant.id" @mouseover="updateVariant(index)"
                class="color-circle" :style="{backgroundColor: variant.color}">
                </div>

                <div v-for="(size, index) in sizes" :key="index">{{size}}</div>

                <p v-if="inventory > 2">In Stock!</p>
                <p v-else-if="inventory <= 2 && inventory > 0" style="color:darkorange">Few Remaining!</p>
                <p v-else style="color:red">Out of Stock</p>
                <p><b>{{onSale}}</b></p>
                <!--Earlier: v-show="onSale"-->

                <p>Shipping: {{shipping}}</p>

                <button class="button" :class="{disabledButton: !inventory}" :disabled="!inventory" @click="addToCart">
                Add to Cart</button>
                <button class="button" @click="removeFromCart">Remove Item</button>
                <!-- "@" replaces "v-on:" -->
            </div>
            </div>

            <review-list v-if="reviews.length" :reviews="reviews"></review-list>
            <review-form @review-submitted="addReview"></review-form>

        </div>`,

    data() {                //ES6 Shorthand for data: () => {
        return {
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0, //0 is green, 1 is blue
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', inventory: 5, onSale: true },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', inventory: 2, onSale: false }
            ],
            sizes: ['S', 'M', 'L', 'XL'],
            reviews: []
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id);
            // this.inventory() > 0 ? this.variants[selectedVariant].inventory -= 1 : '';
        },
        removeFromCart() {
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].id);
            // this.variants[selectedVariant].inventory += 1;
        },
        updateVariant(index) {
            this.selectedVariant = index
        },
        addReview(review) {
            this.reviews.push(review)
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        onSale() {
            if (this.variants[this.selectedVariant].onSale) {
                return `${this.brand} ${this.product} is on sale!`
            } else return '';
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inventory() {
            return this.variants[this.selectedVariant].inventory
        },
        shipping() {
            return this.premium ? "Free" : "2.99"
        }
    }
})

