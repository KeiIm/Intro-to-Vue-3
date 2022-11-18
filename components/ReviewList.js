app.component('review-list', {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template:
        /*html*/
        `<div class="review-container">
        <h3>Reviews:</h3>
        <ul>
            <li v-for="(review, index) in reviews" :key="index">
            {{review.name}} gave this {{review.rating}} stars and 
            <span v-if="review.recommendation == 'yes'">recommends it.</span>
            <span v-else>doesn't recommend it.</span>
            <br>
            "{{review.review}}"
            </li>
        </ul>
    </div>`
})