# Instalacion de esbuild y primeras pruebas

https://esbuild.github.io/getting-started/

```
 >npm init -y
 >npm install esbuild -D   o   >npm i esbuil -D
```

Podemos probar si esbuild puede trabajar despues que lo hemos instalado

`./node_modules/.bin/esbuild --version
`

del video de midu hace pruebas con react del siguiente modo:

instala primero react ` > npm install react react-dom`

enntonces crea el archivo app.jsx que contine:

```
import * as React from 'react'
import * as Server from 'react-dom/server'

let Greet = () => <h1>Hello, world!</h1>
console.log(Server.renderToString(<Greet />))
```

Esto es interesante estamos ejecutando React desde el server 'react-dom/server'
y escupimos el html en la consola.

Luego Midu hace:
`./node_modules/.bin/esbuild app.jsx --help`
`./node_modules/.bin/esbuild app.jsx --bundle`

Esto permite ver en pantalla lo que hace esbuild, solo lo saca x la terminal

`./node_modules/.bin/esbuild app.jsx --bundle --minify`

Esto se puede ver de forma minificada
y por ultimo podemos exportarlo:

`./node_modules/.bin/esbuild app.jsx --bundle --outfile=bundle.js`

Aqui sale unos warnings ya que al usar React y node, no estan creadas las
variables de entornos por lo que algunas dependencias de React qque se detectan en produccion y no estan estas eliminan cierto codigo. Lo importante es que hemos echo el primer bundle

Podemo probar

`node bundle.js`

--- Ahora Funciona ---
-------------------------------------------------------------------------------
Siempre usar la importacion de React en cada fichero que se use y llamerle .jsx 
los archivos .js que usen dentro jsx no es bien compilado y dan error, mejor mirarse el link

https://esbuild.github.io/content-types/#jsx


Ahora crearemos una carpeta /public/index.html
y para evitar los warning de momento usaremos:

`esbuild app.jsx --bundle --define:process.env.NODE_ENV=\"production\"`
pero lo haremos desde el script de package json

```
"scripts": {
    "build": "esbuild app.jsx --bundle --minify --outfile=public/bundle.js --define:process.env.NODE_ENV=\"production\""
  },

```

Se puede usar servor para levantar un servidor de paginas estaticas es el favorito de midudev
y exponer el /public alli. Modificamos el app.jsx y el index.html para ejecutar react desde alli mismo.
y renderizar algo en la web

https://github.com/lukejacksonn/servor


Ahora creamos el bundle usando el script:

`>npm run build`


Hay un problema con el script cambiamos el escape (\")  x simplemente '  (una comilla)

`--define:process.env.NODE_ENV='production'" `

hay que volver hacer un npm run build cuando cambienmos algo en el fichero

https://esbuild.github.io/api/#define 

En este enlace encontre esto:
```
    {
  "scripts": {
    "build": "esbuild --define:process.env.NODE_ENV=\\\"production\\\" app.js"
  }
}
```



Aqui hay muchas cosas mas como por ejemplo 
ya soporta algunas extensiones modernas del lenguaje sin necesidad de usar babel. no se tiene que configurar ninguna cosa
por que ya lo tiene

https://esbuild.github.io/content-types/#javascript 
y podremos usarlas


Vamos a poner un debuguer si no lo soporta tenemos que decirle que navegadores soporta

https://esbuild.github.io/api/#target 

Este es el video de midu donde estoy siguiendo:
https://www.youtube.com/watch?v=EVoqj6bhMlk&feature=emb_title
35:41



Aqui se puede ver si puedo usar algun tipo de sintaxis de javascript
para el caso de optinal chaning

https://caniuse.com/


Que son los chunks:

https://apuntes.de/nodejs/chunk-por-chunk/#gsc.tab=0
https://apuntes.de/nodejs/#gsc.tab=0 
https://apuntes.de/#gsc.tab=0 


Este Esbuild soporta directamente TypeScript

Snowpack tambien le gusta a midudev
https://www.snowpack.dev/


otros que usan esbuild
https://github.com/rsms/estrella
https://github.com/vitejs/vite 


### Con un CTRL + Espacio dentro de un objeto nos aparece todas sus opciones en vscode

En este proyecto se ha creado un file: create-bundle.js
que de forma programatica usamos la api de esbuild para generar el bundle
aqui se ha configurado para generar sourcemap y splitting del codigo cuando
usamos modules, por lo tanto se debe especificar que se usara <script type=modules src=''></script>

Tambien si hacemos que el bundle genere los css budelizados necesitamos importarlo dento del
index html.

ahora podemos cambiar el script del packagejson:

```
 "scripts": {
    "build": "node create-bundle.js",
    "otracosa": "lo que sea aqui"
  },

```

luego hacer `>npm run build`
o en su defecto directamente `>node create-bundle.js`










