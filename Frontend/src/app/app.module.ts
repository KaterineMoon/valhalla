import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
import { MainContentComponent } from './componentes/main-content/main-content.component';
import { PensionComponent } from './componentes/pension/pension.component';
import { RegistroEmpleadoComponent } from './componentes/registro-empleado/registro-empleado.component';
import { RegistroEmpresaComponent } from './componentes/registro-empresa/registro-empresa.component';
import { ResumenCesantiasComponent } from './componentes/resumen-cesantias/resumen-cesantias.component';
import { ResumenPensionComponent } from './componentes/resumen-pension/resumen-pension.component';
import { SolicitudRetiroComponent } from './componentes/solicitud-retiro/solicitud-retiro.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';

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
    MainContentComponent,
    PensionComponent,
    RegistroEmpleadoComponent,
    RegistroEmpresaComponent,
    ResumenCesantiasComponent,
    ResumenPensionComponent,
    SolicitudRetiroComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
