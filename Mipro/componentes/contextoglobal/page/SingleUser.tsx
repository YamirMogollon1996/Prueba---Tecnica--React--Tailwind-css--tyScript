import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useContextUser from "../useContextUser";
import { UsuariosDatosJsonplaceholder } from "../Indes.D";
import { gettallcommentforuser } from "../../HHTP/ClienteHtpp";
import { COMENTRARIOTYPOS } from "./Indes.D.Commnet";
import { useEffect } from "react";

const SingleUser = () => {
  const { id } = useParams();
  const { usuarios } = useContextUser();
  const [post, setPost] = useState<Array<COMENTRARIOTYPOS>>([]);

  const obtenerData = (): UsuariosDatosJsonplaceholder | undefined => {
    if (usuarios && id) {
      return usuarios.usuarios.find(
        (Usu: UsuariosDatosJsonplaceholder) => Usu.id === parseInt(id)
      );
    }
  };

  const getallUserComment = (): Array<COMENTRARIOTYPOS> => {
    if (id) {
      gettallcommentforuser(id)
        .then((data) => {
          if (data) {
            setPost(data);
          }
          //   setPost(data);
        })
        .catch((error: any) => {
          return error.message;
        });
    }
  };

  useEffect(() => {
    getallUserComment();
  }, []);

  return (
    <>
      <h1>{id}</h1>
      {/* {JSON.stringify(obtenerData())} */}
      {post.length > 0 && post.map((item) => <p>{JSON.stringify(item)}</p>)}
    </>
  );
};

export default SingleUser;
