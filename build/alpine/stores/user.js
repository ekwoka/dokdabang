export default function (Alpine) {
  Alpine.persistedStore('user', {
    id: '',
    name: '',
    email: '',
    address: {
      street: '',
      city: '',
      state: '',
      zip: ''
    },
    genID() {
        this.id = randomString(16);
    }
  });
}

function randomString(length) {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = Array(length).fill('').map(() => chars[Math.floor(Math.random() * chars.length)]);
    return result.join('');
}