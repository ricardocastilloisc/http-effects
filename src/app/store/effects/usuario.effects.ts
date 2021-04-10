import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usuarioActions from '../actions/usuario.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';

import {of} from 'rxjs'


@Injectable()
export class UsuarioEfffects {
  constructor(
    private actions$: Actions,
    private UsuarioService: UsuarioService
  ) {}

  cargarUsuario$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usuarioActions.cargarUsuario),
      mergeMap((action) =>
        this.UsuarioService.getUser(action.id).pipe(
          map( user => usuarioActions.caragarUsuarioSucces({usuario:user})),
          catchError( error => of(usuarioActions.caragarUsuarioError({payload:error})))
        )
      )
    )
  );
}
