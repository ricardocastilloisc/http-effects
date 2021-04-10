import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usuariosActions from '../actions/usuarios.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';

import {of} from 'rxjs'

@Injectable()
export class UsuariosEfffects {
  constructor(
    private actions$: Actions,
    private UsuarioService: UsuarioService
  ) {}

  cargarUsuarios$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usuariosActions.cargarUsuarios),
      mergeMap(() =>
        this.UsuarioService.getUsers().pipe(
          map( users => usuariosActions.caragarUsuariosSucces({usuarios:users})),
          catchError( error => of(usuariosActions.caragarUsuariosError({payload:error})))
        )
      )
    )
  );
}
