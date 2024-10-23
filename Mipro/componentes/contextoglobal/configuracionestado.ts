import { Welcome } from '../../src/interfaces/typos.D';
// UsuariosDatosJsonplaceholder
import {  UsuariosDatosJsonplaceholder } from './Indes.D';

export type estado =
    | { type: "GET_USER", payload: UsuariosDatosJsonplaceholder[] }
    | { type: "ELIMINAR", payload: number }
    | { type: 'DATAFORWEB', payload: WeUsuariosDatosJsonplaceholderlcome[] }


export interface Estado {
    usuarios: Welcome[]  
    // loading : boolean

}


const estadoInicialProps: Estado = {
    usuarios: []  ,
    // loading:false

}
export const funcionReductor = (state: typeof estadoInicialProps, action: estado):  estadoInicialProps => {
    switch (action.type) {
        case 'GET_USER':
            console.log(action.payload)
            break
        case 'ELIMINAR':
            break
        case 'DATAFORWEB':
            return {
                ...state,
                usuarios :  [...action.payload]
            }
            break
            // state.usuarios = [...state.usuarios , ...action.payload]

        default:
            return state


    }


}





