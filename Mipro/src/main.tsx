import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import   {  BrowserRouter , Route , Routes }  from "react-router-dom" 
import './index.css'
import Productos from './Componentes/Productos.tsx'
import ContextoGlobal from '../componentes/ContextoGlobal';
import ContextoStore from '../componentes/contextoglobal/Contexto';
import SingleUser from '../componentes/contextoglobal/page/SingleUser';
import { Stores } from '../RTKQUERY/Confiugre';
import { Provider } from "react-redux";
import Connect from '../RTKQUERY/Connect'; 
import SingleUsarioo from '../componentes/contextoglobal/page/SingleUsarioo';
import Prueba from '../TECNICA/Prueba';


createRoot(document.getElementById("root")!).render(
  // <ContextoStore>
  <Provider store={Stores}>
    <BrowserRouter>
      {/* <StrictMode> */}
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/productos" element={<Productos></Productos>}></Route>
        {/* <Route path="/pro" element={<ContextoGlobal></ContextoGlobal>}>
        </Route> */}
        <Route path="/pro/:id" element={<SingleUser></SingleUser>}></Route>{" "}
        <Route path="/Gird" element={<Connect></Connect>}></Route>
        <Route
          path="/Grid/:id"
          element={<SingleUsarioo></SingleUsarioo>}
        ></Route>
        <Route path="/Prueba" element={<Prueba></Prueba>} ></Route>
      </Routes>
      {/* </StrictMode> */}
    </BrowserRouter>
  </Provider>


  // </ContextoStore>


);
