import { createAction, props } from "@ngrx/store";
import { Usuario } from '../../models/usuario.model';




// action action
export const cargarUsuarios = createAction('[Usuarios] Cargar Usuarios');

export const caragarUsuariosSucces = createAction(
  '[Usuarios] Cargar Usuarios Success',
  props<{usuarios: Usuario[]}>()
)

export const caragarUsuariosError = createAction(
  '[Usuarios] Cargar Usuarios Error',
  props<{payload: any}>()
)






