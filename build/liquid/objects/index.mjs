import menu from './menu.mjs';

export default [
    {
        type: 'index',
        pages: ['index']
    },
    {
        type: 'product',
        pages: menu,
        path: 'menu/'
    },
    {
        type: 'collection',
        pages: ['menu']
    },
    {
        type: 'checkout',
        pages: ['checkout']
    },
    {
        type: 'review',
        pages: ['review']
    }
]