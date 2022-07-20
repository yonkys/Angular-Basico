import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    declarations:[ //Todos los componentes
        HeroeComponent,
        ListadoComponent
    ],
    exports:[ //que cosas quiero que sean visibles (publicas)
        ListadoComponent
    ],
    imports:[ //aqui van todos los modulos
        CommonModule //ngfor,ngif
    ]
})

export class HeroesModule{
    
}