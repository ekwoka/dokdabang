import { priceFormatter } from '../../utils'

export default function(Alpine) {
    Alpine.data('cart',({} = {}) => ({
        get items() {
            return this.$store.cart.items
        },
        get total() {
            return this.items.reduce((total, item) => {
                return total + (parseInt(item.price)*item.quantity)
            }, 0)
        },
        init() {
            console.log(this.items)
        },
        format(price) {
            return priceFormatter.format(price)
        },
        remove(item) {
            this.$store.cart.items = this.items.filter(i => i !== item)
        }
    }));
}