import { leadService } from "services";
import {
  XCircleIcon,
  SearchCircleIcon,
  MailIcon,
  PhoneOutgoingIcon,
  ClipboardListIcon,
  CheckIcon,
} from "@heroicons/react/solid";
import dynamic from "next/dynamic.js";

import { useEffect, useState } from "react";
const FC = dynamic(() => import("components/demo/piechart"), { ssr: false });

import CalendarArea from "components/Calendar";
import LeadCreator2 from "../../components/demo/leads-broker/LeadBroker02";
import LeadCreator3 from "../../components/demo/leads-broker/LeadBroker03";
import LeadCreator4 from "../../components/demo/leads-broker/LeadBroker04";
import LeadCreator6 from "../../components/demo/leads-broker/LeadBroker06";
import LeadCreator9 from "../../components/demo/leads-broker/LeadBroker09";
import LeadCreator12 from "../../components/demo/leads-broker/LeadBroker12";
import LeadCreator15 from "../../components/demo/leads-broker/LeadBroker15";
import LeadCreator17 from "../../components/demo/leads-broker/LeadBroker17";
import LeadCreator19 from "../../components/demo/leads-broker/LeadBroker19";
import LeadCreator22 from "../../components/demo/leads-broker/LeadBroker22";
import LeadCreator25 from "../../components/demo/leads-broker/LeadBroker25";

const Home = ({ onClick, onClickUser, carryAppointment }) => {
  const [leads, setLeads] = useState(null);
  const [modalCalendarVisible, setModalCalendarVisible] = useState(false);

  useEffect(() => {
    leadService.getAll().then((x) => setLeads(x));
  }, []);

  useEffect(() => {
    document.body.className = modalCalendarVisible ? "modal-mode" : "";
    // aca añadimos  el primer valor del array de usestate como booleano de todos los formularios accion que necesitamos para ajustar el body cada vez que queremos que se abra el modal, necesitamos que el body tenga la clase "modal-mode" para lograr el efecto de ventana superpuesta
    document.body.className = modalLead2 ? "modal-mode" : "";
    document.body.className = modalLead3 ? "modal-mode" : "";
    document.body.className = modalLead4 ? "modal-mode" : "";
    document.body.className = modalLead6 ? "modal-mode" : "";
    document.body.className = modalLead9 ? "modal-mode" : "";
    document.body.className = modalLead12 ? "modal-mode" : "";
    document.body.className = modalLead15 ? "modal-mode" : "";
    document.body.className = modalLead17 ? "modal-mode" : "";
    document.body.className = modalLead19 ? "modal-mode" : "";
    document.body.className = modalLead22 ? "modal-mode" : "";
    document.body.className = modalLead25 ? "modal-mode" : "";
  });

  // llamo al modal LeadCreator2 y le doy sus condiciones para que se pueda abrir
  const [modalLead2, setModalLead2] = useState(false);
  const [modalLead3, setModalLead3] = useState(false);
  const [modalLead4, setModalLead4] = useState(false);
  const [modalLead6, setModalLead6] = useState(false);
  const [modalLead9, setModalLead9] = useState(false);
  const [modalLead12, setModalLead12] = useState(false);
  const [modalLead15, setModalLead15] = useState(false);
  const [modalLead17, setModalLead17] = useState(false);
  const [modalLead19, setModalLead19] = useState(false);
  const [modalLead22, setModalLead22] = useState(false);
  const [modalLead25, setModalLead25] = useState(false);
  return (
    <>
      <LeadCreator2
        modalPanel2ShowHandler={modalLead2}
        onClickOutside={() => setModalLead2(false)}
        onOutsideClick={() => setModalLead2(false)}
      />
      <LeadCreator3
        modalPanel3ShowHandler={modalLead3}
        onClickOutside={() => setModalLead3(false)}
      />
      <LeadCreator4
        modalPanel4ShowHandler={modalLead4}
        onClickOutside={() => setModalLead4(false)}
      />
      <LeadCreator6
        modalPanel6ShowHandler={modalLead6}
        onClickOutside={() => setModalLead6(false)}
      />
      <LeadCreator9
        modalPanel9ShowHandler={modalLead9}
        onClickOutside={() => setModalLead9(false)}
      />
      <LeadCreator12
        modalPanel12ShowHandler={modalLead12}
        onClickOutside={() => setModalLead12(false)}
      />
      <LeadCreator15
        modalPanel15ShowHandler={modalLead15}
        onClickOutside={() => setModalLead15(false)}
      />
      <LeadCreator17
        modalPanel17ShowHandler={modalLead17}
        onClickOutside={() => setModalLead17(false)}
      />
      <LeadCreator19
        modalPanel19ShowHandler={modalLead19}
        onClickOutside={() => setModalLead19(false)}
      />
      <LeadCreator22
        modalPanel22ShowHandler={modalLead22}
        onClickOutside={() => setModalLead22(false)}
      />
      <LeadCreator25
        modalPanel25ShowHandler={modalLead25}
        onClickOutside={() => setModalLead25(false)}
      />
      <main>
        <div className="main-layout">
          <div className="tabs-area">
            {/* <div>
            <button className="hamburguer" onClick={openSideBar}>
              menu
            </button>
          </div> */}
            <div className="d-flex w-full justify-content-between">
              <div className="message-box">
                <h5>Message:</h5>
              </div>
              {/* pie chart disgusting import mode */}
              <FC></FC>
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
                  <fieldset>
                    <input
                      type="text"
                      placeholder="Buscar..."
                      className="search-input "
                    />
                  </fieldset>
                  {/* <Link href="/account/register-lead">
                    <button className="btn btn-primary ml-4">
                      CREAR CLIENTE
                    </button>
                  </Link> */}
                  <button
                    onClick={() => setModalCalendarVisible(true)}
                    className="btn btn-primary ml-4"
                  >
                    VER CALENDARIO
                  </button>
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
                      {/* <span className="priority-icon priority-normal"></span> */}
                    </div>
                    <div className="tab-list-form-row-column">
                      <button
                        className="user-btn m-0 p-0"
                        onClick={onClickUser}
                      >
                        Florencio Ojeda
                      </button>
                    </div>
                    <div className="tab-list-form-row-column">
                      {/* Comercial(2) */}
                      Comercial
                    </div>
                    <div className="tab-list-form-row-column">
                      Nueva Cotización a Revisar
                    </div>

                    <div className="tab-list-form-row-column">
                      <button onClick={() => setModalLead2(!modalLead2)}>
                        {/* Revisar cotizacion */}
                        <SearchCircleIcon className="link-icon" />
                      </button>
                    </div>
                  </div>

                  {/*  */}
                  <div className="tab-list-form-row">
                    <div className="tab-list-form-row-column"></div>
                    <div className="tab-list-form-row-column">
                      <button
                        className="user-btn m-0 p-0"
                        onClick={onClickUser}
                      >
                        Jose Fernando Da-Silva
                      </button>
                    </div>
                    <div className="tab-list-form-row-column">
                      {/* Comercial(3) */}
                      Comercial
                    </div>
                    <div className="tab-list-form-row-column">
                      Cotización en Revisión de la Aseguradora
                    </div>

                    <div className="tab-list-form-row-column"></div>
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
                        Dionisio Montaño
                      </button>
                    </div>
                    <div className="tab-list-form-row-column">
                      {/* Comercial(4)  */}
                      Comercial
                    </div>
                    <div className="tab-list-form-row-column">
                      Cotización por Enviar al Cliente
                    </div>

                    <div className="tab-list-form-row-column">
                      <button onClick={() => setModalLead3(!modalLead3)}>
                        {/* Enviar cotizacion */}
                        <MailIcon className="link-icon green-icon" />
                      </button>
                    </div>
                  </div>
                  {/*  */}
                  <div className="tab-list-form-row">
                    <div className="tab-list-form-row-column"></div>
                    <div className="tab-list-form-row-column">
                      <button
                        className="user-btn m-0 p-0"
                        onClick={onClickUser}
                      >
                        Abdelkader Mendez
                      </button>
                    </div>
                    <div className="tab-list-form-row-column">
                      {/* Comercial(5) */}
                      Comercial
                    </div>
                    <div className="tab-list-form-row-column">
                      Cotización en Revisión del cliente
                    </div>

                    <div className="tab-list-form-row-column">
                      <button className="user-btn m-0 p-0">
                        <XCircleIcon className="link-icon red-icon" />
                      </button>
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
                        Abderrahim Zamora
                      </button>
                    </div>
                    <div className="tab-list-form-row-column">
                      {/* Comercial(6) */}
                      Comercial
                    </div>
                    <div className="tab-list-form-row-column">
                      Cliente necesita Asesoría
                    </div>

                    <div className="tab-list-form-row-column">
                      <button onClick={() => setModalLead4(!modalLead4)}>
                        {/* Realizar Asesoría */}
                        <PhoneOutgoingIcon className="link-icon icon-blue" />
                      </button>
                    </div>
                  </div>
                  {/*  */}
                  <div className="tab-list-form-row">
                    <div className="tab-list-form-row-column"></div>
                    <div className="tab-list-form-row-column">
                      <button
                        className="user-btn m-0 p-0"
                        onClick={onClickUser}
                      >
                        Martin Marrero
                      </button>
                    </div>
                    <div className="tab-list-form-row-column">Emisión</div>
                    <div className="tab-list-form-row-column">
                      Cliente Solicitando Seguro
                    </div>

                    <div className="tab-list-form-row-column">
                      <button className="user-btn m-0 p-0">
                        <XCircleIcon className="link-icon red-icon" />
                      </button>
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
                        Aziz Segura
                      </button>
                    </div>
                    <div className="tab-list-form-row-column">
                      {/* Emisión(8) */}
                      Emisión
                    </div>
                    <div className="tab-list-form-row-column">
                      Revisión de Formularios y Requisitos
                    </div>

                    <div className="tab-list-form-row-column">
                      <button onClick={() => setModalLead6(!modalLead6)}>
                        {/* Revisar Formularios */}
                        <SearchCircleIcon className="link-icon" />
                      </button>
                    </div>
                  </div>
                  <div className="tab-list-form-row">
                    <div className="tab-list-form-row-column"></div>
                    <div className="tab-list-form-row-column">
                      <button
                        className="user-btn m-0 p-0"
                        onClick={onClickUser}
                      >
                        Driss Miguez
                      </button>
                    </div>
                    <div className="tab-list-form-row-column">
                      {/* Emisión(9) */}
                      Emisión
                    </div>
                    <div className="tab-list-form-row-column">
                      Evaluación de riesgos (en proceso)
                    </div>

                    <div className="tab-list-form-row-column"></div>
                  </div>
                  {/*  */}
                  <div className="tab-list-form-row">
                    <div className="tab-list-form-row-column"></div>
                    <div className="tab-list-form-row-column">
                      <button
                        className="user-btn m-0 p-0"
                        onClick={onClickUser}
                      >
                        Manuel Jose Morera
                      </button>
                    </div>
                    <div className="tab-list-form-row-column">
                      {/* Emisión(10) */}
                      Emisión
                    </div>
                    <div className="tab-list-form-row-column">
                      Revisón del Cliente
                    </div>

                    <div className="tab-list-form-row-column">
                      <button className="user-btn m-0 p-0">
                        <XCircleIcon className="link-icon red-icon" />
                      </button>
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
                        Said Rodrigo
                      </button>
                    </div>
                    <div className="tab-list-form-row-column">
                      {/* Emisión(11) */}
                      Emisión
                    </div>
                    <div className="tab-list-form-row-column">
                      Proceso de Emisión de Polizas
                    </div>

                    <div className="tab-list-form-row-column">
                      <button onClick={() => setModalLead9(!modalLead9)}>
                        {/* Solicitar Emisión */}
                        <ClipboardListIcon className="link-icon green-icon" />
                      </button>
                    </div>
                  </div>
                  {/*  */}
                  <div className="tab-list-form-row">
                    <div className="tab-list-form-row-column"></div>
                    <div className="tab-list-form-row-column">
                      <button
                        className="user-btn m-0 p-0"
                        onClick={onClickUser}
                      >
                        Candido Duran
                      </button>
                    </div>
                    <div className="tab-list-form-row-column">
                      {/* Emisión(12) */}
                      Emisión
                    </div>
                    <div className="tab-list-form-row-column">
                      Emisión de Poliza en Aseguradora
                    </div>

                    <div className="tab-list-form-row-column"></div>
                  </div>
                  {/*  */}
                  <div className="tab-list-form-row">
                    <div className="tab-list-form-row-column"></div>
                    <div className="tab-list-form-row-column">
                      <button
                        className="user-btn m-0 p-0"
                        onClick={onClickUser}
                      >
                        Maximo San-Jose
                      </button>
                    </div>
                    <div className="tab-list-form-row-column">Cobranzas</div>
                    <div className="tab-list-form-row-column">
                      Cliente Añade Débito Bancario
                    </div>

                    <div className="tab-list-form-row-column"></div>
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
                        Ildefonso Ribas
                      </button>
                    </div>
                    <div className="tab-list-form-row-column">
                      {" "}
                      {/* Cobranzas(14){" "} */}
                      Cobranzas
                    </div>
                    <div className="tab-list-form-row-column">
                      Revisar Documentación del Cliente
                    </div>

                    <div className="tab-list-form-row-column">
                      <button onClick={() => setModalLead12(!modalLead12)}>
                        {/* Revisar Documentación */}
                        <SearchCircleIcon className="link-icon" />
                      </button>
                    </div>
                  </div>
                  {/*  */}
                  <div className="tab-list-form-row">
                    <div className="tab-list-form-row-column"></div>
                    <div className="tab-list-form-row-column">
                      <button
                        className="user-btn m-0 p-0"
                        onClick={onClickUser}
                      >
                        Asier Maroto
                      </button>
                    </div>
                    <div className="tab-list-form-row-column">
                      {" "}
                      {/* Cobranzas(15){" "} */}
                      Cobranzas
                    </div>
                    <div className="tab-list-form-row-column">
                      Aseguradora registrando Forma de pago
                    </div>

                    <div className="tab-list-form-row-column"></div>
                  </div>
                  {/*  */}
                  <div className="tab-list-form-row">
                    <div className="tab-list-form-row-column"></div>
                    <div className="tab-list-form-row-column">
                      <button
                        className="user-btn m-0 p-0"
                        onClick={onClickUser}
                      >
                        Emilio Jose Quiros
                      </button>
                    </div>
                    <div className="tab-list-form-row-column">
                      {/* Cobranza(16) */}
                      Cobranzas
                    </div>
                    <div className="tab-list-form-row-column">
                      Cliente Añade constancia de pago
                    </div>

                    <div className="tab-list-form-row-column"></div>
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
                        Gustavo Adolfo Macias
                      </button>
                    </div>
                    <div className="tab-list-form-row-column">
                      {" "}
                      {/* Cobranzas(17){" "} */}
                      Cobranzas
                    </div>
                    <div className="tab-list-form-row-column">
                      Revisar Documentación del Cliente
                      {/* <SearchCircleIcon className="link-icon" /> */}
                    </div>

                    <div className="tab-list-form-row-column">
                      <button onClick={() => setModalLead15(!modalLead15)}>
                        {/* Revisar Documentación */}
                        <SearchCircleIcon className="link-icon" />
                      </button>
                    </div>
                  </div>
                  {/*  */}
                  <div className="tab-list-form-row">
                    <div className="tab-list-form-row-column"></div>
                    <div className="tab-list-form-row-column">
                      <button
                        className="user-btn m-0 p-0"
                        onClick={onClickUser}
                      >
                        Jose Juan Alcaraz
                      </button>
                    </div>
                    <div className="tab-list-form-row-column">
                      {/* Cobranza(18) */}
                      Cobranzas
                    </div>
                    <div className="tab-list-form-row-column">
                      Cliente Añade Tarjeta de Crédito
                    </div>

                    <div className="tab-list-form-row-column"></div>
                  </div>
                  {/*  */}
                  <div className="tab-list-form-row">
                    <div className="tab-list-form-row-column"></div>
                    <div className="tab-list-form-row-column">
                      <button
                        className="user-btn m-0 p-0"
                        onClick={onClickUser}
                      >
                        Oscar Velazquez
                      </button>
                    </div>
                    <div className="tab-list-form-row-column">
                      {" "}
                      {/* Cobranzas(19){" "} */}
                      Cobranzas
                    </div>
                    <div className="tab-list-form-row-column">
                      Aseguradora confirmando pago
                    </div>

                    <div className="tab-list-form-row-column"></div>
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
                        Ayoub Beltran
                      </button>
                    </div>
                    <div className="tab-list-form-row-column">
                      {" "}
                      {/* Cobranzas(20){" "} */}
                      Cobranzas
                    </div>
                    <div className="tab-list-form-row-column">
                      Activar Poliza
                    </div>

                    <div className="tab-list-form-row-column">
                      <button onClick={() => setModalLead17(!modalLead17)}>
                        {/* Activar Poliza */}
                        <CheckIcon className="link-icon green-icon" />
                      </button>
                    </div>
                  </div>
                  {/*  */}
                  <div className="tab-list-form-row">
                    <div className="tab-list-form-row-column"></div>
                    <div className="tab-list-form-row-column">
                      <button
                        className="user-btn m-0 p-0"
                        onClick={onClickUser}
                      >
                        Adam Sancho
                      </button>
                    </div>
                    <div className="tab-list-form-row-column">
                      {" "}
                      Movimientos{" "}
                    </div>
                    <div className="tab-list-form-row-column">
                      Cliente Solicita un Movimiento
                    </div>

                    <div className="tab-list-form-row-column"></div>
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
                        Angel Maria Toro
                      </button>
                    </div>
                    <div className="tab-list-form-row-column">
                      {" "}
                      {/* Movimientos(23){" "} */}
                      Movimientos
                    </div>
                    <div className="tab-list-form-row-column">
                      Revisar Solicitud de Movimientos
                      {/* <SearchCircleIcon className="link-icon" /> */}
                    </div>

                    <div className="tab-list-form-row-column">
                      <button onClick={() => setModalLead19(!modalLead19)}>
                        {/* Revisar Solicitud de Movimientos */}
                        <SearchCircleIcon className="link-icon" />
                      </button>
                    </div>
                  </div>
                  {/*  */}
                  <div className="tab-list-form-row">
                    <div className="tab-list-form-row-column"></div>
                    <div className="tab-list-form-row-column">
                      <button
                        className="user-btn m-0 p-0"
                        onClick={onClickUser}
                      >
                        Nestor Zapata
                      </button>
                    </div>
                    <div className="tab-list-form-row-column">
                      {" "}
                      {/* Movimientos(24){" "} */}
                      Movimientos
                    </div>
                    <div className="tab-list-form-row-column">
                      Aseguradora emitiendo movimiento
                    </div>

                    <div className="tab-list-form-row-column"></div>
                  </div>
                  {/*  */}
                  <div className="tab-list-form-row">
                    <div className="tab-list-form-row-column"></div>
                    <div className="tab-list-form-row-column">
                      <button
                        className="user-btn m-0 p-0"
                        onClick={onClickUser}
                      >
                        Carlos Recio
                      </button>
                    </div>
                    <div className="tab-list-form-row-column">
                      {" "}
                      Indemnización{" "}
                    </div>
                    <div className="tab-list-form-row-column">
                      Cliente Solicita Indemnización
                    </div>

                    <div className="tab-list-form-row-column"></div>
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
                        Demetrio Robles
                      </button>
                    </div>
                    <div className="tab-list-form-row-column">
                      {" "}
                      {/* Indemnización(26){" "} */}
                      Indemnización
                    </div>
                    <div className="tab-list-form-row-column">
                      Revisar Solicitud de Indemnización
                      {/* <SearchCircleIcon className="link-icon" /> */}
                    </div>

                    <div className="tab-list-form-row-column">
                      <button onClick={() => setModalLead22(!modalLead22)}>
                        {/* Revisar Solicitud */}
                        <SearchCircleIcon className="link-icon" />
                      </button>
                    </div>
                  </div>
                  {/*  */}
                  <div className="tab-list-form-row">
                    <div className="tab-list-form-row-column"></div>
                    <div className="tab-list-form-row-column">
                      <button
                        className="user-btn m-0 p-0"
                        onClick={onClickUser}
                      >
                        Marius Puerta
                      </button>
                    </div>
                    <div className="tab-list-form-row-column">
                      {" "}
                      {/* Indemnización(27){" "} */}
                      Indemnización
                    </div>
                    <div className="tab-list-form-row-column">
                      Aseguradora en Ajuste y Tratamiento
                    </div>

                    <div className="tab-list-form-row-column"></div>
                  </div>
                  {/*  */}
                  <div className="tab-list-form-row">
                    <div className="tab-list-form-row-column"></div>
                    <div className="tab-list-form-row-column">
                      <button
                        className="user-btn m-0 p-0"
                        onClick={onClickUser}
                      >
                        Jacinto Lozano
                      </button>
                    </div>
                    <div className="tab-list-form-row-column">
                      {" "}
                      {/* Indemnización (28){" "} */}
                      Indemnización
                    </div>
                    <div className="tab-list-form-row-column">
                      Cliente Revisión Liquidación de Siniestros
                    </div>

                    <div className="tab-list-form-row-column"></div>
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
                        Emiliano Lillo
                      </button>
                    </div>
                    <div className="tab-list-form-row-column">
                      {" "}
                      {/* Indemnización(29){" "} */}
                      Indemnización
                    </div>
                    <div className="tab-list-form-row-column">
                      realizar Alcance
                    </div>

                    <div className="tab-list-form-row-column">
                      <button onClick={() => setModalLead25(!modalLead25)}>
                        realizar Alcance
                      </button>
                    </div>
                  </div>
                  {/*  */}
                  {/*  */}
                  <div className="tab-list-form-row">
                    <div className="tab-list-form-row-column"></div>
                    <div className="tab-list-form-row-column">
                      <button
                        className="user-btn m-0 p-0"
                        onClick={onClickUser}
                      >
                        Axel Mas
                      </button>
                    </div>
                    <div className="tab-list-form-row-column">
                      Poliza Renovación
                    </div>
                    <div className="tab-list-form-row-column">
                      Cliente Validará su Renovación
                    </div>

                    <div className="tab-list-form-row-column"></div>
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
                        Clemente Calleja
                      </button>
                    </div>
                    <div className="tab-list-form-row-column">
                      Poliza Renovación(2)
                    </div>
                    <div className="tab-list-form-row-column">
                      Cotizar Intención de Renovación
                    </div>

                    <div className="tab-list-form-row-column">
                      <button onClick={() => setModalLead3(!modalLead3)}>
                        Cotizar renovación
                      </button>
                    </div>
                  </div>
                  <div className="tab-list-form-row">
                    <div className="tab-list-form-row-column"></div>
                    <div className="tab-list-form-row-column">
                      <button
                        className="user-btn m-0 p-0"
                        onClick={onClickUser}
                      >
                        Alberto Montoro
                      </button>
                    </div>
                    <div className="tab-list-form-row-column">
                      Poliza Renovación(3)
                    </div>
                    <div className="tab-list-form-row-column">
                      Cotización en Revisión de la Aseguradora
                    </div>

                    <div className="tab-list-form-row-column"></div>
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
                        Luis Cid
                      </button>
                    </div>
                    <div className="tab-list-form-row-column">
                      Poliza Renovación(4)
                    </div>
                    <div className="tab-list-form-row-column">
                      Cotización por enviar al Cliente
                    </div>

                    <div className="tab-list-form-row-column">
                      <button onClick={() => setModalLead3(!modalLead3)}>
                        Enviar Cotización
                      </button>
                    </div>
                  </div>
                  {/*  */}
                  <div className="tab-list-form-row">
                    <div className="tab-list-form-row-column"></div>
                    <div className="tab-list-form-row-column">
                      <button
                        className="user-btn m-0 p-0"
                        onClick={onClickUser}
                      >
                        Pere Jerez
                      </button>
                    </div>
                    <div className="tab-list-form-row-column">
                      Poliza Renovación(5)
                    </div>
                    <div className="tab-list-form-row-column">
                      Aseguradora Cancelando
                    </div>

                    <div className="tab-list-form-row-column"></div>
                  </div>
                  {/*  */}
                  <div className="tab-list-form-row">
                    <div className="tab-list-form-row-column"></div>
                    <div className="tab-list-form-row-column">
                      <button
                        className="user-btn m-0 p-0"
                        onClick={onClickUser}
                      >
                        Fabian Suarez
                      </button>
                    </div>
                    <div className="tab-list-form-row-column">
                      Poliza Renovación(6)
                    </div>
                    <div className="tab-list-form-row-column">
                      Cotización en Revisión del cliente
                    </div>

                    <div className="tab-list-form-row-column"></div>
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
                        Camilo Sempere
                      </button>
                    </div>
                    <div className="tab-list-form-row-column">
                      Poliza Renovación(7)
                    </div>
                    <div className="tab-list-form-row-column">
                      Cliente necesita asesoria
                    </div>

                    <div className="tab-list-form-row-column">
                      <button onClick={() => setModalLead3(!modalLead3)}>
                        Realizar asesoria
                      </button>
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
                        Pedro Luis Calvo
                      </button>
                    </div>
                    <div className="tab-list-form-row-column">
                      Emisión Renovación(8)
                    </div>
                    <div className="tab-list-form-row-column">
                      Notificar Orden de Renovación a Aseguradora
                    </div>

                    <div className="tab-list-form-row-column">
                      <button onClick={() => setModalLead3(!modalLead3)}>
                        Notificar Orden de Renovación
                      </button>
                    </div>
                  </div>
                  <div className="tab-list-form-row">
                    <div className="tab-list-form-row-column"></div>
                    <div className="tab-list-form-row-column">
                      <button
                        className="user-btn m-0 p-0"
                        onClick={onClickUser}
                      >
                        Abraham Cabrera
                      </button>
                    </div>
                    <div className="tab-list-form-row-column">
                      Emisión Renovación(9)
                    </div>
                    <div className="tab-list-form-row-column">
                      Aseguradora Emitiendo Renovación
                    </div>

                    <div className="tab-list-form-row-column"></div>
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
            <CalendarArea
              modalCalendarVisible={modalCalendarVisible}
              onOutsideClick={() => setModalCalendarVisible(false)}
            />
          </div>
        </div>
      </main>
    </>
  );
};
export default Home;
