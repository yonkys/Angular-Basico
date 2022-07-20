import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['../../app.component.css']
})
export class ListadoComponent {

  heroes:string [] = ['Ironman','Hulk','Thor','Spiderman'];
  heroeBorrado:string='';

  borrarHeroe():void{
    this.heroeBorrado = this.heroes.pop() || '';
  }
}
