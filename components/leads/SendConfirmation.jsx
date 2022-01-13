import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { Link } from "components";
import { leadService, alertService } from "services";
import { useEffect, useState } from "react";

export { SendConfirmation };

function SendConfirmation(props) {
  const [leads, setLeads] = useState(null);

  useEffect(() => {
    leadService.getAll().then((x) => setLeads(x));
  }, []);
  const lead = props?.lead;
  const isAddMode = !lead;
  const router = useRouter();

  // form validation rules
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    age: Yup.string().required("Por favor indique su edad"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // set default form values if in edit mode
  if (!isAddMode) {
    formOptions.defaultValues = props.lead;
  }

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState, setValue } =
    useForm(formOptions);
  const { errors } = formState;

  function onSubmit(data) {
    return isAddMode ? createLead(data) : updateLead(lead.id, data);
  }

  function createLead(data) {
    return leadService
      .register(data)
      .then(() => {
        alertService.success("User(lead) added", {
          keepAfterRouteChange: true,
        });
        router.push("/clientes/panel");
      })
      .catch(alertService.error);
  }

  function updateLead(id, data) {
    return leadService
      .update(id, data)
      .then(() => {
        alertService.success("User(lead) updated", {
          keepAfterRouteChange: true,
        });
        router.push("/clientes/panel");
      })
      .catch(alertService.error);
  }
  function deleteLead(id) {
    setLeads(
      leads.map((x) => {
        if (x.id === id) {
          x.isDeleting = true;
        }
        return x;
      })
    );
    leadService.delete(id).then(() => {
      setLeads((leads) => leads.filter((x) => x.id !== id));
      router.push("/clientes/panel");
    });
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {props.lead.phase >= 1.4 ? (
        <>
          <div>
            <h2>Informe de Cotizacion</h2>
            <div className="d-flex">
              <table className="Table_Data mx-auto my-5">
                <thead>
                  <tr>
                    <th>Caracteristica</th>
                    <th>Aplicable</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Deducible</td>
                    <td>$5000</td>
                  </tr>
                  <tr>
                    <td>Maternidad</td>
                    <td>Hasta 50.00</td>
                  </tr>
                  <tr>
                    <td>Red Hospitalaria</td>
                    <td>100%</td>
                  </tr>
                  <tr>
                    <td>Maternidad</td>
                    <td>Hasta 50.00</td>
                  </tr>
                  <tr>
                    <td>Red Hospitalaria</td>
                    <td>100%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="d-flex ">
              <div className="text-center mb-5 btn btn-primary mx-auto">
                <Link href="/version-print">
                  Ver / Descargar / Imprimir Cotizacion en PDF
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="form-row">
            <div className="form-group col">
              <label>First Name</label>
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
            <div className="form-group col">
              <label>Last Name</label>
              <input
                name="lastName"
                type="text"
                {...register("lastName")}
                className={`form-control ${
                  errors.lastName ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">{errors.lastName?.message}</div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col">
              <label>Correo electronico</label>
              <input
                name="email"
                type="text"
                {...register("email")}
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
              />
              <div className="invalid-feedback">{errors.email?.message}</div>
            </div>
            <div className="form-group col">
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
          <div className="form-row">
            <div className="form-group col">
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
            <div className="form-group col">
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
          <div className="h3">Anexos</div>
          <div className="form-row">
            <div className="form-group col">
              <label>Transplante de Organos?</label>
              <input
                name="organs"
                type="checkbox"
                {...register("organs")}
                className={`form-control ${errors.organs ? "is-invalid" : ""}`}
              />
              <div className="invalid-feedback">{errors.organs?.message}</div>
            </div>
            <div className="form-group col">
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
        </>
      )}

      <div className="form-group text-center">
        {/* {props.lead.phase >= 1.4 ? "funciono" : "no funciono"} */}
        <button
          type="submit"
          disabled={formState.isSubmitting}
          className="btn btn-primary mr-2"
          onClick={
            props.lead.phase >= 1.4
              ? (() => setValue("phase", "2"),
                () => setValue("phaseEmision", true))
              : () => setValue("phase", "1.2")
          }
        >
          {formState.isSubmitting && (
            <span className="spinner-border spinner-border-sm mr-1"></span>
          )}
          {props.lead.phase >= 1.4
            ? "APROBAR SOLICITUD"
            : "ENVIAR SOLICITUD A COTIZAR"}
        </button>
        {props.lead.phase >= 1.4 ? (
          <button
            type="submit"
            disabled={formState.isSubmitting}
            className="btn btn-primary mr-2"
            onClick={() => setValue("phase", "1.5")}
          >
            {formState.isSubmitting && (
              <span className="spinner-border spinner-border-sm mr-1"></span>
            )}
            NECESITO ASESORIA
          </button>
        ) : (
          ""
        )}
        <button
          onClick={() => deleteLead(lead.id)}
          type="button"
          disabled={formState.isSubmitting}
          className="btn btn-primary mr-2"
        >
          Descartar Solicitud
        </button>
        <Link href="/clientes/panel">
          <button className="btn btn-primary"> VOLVER</button>
        </Link>
      </div>
    </form>
  );
}
