const fs = require('fs');
const colors = require('colors');


let todoArr=[];

const guardarDB = ()=>{

    let data = JSON.stringify(todoArr);

    fs.writeFile('db/data.json', data, (err)=>{
        if(err){
        throw new Error("No se pudo grabar", err);
        
        }else{
            return JSON.parse(data);
        }
    })

}

const leerDB = ()=>{

    try {

        todoArr = require('../db/data.json');        
    } catch (error) {
        
        todoArr=[];
    }
    return todoArr;
    
}

const crear = (descripcion)=>{
 
    leerDB();
    
    let todo = {
        descripcion,
        completado: false
    }
    todoArr.push(todo);
    guardarDB();

    return todo;
}

const getListado = ()=>{
    let listado = leerDB();
    let cadena = '';
    for(let tarea of listado){
        cadena +=
`${colors.green('====Por Hacer====')}\n
${tarea.descripcion}\n
Estado:  ${tarea.completado}\n
${colors.green('=================')}\n\n`;
    }
    return cadena;
}

const actualizar = (descripcion, completado=true)=>{

    leerDB();
    // Retorna el index de la tarea si se cumple la condicion. Si no lo encuentra, retorna -1
    let index = todoArr.findIndex( tarea =>{
        return tarea.descripcion === descripcion;
    } )

    if(index >=0){
        todoArr[index].completado = completado;
        guardarDB();
        return true;
    }else{
        return false;
    }
    
}

const borrar = (descripcion)=>{

    leerDB();

    //Devuelve un nuevo array con todos los elementos que no clumplen con la condicion
    let nuevoListado = todoArr.filter( tarea =>{
        return tarea.descripcion !== descripcion
    })

    if(nuevoListado.length === todoArr.length){
        return false
    }else{
        todoArr = nuevoListado;
        guardarDB();
        return true
    }

}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}
