// Requires
const colors = require('colors');
const argv = require('./config/yargs').argv;
const todo = require('./todo/todo');



let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea =todo.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        //console.log('listar tareas');
        console.log(todo.getListado());
        break;

    case 'actualizar':
        //console.log('actualizar tareas');
        todo.actualizar(argv.descripcion, argv.completado);
        console.log(todo.getListado());
        break;

    case 'borrar':
        todo.borrar(argv.descripcion);
        console.log(todo.getListado());
        break;

    default:
        console.log('No es un comando válido');
        break;
}