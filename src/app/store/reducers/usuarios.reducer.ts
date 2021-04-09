import { createReducer, on } from '@ngrx/store';
import {
  cargarUsuarios,
  caragarUsuariosSucces,
} from '../actions/usuarios.actions';
import { Usuario } from '../../models/usuario.model';
import { caragarUsuariosError } from '../actions/usuarios.actions';

export interface UsuariosState {
  users: Usuario[];
  loaded: boolean;
  loading: boolean;
  error: any;
}
export const usuariosState: UsuariosState = {
  users: [],
  loaded: false,
  loading: false,
  error: null,
};

const _counterReducer = createReducer(
  usuariosState,
  on(cargarUsuarios, (state) => ({ ...state, loading: true })),
  on(caragarUsuariosSucces, (state, { usuarios }) => ({
    ...state,
    loading: false,
    loaded: true,
    users: [...usuarios],
  })),

  on(caragarUsuariosError, (state, {payload}) =>
  ({
    ...state,
    loading: false,
    loaded: false,
    error: payload
  }))
);

export let counterReducer = (state, action) =>  _counterReducer(state, action)
