import { leadService } from "services";
import dynamic from "next/dynamic.js";

import { useEffect, useState } from "react";
import { Link } from "components";
import CalendarArea from "components/Calendar";
import Image from "next/image";
import addIcon from "public/add.png";
import editIcon from "public/edit.png";
import sendIcon from "public/icon3.png";
import Head from "next/head";
const FC = dynamic(() => import("components/demo/piechart"), { ssr: false });

const Home = ({ onClick, onClickCargarCotizacion }) => {
  const [modalCalendarVisible, setModalCalendarVisible] = useState(false);
  // const [leads, setLeads] = useState(null);

  // useEffect(() => {
  //   leadService.getAll().then((x) => setLeads(x));
  // }, []);

  useEffect(() => {
    document.body.className = modalCalendarVisible ? "modal-mode" : "";
  });

  return (
    <>
      <Head>
        <title>Servicio de Clientes - Cosmos</title>
      </Head>
      <main>
        <div className="main-layout">
          <div className="tabs-area">
            {/* <div>
            <button className="hamburguer" onClick={openSideBar}>
              menu
            </button>
          </div> */}
            <div className="d-flex w-full justify-content-around">
              <div className="message-box">
                <h5>Message:</h5>
                <h6>Usted tiene 1 Cotización Pendiente por revisar</h6>
              </div>
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
                    <div className="tab-list-form-heading-column">Ramo</div>
                    <div className="tab-list-form-heading-column">Fase</div>
                    <div className="tab-list-form-heading-column">Estado</div>
                  </div>

                  <>
                    <div className="tab-list-form-row">
                      <div className="tab-list-form-row-column">importante</div>
                      <div className="tab-list-form-row-column">
                        <button className="user-btn m-0 p-0">
                          Juan Ugalde
                        </button>
                      </div>
                      <div className="tab-list-form-row-column">GMM</div>
                      <div className="tab-list-form-row-column">Comercial</div>

                      <div className="tab-list-form-row-column">
                        Cotizacion Pendiente
                      </div>

                      <div className="tab-list-form-row-column">
                        <button
                          onClick={onClickCargarCotizacion}
                          className="btn m-0 p-0"
                        >
                          <Image src={addIcon} alt="ver cotizacion" />
                        </button>
                      </div>
                    </div>
                  </>
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
