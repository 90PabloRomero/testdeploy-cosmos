export { Modal };
import { useEffect } from "react";
import OutsideClickHandler from "react-outside-click-handler";

function Modal({ modalVisible, onOutsideClick }) {
  return (
    <div
      className={`layoutModal ${
        modalVisible ? "d-block modal-open" : "d-none"
      }`}
    >
      <div className="modal-dialog">
        <OutsideClickHandler onOutsideClick={onOutsideClick}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                AGENDAR
              </h5>
            </div>
            <div className="modal-tabs">
              <button className="btn btn-tab-primary">AGENDAR</button>
              <button className="btn btn-tab-secondary">HISTORIAL</button>
            </div>
            <div className="modal-body">
              <div className="row mx-auto">
                <div className="col-5">Oportunidad</div>
                <div className="col-7">Venta a la empresa Fabrica 2000 SAC</div>
              </div>
              <div className="row mx-auto">
                <div className="col-5">Tipo</div>
                <div className="col-7">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option data-selected="">Oportunidad</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div className="row mx-auto">
                <div className="col-5">Producto</div>
                <div className="col-7">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option data-selected="">Seguro de vida 2022</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div className="row mx-auto">
                <div className="col-5">Alerta</div>
                <div className="col-7">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option data-selected="">Un día antes</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div className="row mx-auto">
                <div className="col-5">Beneficiario</div>
                <div className="col-7">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="row mx-auto">
                <div className="col-5">Alerta</div>
                <div className="col-7">
                  <div className="datepicker">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option data-selected="">Dia</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option data-selected="">Mes</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option data-selected="">Año</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <a href="#">Ver historial</a>
                  </div>
                </div>
              </div>
              <div className="row mx-auto">
                <div className="col-5">Tipo</div>
                <div className="col-7">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    data-rows="3"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                CREAR
              </button>
            </div>
          </div>
        </OutsideClickHandler>
      </div>
    </div>
  );
}
