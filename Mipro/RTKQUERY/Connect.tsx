import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, appDispatch } from "./Confiugre";
import { useGetUsuariosBynameQuery } from "./api/ConfiguraTodos";
import { useNavigate } from "react-router-dom";
// alluser

const Connect = () => {
  const {
    isLoading,
    isError,
    data: Jsonusuarios = [],
  } = useGetUsuariosBynameQuery();
  //   console.log(Jsonusuarios);
  const navigate = useNavigate();

  const handleSubmit = (item: number) => {
    navigate(`/Grid/${item}`);
  };

  return (
    <>
      <h2 className="title">Connect</h2>
      <div className="boz">   


        {!isLoading ? (
          Jsonusuarios.map((item) => (
            <div onClick={() => handleSubmit(item.id)} className="AppCliente">
              <h3>{item.email}</h3>
              <p>{item.id}</p>
            </div>
          ))
        ) : (
          <p>...Cargadndooo</p>
        )}
      
      
      </div>
    </>
  );
};

export default Connect;
