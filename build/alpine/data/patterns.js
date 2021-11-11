export default function(Alpine) {
    Alpine.data('tabs',(args={}) => ({
        selectedTab: args.startingTab || 'none'
    }))
}