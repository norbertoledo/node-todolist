const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command(
        'crear',
        'Crea una tarea.',
        {
            descripcion
        }
    )
    .command(
        'actualizar',
        'Actualiza las tareas.',
        {
            descripcion,
            completado
        }
    )
    .command(
        'listar',
        'Lista las tareas.',
        {

        }
    )
    .command(
        'borrar',
        'Borrar una tarea',
        {
            descripcion
        }
    )
    .help()
    .argv;

module.exports = {
    argv
}