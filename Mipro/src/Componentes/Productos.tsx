import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { Welcome } from "../interfaces/typos.D";

const Productos = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [estado, setestado] = useState(1);
  const [usuarios, setusuarios] = useState<Welcome>({} as Welcome);

  const iniziaialfr = () => {
    if (!searchParams.get("page")) {
      searchParams.set("page", `${estado}`);
    }
    if (!searchParams.get("limit")) {
      searchParams.set("limit", "5");
    }
    setSearchParams(searchParams);
  };

  const FechinDatos = async () => {
    let primero = await axios(
      `http://localhost:3000/productos?page=${searchParams.get(
        "page"
      )} &limit=${searchParams.get("limit")}`
    );
    let secondo = await primero.data;
    // console.log(secondo);
    setusuarios(secondo);
  };

  const updateFuncion = () => {
    setSearchParams({
      page: estado.toString(),
      limit: "5",
    });
  };

  const next = () => {
    let parametro = Number(searchParams.get("page")) || 0;
    parametro = parametro + 1;
    setSearchParams({ page: parametro.toString(), limit: "5" });
  };
  const Prev = () => {
    let parametro = Number(searchParams.get("page")) || 0;
    parametro = parametro - 1;
    setSearchParams({ page: parametro.toString(), limit: "5" });
  };

  const clicker = (index: number) => {
    setSearchParams({ page: index.toString(), limit: "5" });
  };

  const ArrayDatos = (): string[] => {
    let datos = [];
    for (let index = 0; index < usuarios.totalPages; index++) {
      datos.push(" ");
    }
    return datos;
  };

  useEffect(() => {
    FechinDatos();
    console.log("init");
  }, [searchParams]);

  return (
    <>
      <h1>Productos</h1>

      <div className="Container__center">
        {usuarios != undefined ? (
          usuarios?.results?.map((item) => (
            <div className="container__Select_Details">
              <h2> {item.id_cliente}</h2>

              <h2> {item.nombre_cliente}</h2>

              <h2> {item.tipo_cliente}</h2>
            </div>
          ))
        ) : (
          <h2>User</h2>
        )}
      </div>
      <div className="OpeningModal">
        {usuarios.next != null && (
          <button className="btn" onClick={next}>
            {" "}
            Next
          </button>
        )}

        {ArrayDatos().map((item, index) => (
          <button
            style={{
              backgroundColor: `${
                index == Number(searchParams.get("page"))
                  ? "#94a3b8"
                  : "#334155"
              }`,
            }}
            onClick={() => clicker(index)}
            className="btn DeveloperTendri"
          >
            {index + 1}
          </button>
        ))}

        {usuarios.prev != null && (
          <button className="btn" onClick={Prev}>
            {" "}
            Prev
          </button>
        )}
      </div>
    </>
  );
};

export default Productos;
