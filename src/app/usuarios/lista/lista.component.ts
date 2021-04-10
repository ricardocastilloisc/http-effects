import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Usuario } from '../../models/usuario.model';
import { AppState } from '../../store/app.reducers';
import { Store } from '@ngrx/store';
import { cargarUsuarios } from '../../store/actions/usuarios.actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {



  usuarios: Usuario[];

  loading: boolean = false;

  error: any;



  UsuariosObs$: Observable<Usuario[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {


    this.store
      .select('usuarios')
      .subscribe(
        ({users, error, loading}) => {
          this.usuarios = users
          this.error = error
          this.loading = loading
        }
      );

    this.store.dispatch(cargarUsuarios());
    /*
    this.UsuariosObs$ = this.usuarioService
      .getUsers()
      .pipe(map(({ data }: any) => data))
  */
  }
}
