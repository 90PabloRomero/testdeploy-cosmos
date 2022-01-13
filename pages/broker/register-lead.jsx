import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { Link } from "components";
import { Layout } from "components/account";
import { leadService, alertService } from "services";
import Head from "next/head";

export default Register;

function Register() {
  const router = useRouter();

  // form validation rules
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Por favor coloque su nombre completo.."),
    lastName: Yup.string().required("Por favor indique su/s apellido/s."),
    username: Yup.string().required("Se necesita un nombre de usuario."),
    password: Yup.string()
      .required("Cree una contraseña segura.")
      .min(6, "La contraseña necesita minimo 6 caracteres."),
    email: Yup.string().required(
      "Indique su correo electronico para ser notificado."
    ),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(user) {
    return leadService
      .register(user)
      .then(() => {
        alertService.success("Registro de lead exitoso", {
          keepAfterRouteChange: true,
        });
        router.push("login");
      })
      .catch(alertService.error);
  }

  return (
    <>
      <Head>
        <title>Registro de usuario tipo Lead - Broker - Proyecto Cosmos</title>
      </Head>
      <div>
        <div className="card">
          <h4 className="card-header">Registro usuario tipo Lead</h4>
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label>Nombre completo</label>
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
              <div className="form-group">
                <label>Nombre de usuario</label>
                <input
                  name="username"
                  type="text"
                  {...register("username")}
                  className={`form-control ${
                    errors.username ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.username?.message}
                </div>
              </div>
              <div className="form-group">
                <label>
                  Contraseña <small>(minimo 6 caracteres)</small>
                </label>
                <input
                  name="password"
                  type="password"
                  {...register("password")}
                  className={`form-control ${
                    errors.password ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.password?.message}
                </div>
              </div>
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
                <label>Telefono</label>
                <input
                  name="phone"
                  type="text"
                  {...register("phone")}
                  className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                />
                <div className="invalid-feedback">{errors.phone?.message}</div>
              </div>
              <div className="form-group">
                <label>País</label>
                <input
                  name="country"
                  type="text"
                  {...register("country")}
                  className={`form-control ${
                    errors.country ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.country?.message}
                </div>
              </div>
              <div className="form-group">
                <label>Fase de lead</label>
                <input
                  name="phase"
                  type="text"
                  {...register("phase")}
                  className={`form-control ${errors.phase ? "is-invalid" : ""}`}
                />
                <div className="invalid-feedback">{errors.phase?.message}</div>
              </div>

              <div className="form-group">
                <label>Estado de lead</label>
                <input
                  name="status"
                  type="text"
                  {...register("status")}
                  className={`form-control ${
                    errors.status ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">{errors.status?.message}</div>
              </div>

              <div className="form-group">
                <label>Acciones disponibles</label>
                <div className="d-flex">
                  <input
                    name="quote"
                    type="checkbox"
                    {...register("quote")}
                    className={`${errors.status ? "is-invalid" : ""}`}
                  />
                  <span>Cotizar</span>
                </div>
                <div className="d-flex">
                  <input
                    name="validate"
                    type="checkbox"
                    {...register("validate")}
                    className={`${errors.status ? "is-invalid" : ""}`}
                  />
                  <span>Validar</span>
                </div>
                <div className="d-flex">
                  <input
                    name="follow"
                    type="checkbox"
                    {...register("follow")}
                    className={`${errors.status ? "is-invalid" : ""}`}
                  />
                  <span>Seguimiento</span>

                  <div className="invalid-feedback">
                    {errors.status?.message}
                  </div>
                </div>
              </div>
              <button
                disabled={formState.isSubmitting}
                className="btn btn-primary"
              >
                {formState.isSubmitting && (
                  <span className="spinner-border spinner-border-sm mr-1"></span>
                )}
                Register
              </button>
              <Link href="/" className="btn btn-link">
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
