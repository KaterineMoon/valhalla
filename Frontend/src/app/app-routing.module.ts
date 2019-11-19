import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AfiliacionComponent } from './componentes/afiliacion/afiliacion.component'
import { CesantiasComponent } from './componentes/cesantias/cesantias.component'
import { DescargasComponent } from './componentes/descargas/descargas.component'
import { InformacionEmpleadoComponent } from './componentes/informacion-empleado/informacion-empleado.component'
import { InformacionEmpresaComponent } from './componentes/informacion-empresa/informacion-empresa.component'
import { InversionComponent } from './componentes/inversion/inversion.component'
import { ListaEmpleadosComponent } from './componentes/lista-empleados/lista-empleados.component'
import { LoginComponent } from './componentes/login/login.component'
import { LoginEmpresaComponent } from './componentes/login-empresa/login-empresa.component'
import { MainContentComponent } from './componentes/main-content/main-content.component'
import { PensionComponent } from './componentes/pension/pension.component'
import { RegistroEmpleadoComponent } from './componentes/registro-empleado/registro-empleado.component'
import { RegistroEmpresaComponent } from './componentes/registro-empresa/registro-empresa.component'
import { ResumenCesantiasComponent } from './componentes/resumen-cesantias/resumen-cesantias.component'
import { ResumenPensionComponent } from './componentes/resumen-pension/resumen-pension.component'
import { SolicitudRetiroComponent } from './componentes/solicitud-retiro/solicitud-retiro.component'
import { PdfCesantiasPensionesComponent } from './componentes/pdf-cesantias-pensiones/pdf-cesantias-pensiones.component'
import { PdfCertificadoComponent } from './componentes/pdf-certificado/pdf-certificado.component'
import { PerfilesComponent } from './componentes/perfiles/perfiles.component'


const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'afiliate', component: AfiliacionComponent},
{ path: 'cesantias', component: CesantiasComponent},
{ path: 'descargas', component: DescargasComponent},
{ path: 'perfil-empleado', component: InformacionEmpleadoComponent},
{ path: 'perfil-empresa', component: InformacionEmpresaComponent},
{ path: 'inversion', component: InversionComponent},
{ path: 'empleados', component: ListaEmpleadosComponent},
{ path: 'login', component: LoginComponent},
{ path: 'login-empresa', component: LoginEmpresaComponent},
{ path: 'home', component: MainContentComponent},
{ path: 'pension', component: PensionComponent},
{ path: 'nuevo-empleado', component: RegistroEmpleadoComponent},
{ path: 'nueva-empresa', component: RegistroEmpresaComponent},
{ path: 'consolidado-cesantias', component: ResumenCesantiasComponent},
{ path: 'consolidado-pension', component: ResumenPensionComponent},
{ path: 'retiro-cesantias', component: SolicitudRetiroComponent},
{ path: 'pdf-extracto', component: PdfCesantiasPensionesComponent},
{ path: 'pdf-certificado', component: PdfCertificadoComponent},
{ path: 'perfiles', component: PerfilesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
