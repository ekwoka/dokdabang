import { Liquid } from 'liquidjs';
import { mkdirSync, readdir, createWriteStream } from 'fs';
import * as data from './liquid/objects/data.mjs';
import pageTypes from './liquid/objects/index.mjs';

console.time('Liquid Rendered')


const engine = new Liquid({
    extname: '.liquid',
    root: 'build/liquid/pages',
    layouts: 'build/liquid/layouts',
    partials: ['build/liquid/snippets','build/liquid/icons']
})

let paths = ['src/assets','src/menu']
paths.forEach(p=>mkdirSync(p, { recursive: true }))

let pipes = []

pageTypes.forEach(({type, pages = [], path = ''}) => {
    pipes.push(...pages.map(page => {
        let outputPath = `src/${path}${typeof page === 'object'?page.handle:page}.html`
        let output = createWriteStream(outputPath);
        let pageData = {
            settings: {...data.global, type} || {},
            template: {...data[type]} || {},
            page: {...page} || {}
        }
        return engine.renderFileToNodeStream(type,pageData||{}).then(stream => stream.pipe(output))
    
    }))
})

await Promise.all(pipes)

console.timeEnd('Liquid Rendered')