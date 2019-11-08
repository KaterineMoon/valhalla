import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';

/*import { AfiliacionComponent } from './afiliacion/afiliacion.component'
import { CesantiasComponent } from './cesantias/cesantias.component'
import { DescargasComponent } from './descargas/descargas.component'
import { InformacionEmpleadoComponent } from './informacion-empleado/informacion-empleado.component'
import { InformacionEmpresaComponent } from './informacion-empresa/informacion-empresa.component'
import { InversionComponent } from './inversion/inversion.component'
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component'
import { LoginComponent } from './login/login.component'
import { MainContentComponent } from './main-content/main-content.component'
import { PensionComponent } from './pension/pension.component'
import { RegistroEmpleadoComponent } from './registro-empleado/registro-empleado.component'
import { RegistroEmpresaComponent } from './registro-empresa/registro-empresa.component'
import { ResumenCesantiasComponent } from './resumen-cesantias/resumen-cesantias.component'
import { ResumenPensionComponent } from './resumen-pension/resumen-pension.component'
import { SolicitudRetiroComponent } from './solicitud-retiro/solicitud-retiro.component'*/
import { ComponentsComponent } from './components.component';
import { NgbdModalComponent } from './modal/modal.component';
import { NgbdModalContent } from './modal/modal.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JwBootstrapSwitchNg2Module
    ],
    declarations: [
        /*AfiliacionComponent,
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
        SolicitudRetiroComponent,*/
        ComponentsComponent,
        NgbdModalComponent,
        NgbdModalContent
    ],
    entryComponents: [NgbdModalContent],
    exports: [ComponentsComponent]
})
export class ComponentsModule { }
