import React, { useContext } from 'react'
import { contextoglobalcrear } from './Contexto';

const useContextUser = () => {

    const  {    usuarios   ,removeeitemfortodo ,mayordata}  =     useContext(contextoglobalcrear )      
    return  { 

            usuarios ,
            removeeitemfortodo  ,
            mayordata

  }
}

export default useContextUser