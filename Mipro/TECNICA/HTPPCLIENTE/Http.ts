import axios from 'axios';
import { apiResultresponse, Respondeapi } from '../typos.D';  

export const apiTech = async (url: string): Promise<Respondeapi | undefined> => {
    try {
        let primero = await axios(url)
        // console.log(primero)
        const { status, statusText } = primero
        if (status == 200 && statusText == "") {
            let secondo = await primero.data
            return secondo
        }
    } catch (error: any) {
        return error.message

    }





}

