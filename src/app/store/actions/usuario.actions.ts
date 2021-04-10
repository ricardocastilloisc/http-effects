import { createAction, props } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';

// action action
export const cargarUsuario = createAction(
  '[Usuarios] Cargar Usuario',
  props<{ id: string }>()
);

export const caragarUsuarioSucces = createAction(
  '[Usuarios] Cargar Usuario Success',
  props<{ usuario: Usuario }>()
);

export const caragarUsuarioError = createAction(
  '[Usuarios] Cargar Usuario Error',
  props<{ payload: any }>()
);
