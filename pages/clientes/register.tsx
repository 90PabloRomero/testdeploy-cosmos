import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { Layout } from "components/account";
import { userService, alertService } from "services";
import Head from "next/head";

import heroImage from "public/login-clientes.png";
import Image from "next/image";
import { Link } from "components";

export default Register;

function Register() {
  const router = useRouter();

  // form validation rules
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Nombre requerido"),
    lastName: Yup.string().required("Apellido requerido"),
    username: Yup.string().required("Se requiere un nombre de usuario"),
    password: Yup.string()
      .required("Se requiere contraseña")
      .min(6, "La contraseña debe tener al menos 6 caracteres"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(user) {
    return userService
      .register(user)
      .then(() => {
        alertService.success("Registro exitoso", {
          keepAfterRouteChange: true,
        });
        router.push("login");
      })
      .catch(alertService.error);
  }

  return (
    <Layout>
      <Head>
        <title>Atencion al Cliente Registro: Proyecto Cosmos</title>
      </Head>
      <div className="container-fluid login-page">
        <div className="row h-100">
          <div className="col-12 col-sm-9">
            <Image
              src={heroImage}
              alt="Acceso a Broker"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
          <div className="col-sm-3 login-side">
            <div className="login-logo-area">
              <h3 className="mb-4">MARCA BLANCA</h3>
              <h6 className="text-center">registro de usuarios</h6>
            </div>
            <div className="mt-5 py-md-5">
              {/* <small> usuario broker: admin clave: 123456</small> */}
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <label>Nombre/s</label>
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
                  <label>Apellido/s</label>
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
                  <label>Contraseña</label>
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
                <button
                  disabled={formState.isSubmitting}
                  className="btn btn-primary"
                >
                  {formState.isSubmitting && (
                    <span className="spinner-border spinner-border-sm mr-1"></span>
                  )}
                  Register
                </button>
                <Link href="/clientes/login" className="btn btn-link">
                  Cancel
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
