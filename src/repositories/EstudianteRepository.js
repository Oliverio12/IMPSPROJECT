const pool = require('../config/databaseController');

module.exports = {
    obtenerTodosLosEstudiantes: async() =>{
        try {
            const result = await pool.query('Select * from estudiantes');
            return result;
        } catch (error) {
            console.error('Ocurrio un problema al consultar la lista de estudiantes', error)
        }
    }
}