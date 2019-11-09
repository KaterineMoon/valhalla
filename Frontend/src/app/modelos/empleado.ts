export class Usuario {

    constructor(
        public _id:string,
        public nombre: String,
        public apellido: String,
        public cedula: Number,
        public password: String,
        public edad: Number,
        public empresa: String,
        public fechaIngreso: Date, 
        public salario: String,
        public cargo: String,
        public afiliacionPensiones: String,
        public afiliacionCesantias: String
    ){}
}