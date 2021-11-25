export default function(Alpine) {
    Alpine.persistedStore('cart',{
        items: [],
        add(product) {
            if (!this.items.some(i => (i.handle == product.handle && i.variant == product.variant))) return this.items.push(product);
            this.items.find(i => i.handle == product.handle).quantity++;
        },
        get quantity() {
            return this.items.reduce((total, item) => total + item.quantity, 0);
        }
    })
}