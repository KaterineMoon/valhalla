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
        public salario: String,
        public cargo: String,
        public afiliacionPensiones: String,
        public afiliacionCesantias: String,
        public role: String
    ){}
}