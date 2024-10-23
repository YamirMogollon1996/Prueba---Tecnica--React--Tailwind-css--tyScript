import React, { createContext, ReactNode, useReducer } from "react";
import { funcionReductor, Estado, estado } from "./configuracionestado";
import { Welcome } from "../../src/interfaces/typos.D";
import { UsuariosDatosJsonplaceholder } from "./Indes.D";

interface ContextoGlobalType {
  usuarios: UsuariosDatosJsonplaceholder[];
  removeeitemfortodo: (numero: number) => void;
  mayordata: (tododatos: UsuariosDatosJsonplaceholder[]) => void;
}

export const contextoglobalcrear = createContext<ContextoGlobalType>(
  {} as ContextoGlobalType
);

const estadoinital: Estado = {
  usuarios: [],
};

interface ContextoGlobal {
  children: JSX.Element | JSX.Element[];
}

const ContextoStore = ({ children }: ContextoGlobal) => {
  const [usuarios, dispatch] = useReducer(funcionReductor, estadoinital);
  const add_Data = () => {
    console.log("mogollon");
  };

  const removeeitemfortodo = (numero: number) => {
    console.log(numero);
  };

  const mayordata = (tododatos: Welcome[]) => {
    // console.log( tododatos)
    dispatch({ type: "DATAFORWEB", payload: tododatos });
    // dispatch({type  :"DATAFORWEB" ,payload:tododatos})
  };

  const valor = { usuarios, removeeitemfortodo, mayordata, add_Data };

  return (
    <contextoglobalcrear.Provider value={valor}>
      {children}
    </contextoglobalcrear.Provider>
  );
};

export default ContextoStore;
