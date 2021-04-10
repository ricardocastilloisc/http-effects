import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { cargarUsuario } from '../../store/actions/usuario.actions';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private router: ActivatedRoute, private store: Store<AppState>) { }


  user:Usuario;

  error:any;

  loading:boolean;


  ngOnInit(): void {

    this.store.select('usuario').subscribe(
      ({user, error, loading}) =>
      {
        this.user = user;
        this.error = error;
        this.loading;
      }
    )
    this.router.params.subscribe(({id}) => {
      this.store.dispatch(cargarUsuario({id}));
    });
  }

}
