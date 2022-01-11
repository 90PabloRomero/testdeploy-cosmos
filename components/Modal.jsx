import Link from "next/link";
import { useEffect, useReducer, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { alertService } from "../services";

//// about this modal
//// this currently works only on dashboard page. probably will break if used outside.

function Modal({ modalVisible, onOutsideClick }) {
  const [modalPage, setModalPage] = useState("insurance-sign");

  //// const [modalState, modalDispatch] = useReducer(modalReducer, initialState);

  function handleSendClick() {
    setModalPage("insurance-sign");
    alertService.success("Cotización enviada al correo electronico del Lead", {
      keepAfterRouteChange: true,
    });
  }
  return (
    <div
      className={`layoutModal ${
        modalVisible ? "d-block modal-open" : "d-none"
      }`}
    >
      <div className="modal-dialog">
        <OutsideClickHandler onOutsideClick={onOutsideClick}>
          <div className="modal-content">
            {modalPage === "insurance-sign" ? (
              <>
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Seguro Solicitado
                  </h5>
                </div>

                <div className="modal-tabs">
                  <div className="h5">Datos Solicitante</div>
                </div>
                <div className="modal-body">
                  <div className="d-flex justify-content-around">
                    <div>
                      <div className="d-flex">
                        <span className="mr-1">Nombre: </span>
                        <span>Juan Ugalde</span>
                      </div>
                      <div className="d-flex">
                        <span className="mr-1">Email: </span>
                        <span>jugalde1980@gmail.com</span>
                      </div>
                    </div>
                    <div>
                      <div className="d-flex">
                        <span className="mr-1">telefono: </span>
                        <span>999999999</span>
                      </div>
                      <div className="d-flex">
                        <span className="mr-1">Fecha de nacimiento: </span>
                        <span>7/3/1980</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="modal-tabs">
                  <div className="h5">Datos Familia Asegurada</div>
                </div>
                <div className="modal-body">
                  <div className="h6">Familiar 1</div>
                  <div className="d-flex justify-content-around">
                    <div>
                      <div className="d-flex">
                        <span className="mr-1">Nombre: </span>
                        <span>Juan Ugalde</span>
                      </div>
                      <div className="d-flex">
                        <span className="mr-1">Email: </span>
                        <span>jugalde1980@gmail.com</span>
                      </div>
                    </div>
                    <div>
                      <div className="d-flex">
                        <span className="mr-1">telefono: </span>
                        <span>999999999</span>
                      </div>
                      <div className="d-flex">
                        <span className="mr-1">Fecha de nacimiento: </span>
                        <span>7/3/1980</span>
                      </div>
                    </div>
                  </div>
                  <div className="h6">Familiar 2</div>
                  <div className="d-flex justify-content-around">
                    <div>
                      <div className="d-flex">
                        <span className="mr-1">Nombre: </span>
                        <span>Juan Ugalde</span>
                      </div>
                      <div className="d-flex">
                        <span className="mr-1">Email: </span>
                        <span>jugalde1980@gmail.com</span>
                      </div>
                    </div>
                    <div>
                      <div className="d-flex">
                        <span className="mr-1">telefono: </span>
                        <span>999999999</span>
                      </div>
                      <div className="d-flex">
                        <span className="mr-1">Fecha de nacimiento: </span>
                        <span>7/3/1980</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="modal-tabs">
                  <div className="h5">Aseguradoras</div>
                </div>
                <div className="modal-body">
                  <div className="d-flex justify-content-around">
                    <ul>
                      <li>
                        <input type="checkbox" className="mr-2" name="" id="" />
                        VUMI
                      </li>
                      <li>
                        <input type="checkbox" className="mr-2" name="" id="" />
                        SALUD
                      </li>
                      <li>
                        <input type="checkbox" className="mr-2" name="" id="" />
                        CONFIAMED
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            ) : modalPage === "insurance-choice" ? (
              <>
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Seguro Solicitado
                  </h5>
                </div>

                <div className="modal-tabs">
                  <div className="h5">Seguro: ACCESS VIP</div>
                </div>
                <div className="h2 text-center">$ 50 por persona por mes</div>
                <div className="modal-body">
                  <div className="d-flex justify-content-around">
                    <div>
                      <div className="d-flex">
                        <span className="mr-1">Caracteristica </span>
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
              </>
            ) : (
              ""
            )}

            <div className="modal-footer">
              {modalPage === "insurance-sign" ? (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setModalPage("insurance-choice")}
                >
                  Solicitar cotizacion a aseguradoras
                </button>
              ) : modalPage === "insurance-choice" ? (
                <span onClick={onOutsideClick}>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleSendClick}
                  >
                    Enviar al Cliente
                  </button>
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
        </OutsideClickHandler>
      </div>
    </div>
  );
}
export { Modal };
