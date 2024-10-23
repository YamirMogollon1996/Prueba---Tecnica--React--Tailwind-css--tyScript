import axios from 'axios';
import { UsuariosDatosJsonplaceholder } from '../contextoglobal/Indes.D';
import { COMENTRARIOTYPOS } from '../contextoglobal/page/Indes.D.Commnet';

const appCient = axios.create({
    baseURL: `https://jsonplaceholder.typicode.com/`,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },

})

export const getllallUser = async (): Promise<UsuariosDatosJsonplaceholder[] | undefined> => {

    try {

        let primero = await appCient.get(`/users`)
        let secondo = await primero.data
        return secondo
    } catch (error) {

        console.log(error)
    }
}


export const gettallcommentforuser = async (id: string): Promise<COMENTRARIOTYPOS[] | undefined> => {


    try {

        let primero = await appCient.get(`comments?postId=${id}`)
        let secondo = await primero.data
        return secondo
    } catch (error) {

        console.log(error)
    }



}