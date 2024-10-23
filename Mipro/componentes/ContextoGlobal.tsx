import React, { useEffect, useRef, useState } from "react";
import useContextUser from "./contextoglobal/useContextUser";
import { Usuarios, Welcome } from "../src/interfaces/typos.D";
import axios from "axios";
import { UsuariosDatosJsonplaceholder } from "./contextoglobal/Indes.D";
import { CiFilter } from "react-icons/ci";
import useForm from "./form/useForm";
import { useNavigate } from "react-router-dom";
import { getllallUser } from "./HHTP/ClienteHtpp";

interface filtros {
  sinfiltro: boolean;
  pornombre: boolean;
  porid: boolean;
  porcity: boolean;
}

interface PropsChangueInput {
  value: string;
}

const InterfazValor: PropsChangueInput = {
  value: "",
};

let inicalFilter: filtros = {
  sinfiltro: true,
  porid: false,
  pornombre: false,
  porcity: false,
};

const ContextoGlobal = () => {
  const navigate = useNavigate();
  const [filtros, setfiltro] = useState(inicalFilter);
  const { mayordata, removeeitemfortodo, usuarios } = useContextUser();
  const { Form, Onsubmit, handleChanuge } = useForm(InterfazValor);
  const referencia = useRef<HTMLDivElement>(null);

  const Navegar = (item: UsuariosDatosJsonplaceholder) => {
    navigate(`/pro/${item.id}`);
  };

  const SelectionClick = () => {
    if (referencia.current?.classList) {
      referencia.current.classList.toggle("ocultarBoderToogle");
    }
  };

  const FechignDatos = async () => {
    getllallUser()
      .then((usuarios) => {
        if (usuarios != undefined) mayordata(usuarios);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  const ToogleFilterCity = () => {
    setfiltro({
      // ...filtros,
      porid: false,
      sinfiltro: false,
      pornombre: false,
      porcity: true,
    });
  };

  const OrdenarporId = () => {
    setfiltro({
      ...filtros,
      porid: true,
      sinfiltro: false,
      pornombre: false,
    });
  };

  const toggleFilterState = () => {
    setfiltro({
      ...filtros,
      porid: false,
      sinfiltro: false,
      pornombre: (filtros.pornombre = true),
    });
  };

  const filtrodatos = (): UsuariosDatosJsonplaceholder[] | undefined => {
    if (filtros.sinfiltro) {
      return usuarios.usuarios;
    }

    if (filtros.pornombre) {
      return usuarios.usuarios.sort(
        (
          a: UsuariosDatosJsonplaceholder,
          b: UsuariosDatosJsonplaceholder
        ): UsuariosDatosJsonplaceholder[] => a.name.localeCompare(b.name)
      );
    }

    if (filtros.porid) {
      return usuarios.usuarios.sort(
        (a: UsuariosDatosJsonplaceholder, b: UsuariosDatosJsonplaceholder) => {
          if (a.id > b.id) return 1;
          if (a.id < b.id) return -1;
          return 0;
        }
      );
    }
    if (filtros.porcity) {
      return usuarios.usuarios.sort(
        (a: UsuariosDatosJsonplaceholder, b: UsuariosDatosJsonplaceholder) =>
          a.address.city.localeCompare(b.address.city)
      );
    }
  };

  const onSubmi5eventeHanle = ():
    | UsuariosDatosJsonplaceholder[]
    | undefined => {
    if (Form.value === "") return usuarios.usuarios;
    if (usuarios.usuarios) {
      return usuarios.usuarios.filter((item: UsuariosDatosJsonplaceholder) =>
        item.name.includes(Form.value)
      );
    }
  };

  useEffect(() => {
    filtrodatos();
    // console.log("filtros");
  }, [filtros]);

  useEffect(() => {
    referencia.current?.classList.add("ocultarBoderToogle");
    FechignDatos();
    // console.log( usuarios.usuarios)
  }, []);

  useEffect(() => {
    onSubmi5eventeHanle();
  }, [Form]);

  return (
    <>
      <div className="borderDetalle">
        <div ref={referencia} className="detalleBorderAsk">
          <p onClick={ToogleFilterCity}> filtro Ciudad</p>
          <p> volver Inicio</p>
          <p onClick={toggleFilterState}> filtro names</p>
          <p onClick={OrdenarporId}> filtro Id</p>
        </div>

        <div className="BoxGrandeTelsin">
          <input
            onChange={handleChanuge}
            name="value"
            className="input__busuedad"
            placeholder="Busquedad"
          ></input>
          <CiFilter onClick={SelectionClick} className="minFiltro"></CiFilter>
        </div>
      </div>
      <div className="ProbleCard">
        {filtrodatos() !== undefined &&
          onSubmi5eventeHanle().map((item) => (
            <div onClick={() => Navegar(item)} className="CardCenter">
              <h1> {item.name} </h1>
              <h2>{item.address.city}</h2>
              <h2>{item.id}</h2>
              <hr></hr>
              <p>{item.phone}</p>
              {/* <p>{}}</p> */}
              <pre>{item.website}</pre>
            </div>
          ))}
      </div>

      {/* {onSubmi5eventeHanle()?.map((item) => JSON.stringify(item))} */}
    </>
  );
};

export default ContextoGlobal;
