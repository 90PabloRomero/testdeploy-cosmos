import LeadCreator from "components/LeadCreator";
import Link from "next/link";
import { useEffect, useReducer, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

function ModalCreateLead({ modalVisible, onOutsideClick }) {
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
