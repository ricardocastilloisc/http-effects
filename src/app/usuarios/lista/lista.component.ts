import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {


  UsuariosObs$: Observable<Usuario[]>

  constructor(public usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.UsuariosObs$ = this.usuarioService
      .getUsers()
      .pipe(map(({ data }: any) => data))
  }
}
