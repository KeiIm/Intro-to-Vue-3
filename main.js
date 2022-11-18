// const product = 'Socks'

const app = Vue.createApp({
    data() {                //ES6 Shorthand for data: () => {
        return {
            cart: [],
            premium: true,
            url: 'https://static.nrdbassets.com/v1/large/30001.jpg'
        }
    },
    methods: {
        updateById(id) {
            this.cart.push(id)
        },
        removeById(id) {
            const index = this.cart.indexOf(id)
            index >= 0 ? this.cart.splice(index, 1) : ''
        }
    }
})