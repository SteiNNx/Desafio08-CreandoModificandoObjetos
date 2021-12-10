/** Desafio 08 ES5 */

/** 
 * @class Paciente 
 * @param {string} nombre
 * @param {number} edad 
 * @param {string} rut
 * @param {string} diagnostico
 * */
function Paciente(nombre, edad, rut, diagnostico) {
    /** Props */
    let _nombre = nombre;
    let _edad = edad;
    let _rut = rut;
    let _diagnostico = diagnostico;

    /** Getters */
    Object.defineProperty(this, 'nombre', {
        get: function () {
            return _nombre;
        }
    });
    Object.defineProperty(this, 'edad', {
        get: function () {
            return _edad;
        }
    });
    Object.defineProperty(this, 'rut', {
        get: function () {
            return _rut;
        }
    });
    Object.defineProperty(this, 'diagnostico', {
        get: function () {
            return _diagnostico;
        }
    });
    /** EndGetter */

    /** Setters */
    Object.defineProperty(this, 'setNombre', {
        set: function (nombre) {
            _nombre = nombre;
        }
    });
    Object.defineProperty(this, 'setEdad', {
        set: function (edad) {
            _edad = edad;
        }
    });
    Object.defineProperty(this, 'setRut', {
        set: function (rut) {
            _rut = rut;
        }
    });
    Object.defineProperty(this, 'setDiagnostico', {
        set: function (diagnostico) {
            _diagnostico = diagnostico;
        }
    });
    /** EndSetters */
}

/** 
 * @class Consultorio 
 * @param {string} nombre
 * @param {Paciente[]} paciente
 * */
function Consultorio(nombre, paciente) {
    this.nombre = nombre;
    this.paciente = paciente;
}

/** @function buscarPaciente */
Consultorio.prototype.buscarPaciente = function (valueName) {
    return this.paciente.find((valuePaciente) => {
        return valuePaciente.nombre == valueName;
    });
}

/** @function mostrarDatos */
Consultorio.prototype.mostrarDatos = function () {
    return this.paciente.find((valuePaciente) => {
        return console.log(`Nombre: ${valuePaciente.nombre}, edad: ${valuePaciente.edad}, rut: ${valuePaciente.rut}, diagnostico: ${valuePaciente.diagnostico} `);
    });
}

/** Test */
const paciente1 = new Paciente('Jorge', 25, '11.111.111-1', 'AAA');
const paciente2 = new Paciente('Mauricio', 25, '22.222.222-2', 'AAA');

const consultorio1 = new Consultorio('Consultrio', [paciente1, paciente2]);
console.log(consultorio1.buscarPaciente('Jorge'));
consultorio1.mostrarDatos()
console.log({ paciente1 });
console.log({ paciente2 });
console.log({ consultorio1 });
