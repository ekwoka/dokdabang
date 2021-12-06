import postcss from 'postcss';
import { readFileSync, writeFileSync } from 'fs';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

let plugins = [tailwindcss, autoprefixer];
true ? plugins.push(cssnano) : null;

export default async function() {
  console.time('TailwindCSS built');
  const css = readFileSync('build/styles.pre.css');
  postcss(plugins)
    .process(css, { from: 'build/styles.pre.css', to: 'src/assets/styles.min.css' })
    .then((result) => {
      writeFileSync('src/assets/styles.min.css', result.css);
      if (result.map) {
        writeFileSync('src/assets/styles.min.css.map', result.map.toString());
      }
    });
  console.timeEnd('TailwindCSS built');
}
