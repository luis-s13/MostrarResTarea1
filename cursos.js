let cursos= [ 
    {   id:1,
        nombre:'Mineria de datos',
        duracion:40,
        costo:100       },
    {   id:2,
        nombre:'Introduccion a Python',
        duracion:32,
        costo:80       },
    {   id:3,
        nombre:'Procesos Estocasticos',
        duracion:48,
        costo:120       },             ];

const opciones={
    //curso-id
    cid:{
        demand:true,
        alias:'i'       }  ,
    //estudiante-nombre
    nombre_e:{
        demand:true,
        alias:'n'       }  ,
    //x-estudiante documento
    documento:{
        demand:true,
        alias:'x'       }               }

module.exports={
    cursos,
    opciones
};
