export class Empleado {

    constructor(
        public _id: String,
        public nombre: String,
        public apellido: String,
        public cedula: Number,
        public password: String,
        public edad: String,
        public empresa: String,
        public fechaIngreso: String,
        public cargo: String,
        public salario: String,
        public afiliacionPensiones: String,
        public saldoPensiones: Number,
        public afiliacionCesantias: String,
        public saldoCesantias: Number,
        public role: String
    ){}
}


// empleado.nombre = params.nombre;
// empleado.apellido = params.apellido;
// empleado.cedula = params.cedula;
// empleado.password = params.password;
// empleado.edad = params.edad;
// empleado.empresa = params.empresa;
// empleado.fechaIngreso = params.ingreso;
// empleado.cargo = params.cargo;
// empleado.salario = params.salario;
// empleado.afiliacionPensiones = params.afiliacionPensiones;
// empleado.saldoPensiones = params.saldoPensiones;
// empleado.afiliacionCesantias = params.afiliacionCesantias;
// empleado.saldoCesantias = params.saldoCesantias;
// empleado.role = "ROLE_PERS";