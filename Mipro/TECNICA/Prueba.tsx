import React, { useEffect } from "react";
import useForm from "../componentes/form/useForm";
import useFormSwapi from "./useForm";
import axios from "axios";
import Spinner from "../componentes/helpers/Spinner";
// import Spiner from './Spiner/Spiner';




//Siempre tartar de mantner mi estado los mas limpio Posibiel 
const Prueba = () => {
  const {
    stado,
    ChangueValues,
    FilterPokemon,
    Form,
    SingleUser,
    actual,
    previusPage,
    nextPage,
    numero, 
    loading
  } = useFormSwapi();
  const {  results  }   = stado

  return (
    <>
      <div className="KiLO">
        <input
          name="value"
          onChange={ChangueValues}
          className="Pish outline-none border-slate-900"
          placeholder="busquedad "
        ></input>
      </div>
      <div className="boxing border">
        {loading ? (
          FilterPokemon().map((item) => (
            <div
              onClick={() => SingleUser(item.name)}
              className="classItems bg-dark-200"
            >
              <p className="bg-red-400">{item.name}</p>
              <p>{item.gender}</p>
              <p>{item.eye_color}</p>
            </div>
          ))
        ) : (
          // <div>

            <Spinner></Spinner>
   
         
       )}
      </div>

      <div className="box">
        <button onClick={nextPage} className="sig">
          Siguiente
        </button>
        <button onClick={previusPage} className="next">
          Previus
        </button>
        <br></br>
        <hr></hr>

        <h2>Page {numero} / 8</h2>

        {actual != undefined && (
          <div  className="stylesComponente">
            <h1> {actual.name}</h1>
            <p>{actual.birth_year}</p>
            <p>{actual.eye_color}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Prueba;
