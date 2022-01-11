export { ModalCotizacion };
import Image from "next/image";
import OutsideClickHandler from "react-outside-click-handler";

import addIcon from "../../public/add.png";
import editIcon from "../../public/edit.png";
import sendIcon from "../../public/icon3.png";
import { useState } from "react";
import { Link } from "../../components";
import { alertService } from "../../services";
//// about this modal
//// this currently works only on dashboard page. probably will break if used outside.

function ModalCotizacion({ modalCotizacionVisible, onOutsideClick }) {
  const [insuranceOption, setInsuranceOption] = useState(1);

  function handleClickConfirmar() {
    alertService.success(
      "FELICIDADES! Usted ha asegurado a su familia. Se ha enviado un su factura y los detalles de su poliza adjuntos en su correo electronico.",
      {
        keepAfterRouteChange: true,
      }
    );
  }
  function handleClickCancelar() {
    alertService.error(
      "Usted ha cancelado la solicitud. Puede volver a pedir una nueva cotización."
    );
  }
  function handleClickSolicitarAsesoria() {
    alertService.warn(
      "Un Asesor se comunicará con usted a la brevedad. Por favor revise su correo electronico."
    );
  }
  //// const [modalState, modalDispatch] = useReducer(modalReducer, initialState);
  return (
    <div
      className={`layoutModal ${
        modalCotizacionVisible ? "d-block modal-open" : "d-none"
      }`}
    >
      <div className="modal-dialog">
        <OutsideClickHandler onOutsideClick={onOutsideClick}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Cotización sugerida
              </h5>
            </div>

            <div className="modal-tabs"></div>
            <div className="modal-body text-center">
              <h2 className="my-2">VUMI</h2>
              <nav className="mt-4">
                <div className="nav " id="nav-tab" role="tablist">
                  <button
                    className={`nav-link active btn btn-tab  ${
                      insuranceOption === 1 ? "btn-tab-active" : ""
                    }`}
                    id="nav-home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-home"
                    type="button"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                    onClick={() => setInsuranceOption(1)}
                  >
                    ABSOLUTE VIP
                  </button>
                  <button
                    className={`nav-link active btn btn-tab  ${
                      insuranceOption === 2 ? "btn-tab-active" : ""
                    }`}
                    id="nav-profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-profile"
                    type="button"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                    onClick={() => setInsuranceOption(2)}
                  >
                    UNIVERSAL VIP
                  </button>
                  <button
                    className={`nav-link active btn btn-tab  ${
                      insuranceOption === 3 ? "btn-tab-active" : ""
                    }`}
                    id="nav-contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-contact"
                    type="button"
                    role="tab"
                    aria-controls="nav-contact"
                    aria-selected="false"
                    onClick={() => setInsuranceOption(3)}
                  >
                    SPECIAL VIP
                  </button>
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                <div
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  {insuranceOption === 1 ? (
                    <>
                      <div className="bg-success p-2">
                        <div className="bg-light rounded text-center m-2 p-4">
                          <h2>$ 50 Dolares por persona</h2>
                          <div className="d-flex justify-content-around border mt-4">
                            <div>
                              <div className="d-flex">
                                <span className="mr-1">
                                  <strong>Caracteristica </strong>
                                </span>
                              </div>
                              <div className="d-flex">
                                <span className="mr-1">Deducible </span>
                              </div>
                              <div className="d-flex">
                                <span className="mr-1">Maternidad </span>
                              </div>
                              <div className="d-flex">
                                <span className="mr-1">Red Hospitalaria </span>
                              </div>
                              <div className="d-flex">
                                <span className="mr-1">Maternidad </span>
                              </div>
                              <div className="d-flex">
                                <span className="mr-1">Red Hospitalaria </span>
                              </div>
                            </div>
                            <div>
                              <div className="d-flex">
                                <span className="mr-1">Aplicable </span>
                              </div>
                              <div className="d-flex">
                                <span className="mr-1">$ 5000 </span>
                              </div>
                              <div className="d-flex">
                                <span className="mr-1">Hasta $ 50.000 </span>
                              </div>
                              <div className="d-flex">
                                <span className="mr-1">100%</span>
                              </div>
                              <div className="d-flex">
                                <span className="mr-1">Hasta $ 50.000 </span>
                              </div>
                              <div className="d-flex">
                                <span className="mr-1">100%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                </div>
                <div
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                >
                  {insuranceOption === 2 ? (
                    <>
                      <div className="bg-success p-2">
                        <div className="bg-light rounded text-center m-2 p-4">
                          <h2>$ 75 Dolares por persona</h2>
                          <div className="d-flex justify-content-around border mt-4">
                            <div>
                              <div className="d-flex">
                                <span className="mr-1">
                                  <strong>Caracteristica </strong>
                                </span>
                              </div>
                              <div className="d-flex">
                                <span className="mr-1">Deducible </span>
                              </div>
                              <div className="d-flex">
                                <span className="mr-1">Maternidad </span>
                              </div>
                              <div className="d-flex">
                                <span className="mr-1">Red Hospitalaria </span>
                              </div>
                              <div className="d-flex">
                                <span className="mr-1">Maternidad </span>
                              </div>
                              <div className="d-flex">
                                <span className="mr-1">Red Hospitalaria </span>
                              </div>
                            </div>
                            <div>
                              <div className="d-flex">
                                <span className="mr-1">Aplicable </span>
                              </div>
                              <div className="d-flex">
                                <span className="mr-1">$ 5000 </span>
                              </div>
                              <div className="d-flex">
                                <span className="mr-1">Hasta $ 50.000 </span>
                              </div>
                              <div className="d-flex">
                                <span className="mr-1">100%</span>
                              </div>
                              <div className="d-flex">
                                <span className="mr-1">Hasta $ 50.000 </span>
                              </div>
                              <div className="d-flex">
                                <span className="mr-1">100%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                </div>
                <div
                  id="nav-contact"
                  role="tabpanel"
                  aria-labelledby="nav-contact-tab"
                >
                  {insuranceOption === 3 ? (
                    <>
                      <div className="bg-success p-2">
                        <div className="bg-light rounded text-center m-2 p-4">
                          <h2>$ 100 Dolares por persona</h2>
                          <div className="d-flex justify-content-around border mt-4">
                            <div>
                              <div className="d-flex">
                                <span className="mr-1">
                                  <strong>Caracteristica </strong>
                                </span>
                              </div>
                              <div className="d-flex">
                                <span className="mr-1">Deducible </span>
                              </div>
                              <div className="d-flex">
                                <span className="mr-1">Maternidad </span>
                              </div>
                              <div className="d-flex">
                                <span className="mr-1">Red Hospitalaria </span>
                              </div>
                              <div className="d-flex">
                                <span className="mr-1">Maternidad </span>
                              </div>
                              <div className="d-flex">
                                <span className="mr-1">Red Hospitalaria </span>
                              </div>
                            </div>
                            <div>
                              <div className="d-flex">
                                <span className="mr-1">Aplicable </span>
                              </div>
                              <div className="d-flex">
                                <span className="mr-1">$ 5000 </span>
                              </div>
                              <div className="d-flex">
                                <span className="mr-1">Hasta $ 50.000 </span>
                              </div>
                              <div className="d-flex">
                                <span className="mr-1">100%</span>
                              </div>
                              <div className="d-flex">
                                <span className="mr-1">Hasta $ 50.000 </span>
                              </div>
                              <div className="d-flex">
                                <span className="mr-1">100%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <Link href="/version-print">
                <button onClick={onOutsideClick} className="btn btn-primary">
                  Ver / Imprimir Presupuesto Completo
                </button>
              </Link>
            </div>

            <div className="modal-tabs"></div>
            <div className="modal-body">
              <div className="d-flex justify-content-around">
                <ul className="text-center">
                  <li>
                    <span onClick={onOutsideClick}>
                      <button
                        onClick={handleClickConfirmar}
                        className="btn bg-info"
                      >
                        Confirmar
                      </button>
                    </span>
                  </li>
                  <li>
                    <span onClick={onOutsideClick}>
                      <button
                        onClick={handleClickCancelar}
                        className="btn bg-danger my-2"
                      >
                        Descartar
                      </button>
                    </span>
                  </li>
                  <li>
                    <span onClick={onOutsideClick}>
                      <button
                        onClick={handleClickSolicitarAsesoria}
                        className="btn bg-warning"
                      >
                        Solicitar Asesoria
                      </button>
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="modal-footer"></div>
          </div>
        </OutsideClickHandler>
      </div>
    </div>
  );
}
