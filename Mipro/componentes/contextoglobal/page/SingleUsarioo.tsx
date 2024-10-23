import React from "react";
import { useGetForIdQuery } from "../../../RTKQUERY/api/ConfiguraTodos";
import { useNavigate, useParams } from "react-router-dom";
import fondo from "./../../../src/assets/fondopantalla.jpg";
import Spinner from "../../helpers/Spinner";



const SingleUsarioo = () => {
  const { id } = useParams();
  const { isError, isFetching, data: singleuser } = useGetForIdQuery(id);
  return (
    <>
      {/* <img src={fondo}  />  */}
      {/* <Spinner></Spinner> */}
      <div className="TendeneciaGlobal">
        {!isFetching ? (
          <div
            style={{
              backgroundImage: `url(${fondo})`,
            }}
            className="TplotsItem"
          >
            <h2>{singleuser?.company.bs}</h2>
            <p>{singleuser.name}</p>
            <p>{singleuser?.phone}</p>
            <p> name : {singleuser?.username}</p>
          </div>
        ) : (
          <Spinner></Spinner>
        )}
      </div>
    </>
  );
};

export default SingleUsarioo;
