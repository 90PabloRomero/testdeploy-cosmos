import { leadService } from "services";

import { useEffect, useState } from "react";
import { Link } from "components";
import CalendarArea from "components/Calendar";
import LeadCreator2 from "../../components/demo/leads-broker/LeadBroker02";

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
  });

  // llamo al modal LeadCreator2 y le doy sus condiciones para que se pueda abrir
  const [modalLead2, setModalLead2] = useState(false);

  return (
    <>
      <LeadCreator2
        modalPanel2ShowHandler={modalLead2}
        onClickOutside={() => setModalLead2(false)}
      />
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
                    <div className="tab-list-form-row-column">Comercial(2)</div>
                    <div className="tab-list-form-row-column">
                      Nueva Cotizacion
                    </div>

                    <div className="tab-list-form-row-column">
                      <button onClick={() => setModalLead2(!modalLead2)}>
                        Validar cotizacion
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
                        Juan Ugalde
                      </button>
                    </div>
                    <div className="tab-list-form-row-column">Comercial(3)</div>
                    <div className="tab-list-form-row-column">
                      Cotizacion siendo validada por Aseguradora
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
