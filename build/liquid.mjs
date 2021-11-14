import { Liquid } from 'liquidjs';
import * as data from './liquid/objects/index.mjs';
import { mkdirSync, readdir, createWriteStream } from 'fs';
const engine = new Liquid({
    extname: '.liquid',
    root: 'build/liquid/pages',
    layouts: 'build/liquid/layouts',
    partials: ['build/liquid/snippets','build/liquid/icons']
})

mkdirSync('src/assets', { recursive: true })

readdir('build/liquid/pages',async(err,files)=>{
    if(!files) return console.log('No Liquid Files Found')
    console.time('Liquid Rendered')
    let pipes = files.map(f => {
        f = f.replace('.liquid', '');
        const output = createWriteStream(`src/${f}.html`);
        let pageData = {
            settings: {...data.global},
            page: {...data[f]}
        }
        return engine.renderFileToNodeStream(f,pageData||{}).then(stream => stream.pipe(output))
    })
    await Promise.all(pipes)
    console.timeEnd('Liquid Rendered')
})
