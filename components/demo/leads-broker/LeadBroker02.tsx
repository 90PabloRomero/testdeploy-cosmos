import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import React, { useState } from "react";
import { Link } from "components";
import { leadService, alertService } from "services";
import Head from "next/head";
import { Tabs, Tab, CloseButton } from "react-bootstrap";

export default LeadCreator2;

function LeadCreator2({ onClickOutside, modalPanel2ShowHandler }) {
  const router = useRouter();

  // form validation rules
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Por favor coloque su/s nombre/s"),
    lastName: Yup.string().required("Por favor indique su/s apellido/s."),
    age: Yup.string()
      .required("Indique su edad.")
      .min(2, "No puede tener menos de 10 años."),
    email: Yup.string().required(
      "Indique su correo electronico para ser notificado."
    ),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  // function handleClickOutside() {
  //   onClickOutside;
  // }
  function onSubmit(lead) {
    return leadService
      .register(lead)
      .then(() => {
        alertService.success("Registro de lead exitoso", {
          keepAfterRouteChange: true,
        });
        onClickOutside;
        router.push("/clientes/panel");
      })
      .catch(alertService.error);
  }

  return (
    <>
      <div
        className={`layoutModal ${
          modalPanel2ShowHandler ? "d-block modal-open" : "d-none"
        }`}
      >
        <div className="modal-dialog bg-white">
          <div className="modal-content">
            <Tabs
              defaultActiveKey="Datos"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="Datos" title="Datos">
                <div>
                  <div className=" modal-lead-titular">
                    Comercial- <span>Nueva Cotización a Revisar</span>
                  </div>
                  <div className="">Producto</div>
                  <form onSubmit={handleSubmit(onSubmit)}> </form>
                  <div className="modal-body my-2">
                    <div className="d-flex justify-content-around ">
                      {" "}
                      <div className="form-group ">
                        <select name="productos" className="select-product">
                          <option selected value="0">
                            {" "}
                            selecciona un producto{" "}
                          </option>
                          <optgroup label="VUMI">
                            <option value="1">VUMI opcion 1</option>
                            <option value="2">VUMI opción 2</option>
                            <option value="3">VUMI opcion 3</option>
                          </optgroup>
                          <optgroup label="MAPFRE">
                            <option value="10">MAPFRE opcion 3</option>
                            <option value="11">MAPFRE opcion 3</option>
                            <option value="12">MAPFRE opcion 3</option>
                          </optgroup>
                        </select>

                        <div className="form-group">
                          <input
                            name="asesoria"
                            type="checkbox"
                            {...register("asesoria")}
                          />
                          <label>No sé todavia, necesito asesoria</label>
                          <div className="invalid-feedback">
                            {errors.plus?.message}
                          </div>
                        </div>

                        <div className="invalid-feedback">
                          {errors.age?.message}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">Datos del solicitante</div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="modal-body my-2">
                      <div className="d-flex justify-content-around ">
                        <div className="form-group ">
                          <label>Nombre </label>
                          <input
                            name="firstName"
                            type="text"
                            {...register("firstName")}
                            className={`form-control ${
                              errors.firstName ? "is-invalid" : ""
                            }`}
                          />
                          <div className="invalid-feedback">
                            {errors.firstName?.message}
                          </div>
                        </div>
                        <div className="form-group">
                          <label>Apellido</label>
                          <input
                            name="lastName"
                            type="text"
                            {...register("lastName")}
                            className={`form-control ${
                              errors.lastName ? "is-invalid" : ""
                            }`}
                          />
                          <div className="invalid-feedback">
                            {errors.lastName?.message}
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-around">
                        <div className="form-group">
                          <label>Correo electronico</label>
                          <input
                            name="email"
                            type="text"
                            {...register("email")}
                            className={`form-control ${
                              errors.email ? "is-invalid" : ""
                            }`}
                          />
                          <div className="invalid-feedback">
                            {errors.email?.message}
                          </div>
                        </div>
                        <div className="form-group">
                          <label>Numero Telefónico</label>
                          <input
                            name="number"
                            type="text"
                            {...register("age")}
                            className={`form-control ${
                              errors.number ? "is-invalid" : ""
                            }`}
                          />
                          <div className="invalid-feedback">
                            {errors.number?.message}
                          </div>
                        </div>{" "}
                      </div>
                      <div className="d-flex justify-content-around">
                        <div className="form-group">
                          <label>Fecha de Nacimiento</label>
                          <input
                            name="datebirth"
                            type="text"
                            {...register("date-birth")}
                            className={`form-control ${
                              errors.datebirth ? "is-invalid" : ""
                            }`}
                          />

                          <div className="invalid-feedback">
                            {errors.datebirth?.message}
                          </div>
                        </div>
                      </div>
                    </div>
                    {}
                    <div>Datos de los familiares</div>
                    <div className="modal-body my-2">
                      <div className="d-flex justify-content-around">
                        <div className="form-group">
                          <label>fecha de nacimiento del conyuge</label>
                          <input
                            name="conguyeage"
                            type="text"
                            {...register("conguyeage")}
                            className={`form-control ${
                              errors.conguyeage ? "is-invalid" : ""
                            }`}
                          />
                          <div className="invalid-feedback">
                            {errors.conguyeage?.message}
                          </div>
                        </div>
                        <div className="form-group">
                          <label>Numero de hijos</label>
                          <input
                            name="numberOfKids"
                            type="text"
                            {...register("numberOfKids")}
                            className={`form-control ${
                              errors.numberOfKids ? "is-invalid" : ""
                            }`}
                          />
                          <div className="invalid-feedback">
                            {errors.numberOfKids?.message}
                          </div>
                        </div>
                      </div>
                    </div>
                    {}
                    <div>Anexos</div>
                    <div className="modal-body my-2">
                      <div className="d-flex justify-content-around">
                        <div className="form-group">
                          <label>Transplante de Organos?</label>
                          <input
                            name="organs"
                            type="checkbox"
                            {...register("organs")}
                            className={`form-control ${
                              errors.organs ? "is-invalid" : ""
                            }`}
                          />
                          <div className="invalid-feedback">
                            {errors.organs?.message}
                          </div>
                        </div>
                        <div className="form-group">
                          <label>Cobertura Plus?</label>
                          <input
                            name="plus"
                            type="checkbox"
                            {...register("plus")}
                            className={`form-control ${
                              errors.plus ? "is-invalid" : ""
                            }`}
                          />
                          <div className="invalid-feedback">
                            {errors.plus?.message}
                          </div>
                        </div>
                      </div>
                    </div>
                    {}
                    <div>Aseguradoras para solicitar cotización</div>
                    <div className="modal-body my-2">
                      <div className="d-flex justify-content-around">
                        <div className="form-group">
                          <label>Vumi</label>
                          <input
                            name="organs"
                            type="checkbox"
                            {...register("organs")}
                            className={`form-control ${
                              errors.organs ? "is-invalid" : ""
                            }`}
                          />
                          <div className="invalid-feedback">
                            {errors.organs?.message}
                          </div>
                        </div>
                        <div className="form-group">
                          <label>saludsa</label>
                          <input
                            name="plus"
                            type="checkbox"
                            {...register("plus")}
                            className={`form-control ${
                              errors.plus ? "is-invalid" : ""
                            }`}
                          />
                          <div className="invalid-feedback">
                            {errors.plus?.message}
                          </div>
                        </div>
                        <div className="form-group">
                          <label>Confiamed</label>
                          <input
                            name="plus"
                            type="checkbox"
                            {...register("plus")}
                            className={`form-control ${
                              errors.plus ? "is-invalid" : ""
                            }`}
                          />
                          <div className="invalid-feedback">
                            {errors.plus?.message}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button
                        disabled={formState.isSubmitting}
                        className="btn btn-primary"
                      >
                        {formState.isSubmitting && (
                          <span className="spinner-border spinner-border-sm mr-1"></span>
                        )}
                        ENVIAR FORMULARIO
                      </button>
                      <button
                        disabled={formState.isSubmitting}
                        className="btn btn-primary ml-10"
                      >
                        {formState.isSubmitting && (
                          <span className="spinner-border spinner-border-sm mr-1 "></span>
                        )}
                        DEJAR PENDIENTE
                      </button>
                      <br></br>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button onClick={onClickOutside} className="btn btn-link">
                        cerrar
                      </button>
                    </div>
                  </form>
                </div>
              </Tab>
              <Tab eventKey="Notas" title="Notas">
                <div>
                  <div className="modal-body my-2">
                    <div className="d-flex justify-content-around ">
                      <div className="form-group ">
                        <label>Notas</label>
                        <input
                          size={70}
                          type="text"
                          className={`form-control  notes-area`}
                        />
                      </div>
                    </div>
                    <div className="txt-align-end">
                      <button
                        disabled={formState.isSubmitting}
                        className="btn btn-primary"
                      >
                        {formState.isSubmitting && (
                          <span className="spinner-border spinner-border-sm mr-1 justify-content-end"></span>
                        )}
                        AGREGAR NOTA
                      </button>
                    </div>
                  </div>
                  {}
                  <div>Notas ingresadas</div>

                  <div className="d-flex">
                    <div className="notes-n">
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Atque voluptas error in ipsam voluptatum ex eum.
                        Perferendis eaque nisi, a cupiditate natus eveniet
                        exercitationem, nostrum necessitatibus voluptatem
                        voluptate hic. Vitae.
                      </p>
                      <div className="note-footer">
                        alberto cajas - 10/01/2022 - 10:55
                      </div>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="notes-n">
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Atque voluptas error in ipsam voluptatum ex eum.
                        Perferendis eaque nisi, a cupiditate natus eveniet
                        exercitationem, nostrum necessitatibus voluptatem
                        voluptate hic. Vitae.
                      </p>
                      <div className="note-footer">
                        alberto cajas - 10/01/2022 - 10:55
                      </div>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="notes-n">
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Atque voluptas error in ipsam voluptatum ex eum.
                        Perferendis eaque nisi, a cupiditate natus eveniet
                        exercitationem, nostrum necessitatibus voluptatem
                        voluptate hic. Vitae.
                      </p>
                      <div className="note-footer">
                        alberto cajas - 10/01/2022 - 10:55
                      </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-center">
                    <button
                      disabled={formState.isSubmitting}
                      className="btn btn-primary"
                    >
                      {formState.isSubmitting && (
                        <span className="spinner-border spinner-border-sm mr-1"></span>
                      )}
                      ENVIAR FORMULARIO
                    </button>
                    <button onClick={onClickOutside} className="btn btn-link">
                      cerrar
                    </button>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="Archivos " title="Archivos ">
                <div className="">Archivo Adjunto</div>
                <div className="modal-body my-2">
                  <div className="d-flex justify-content-around ">
                    <div className="form-group ">
                      <input
                        type="button"
                        value="Seleccionar archivo"
                        className="archive-select"
                      />
                      <select
                        name="productos"
                        className="select-product archive-select"
                      >
                        <option selected value="0">
                          {" "}
                          Tipo de Archivo{" "}
                        </option>

                        <option value="1">Cedula</option>
                        <option value="2">Papeleta de votacion</option>
                        <option value="3">Informe de Inspección</option>
                      </select>
                      <button
                        disabled={formState.isSubmitting}
                        className="btn btn-primary left archive-select"
                      >
                        {formState.isSubmitting && (
                          <span className="spinner-border spinner-border-sm mr-1 justify-content-end"></span>
                        )}
                        AGREGAR ARCHIVO
                      </button>
                    </div>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="notes-n">
                    <h4>Copia de Cedula</h4>
                    <div className="archive-description">
                      copiadecedula132313213.PDF
                    </div>

                    <div className="note-footer">
                      alberto cajas - 10/01/2022 - 10:55
                    </div>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="notes-n">
                    <h4>Copia de Cedula</h4>
                    <div className="archive-description">
                      copiadecedula132313213.PDF
                    </div>

                    <div className="note-footer">
                      alberto cajas - 10/01/2022 - 10:55
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="Seguimiento " title="Seguimientos ">
                <div className="">Registro de Actividad con el Cliente</div>
                <div className="modal-body my-2">
                  <div className="d-flex ">
                    <div className="form-group ">
                      <select
                        name="productos"
                        className="select-product archive-select"
                      >
                        <option selected value="0">
                          {" "}
                          Tipo de Actividad{" "}
                        </option>

                        <option value="1">Visita</option>
                        <option value="2">Llamada</option>
                        <option value="3">Correo</option>
                      </select>
                    </div>
                    <div className="form-group ">
                      <input
                        name="Dateseg"
                        type="text"
                        placeholder="Fecha de Referencia"
                        className={`form-control `}
                      />
                    </div>
                    <div className="txt-align-end">
                      <div className="form-group ">
                        <input
                          name="Result"
                          type="text"
                          placeholder="Resultado"
                          className={`form-control `}
                        />
                      </div>
                    </div>
                  </div>
                  <div className=" w-100">
                    <input
                      name="Description"
                      type="text"
                      placeholder="Descripción"
                      className={`form-control w-100 `}
                    />
                  </div>

                  <div className="txt-align-end">
                    <button
                      disabled={formState.isSubmitting}
                      className="btn btn-primary"
                    >
                      {formState.isSubmitting && (
                        <span className="spinner-border spinner-border-sm mr-1 justify-content-end"></span>
                      )}
                      AGREGAR NOTA
                    </button>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="notes-n">
                    <h4>Llamada</h4>
                    <div className="archive-description">
                      copiadecedula132313213.PDF
                    </div>

                    <div className="note-footer">
                      alberto cajas - 10/01/2022 - 10:55
                    </div>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="notes-n">
                    <h4>Visita</h4>

                    <div className="archive-description">
                      copiadecedula132313213.PDF
                    </div>

                    <div className="note-footer">
                      alberto cajas - 10/01/2022 - 10:55
                    </div>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}
