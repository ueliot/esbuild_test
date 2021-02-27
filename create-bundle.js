require('esbuild').build({
    entryPoints: ['app.jsx'],
    bundle: true,
    minify: true,
    outdir: 'public',
    define: {

    },
    target: ['safari14'],
    format: 'esm',
    sourcemap: true,
    splitting: true
}).catch(()=> process.exit(1))
