import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
    fecha = new Date();
    size = true
    nombres: string[] = [
        'Juan Barrionuevo',
        'Jose Velasquez',
        'Alberto Bustos',
        'Mario Saires',
        'Jorge Velez',
        'Adrian Perez',
        'Claudio Diaz',
        'Gullermo vazquez',
    ]
 constructor () {}
 titulo: string = 'listado de nombres'
 
}
