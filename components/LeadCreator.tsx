import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { Link } from "components";
import { leadService, alertService } from "services";
import Head from "next/head";

export default LeadCreator;

function LeadCreator({ onClickOutside }) {
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
      <div>
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
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                />
                <div className="invalid-feedback">{errors.email?.message}</div>
              </div>
              <div className="form-group">
                <label>Edad</label>
                <input
                  name="age"
                  type="text"
                  {...register("age")}
                  className={`form-control ${errors.age ? "is-invalid" : ""}`}
                />
                <div className="invalid-feedback">{errors.age?.message}</div>
              </div>
            </div>
          </div>
          {/*  */}
          <div>Datos de los familiares</div>
          <div className="modal-body my-2">
            <div className="d-flex justify-content-around">
              <div className="form-group">
                <label>Edad del conyuge</label>
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
          {/*  */}
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
                <div className="invalid-feedback">{errors.organs?.message}</div>
              </div>
              <div className="form-group">
                <label>Cobertura Plus?</label>
                <input
                  name="plus"
                  type="checkbox"
                  {...register("plus")}
                  className={`form-control ${errors.plus ? "is-invalid" : ""}`}
                />
                <div className="invalid-feedback">{errors.plus?.message}</div>
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
              CANCELAR
            </button>
          </div>
        </form>
      </div>
    </>
  );
}