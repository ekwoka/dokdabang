import { priceFormatter } from '../../utils';

export default function (Alpine) {
  Alpine.data('review', () => ({
    get id() {
      return this.$store.user.id;
    },
    items: [],
    init() {
      this.items = [...this.$store.cart.items];
      this.$store.cart.items = [];
    },
    format(price) {
      return priceFormatter.format(price);
    },
    get total() {
        return this.items.reduce((total, item) => {
            return total + (parseInt(item.price)*item.quantity)
        }, 0)
    }
  }));
}
