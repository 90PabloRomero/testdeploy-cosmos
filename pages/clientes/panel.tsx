import { useEffect, useState } from "react";
import { Link } from "components";
import CalendarArea from "components/Calendar";

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

  return (
    <>
      <ModalCreateLead
        modalVisible={modalCreateLeadVisible}
        onOutsideClick={() => setModalCreateLeadVisible(false)}
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
                  {leads &&
                    leads.map((lead) => (
                      <div className="tab-list-form-row" key={lead.id}>
                        <div className="tab-list-form-row-column">
                          {lead.priority === 1 ? (
                            <span className="priority-icon priority-critical">
                              &nbsp;
                            </span>
                          ) : lead.priority === 2 ? (
                            <span className="priority-icon priority-important">
                              &nbsp;
                            </span>
                          ) : lead.priority === 3 ? (
                            <span className="priority-icon priority-normal">
                              &nbsp;
                            </span>
                          ) : (
                            <span>-</span>
                          )}
                        </div>
                        <div className="tab-list-form-row-column">
                          <button
                            className="user-btn m-0 p-0"
                            onClick={onClickUser}
                          >
                            {lead.firstName} {lead.lastName}
                          </button>
                        </div>
                        <div className="tab-list-form-row-column">
                          {lead.phase >= 1.2
                            ? lead.phase >= 1.4
                              ? lead.phase >= 2
                                ? "Peticion de formula de seguro"
                                : "Revisar Cotizacion"
                              : "Cotizacion en aseguradora"
                            : "Borrador"}
                        </div>
                        <div className="tab-list-form-row-column">
                          {lead.phase <= 1.1
                            ? lead.phase >= 1.4
                              ? "Revisar Cotizacion"
                              : lead.phase >= 2
                              ? "Esperando solicitud de seguro"
                              : "comercial"
                            : " "}
                        </div>

                        <div className="tab-list-form-row-column">
                          {lead.phase >= 1.2 ? (
                            lead.phase >= 1.4 ? (
                              <Link
                                href={`/clientes/panel/${lead.id}`}
                                className="btn p-0 m-0"
                              >
                                <Image src={addIcon} alt="" />
                              </Link>
                            ) : (
                              ""
                            )
                          ) : (
                            <Link
                              href={`/clientes/panel/${lead.id}`}
                              className="btn p-0 m-0"
                            >
                              <Image src={addIcon} alt="" />
                            </Link>
                          )}
                          {lead.validate === false ? (
                            ""
                          ) : (
                            <button className="btn p-0 m-0">
                              <Image src={editIcon} alt="" />
                            </button>
                          )}
                          {lead.follow === false ? (
                            ""
                          ) : (
                            <button className="btn p-0 m-0">
                              <Image src={sendIcon} alt="" />
                            </button>
                          )}
                        </div>
                        <div className="tab-list-form-row-column">
                          <button
                            onClick={() => deleteLead(lead.id)}
                            className="btn btn-primary"
                          >
                            X
                          </button>
                        </div>
                        {/* <div className="tab-list-form-row-column">
                          {lead.quote === false ? (
                            ""
                          ) : (
                            <button
                              onClick={onClick}
                              className="btn p-2 badge badge-pill bg-primary"
                            >
                              Cotizar
                            </button>
                          )}
                          {lead.validate === false ? (
                            ""
                          ) : (
                            <button className="btn p-2 badge badge-pill bg-info">
                              Validar
                            </button>
                          )}
                          {lead.follow === false ? (
                            ""
                          ) : (
                            <button className="btn p-2 badge badge-pill bg-warning">
                              Seguimiento
                            </button>
                          )}
                        </div> */}
                      </div>
                    ))}
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
