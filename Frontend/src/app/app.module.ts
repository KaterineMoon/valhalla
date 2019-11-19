import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AfiliacionComponent } from './componentes/afiliacion/afiliacion.component';
import { CesantiasComponent } from './componentes/cesantias/cesantias.component';
import { DescargasComponent } from './componentes/descargas/descargas.component';
import { InformacionEmpleadoComponent } from './componentes/informacion-empleado/informacion-empleado.component';
import { InformacionEmpresaComponent } from './componentes/informacion-empresa/informacion-empresa.component';
import { InversionComponent } from './componentes/inversion/inversion.component';
import { ListaEmpleadosComponent } from './componentes/lista-empleados/lista-empleados.component';
import { LoginComponent } from './componentes/login/login.component';
import { LoginEmpresaComponent } from './componentes/login-empresa/login-empresa.component';
import { MainContentComponent } from './componentes/main-content/main-content.component';
import { PensionComponent } from './componentes/pension/pension.component';
import { RegistroEmpleadoComponent } from './componentes/registro-empleado/registro-empleado.component';
import { RegistroEmpresaComponent } from './componentes/registro-empresa/registro-empresa.component';
import { ResumenCesantiasComponent } from './componentes/resumen-cesantias/resumen-cesantias.component';
import { ResumenPensionComponent } from './componentes/resumen-pension/resumen-pension.component';
import { SolicitudRetiroComponent } from './componentes/solicitud-retiro/solicitud-retiro.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PdfCesantiasPensionesComponent } from './componentes/pdf-cesantias-pensiones/pdf-cesantias-pensiones.component'
import { PdfCertificadoComponent } from './componentes/pdf-certificado/pdf-certificado.component';
import { PerfilesComponent } from './componentes/perfiles/perfiles.component'

@NgModule({
  declarations: [
    AppComponent,
    AfiliacionComponent,
    CesantiasComponent,
    DescargasComponent,
    InformacionEmpleadoComponent,
    InformacionEmpresaComponent,
    InversionComponent,
    ListaEmpleadosComponent,
    LoginComponent,
    LoginEmpresaComponent,
    MainContentComponent,
    PensionComponent,
    RegistroEmpleadoComponent,
    RegistroEmpresaComponent,
    ResumenCesantiasComponent,
    ResumenPensionComponent,
    SolicitudRetiroComponent,
    HeaderComponent,
    FooterComponent,
    PdfCesantiasPensionesComponent,
    PdfCertificadoComponent,
    PerfilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
