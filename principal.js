//const fs = require('fs');
const {cursos,opciones}=require('./cursos.js');
//constantes de express
const express = require('express')
const app = express()

let princ=0;
const argv=require('yargs')

.command('$0', 'the default command', () => {}, (argv) => {
    princ=1; //pasa por la opcion principal
    console.log('El curso denominado '+cursos[0].nombre+
    ' tiene una duracion de '+cursos[0].duracion +
    ' horas y un costo de '+cursos[0].costo+ ' dolares')  
    setTimeout(function(){
        console.log('El curso denominado '+cursos[1].nombre+
        ' tiene una duracion de '+cursos[1].duracion +
        ' horas y un costo de '+cursos[1].costo+ ' dolares')          
        }, 2000);
 
    setTimeout(function(){
        console.log('El curso denominado '+cursos[2].nombre+
        ' tiene una duracion de '+cursos[2].duracion +
        ' horas y un costo de '+cursos[2].costo+ ' dolares')  
        }, 4000);
    
    }
  )

    .command('inscribir','Realizar inscripción',opciones)
    
    .argv

//validar id
idbuscar=argv.cid;

let cursobuscado = cursos.find(function(cursox ) { 
    return cursox.id == idbuscar})
if(cursobuscado===undefined )
{
    if(princ==0)
      { 
        console.log('codigo incorrecto');
        textoe='(No se ha encontrado el id del curso ingresado)';
        textoe=textoe+'<div>Recuerde que los cursos disponibles son:';
        for (a=0;a<3;a++)
        {
            textoe=textoe+'<div>'+cursos[a].id+' : '+cursos[a].nombre+ ' , Duracion:'+
            cursos[a].duracion+' horas, Costo:'+cursos[a].costo+' dolares';
        }
        console.log(textoe);
        //Express
        
        app.get('/', function (req, res) {
        res.send('<H1 style="color:red;">Error en la Inscripción</H1>'+ textoe)
        })
        app.listen(3001)
        try{
        const opn = require('opn');
        opn('http://localhost:3001');
        }
        catch(err)
        {
        console.log('Nota: si el explorador no se inicia, digite en consola "npm install opn" antes de reintentar' 
        +'o abra la URL http://localhost:3001 en su navegador para ver detalles');
        }
      

      }
}
else
{
    texto=' ';
    linea='El estudiante <strong>'+argv.nombre_e+'</strong>'+
    ' identificado con cédula <strong>'+argv.documento+'</strong>';
    texto=texto+linea+'\n';
    //console.log(linea);
    linea='ha hecho la preinscripción en el curso <strong>'+cursobuscado.nombre+'</strong>';
    texto=texto+linea+'\n';
    //console.log(linea);
    linea='tiene una duración de '+cursobuscado.duracion+' horas y un costo en dolares de '+cursobuscado.costo;
    texto=texto+linea;
    //console.log(linea);

//    fs.writeFile('prematricula.txt',texto,(err)=> {
//        if(err) throw (err);
        //console.log('<<Archivo creado>>')
//     } );

    //Express
    app.get('/', function (req, res) {
    res.send('<H1 style="color:blue;">Resultado de Inscripción</H1>'+ texto) 
  })
  
  app.listen(3000)
  try{
  const opn = require('opn');
  opn('http://localhost:3000');
  }
  catch(err)
  {
  console.log('Nota: si el explorador no se inicia, digite en consola "npm install opn" antes de reintentar'
  + 'o abra la URL http://localhost:3000 en su navegador para ver el resultado de la inscripción');
  }
   
}

//console.log(cursos[argv.cid].nombre);

