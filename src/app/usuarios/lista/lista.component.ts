import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  constructor(public usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioService
      .getUsers()
      .pipe(map(({ data }: any) => data))
      .subscribe((res) => {
        console.log(res);
      });
  }
}
