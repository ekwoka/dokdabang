export default function (Alpine) {
  Alpine.persistedStore('instagram', {
    posts: [],
    async init() {
      if (this.posts.length !== 0) return;

      let posts = await fetch('api/insta');
      this.posts = await posts.json();
    }
  });
}
