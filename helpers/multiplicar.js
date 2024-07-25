const { error } = require('console')
const colors=require('colors')
const fs=require('fs')
const crearArchivo = async (base, listar=false, hasta)=>{

 try{
    
    let salida=''
    let salida2=''
        for(let i=1;i<=hasta;i++){
            salida+=`${base} ${'x'.green} ${i}${'='.green}${base*i}\n`;
            salida2 += `${base} x ${i} = ${base * i}\n`;
        }
    if(listar){
    console.log('======================================'.green)
    console.log('Tabla del:'.green, colors.blue(base ))
    console.log('======================================'.green)
        console.log(salida)
    }
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida2 )  
    return `tabla-${base}.txt`;
 }catch (error){
    throw error

 }



    



}

module.exports={
    crearArchivo
}  