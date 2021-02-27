import ('./modulo').then(({sayHi})= {
    sayHi()
})

 

//esta es una importacion de forma dinamica y una vez cargado llamarla
//carga este modulo solo cuando lo necesita y lo ejecuta

//se esta trabajando para que funcionen bien los chunks en esbuil y solo funciona en el formato --format=esm
//https://esbuild.github.io/api/#splitting
//Se llama spliting codes  

//usamos:      --splitting --outdir=out
//el directorio  /public ahora ya no nos serviria y habria que quitarlo del script quitar --outfile=


// https://esbuild.github.io/api/#format
// usa x defecto iife   este formato pero hay 3 modos : iife, commonjs y ESM
//si se usa ESM  --format=esm "

//en iife el bundle al final es una funcion que se autoejecuta y esto lo hacen x un tema de rendimiento 
//para que se evalue un poco mas tarde y no se bloquee el thread principal

// cuando trabajas al usar distintos navegadores se puede usar el sourcemap, se puede usar y leer asi el
//codigo este minificado por lo que sirve para encontrar errores en produccion
//los .map  no se debe de subir al servidor solo sirve para depuracion de nuestra aplicacion en produccion.
//  --sorcemap

