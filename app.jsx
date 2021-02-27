import * as React from 'react'
// import * as Server from 'react-dom/server'
import * as ReactDOM from 'react-dom'

// let Greet = () => <h1>Hello, world!</h1>
// console.log(Server.renderToString(<Greet />))


console.log(process.env.NODE_ENV)
console.log(process.env.NODE_ENV==='production')   //deveriamos ver true
debuguer     //aqui se detendra el navegador un breackpoint puesto en el codigo

ReactDOM.render(
    <h1>Hola Amigos y amigas </h1>,    
    document.getElementById('app')
)

