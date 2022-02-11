import { useEffect, useState } from "react";
import { Link } from "components";
import CalendarArea from "components/Calendar";
import LeadCreator2 from "../../components/demo/leads-broker/LeadBroker02";
import LeadCreator3 from "../../components/demo/leads-broker/LeadBroker03";
import LeadCreator5 from "../../components/demo/leads-broker/LeadBroker05";
import LeadCreator8 from "../../components/demo/leads-broker/LeadBroker08";
import LeadCreator11 from "../../components/demo/leads-broker/LeadBroker11" ;
import LeadCreator14 from "../../components/demo/leads-broker/LeadBroker14" ;
import LeadCreator16 from "../../components/demo/leads-broker/LeadBroker16" ;
import LeadCreator18 from "../../components/demo/leads-broker/LeadBroker18"; 
import LeadCreator21 from "../../components/demo/leads-broker/LeadBroker21";
import LeadCreator24 from "../../components/demo/leads-broker/LeadBroker24";
import Image from "next/image";
import addIcon from "public/add.png";
import editIcon from "public/edit.png";
import sendIcon from "/public/icon3.png";
import { leadService } from "services";
import ModalCreateLead from "components/demo/modalCreateLead";

const Home = ({ onClick, onClickUser }) => {
  const [leads, setLeads] = useState(null);
  const [modalCreateLeadVisible, setModalCreateLeadVisible] = useState(false);

  useEffect(() => {
    leadService.getAll().then((x) => setLeads(x));
  }, []);

  useEffect(() => {
    document.body.className = modalCreateLeadVisible ? "modal-mode" : "";
  });

  function deleteLead(id) {
    setLeads(
      leads.map((x) => {
        if (x.id === id) {
          x.isDeleting = true;
        }
        return x;
      })
    );
    leadService.delete(id).then(() => {
      setLeads((leads) => leads.filter((x) => x.id !== id));
    });
  }
 
  useEffect(() => {
  
    // aca añadimos  el primer valor del array de usestate como booleano de todos los formularios accion que necesitamos para ajustar el body cada vez que queremos que se abra el modal, necesitamos que el body tenga la clase "modal-mode" para lograr el efecto de ventana superpuesta
    document.body.className = modalLead2 ? "modal-mode" : "";
    document.body.className = modalLead3 ? "modal-mode" : "";
    document.body.className = modalLead5 ? "modal-mode" : "";
    document.body.className = modalLead8 ? "modal-mode" : "";
    document.body.className = modalLead11 ? "modal-mode" : "";
    document.body.className = modalLead14 ? "modal-mode" : "";
    document.body.className = modalLead16 ? "modal-mode" : "" ;
    document.body.className = modalLead18 ? "modal-mode" : "";
    document.body.className = modalLead21 ? "modal-mode" : "";
    document.body.className = modalLead24 ? "modal-mode" : "";
  });
  

  // llamo al modal LeadCreator2 y le doy sus condiciones para que se pueda abrir
  const [modalLead2, setModalLead2] = useState(false);
  const [modalLead3, setModalLead3] = useState(false);
  const [modalLead5, setModalLead5] = useState(false);
  const [modalLead8, setModalLead8] = useState(false);
  const [modalLead11, setModalLead11] = useState(false);
  const [modalLead14, setModalLead14] = useState(false);
  const [modalLead16, setModalLead16] = useState(false);
  const [modalLead18, setModalLead18] = useState(false) ;
  const [modalLead21, setModalLead21] = useState(false);
 const [modalLead24, setModalLead24] = useState(false);

  return (
    <>
      <ModalCreateLead
        modalVisible={modalCreateLeadVisible}
        onOutsideClick={() => setModalCreateLeadVisible(false)}
      />
      <LeadCreator2
        modalPanel2ShowHandler={modalLead2}
        onClickOutside={() => setModalLead2(false)}
      />
      <LeadCreator3
        modalPanel3ShowHandler={modalLead3}
        onClickOutside={() => setModalLead3(false)}
      />
      <LeadCreator5
        modalPanel5ShowHandler={modalLead5}
        onClickOutside={() => setModalLead5(false)}
      />
       <LeadCreator8
        modalPanel8ShowHandler={modalLead8}
        onClickOutside={() => setModalLead8(false)}
      />
      <LeadCreator11
        modalPanel11ShowHandler={modalLead11}
        onClickOutside={() => setModalLead11(false)}
      />
      <LeadCreator14
        modalPanel14ShowHandler={modalLead14}
        onClickOutside={() => setModalLead14(false)}
      />
      <LeadCreator16
        modalPanel16ShowHandler={modalLead16}
        onClickOutside={() => setModalLead16(false)}
      />
       <LeadCreator18
        modalPanel18ShowHandler={modalLead18}
        onClickOutside={() => setModalLead18(false)}
      />
      <LeadCreator21
        modalPanel21ShowHandler={modalLead21}
        onClickOutside={() => setModalLead21(false)}
      />
       <LeadCreator24
        modalPanel24ShowHandler={modalLead24}
        onClickOutside={() => setModalLead24(false)}
      />
      <main>
        <div className="main-layout">
          <div className="tabs-area">
            <div className="message-box">
              <h5>Verificaciones:</h5>
              {leads &&
                leads.map((lead) =>
                  lead.phase >= 1.4 ? (
                    lead.phase >= 1.5 ? (
                      <h6>
                        Ha solicitado asesoria con su ultimo presupuesto
                        provisto. Un agente se pondra en contacto en la
                        brevedad.
                      </h6>
                    ) : (
                      <h6>
                        Usted tiene 1 Cotización Validada por Aceptar/Rechazar.
                        Tambien puede pedir asesoramiento.
                      </h6>
                    )
                  ) : (
                    ""
                  )
                )}
              <h6>
                Verificacion de Identidad:{" "}
                <span className="text-success">OK</span>
              </h6>
              {/* TODO boolean que informa si tiene un lead disponible o no */}
            </div>
            <div className="tabs-list-area">
              <div className="tabs-list-crud-actions"></div>

              <div className="tab-actions-and-search">
                {/* <div className="tab-actions">
                <button className="btn btn-tab btn-tab-active">
                  Pendientes
                </button>
                <button className="btn btn-tab">Todos</button>
                <button className="btn btn-tab">Renovaciones</button>
              </div> */}

                <div className="tab-search mb-1">
                  {/* <fieldset>
                  <input
                    type="text"
                    placeholder="Buscar..."
                    className="search-input "
                  />
                </fieldset> */}
                  {leads &&
                    leads.map((lead) =>
                      lead.phaseEmision === true ? (
                        <button
                          onClick={() => setModalCreateLeadVisible(true)}
                          className="btn btn-primary ml-4"
                        >
                          LLENAR FORMULARIO PARA SOLICITUD DE SEGURO
                        </button>
                      ) : (
                        ""
                      )
                    )}
                  <button
                    onClick={() => setModalCreateLeadVisible(true)}
                    className="btn btn-primary ml-4"
                  >
                    LLENAR FORMULARIO PARA COTIZACION
                  </button>
                  {/* <button
                  onClick={() => setModalCalendarVisible(true)}
                  className="btn btn-primary ml-4"
                >
                  VER CALENDARIO
                </button> */}
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
                    <button
                        className="user-btn m-0 p-0"
                       
                      >
                        Cancelar
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
                    <div className="tab-list-form-row-column">Comercial(3)</div>
                    <div className="tab-list-form-row-column">
                      Cotización en Revisión de la Aseguradora
                    </div>

                    <div className="tab-list-form-row-column">
                    <button
                        className="user-btn m-0 p-0"
                       
                      >
                        Cancelar
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
                      Broker se contactará con usted
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
                    <div className="tab-list-form-row-column">Comercial(5)</div>
                    <div className="tab-list-form-row-column">
                      Nueva Cotización disponible
                    </div>

                    <div className="tab-list-form-row-column">
                    <button onClick={() => setModalLead3(!modalLead3)}>
                        Revisar cotizacion
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
                    <div className="tab-list-form-row-column">Comercial(6)</div>
                    <div className="tab-list-form-row-column">
                      Solicitud Asesoría en proceso
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
                    <div className="tab-list-form-row-column">Emisión</div>
                    <div className="tab-list-form-row-column">
                      Nueva Solicitud de Seguro
                    </div>

                    <div className="tab-list-form-row-column">
                    <button onClick={() => setModalLead5(!modalLead5)}>
                        Llenar Formulario
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
                    <div className="tab-list-form-row-column">Emisión(8)</div>
                    <div className="tab-list-form-row-column">
                     Registro de Seguro en Revisión
                    </div>

                    <div className="tab-list-form-row-column">
                  
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
                    <div className="tab-list-form-row-column">Emisión(9)</div>
                    <div className="tab-list-form-row-column">
                     Evaluación de riesgos (en proceso)
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
                    <div className="tab-list-form-row-column">Emisión(10)</div>
                    <div className="tab-list-form-row-column">
                      Revisón final de Documentación
                    </div>

                    <div className="tab-list-form-row-column">
                    <button onClick={() => setModalLead8(!modalLead8)}>
                        Registrar Solicitud
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
                    <div className="tab-list-form-row-column">Emisión(11)</div>
                    <div className="tab-list-form-row-column">
                    Emisión de Poliza enviada al Broker
                    </div>

                    <div className="tab-list-form-row-column">
                  
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
                    <div className="tab-list-form-row-column">Emisión(12)</div>
                    <div className="tab-list-form-row-column">
                    Emisión de Poliza en proceso
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
                    <div className="tab-list-form-row-column">Cobranza</div>
                    <div className="tab-list-form-row-column">
                      Añadir Débito Bancario
                    </div>

                    <div className="tab-list-form-row-column">
                    <button onClick={() => setModalLead11(!modalLead11)}>
                    Añadir Débito Bancario
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
                    Aseguradora registrando Forma de pago
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
                    <div className="tab-list-form-row-column">Cobranza(16)</div>
                    <div className="tab-list-form-row-column">
                      Transferencia, Depósito o Cheque
                    </div>

                    <div className="tab-list-form-row-column">
                    <button onClick={() => setModalLead14(!modalLead14)}>
                    Añadir Constancia de Pago
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
                    <div className="tab-list-form-row-column"> Cobranzas(17) </div>
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
                    <div className="tab-list-form-row-column">Cobranza(18)</div>
                    <div className="tab-list-form-row-column">
                      Pago con Tarjeta de crédito
                    </div>

                    <div className="tab-list-form-row-column">
                    <button onClick={() => setModalLead16(!modalLead16)}>
                    Pagar con tarjeta de Crédito
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
                    <div className="tab-list-form-row-column"> Cobranzas(19) </div>
                    <div className="tab-list-form-row-column">
                    Aseguradora confirmando pago
                    </div>

                    <div className="tab-list-form-row-column">
                    
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
                   ¡POLIZA ACTIVA!
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
                    <div className="tab-list-form-row-column"> Movimientos </div>
                    <div className="tab-list-form-row-column">
                   Solicitud de Movimientos
                    </div>

                    <div className="tab-list-form-row-column">
                    <button onClick={() => setModalLead18(!modalLead18)}>
                    Abrir Solicitud de Movimiento
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
                   Aseguradora emitiendo movimiento
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
                    <div className="tab-list-form-row-column"> Indemnización </div>
                    <div className="tab-list-form-row-column">
                   Solicitud de Indemnización
                    </div>

                    <div className="tab-list-form-row-column">
                    <button onClick={() => setModalLead21(!modalLead21)}>
                    Abrir Solicitud de Indemnización
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
                   Aseguradora en Ajuste y Tratamiento
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
                    <div className="tab-list-form-row-column"> Indemnización (28) </div>
                    <div className="tab-list-form-row-column">
                   Revisión Liquidación de Siniestros
                    </div>

                    <div className="tab-list-form-row-column">
                    <button onClick={() => setModalLead24(!modalLead24)}>
                    Revisar Liquidación
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
