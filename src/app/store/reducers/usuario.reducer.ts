import { createReducer, on } from '@ngrx/store';

import { Usuario } from '../../models/usuario.model';
import {
  caragarUsuarioError,
  caragarUsuarioSucces,
  cargarUsuario,
} from '../actions/usuario.actions';

export interface UsuarioState {
  id: string;
  user: Usuario;
  loaded: boolean;
  loading: boolean;
  error: any;
}
export const usuarioState: UsuarioState = {
  id: null,
  user: null,
  loaded: false,
  loading: false,
  error: null,
};

const _usuarioReducer = createReducer(
  usuarioState,
  on(cargarUsuario, (state, { id }) => ({ ...state, loading: true, id: id })),

  on(caragarUsuarioSucces, (state, { usuario }) => ({
    ...state,
    loading: false,
    loaded: true,
    user: { ...usuario },
    error: null
  })),

  on(caragarUsuarioError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: {
      url: payload.url,
      name: payload.name,
      message: payload.message,
    },
  }))
);

export let usuarioReducer = (state, action) => _usuarioReducer(state, action);
