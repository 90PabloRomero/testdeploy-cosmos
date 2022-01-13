import { leadService } from "services";
import dynamic from "next/dynamic.js";

import { useEffect, useState } from "react";
import { Link } from "components";
// import CalendarArea from "components/Calendar";
import Image from "next/image";
import addIcon from "public/add.png";
import editIcon from "public/edit.png";
import sendIcon from "public/icon3.png";
import Head from "next/head";
const FC = dynamic(() => import("components/demo/piechart"), { ssr: false });

const Home = ({ onClick, onClickCargarCotizacion }) => {
  // const [modalCalendarVisible, setModalCalendarVisible] = useState(false);
  const [leads, setLeads] = useState(null);

  useEffect(() => {
    leadService.getAll().then((x) => setLeads(x));
  }, []);

  // useEffect(() => {
  //   document.body.className = modalCalendarVisible ? "modal-mode" : "";
  // });

  return (
    <>
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
                    <div className="tab-list-form-heading-column">Ramo</div>
                    <div className="tab-list-form-heading-column">Fase</div>
                    <div className="tab-list-form-heading-column">Acciones</div>
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
                            // onClick={onClickUser}
                          >
                            {lead.firstName} {lead.lastName}
                          </button>
                        </div>
                        <div className="tab-list-form-row-column">
                          {lead.phase >= 1.4
                            ? "Cotizacion en revision del cliente"
                            : "Cotizacion en aseguradora"}
                        </div>
                        <div className="tab-list-form-row-column">
                          {lead.phase <= 1.3
                            ? "esperando validacion"
                            : "Cotizacion siendo evaluada por el cliente"}
                        </div>

                        <div className="tab-list-form-row-column">
                          {lead.phase >= 1.4 ? (
                            ""
                          ) : (
                            <Link
                              href={`/aseguradoras/panel/${lead.id}`}
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
                          <button
                            onClick={() => deleteLead(lead.id)}
                            className="btn btn-primary"
                          >
                            X
                          </button>
                        </div> */}
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
