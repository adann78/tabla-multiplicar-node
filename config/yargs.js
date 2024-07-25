const argv  = require('yargs')
.option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla'
})
.option('l', {
    alias: 'listar',
    type: 'boolean',
    default: true,
    describe: 'Muestra la tabla'
})
.option('h', {
    alias: 'hasta',
    type: 'number',
    demandOption: true,
    describe: 'Hasta donde se multiplicara'
})

.check( (argv, options)=>{
    if( isNaN( argv.b )){
        throw 'La base debe ser un  numero'
    }
    return true;
} )
.argv;
console.clear()

module.exports=argv;