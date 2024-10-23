import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
// import { Welcome } from '../../src/interfaces/typos.D';
import { UsuariosDatosJsonplaceholder } from '../../componentes/contextoglobal/Indes.D';


export const UsuarioApi = createApi({

    reducerPath: 'usuarioapi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
        getUsuariosByname: builder.query<UsuariosDatosJsonplaceholder[], any>({
            query: () => `/users`
        }),

        getForId: builder.query<UsuariosDatosJsonplaceholder, number>({
            query: (name: number) => `/users/${name}`
        })


    })

})


export const { useGetUsuariosBynameQuery, useGetForIdQuery } = UsuarioApi