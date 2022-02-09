import LeadCreator from "components/LeadCreator";
import Link from "next/link";
import { useEffect, useReducer, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

//// about this modal
//// this currently works only on dashboard page. probably will break if used outside.

function ModalCreateLead({ modalVisible, onOutsideClick }) {
  //// const [modalState, modalDispatch] = useReducer(modalReducer, initialState);

  // function handleSendClick() {
  //   setModalPage("insurance-sign");
  //   alertService.success("Cotización enviada al correo electronico del Lead", {
  //     keepAfterRouteChange: true,
  //   });
  // }
  return (
    <div
      className={`layoutModal ${
        modalVisible ? "d-block modal-open p-0" : "d-none"
      }`}
    >
      <div className="modal-dialog">
        <OutsideClickHandler onOutsideClick={onOutsideClick}>
          <div className="modal-content">
            <h4 className="p-3">Formulario de Cotizacion</h4>

            <div className="modal-body">
              <LeadCreator onClickOutside={onOutsideClick} />
            </div>
            <div className="modal-footer"></div>
          </div>
        </OutsideClickHandler>
      </div>
    </div>
  );
}
export default ModalCreateLead;