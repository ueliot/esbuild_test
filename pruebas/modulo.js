export default function sayHi(){
//Aqui un ejemplo con nueva sintaxis ?. para ver si compila ES2020
    const persona = {
        mensaje: 'Hola a todas y todos'
    }

    const mensaje = persona?.mensaje
    document.getElementById('app').innerHTML = `<h1>${mensaje}</h1>`

}