export class Empleado {

    constructor(
        public _id: String,
        public nombre: String,
        public apellido: String,
        public cedula: Number,
        public password: String,
        public edad: Number,
        public empresa: String,
        public fechaIngreso: String,
        public cargo: String,
        public salario: Number,
        public afiliacionPensiones: String,
        public saldoPensiones: Number,
        public afiliacionCesantias: String,
        public saldoCesantias: Number,
        public role: String
    ){}
}