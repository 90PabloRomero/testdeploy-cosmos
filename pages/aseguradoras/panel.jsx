import { leadService } from "services";
import dynamic from "next/dynamic.js";
import LeadCreatori from "../../components/demo/leads-insurance/lead-insuranse1";
import LeadCreator7 from "../../components/demo/leads-broker/LeadBroker07";
import LeadCreator10 from "../../components/demo/leads-broker/LeadBroker10";
import LeadCreator13 from "../../components/demo/leads-broker/LeadBroker13";
import LeadCreator16 from "../../components/demo/leads-broker/LeadBroker16";
import LeadCreator20 from "../../components/demo/leads-broker/LeadBroker20";
import LeadCreator23 from "../../components/demo/leads-broker/LeadBroker23";

import { useEffect, useState } from "react";
import { Link } from "components";
// import CalendarArea from "components/Calendar";
import Image from "next/image";
import addIcon from "public/add.png";
import editIcon from "public/edit.png";
import sendIcon from "public/icon3.png";
import Head from "next/head";
const FC = dynamic(() => import("components/demo/piechart"), { ssr: false });

const Home = ({ onClick, onClickUser, onClickCargarCotizacion }) => {
  // const [modalCalendarVisible, setModalCalendarVisible] = useState(false);
  const [leads, setLeads] = useState(null);

  useEffect(() => {
    leadService.getAll().then((x) => setLeads(x));
  }, []);

  // useEffect(() => {
  //   document.body.className = modalCalendarVisible ? "modal-mode" : "";
  // });
  useEffect(() => {
    
    // aca añadimos  el primer valor del array de usestate como booleano de todos los formularios accion que necesitamos para ajustar el body cada vez que queremos que se abra el modal, necesitamos que el body tenga la clase "modal-mode" para lograr el efecto de ventana superpuesta
    document.body.className = modalLeadi ? "modal-mode" : "";
    document.body.className = modalLead7 ? "modal-mode" : "" ;
    document.body.className = modalLead10 ? "modal-mode" : "";
     document.body.className = modalLead13 ? "modal-mode" : "";
     document.body.className = modalLead16 ? "modal-mode" : "";
     document.body.className = modalLead20 ? "modal-mode" : "";
     document.body.className = modalLead23 ? "modal-mode" : "";
  });
  const [modalLeadi, setModalLeadi] = useState(false) ;
  const [modalLead7, setModalLead7] = useState(false);
  const [modalLead10, setModalLead10] = useState(false);
  const [modalLead13, setModalLead13] = useState(false);
  const [modalLead16, setModalLead16] = useState(false);
  const [modalLead20, setModalLead20] = useState(false);
  const [modalLead23, setModalLead23] = useState(false);
  return (
    <>
     <LeadCreatori
        modalPaneliShowHandler={modalLeadi}
        onClickOutside={() => setModalLeadi(false)}
      />
      <LeadCreator7
        modalPanel7ShowHandler={modalLead7}
        onClickOutside={() => setModalLead7(false)}
      />
      <LeadCreator10
        modalPanel10ShowHandler={modalLead10}
        onClickOutside={() => setModalLead10(false)}
      />
      <LeadCreator13
        modalPanel13ShowHandler={modalLead13}
        onClickOutside={() => setModalLead13(false)}
      />
      <LeadCreator16
        modalPanel16ShowHandler={modalLead16}
        onClickOutside={() => setModalLead16(false)}
      />
      <LeadCreator20
        modalPanel20ShowHandler={modalLead20}
        onClickOutside={() => setModalLead20(false)}
      />
      <LeadCreator23
        modalPanel23ShowHandler={modalLead23}
        onClickOutside={() => setModalLead23(false)}
      />
      <Head>
        <title>Servicio de Aseguradoras - Cosmos</title>
      </Head>
      <main>
        <div className="main-layout">
          <div className="tabs-area">
            <div className="d-flex w-full justify-content-around">
              <div className="message-box">
                <h5>Message:</h5>
                {leads &&
                  leads.map((lead) =>
                    lead.phase >= 1.4 ? (
                      ""
                    ) : (
                      <h6>Usted tiene 1 Cotización Pendiente por revisar</h6>
                    )
                  )}
              </div>
              {/* pie chart disgusting import mode */}
              <FC></FC>
            </div>
            <div className="tabs-list-area">
              <div className="tabs-list-crud-actions"></div>

              <div className="tab-actions-and-search">
                <div className="tab-actions">
                  <button className="btn btn-tab btn-tab-active">
                    Cotizar
                  </button>
                  <button className="btn btn-tab">Emitir</button>
                  <button className="btn btn-tab">Movimientos</button>
                </div>

                <div className="tab-search mb-1">
                  <fieldset>
                    <input
                      type="text"
                      placeholder="Buscar..."
                      className="search-input "
                    />
                  </fieldset>
                </div>
              </div>

              <div className="tab-list">
              <div className="tab-list-form">
                  <div className="tab-list-form-heading">
                    <div className="tab-list-form-heading-column">
                      Prioridad
                    </div>
                    <div className="tab-list-form-heading-column">Cuenta</div>
                    <div className="tab-list-form-heading-column">Fase</div>
                    <div className="tab-list-form-heading-column">Estado</div>
                    <div className="tab-list-form-heading-column">Accion</div>
                  </div>
                  {/*  */}
                  <div className="tab-list-form-row">
                    <div className="tab-list-form-row-column">
                      
                    </div>
                    <div className="tab-list-form-row-column">
                      <button
                        className="user-btn m-0 p-0"
                        onClick={onClickUser}
                      >
                        Juan Ugalde
                      </button>
                    </div>
                    <div className="tab-list-form-row-column">Comercial(2)</div>
                    <div className="tab-list-form-row-column">
                      Cotización en Revisión del Broker
                    </div>

                    <div className="tab-list-form-row-column">
                   
                    </div>
                  </div>
                  
                  {/*  */}
                  <div className="tab-list-form-row">
                    <div className="tab-list-form-row-column">
                    <span className="priority-icon priority-normal"></span>
                    </div>
                    <div className="tab-list-form-row-column">
                      <button
                        className="user-btn m-0 p-0"
                        onClick={onClickUser}
                      >
                        Juan Ugalde
                      </button>
                    </div>
                    <div className="tab-list-form-row-column">Comercial(3)</div>
                    <div className="tab-list-form-row-column">
                      Cotización Nueva a Revisar
                    </div>

                    <div className="tab-list-form-row-column">
                    <button onClick={() => setModalLeadi(!modalLeadi)}>
                        Revisar cotizacion
                      </button>
                    </div>
                  </div>
                  <div className="tab-list-form-row">
                    <div className="tab-list-form-row-column">
                      
                    </div>
                    <div className="tab-list-form-row-column">
                      <button
                        className="user-btn m-0 p-0"
                        onClick={onClickUser}
                      >
                        Juan Ugalde
                      </button>
                    </div>
                    <div className="tab-list-form-row-column">Comercial(4)</div>
                    <div className="tab-list-form-row-column">
                    Cotización por enviar al Cliente
                    </div>

                    <div className="tab-list-form-row-column">
                    
                    </div>
                  </div>
                  {/*  */}
                  
                  {/*  */}
                  <div className="tab-list-form-row">
                    <div className="tab-list-form-row-column">
                      
                    </div>
                    <div className="tab-list-form-row-column">
                      <button
                        className="user-btn m-0 p-0"
                        onClick={onClickUser}
                      >
                        Juan Ugalde
                      </button>
                    </div>
                    <div className="tab-list-form-row-column">Comercial(6)</div>
                    <div className="tab-list-form-row-column">
                     Cliente necesita Asesoria
                    </div>

                    <div className="tab-list-form-row-column">
                    
                    </div>
                  </div>
                  {/*  */}
                  
                  {/*  */}
                  <div className="tab-list-form-row">
                    <div className="tab-list-form-row-column">
                      
                    </div>
                    <div className="tab-list-form-row-column">
                      <button
                        className="user-btn m-0 p-0"
                        onClick={onClickUser}
                      >
                        Juan Ugalde
                      </button>
                    </div>
                    <div className="tab-list-form-row-column">Emisión(8)</div>
                    <div className="tab-list-form-row-column">
                     Broker Revisando Formularios y Requisitos 
                    </div>

                    <div className="tab-list-form-row-column">
                  
                    </div>
                  </div>
                  <div className="tab-list-form-row">
                    <div className="tab-list-form-row-column">
                    <span className="priority-icon priority-normal"></span>
                    </div>
                    <div className="tab-list-form-row-column">
                      <button
                        className="user-btn m-0 p-0"
                        onClick={onClickUser}
                      >
                        Juan Ugalde
                      </button>
                    </div>
                    <div className="tab-list-form-row-column">Emisión(9)</div>
                    <div className="tab-list-form-row-column">
                     Evaluación de riesgos
                    </div>

                    <div className="tab-list-form-row-column">
                    <button onClick={() => setModalLead7(!modalLead7)}>
                        Evaluar Riesgos
                      </button>
                    </div>
                  </div>
                  {/*  */}
                  
                  {/*  */}
                  <div className="tab-list-form-row">
                    <div className="tab-list-form-row-column">
                      
                    </div>
                    <div className="tab-list-form-row-column">
                      <button
                        className="user-btn m-0 p-0"
                        onClick={onClickUser}
                      >
                        Juan Ugalde
                      </button>
                    </div>
                    <div className="tab-list-form-row-column">Emisión(11)</div>
                    <div className="tab-list-form-row-column">
                    Broker procesando Emisión de Poliza
                    </div>

                    <div className="tab-list-form-row-column">
                  
                    </div>
                  </div>
                  {/*  */}
                  <div className="tab-list-form-row">
                    <div className="tab-list-form-row-column">
                    <span className="priority-icon priority-normal"></span>
                    </div>
                    <div className="tab-list-form-row-column">
                      <button
                        className="user-btn m-0 p-0"
                        onClick={onClickUser}
                      >
                        Juan Ugalde
                      </button>
                    </div>
                    <div className="tab-list-form-row-column">Emisión(12)</div>
                    <div className="tab-list-form-row-column">
                    Poliza Nueva a Emitir
                    </div>

                    <div className="tab-list-form-row-column">
                    <button onClick={() => setModalLead10(!modalLead10)}>
                        Emitir nueva Poliza
                      </button>
                    </div>
                  </div>
                  {/*  */}
                  
                  {/*  */}
                  <div className="tab-list-form-row">
                    <div className="tab-list-form-row-column">
                      
                    </div>
                    <div className="tab-list-form-row-column">
                      <button
                        className="user-btn m-0 p-0"
                        onClick={onClickUser}
                      >
                        Juan Ugalde
                      </button>
                    </div>
                    <div className="tab-list-form-row-column"> Cobranzas(14) </div>
                    <div className="tab-list-form-row-column">
                    Documentación en Revisión del Broker
                    </div>

                    <div className="tab-list-form-row-column">
                    
                    </div>
                  </div>
                  {/*  */}
                  <div className="tab-list-form-row">
                    <div className="tab-list-form-row-column">
                    <span className="priority-icon priority-normal"></span>
                    </div>
                    <div className="tab-list-form-row-column">
                      <button
                        className="user-btn m-0 p-0"
                        onClick={onClickUser}
                      >
                        Juan Ugalde
                      </button>
                    </div>
                    <div className="tab-list-form-row-column"> Cobranzas(15) </div>
                    <div className="tab-list-form-row-column">
                    Forma de Pago a Registrar
                    </div>

                    <div className="tab-list-form-row-column">
                    <button onClick={() => setModalLead13(!modalLead13)}>
                        Registrar Forma de Pago
                      </button>
                    </div>
                  </div>
                  {/*  */}
                  
                  {/*  */}
                  <div className="tab-list-form-row">
                    <div className="tab-list-form-row-column">
                      
                    </div>
                    <div className="tab-list-form-row-column">
                      <button
                        className="user-btn m-0 p-0"
                        onClick={onClickUser}
                      >
                        Juan Ugalde
                      </button>
                    </div>
                    <div className="tab-list-form-row-column"> Cobranzas(17) </div>
                    <div className="tab-list-form-row-column">
                    Documentación en Revisión del Broker
                    </div>

                    <div className="tab-list-form-row-column">
                    
                    </div>
                  </div>
                  {/*  */}
                  
                  {/*  */}
                  <div className="tab-list-form-row">
                    <div className="tab-list-form-row-column">
                    <span className="priority-icon priority-normal"></span>
                    </div>
                    <div className="tab-list-form-row-column">
                      <button
                        className="user-btn m-0 p-0"
                        onClick={onClickUser}
                      >
                        Juan Ugalde
                      </button>
                    </div>
                    <div className="tab-list-form-row-column"> Cobranzas(19) </div>
                    <div className="tab-list-form-row-column">
                   Nuevo Pago a Confirmar
                    </div>

                    <div className="tab-list-form-row-column">
                    <button onClick={() => setModalLead16(!modalLead16)}>
                        Confirmar Pago
                      </button>
                    </div>
                  </div>
                  {/*  */}
                  <div className="tab-list-form-row">
                    <div className="tab-list-form-row-column">
                      
                    </div>
                    <div className="tab-list-form-row-column">
                      <button
                        className="user-btn m-0 p-0"
                        onClick={onClickUser}
                      >
                        Juan Ugalde
                      </button>
                    </div>
                    <div className="tab-list-form-row-column"> Cobranzas(20) </div>
                    <div className="tab-list-form-row-column">
                   Broker en Activazación de Poliza
                    </div>

                    <div className="tab-list-form-row-column">
                    
                    </div>
                  </div>
                  {/*  */}
                 
                  {/*  */}
                  <div className="tab-list-form-row">
                    <div className="tab-list-form-row-column">
                      
                    </div>
                    <div className="tab-list-form-row-column">
                      <button
                        className="user-btn m-0 p-0"
                        onClick={onClickUser}
                      >
                        Juan Ugalde
                      </button>
                    </div>
                    <div className="tab-list-form-row-column"> Movimientos(23) </div>
                    <div className="tab-list-form-row-column">
                   Broker Revisando requisitos
                    </div>

                    <div className="tab-list-form-row-column">
                    
                    </div>
                  </div>
                  {/*  */}
                  <div className="tab-list-form-row">
                    <div className="tab-list-form-row-column">
                    <span className="priority-icon priority-normal"></span>
                    </div>
                    <div className="tab-list-form-row-column">
                      <button
                        className="user-btn m-0 p-0"
                        onClick={onClickUser}
                      >
                        Juan Ugalde
                      </button>
                    </div>
                    <div className="tab-list-form-row-column"> Movimientos(24) </div>
                    <div className="tab-list-form-row-column">
                  Nuevo Movimiento a Emitir
                    </div>

                    <div className="tab-list-form-row-column">
                    <button onClick={() => setModalLead20(!modalLead20)}>
                        Emitir Movimiento
                      </button>
                    </div>
                  </div>
                  {/*  */}
                  
                  {/*  */}
                  <div className="tab-list-form-row">
                    <div className="tab-list-form-row-column">
                      
                    </div>
                    <div className="tab-list-form-row-column">
                      <button
                        className="user-btn m-0 p-0"
                        onClick={onClickUser}
                      >
                        Juan Ugalde
                      </button>
                    </div>
                    <div className="tab-list-form-row-column"> Indemnización(26) </div>
                    <div className="tab-list-form-row-column">
                   Broker Revisando requisitos
                    </div>

                    <div className="tab-list-form-row-column">
                    
                    </div>
                  </div>
                  {/*  */}
                  <div className="tab-list-form-row">
                    <div className="tab-list-form-row-column">
                    <span className="priority-icon priority-normal"></span>
                    </div>
                    <div className="tab-list-form-row-column">
                      <button
                        className="user-btn m-0 p-0"
                        onClick={onClickUser}
                      >
                        Juan Ugalde
                      </button>
                    </div>
                    <div className="tab-list-form-row-column"> Indemnización(27) </div>
                    <div className="tab-list-form-row-column">
                   Realizar Tratamiento y Ajustes
                    </div>

                    <div className="tab-list-form-row-column">
                    <button onClick={() => setModalLead23(!modalLead23)}>
                    Realizar Tratamiento y Ajustes
                      </button>
                    </div>
                  </div>
                  {/*  */}
                  
                  {/*  */}
                  <div className="tab-list-form-row">
                    <div className="tab-list-form-row-column">
                      
                    </div>
                    <div className="tab-list-form-row-column">
                      <button
                        className="user-btn m-0 p-0"
                        onClick={onClickUser}
                      >
                        Juan Ugalde
                      </button>
                    </div>
                    <div className="tab-list-form-row-column"> Indemnización(29) </div>
                    <div className="tab-list-form-row-column">
                  Broker realizando Alcance
                    </div>

                    <div className="tab-list-form-row-column">
                    
                    </div>
                  </div>
                  {/*  */}
                </div>
                <div className="tab-list-pagination">
                  <ul>
                    <li>
                      <a href="#" className="active">
                        1
                      </a>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">4</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <CalendarArea
              modalCalendarVisible={modalCalendarVisible}
              onOutsideClick={() => setModalCalendarVisible(false)}
            /> */}
          </div>
        </div>
      </main>
    </>
  );
};
export default Home;
