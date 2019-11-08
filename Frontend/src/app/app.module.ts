import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { AfiliacionComponent } from './componentes/afiliacion/afiliacion.component'
import { CesantiasComponent } from './componentes/cesantias/cesantias.component'
import { DescargasComponent } from './componentes/descargas/descargas.component'
import { InformacionEmpleadoComponent } from './componentes/informacion-empleado/informacion-empleado.component'
import { InformacionEmpresaComponent } from './componentes/informacion-empresa/informacion-empresa.component'
import { InversionComponent } from './componentes/inversion/inversion.component'
import { ListaEmpleadosComponent } from './componentes/lista-empleados/lista-empleados.component'
import { LoginComponent } from './componentes/login/login.component'
import { MainContentComponent } from './componentes/main-content/main-content.component'
import { PensionComponent } from './componentes/pension/pension.component'
import { RegistroEmpleadoComponent } from './componentes/registro-empleado/registro-empleado.component'
import { RegistroEmpresaComponent } from './componentes/registro-empresa/registro-empresa.component'
import { ResumenCesantiasComponent } from './componentes/resumen-cesantias/resumen-cesantias.component'
import { ResumenPensionComponent } from './componentes/resumen-pension/resumen-pension.component'
import { SolicitudRetiroComponent } from './componentes/solicitud-retiro/solicitud-retiro.component'
import { LandingComponent } from './componentes/landing/landing.component';
import { ProfileComponent } from './componentes/profile/profile.component';
import { SignupComponent } from './componentes/signup/signup.component';
import { ComponentsComponent } from './componentes/components.component';
import { NgbdModalComponent } from './componentes/modal/modal.component';
import { NgbdModalContent } from './componentes/modal/modal.component';

/*import { ComponentsModule } from './componentes/components.module';
import { ExamplesModule } from './examples/examples.module';*/


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,

    AfiliacionComponent,
    CesantiasComponent,
    DescargasComponent,
    InformacionEmpleadoComponent,
    InformacionEmpresaComponent,
    InversionComponent,
    ListaEmpleadosComponent,
    LoginComponent,
    MainContentComponent,
    PensionComponent,
    RegistroEmpleadoComponent,
    RegistroEmpresaComponent,
    ResumenCesantiasComponent,
    ResumenPensionComponent,
    SolicitudRetiroComponent,
    LandingComponent,
    SignupComponent,
    ProfileComponent,
    ComponentsComponent,
    NgbdModalComponent,
    NgbdModalContent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    /*ComponentsModule,
    ExamplesModule,*/
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
