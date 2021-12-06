import liquid from './liquid.mjs';
import esbuild from './esbuild.mjs';
import postcss from './postcss.mjs';

await liquid()
await esbuild()
await postcss()

console.log('Build Complete')