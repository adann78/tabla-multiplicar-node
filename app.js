const {crearArchivo}=require('./helpers/multiplicar.js')
const colors=require('colors')
const argv=require('./config/yargs.js')




crearArchivo( argv.b, argv.l, argv.h )  
.then(nombreArchivo=>console.log(nombreArchivo.rainbow, 'creado'))
.catch(err=>console.log(err))


/*
const base=4
crearArchivo(base)  
.then(nombreArchivo=>console.log(nombreArchivo, 'creado'))
.catch(err=>console.log(err))


fs.writeFile('tabla-5.txt', salida, ()=>{
    if(err) throw err;
    console.log('tabla-5.txt creado!')

})


//console.log(salida)

console.log(process.argv);
const[, , arg3='base=16']=process.argv
const [, base=9]=arg3.split('=')
console.log(base)
*/
