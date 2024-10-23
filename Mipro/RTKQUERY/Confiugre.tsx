import { configureStore } from '@reduxjs/toolkit';
import { usuariosslices } from "./Slices/Usuarios";
import { UsuarioApi } from './api/ConfiguraTodos';



export const Stores = configureStore({
  reducer: {
    usuarios: usuariosslices.reducer,
    [UsuarioApi.reducerPath]: UsuarioApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(UsuarioApi.middleware),
});





export type RootState = ReturnType<typeof Stores.getState>;
export type appDispatch = typeof Stores.dispatch;
