import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Error from './components/Error';
import Clima from './components/Clima';
import Footer from './components/Footer';


function App() {

  // state del formulario
  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: ''
  });

  // state de consulta
  const [consultar, guardarConsultar] = useState(false);

  // state de resultados
  const [resultado, guardarResultado] = useState({});

  // state para cuando una ciudad no se ecuentra
  const [ error, guardarError] = useState(false);

  // extraer ciudad y pais
  const {ciudad, pais} = busqueda;

  // useEffect por si cambia la ciudad o el pais
  useEffect(() => {
    const consultarAPI = async () => {

      if(consultar) {
        const appId = '49b4648f5710589cf65338bd30205f01'
  
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        guardarResultado(resultado);

        // regresar a false, para que se pueda hacer otra consulta
        guardarConsultar(false);

        //Detectar si hubo error en algun dato
        if(resultado.cod === '404') {
          guardarError(true);
        } else {
          guardarError(false);
        }

      }

    };

    consultarAPI();

  }, [consultar]);

  return (
    <>
      <div>
        <div>
          <Header
              titulo='Clima App'
          />
        </div>
                
        <div className='contenedor-form'>
            <div className='container'>
                <div className='row'>

                    <div className='col m6 s12'>
                        <Formulario
                            busqueda={busqueda}
                            guardarBusqueda={guardarBusqueda}
                            guardarConsultar={guardarConsultar}
                        />
                    </div>

                    <div className='col m6 s12'>

                        {error 
                        ?
                          <Error
                            mensaje='Revisa el nombre de la Localidad'
                          />
                        :
                          <Clima
                            resultado={resultado}
                          />
                        }

                    </div>

                </div>
            </div>
        </div>

        <div>
          <Footer
              piePagina='Created by @JORR'
          />
        </div>
      
      </div>
    </>
  );
}

export default App;
