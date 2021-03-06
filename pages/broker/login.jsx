import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { Layout } from "components/account";
import { userService, alertService } from "services";
import Head from "next/head";

import heroImage from "public/fondo-login.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default Login;

function Login() {
  const router = useRouter();

  useEffect(() => {
    // redirect to home if already logged in
    if (userService.userValue) {
      router.push("/broker/panel");
    }
  }, []);

  // form validation rules
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit({ username, password }) {
    return userService
      .login(username, password)
      .then(() => {
        // get return url from query parameters or default to '/'
        const returnUrl = router.query.returnUrl || "/broker/panel";
        router.push(returnUrl);
      })
      .catch(alertService.error);
  }

  return (
    <Layout>
      <Head>
        <title>Acceso Login: Proyecto Cosmos</title>
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
              <h6 className="text-center">Acceso Broker</h6>
            </div>
            <div className="mt-5 py-md-5">
              {/* <small> usuario broker: admin clave: 123456</small> */}
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="text"
                  id="loginUserName"
                  placeholder="Nombre de usuario"
                  {...register("username")}
                  className={`form-control login-username ${
                    errors.username ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback mt-n2 mb-2">
                  {errors.username?.message}
                </div>
                <input
                  type="password"
                  id="loginPassWord"
                  {...register("password")}
                  className={`form-control login-password ${
                    errors.password ? "is-invalid" : ""
                  }`}
                  placeholder="Contrase??a"
                />
                <div className="invalid-feedback mt-n2 mb-2">
                  {errors.password?.message}
                </div>
                {/* <input
                  type="checkbox"
                  name="checkRememberCredentials"
                  id="checkRememberCredentials"
                />
                <span className="ml-2">Recordar Contrase??a</span> */}
                <button
                  disabled={formState.isSubmitting}
                  className="btn btn-primary btn-login"
                >
                  {formState.isSubmitting && (
                    <span className="spinner-border spinner-border-sm mr-1"></span>
                  )}
                  INGRESAR
                </button>
              </form>
              <div className="mt-3">
                <ul className="d-flex">
                  <li>
                    <Link href="/clientes/login">Clientes</Link>
                  </li>
                  <li className="mx-2">
                    <Link href="/broker/login">Broker</Link>
                  </li>
                  <li>
                    <Link href="/aseguradoras/login">Aseguradora</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
