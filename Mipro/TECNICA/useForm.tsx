import React, { useState } from "react";
import { apiTech } from "./HTPPCLIENTE/Http";
import { useEffect } from "react";
import { apiResultresponse, Respondeapi } from "./typos.D";

const useFormSwapi = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [numero, setnumero] = useState<number>(1);
  const [stado, setestado] = useState<Respondeapi>({} as Respondeapi);
  const [actual, setactual] = useState<apiResultresponse>(
    {} as apiResultresponse
  );

  const [Form, setForm] = useState({
    value: "",
  });

  useEffect(() => {
    apiTech(`https://swapi.dev/api/people/?page=${numero}&format=json`)
      .then((data) => {
        setLoading(true);
        if (data != undefined) {
          setestado(data);
        }
      })
      .catch((error: any) => {
        console.log(error.message);
      });

    setLoading(false);
  }, [numero]);

  const ChangueValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(stado);
    setForm({
      value: e.target.value,
    });
  };

  const FilterPokemon = (): apiResultresponse[] | undefined => {
    if (stado) {
      const { count, next, previous, results } = stado;
      return results.filter((item) =>
        item.name.toLocaleLowerCase().includes(Form.value)
      );
    }
  };

  const SingleUser = (id: string): apiResultresponse | undefined => {
    if (id) {
      const { count, next, previous, results } = stado;
      let encontrado = results.find((item) => item.name == id);
      encontrado != undefined && setactual(encontrado);
    }
  };

  const nextPage = () => {
    const { next } = stado;
    if (next != null) {
      setnumero((prev) => prev + 1);
    }
  };
  const previusPage = () => {
    const { previous } = stado;
    if (previous != null) {
      setnumero((prev) => prev - 1);
    }
  };

  return {
    stado,
    ChangueValues,
    Form,
    FilterPokemon,
    SingleUser,
    actual,
    nextPage,
    previusPage,
    numero,
    loading,
  };
};

export default useFormSwapi;
