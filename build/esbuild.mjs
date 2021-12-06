import esbuild from "esbuild";

export default async function() {
  console.time('esbuild Built');
  esbuild.buildSync({
    entryPoints: ["./build/in.js"],
    define: { ALPINE_VERSION: "'Kwoka Custom'", DEBUG_ON: false },
    bundle: true,
    minify: true,
    outfile: "./src/assets/build.min.js",
    target: "es2017"
  });
  console.timeEnd('esbuild Built');
}
