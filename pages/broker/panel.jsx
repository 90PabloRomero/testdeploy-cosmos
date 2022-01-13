import { leadService } from "services";

import { useEffect, useState } from "react";
import { Link } from "components";
import CalendarArea from "components/Calendar";
import Image from "next/image";
import addIcon from "public/add.png";
import editIcon from "public/edit.png";
import sendIcon from "public/icon3.png";

const Home = ({ onClick, onClickUser, carryAppointment }) => {
  const [leads, setLeads] = useState(null);
  const [modalCalendarVisible, setModalCalendarVisible] = useState(false);

  useEffect(() => {
    leadService.getAll().then((x) => setLeads(x));
  }, []);

  useEffect(() => {
    document.body.className = modalCalendarVisible ? "modal-mode" : "";
  });

  return (
    <main>
      <div className="main-layout">
        <div className="tabs-area">
          {/* <div>
            <button className="hamburguer" onClick={openSideBar}>
              menu
            </button>
          </div> */}
          <div className="message-box">
            <h5>Message:</h5>
            <h6>Se han registrado 03 nuevos usuarios para seguro de vida</h6>
            <h6>
              Se han registrado 04 nuevos usuarios para registro de seguro
              general
            </h6>
          </div>
          <div className="tabs-list-area">
            <div className="tabs-list-crud-actions"></div>

            <div className="tab-actions-and-search">
              <div className="tab-actions">
                <button className="btn btn-tab btn-tab-active">
                  Pendientes
                </button>
                <button className="btn btn-tab">Todos</button>
                <button className="btn btn-tab">Renovaciones</button>
              </div>

              <div className="tab-search mb-1">
                <fieldset>
                  <input
                    type="text"
                    placeholder="Buscar..."
                    className="search-input "
                  />
                </fieldset>
                <Link href="/account/register-lead">
                  <button className="btn btn-primary ml-4">
                    CREAR CLIENTE
                  </button>
                </Link>
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
                  <div className="tab-list-form-heading-column">Prioridad</div>
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
                          {lead.phase === "1.5" ? "Llamar a " : ""}{" "}
                          {lead.firstName} {lead.lastName}
                        </button>
                      </div>
                      <div className="tab-list-form-row-column">
                        {lead.phase >= 1.5
                          ? "Requiere asistencia"
                          : lead.phase <= 1.4
                          ? "cotizacion en revision del cliente"
                          : lead.phase <= 1.3
                          ? "Cotizacion en aseguradora"
                          : ""}
                      </div>
                      <div className="tab-list-form-row-column">
                        {lead.phase >= 1.5 ? "Cliente necesita asesoría" : ""}
                      </div>

                      <div className="tab-list-form-row-column">
                        {lead.quote === false ? (
                          ""
                        ) : (
                          <Link
                            href={`/broker/panel/${lead.id}`}
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
          <CalendarArea
            modalCalendarVisible={modalCalendarVisible}
            onOutsideClick={() => setModalCalendarVisible(false)}
          />
        </div>
      </div>
    </main>
  );
};
export default Home;
