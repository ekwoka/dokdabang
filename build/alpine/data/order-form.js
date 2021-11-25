import { priceFormatter } from "../../utils"

export default function(Alpine) {
    Alpine.data('orderForm', (product) => ({
        product,
        ...product,
        selected: null,
        get formattedPrice() {
            return priceFormatter.format(this.price)
        },
        addToCart() {
            let product = {
                ...this.product,
                variant: this.selected,
                quantity: 1
            }
            delete product.variants
            this.$store.cart.add(product)
        }
    }))
}