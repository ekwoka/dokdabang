export default function(Alpine) {
    Alpine.data('instagram',({} = {}) => ({
        get posts() {
            return this.$store.instagram.posts;
        }
    }))
}