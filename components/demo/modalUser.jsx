export { ModalUser };
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

function ModalUser({ modalUserVisible, onOutsideClick }) {
  // const [modalPage, setModalPage] = useState("insurance-sign");

  //// const [modalState, modalDispatch] = useReducer(modalReducer, initialState);
  return (
    <div
      className={`layoutModal ${
        modalUserVisible ? "d-block modal-open" : "d-none"
      }`}
    >
      <div className="modal-dialog">
        <OutsideClickHandler onOutsideClick={onOutsideClick}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Ver Usuario
              </h5>
            </div>

            <div className="modal-tabs"></div>
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
                  <div className="d-flex">
                    <span className="mr-1">Pais de Residencia: </span>
                    <span>Ecuador</span>
                  </div>
                </div>
                <div>
                  <div className="d-flex">
                    <span className="mr-1">telefono: </span>
                    <span>593-123456789</span>
                  </div>
                  <div className="d-flex">
                    <span className="mr-1">Fecha de nacimiento: </span>
                    <span>7/3/1980</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-tabs">
              <div className="h5">Familiares asegurados</div>
            </div>
            <div className="modal-body">
              <div className="h6">Conyuge</div>
              <div className="d-flex justify-content-around">
                <div>
                  <div className="d-flex">
                    <span className="mr-1">Nombre: </span>
                    <span>María Ramírez</span>
                  </div>
                  <div className="d-flex">
                    <span className="mr-1">Email: </span>
                    <span>mariaramirez@gmail.com</span>
                  </div>
                </div>
                <div>
                  <div className="d-flex">
                    <span className="mr-1">telefono: </span>
                    <span>593-123456789</span>
                  </div>
                  <div className="d-flex">
                    <span className="mr-1">Fecha de nacimiento: </span>
                    <span>9/11/1980</span>
                  </div>
                </div>
              </div>
              <div className="h6">Hijo</div>
              <div className="d-flex justify-content-around">
                <div>
                  <div className="d-flex">
                    <span className="mr-1">Nombre: </span>
                    <span>Junior Ugalde</span>
                  </div>
                  <div className="d-flex">
                    <span className="mr-1">Email: </span>
                    <span>jugalde1980@gmail.com</span>
                  </div>
                </div>
                <div>
                  <div className="d-flex">
                    <span className="mr-1">telefono: </span>
                    <span>-</span>
                  </div>
                  <div className="d-flex">
                    <span className="mr-1">Fecha de nacimiento: </span>
                    <span>7/3/2010</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-tabs">
              <div className="h5">Asegurado por</div>
            </div>
            <div className="modal-body">
              <div className="d-flex justify-content-around">
                <ul>
                  <li>VUMI</li>
                </ul>
              </div>
            </div>

            <div className="modal-footer">
              Acciones disponibles:
              <button onClick={onOutsideClick} className="btn p-0 m-0">
                <Image src={addIcon} alt="" />
              </button>
              <button className="btn p-0 m-0 mx-1">
                <Image src={editIcon} alt="" />
              </button>
              <button className="btn p-0 m-0">
                <Image src={sendIcon} alt="" />
              </button>
            </div>
          </div>
        </OutsideClickHandler>
      </div>
    </div>
  );
}
