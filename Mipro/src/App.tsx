import { useEffect, useState  } from "react";
import axios from "axios";
import "./App.css";
import { Usuarios, Welcome } from './interfaces/typos.D';
import {  useSearchParams } from "react-router-dom"



let TokenDatadetails = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21icmVfY2xpZW50ZSI6Im1vZ29sbG9ub3NvcmlvIiwidGlwb19jbGllbnRlIjoicGVyc29uYSIsInJ1YyI6IjEwMTAxMCIsImRpcmVjY2lvbiI6IjEwMTAxMCIsImlkX2VtcHJlc2EiOjEsImlhdCI6MTcyNjc2MDM0MX0.ajhEFoYvmaluEXtoZU9zV22vyXlS6ehDI9P8njS2uno`; 



let init = `http://localhost:3000/productos?page=4&limit=2`;

function App() {
  const [estado, setestado] = useState<Array<Usuarios>>([]);
  const [Mila, setMila] = useState<Welcome>  ( {}  as Welcome );


  
  // const TraerData = async () => {


  //   let da = await axios.get(
  //     `http://localhost:3000/productos?page=${Datos.page}&limit=${Datos.limit}`
  //   );
  //   let secundo = await da.data;
  //   console.log( secundo)
  //   if (  typeof(secundo.diplo) == "object") {

  
  //     setMila(secundo.diplo);
  //     // console.log(  secundo )
  //     // // setSearchParams({
           
  //     // })


  //   }else {
  //     if (!secundo.msg)  return alert("Ya no hay mas Datos")
  //   }
  // };


  const ClickHandleClick = async (item: Usuarios) => {
    try {
      let datos = await axios.put(
        `http://localhost:3000/changueadmin/${item.id_cliente}`,
        "",
        {
          headers: {
            Authorization: `Bearer  ${TokenDatadetails}`,
          },
        }
      );
      console.log("se actulizo lods Datos");
    } catch (error: any) {
      alert({
        error: error.message,
      });
    }

    getallPrice();
  };

  const getallPrice = () => {
    axios("http://localhost:3000/getallDecisison")
      .then((data) => {
        const valor = data.data;
        setestado(valor.data);
      })
      .catch((error) => console.log(error.message));
  };

  useEffect(() => {
    getallPrice();
   
  }, []);
  
  useEffect(() => {
    // iniziaialfr();
    
  }, []);  


  
  return (
    <>

    <h2>Hola undo</h2>
      {/* {estado.length > 0 ? (
        estado.map((item, key) => (
          <div
            key={key}
            style={{
              backgroundColor: `${
                item.tipo_cliente === "empresa" && "#6b7280"
              }`,
              color: ` ${item.tipo_cliente === "empresa" && "white"}`,
            }}
            className="imagen_details"
          >
            <p>{item.tipo_cliente}</p>
            <p>{item.nombre_cliente.slice(0, 5)}</p>
            <p>{item.direccion}</p>
            <p>{item.dni}</p>
            <button
              onClick={() => ClickHandleClick(item)}
              className="btn__container"
            >
              ChangueAdmin
            </button>
          </div>
        ))
      ) : (
        <h1>Cargaddno..</h1>
      )} */}

{/* 
       <div className="Container__details">


       {
        Mila.length >  0  && Mila.map(item =>  (
          <div  className="Details_Center">

            <h2>{item.id_cliente}</h2>
            <h2>{item.nombre_cliente}</h2> 
            <h2>{item.tipo_cliente}</h2>
          </div>
        ))
       }
       </div>
      <div>

          <button  onClick={()=>setDatos({
            ...Datos , 
            page: Datos.page +2
          })} >  Next</button>
          <button onClick={()=>setDatos({


...Datos  ,page:Datos.page - 2
          })} >Previus</button>
      </div>   */}


    </>
  );
}

export default App;
