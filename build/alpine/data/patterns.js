export default function(Alpine) {
    Alpine.data('tabs',(args={}) => ({
        selectedTab: args.startingTab || 'none'
    }))
}

// generate 16 characters random string

function randomString(length) {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = Array(length).fill('').map(() => chars[Math.floor(Math.random() * chars.length)]);
    return result.join('');
}