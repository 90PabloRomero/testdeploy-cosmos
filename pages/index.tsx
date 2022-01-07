import { userService } from "services";
import { Link } from "components";
import Image from "next/image";

import reminderIcon from "./../public/9O2A1oB.png";
import editIcon from "./../public/provisorio-edit-icon.png";
import googleAddIcon from "./../public/google-add-icon.png";

export default Home;

function Home({ onClick, openSideBar }) {
  return (
    <main>
      <div className="main-layout">
        <div className="tabs-area">
          <div>
            <button className="hamburguer" onClick={openSideBar}>
              menu
            </button>
          </div>
          <div className="message-box">
            <h5>Message:</h5>
            <h6>Se han registrado 03 nuevos usuarios para seguro de vida</h6>
            <h6>
              Se han registrado 04 nuevos usuarios para registro de seguro
              general
            </h6>
          </div>
          <div className="tabs-list-area">
            <div className="tabs-list-crud-actions">
              <div className="btn btn-primary">CREAR CLIENTE</div>
            </div>

            <div className="tab-actions-and-search">
              <div className="tab-actions">
                <button className="btn btn-tab btn-tab-active">
                  Pendientes
                </button>
                <button className="btn btn-tab">Urgentes</button>
                <button className="btn btn-tab">Agendados</button>
              </div>

              <div className="tab-search">
                <fieldset>
                  <input
                    type="text"
                    placeholder="Buscar..."
                    className="search-input"
                  />
                </fieldset>
              </div>
            </div>

            <div className="tab-list">
              <div className="tab-list-form">
                <div className="tab-list-form-heading">
                  <div className="tab-list-form-heading-column">
                    <input type="checkbox" className="form-check-input" />
                  </div>
                  <div className="tab-list-form-heading-column">Tarea</div>
                  <div className="tab-list-form-heading-column">Estado</div>
                  <div className="tab-list-form-heading-column">Línea</div>
                  <div className="tab-list-form-heading-column">Valor</div>
                  <div className="tab-list-form-heading-column">&nbsp;</div>
                </div>
                <div className="tab-list-form-row">
                  <div className="tab-list-form-row-column">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="tab-list-form-row-column">
                    Llamar a Luis Lopez Galvez
                  </div>
                  <div className="tab-list-form-row-column">Lead</div>
                  <div className="tab-list-form-row-column">
                    Asistencia médica
                  </div>
                  <div className="tab-list-form-row-column">$ 650.00</div>
                  <div className="tab-list-form-row-column">
                    <button
                      type="button"
                      onClick={onClick}
                      className="btn m-0 p-0"
                    >
                      <Image src={editIcon} alt="editar" quality={100} />
                    </button>
                  </div>
                </div>
                <div className="tab-list-form-row">
                  <div className="tab-list-form-row-column">
                    <span>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        name=""
                        id=""
                      />
                    </span>
                    <span className="ml-3">
                      <Image
                        src={reminderIcon}
                        alt="recordatorio"
                        quality={100}
                      />
                    </span>
                  </div>
                  <div className="tab-list-form-row-column">
                    Llamar a Luis Lopez Galvez
                  </div>
                  <div className="tab-list-form-row-column">Lead</div>
                  <div className="tab-list-form-row-column">
                    Asistencia médica
                  </div>
                  <div className="tab-list-form-row-column">$ 650.00</div>
                  <div className="tab-list-form-row-column">
                    <button
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      className="btn m-0 p-0"
                    >
                      <Image src={editIcon} alt="editar" quality={100} />
                    </button>
                  </div>
                </div>
                <div className="tab-list-form-row">
                  <div className="tab-list-form-row-column">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="tab-list-form-row-column">
                    Definir con Luis Lopez Galvez
                  </div>
                  <div className="tab-list-form-row-column">Presupuesto</div>
                  <div className="tab-list-form-row-column">
                    Vehículos propios
                  </div>
                  <div className="tab-list-form-row-column">$ 350.00</div>
                  <div className="tab-list-form-row-column">
                    <button
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      className="btn m-0 p-0"
                    >
                      <Image src={editIcon} alt="editar" quality={100} />
                    </button>
                  </div>
                </div>
                <div className="tab-list-form-row">
                  <div className="tab-list-form-row-column">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="tab-list-form-row-column">
                    Llamar a Luis Lopez Galvez
                  </div>
                  <div className="tab-list-form-row-column">Lead</div>
                  <div className="tab-list-form-row-column">
                    Asistencia médica
                  </div>
                  <div className="tab-list-form-row-column">$ 650.00</div>
                  <div className="tab-list-form-row-column">
                    <button
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      className="btn m-0 p-0"
                    >
                      <Image src={editIcon} alt="editar" quality={100} />
                    </button>
                  </div>
                </div>
                <div className="tab-list-form-row">
                  <div className="tab-list-form-row-column">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="tab-list-form-row-column">
                    Llamar a Luis Lopez Galvez
                  </div>
                  <div className="tab-list-form-row-column">Lead</div>
                  <div className="tab-list-form-row-column">
                    Asistencia médica
                  </div>
                  <div className="tab-list-form-row-column">$ 650.00</div>
                  <div className="tab-list-form-row-column">
                    <button
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      className="btn m-0 p-0"
                    >
                      <Image src={editIcon} alt="editar" quality={100} />
                    </button>
                  </div>
                </div>
                <div className="tab-list-form-row">
                  <div className="tab-list-form-row-column">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="tab-list-form-row-column">
                    Llamar a Luis Lopez Galvez
                  </div>
                  <div className="tab-list-form-row-column">Lead</div>
                  <div className="tab-list-form-row-column">
                    Asistencia médica
                  </div>
                  <div className="tab-list-form-row-column">$ 650.00</div>
                  <div className="tab-list-form-row-column">
                    <button
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      className="btn m-0 p-0"
                    >
                      <Image src={editIcon} alt="editar" quality={100} />
                    </button>
                  </div>
                </div>
                <div className="tab-list-form-row">
                  <div className="tab-list-form-row-column">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="tab-list-form-row-column">
                    Llamar a Luis Lopez Galvez
                  </div>
                  <div className="tab-list-form-row-column">Lead</div>
                  <div className="tab-list-form-row-column">
                    Asistencia médica
                  </div>
                  <div className="tab-list-form-row-column">$ 650.00</div>
                  <div className="tab-list-form-row-column">
                    <button
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      className="btn m-0 p-0"
                    >
                      <Image src={editIcon} alt="editar" quality={100} />
                    </button>
                  </div>
                </div>
                <div className="tab-list-form-row">
                  <div className="tab-list-form-row-column">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="tab-list-form-row-column">
                    Llamar a Luis Lopez Galvez
                  </div>
                  <div className="tab-list-form-row-column">Lead</div>
                  <div className="tab-list-form-row-column">
                    Asistencia médica
                  </div>
                  <div className="tab-list-form-row-column">$ 650.00</div>
                  <div className="tab-list-form-row-column">
                    <button
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      className="btn m-0 p-0"
                    >
                      <Image src={editIcon} alt="editar" quality={100} />
                    </button>
                  </div>
                </div>
                <div className="tab-list-form-row">
                  <div className="tab-list-form-row-column">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="tab-list-form-row-column">
                    Llamar a Luis Lopez Galvez
                  </div>
                  <div className="tab-list-form-row-column">Lead</div>
                  <div className="tab-list-form-row-column">
                    Asistencia médica
                  </div>
                  <div className="tab-list-form-row-column">$ 650.00</div>
                  <div className="tab-list-form-row-column">
                    <button
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      className="btn m-0 p-0"
                    >
                      <Image src={editIcon} alt="editar" quality={100} />
                    </button>
                  </div>
                </div>
                <div className="tab-list-form-row">
                  <div className="tab-list-form-row-column">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="tab-list-form-row-column">
                    Llamar a Luis Lopez Galvez
                  </div>
                  <div className="tab-list-form-row-column">Lead</div>
                  <div className="tab-list-form-row-column">
                    Asistencia médica
                  </div>
                  <div className="tab-list-form-row-column">$ 650.00</div>
                  <div className="tab-list-form-row-column">
                    <button
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      className="btn m-0 p-0"
                    >
                      <Image src={editIcon} alt="editar" quality={100} />
                    </button>
                  </div>
                </div>
                <div className="tab-list-form-row">
                  <div className="tab-list-form-row-column">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="tab-list-form-row-column">
                    Llamar a Luis Lopez Galvez
                  </div>
                  <div className="tab-list-form-row-column">Lead</div>
                  <div className="tab-list-form-row-column">
                    Asistencia médica
                  </div>
                  <div className="tab-list-form-row-column">$ 650.00</div>
                  <div className="tab-list-form-row-column">
                    <button
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      className="btn m-0 p-0"
                    >
                      <Image src={editIcon} alt="editar" quality={100} />
                    </button>
                  </div>
                </div>
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
        </div>

        <div className="calendar-area">
          <div className="calendar-wrapper">
            <div className="calendar-container">
              <div className="calendar-month">Octubre</div>
              <div className="calendar-days">
                <div className="calendar-day">L</div>
                <div className="calendar-day">M</div>
                <div className="calendar-day">X</div>
                <div className="calendar-day">J</div>
                <div className="calendar-day">V</div>
                <div className="calendar-day">S</div>
                <div className="calendar-day">D</div>
              </div>
              <div className="calendar-days">
                <div className="calendar-day">27</div>
                <div className="calendar-day">28</div>
                <div className="calendar-day">29</div>
                <div className="calendar-day">30</div>
                <div className="calendar-day">1</div>
                <div className="calendar-day">2</div>
                <div className="calendar-day">3</div>
              </div>
              <div className="calendar-days">
                <div className="calendar-day">4</div>
                <div className="calendar-day">5</div>
                <div className="calendar-day">6</div>
                <div className="calendar-day">7</div>
                <div className="calendar-day">8</div>
                <div className="calendar-day">9</div>
                <div className="calendar-day">10</div>
              </div>
              <div className="calendar-days">
                <div className="calendar-day">11</div>
                <div className="calendar-day">12</div>
                <div className="calendar-day">13</div>
                <div className="calendar-day">14</div>
                <div className="calendar-day">15</div>
                <div className="calendar-day">16</div>
                <div className="calendar-day">17</div>
              </div>
              <div className="calendar-days">
                <div className="calendar-day">18</div>
                <div className="calendar-day">19</div>
                <div className="calendar-day">20</div>
                <div className="calendar-day">21</div>
                <div className="calendar-day">22</div>
                <div className="calendar-day">23</div>
                <div className="calendar-day">24</div>
              </div>
              <div className="calendar-days">
                <div className="calendar-day">25</div>
                <div className="calendar-day">26</div>
                <div className="calendar-day">27</div>
                <div className="calendar-day active">28</div>
                <div className="calendar-day">29</div>
                <div className="calendar-day">30</div>
                <div className="calendar-day">31</div>
              </div>
              <div className="calendar-days">
                <div className="calendar-day">1</div>
                <div className="calendar-day">2</div>
                <div className="calendar-day">3</div>
                <div className="calendar-day">4</div>
                <div className="calendar-day">5</div>
                <div className="calendar-day">6</div>
                <div className="calendar-day">7</div>
              </div>
            </div>
            <div className="calendar-container">
              <div className="calendar-month">Noviembre</div>
              <div className="calendar-days">
                <div className="calendar-day">L</div>
                <div className="calendar-day">M</div>
                <div className="calendar-day">X</div>
                <div className="calendar-day">J</div>
                <div className="calendar-day">V</div>
                <div className="calendar-day">S</div>
                <div className="calendar-day">D</div>
              </div>
              <div className="calendar-days">
                <div className="calendar-day">1</div>
                <div className="calendar-day">2</div>
                <div className="calendar-day">3</div>
                <div className="calendar-day">4</div>
                <div className="calendar-day">5</div>
                <div className="calendar-day">6</div>
                <div className="calendar-day">7</div>
              </div>
              <div className="calendar-days">
                <div className="calendar-day">8</div>
                <div className="calendar-day">9</div>
                <div className="calendar-day">10</div>
                <div className="calendar-day">11</div>
                <div className="calendar-day">12</div>
                <div className="calendar-day">13</div>
                <div className="calendar-day">14</div>
              </div>
              <div className="calendar-days">
                <div className="calendar-day">15</div>
                <div className="calendar-day">16</div>
                <div className="calendar-day">17</div>
                <div className="calendar-day">18</div>
                <div className="calendar-day">19</div>
                <div className="calendar-day">20</div>
                <div className="calendar-day">21</div>
              </div>
              <div className="calendar-days">
                <div className="calendar-day">22</div>
                <div className="calendar-day">23</div>
                <div className="calendar-day">24</div>
                <div className="calendar-day">25</div>
                <div className="calendar-day">26</div>
                <div className="calendar-day">27</div>
                <div className="calendar-day">28</div>
              </div>
              <div className="calendar-days">
                <div className="calendar-day">29</div>
                <div className="calendar-day">30</div>
                <div className="calendar-day">1</div>
                <div className="calendar-day">2</div>
                <div className="calendar-day">3</div>
                <div className="calendar-day">4</div>
                <div className="calendar-day">5</div>
              </div>
              <div className="calendar-days">
                <div className="calendar-day">6</div>
                <div className="calendar-day">7</div>
                <div className="calendar-day">8</div>
                <div className="calendar-day">9</div>
                <div className="calendar-day">10</div>
                <div className="calendar-day">11</div>
                <div className="calendar-day">12</div>
              </div>
            </div>
          </div>
          <div className="day-schedule-area">
            <div className="day-schedule-header">
              <Image
                src={googleAddIcon}
                layout="fixed"
                width="75"
                height="75"
                alt="almanaque"
              />

              <div className="day-schedule-header-title">
                <span>MAR</span>
                <span>26</span>
              </div>
            </div>

            <div className="day-schedule-hour-by-hour-container">
              <div className="day-schedule-hours">
                <div className="day-schedule-hour-and-event">
                  <div className="ds-s-hour">GMT-05</div>
                  <div className="ds-s-event">&nbsp;</div>
                </div>
              </div>
              <div className="day-schedule-hours">
                <div className="day-schedule-hour-and-event">
                  <div className="ds-s-hour">00:00</div>
                  <div className="ds-s-event">&nbsp;</div>
                </div>
                <div className="day-schedule-hour-and-event">
                  <div className="ds-s-hour">01:00</div>
                  <div className="ds-s-event">&nbsp;</div>
                </div>
                <div className="day-schedule-hour-and-event">
                  <div className="ds-s-hour">02:00</div>
                  <div className="ds-s-event">&nbsp;</div>
                </div>
                <div className="day-schedule-hour-and-event">
                  <div className="ds-s-hour">03:00</div>
                  <div className="ds-s-event">&nbsp;</div>
                </div>
                <div className="day-schedule-hour-and-event">
                  <div className="ds-s-hour">04:00</div>
                  <div className="ds-s-event">&nbsp;</div>
                </div>
                <div className="day-schedule-hour-and-event">
                  <div className="ds-s-hour">05:00</div>
                  <div className="ds-s-event">&nbsp;</div>
                </div>
                <div className="day-schedule-hour-and-event">
                  <div className="ds-s-hour">06:00</div>
                  <div className="ds-s-event">&nbsp;</div>
                </div>
                <div className="day-schedule-hour-and-event">
                  <div className="ds-s-hour">07:00</div>
                  <div className="ds-s-event">&nbsp;</div>
                </div>
                <div className="day-schedule-hour-and-event">
                  <div className="ds-s-hour">08:00</div>
                  <div className="ds-s-event">&nbsp;</div>
                </div>
                <div className="day-schedule-hour-and-event">
                  <div className="ds-s-hour">09:00</div>
                  <div className="ds-s-event">&nbsp;</div>
                </div>
                <div className="day-schedule-hour-and-event">
                  <div className="ds-s-hour">10:00</div>
                  <div className="ds-s-event">
                    <div className="withevent">
                      Cotizar a Luis<span>09:30 - 10:30</span>
                    </div>
                  </div>
                </div>
                <div className="day-schedule-hour-and-event">
                  <div className="ds-s-hour">11:00</div>
                  <div className="ds-s-event">&nbsp;</div>
                </div>
                <div className="day-schedule-hour-and-event">
                  <div className="ds-s-hour">12:00</div>
                  <div className="ds-s-event">&nbsp;</div>
                </div>
                <div className="day-schedule-hour-and-event">
                  <div className="ds-s-hour">13:00</div>
                  <div className="ds-s-event">&nbsp;</div>
                </div>
                <div className="day-schedule-hour-and-event">
                  <div className="ds-s-hour">14:00</div>
                  <div className="ds-s-event">&nbsp;</div>
                </div>
                <div className="day-schedule-hour-and-event">
                  <div className="ds-s-hour">15:00</div>
                  <div className="ds-s-event">&nbsp;</div>
                </div>
                <div className="day-schedule-hour-and-event">
                  <div className="ds-s-hour">16:00</div>
                  <div className="ds-s-event">
                    <div className="withevent">
                      Reunión con Julio<span>15:30 - 16:30</span>
                    </div>
                  </div>
                </div>
                <div className="day-schedule-hour-and-event">
                  <div className="ds-s-hour">17:00</div>
                  <div className="ds-s-event">&nbsp;</div>
                </div>
                <div className="day-schedule-hour-and-event">
                  <div className="ds-s-hour">18:00</div>
                  <div className="ds-s-event">&nbsp;</div>
                </div>
                <div className="day-schedule-hour-and-event">
                  <div className="ds-s-hour">19:00</div>
                  <div className="ds-s-event">&nbsp;</div>
                </div>
                <div className="day-schedule-hour-and-event">
                  <div className="ds-s-hour">20:00</div>
                  <div className="ds-s-event">&nbsp;</div>
                </div>
                <div className="day-schedule-hour-and-event">
                  <div className="ds-s-hour">21:00</div>
                  <div className="ds-s-event">&nbsp;</div>
                </div>
                <div className="day-schedule-hour-and-event">
                  <div className="ds-s-hour">22:00</div>
                  <div className="ds-s-event">&nbsp;</div>
                </div>
                <div className="day-schedule-hour-and-event">
                  <div className="ds-s-hour">23:00</div>
                  <div className="ds-s-event">&nbsp;</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
