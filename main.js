// const product = 'Socks'

const app = Vue.createApp({
    data() {                //ES6 Shorthand for data: () => {
        return {
            cart: 0,
            premium: true,
            url: 'https://static.nrdbassets.com/v1/large/30001.jpg'
        }
    },
    methods: {}
}
)