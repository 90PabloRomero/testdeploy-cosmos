import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {useDispatch, useSelector} from "react-redux";

import { Layout } from "components/account";
import { userService, alertService } from "services";
import Head from "next/head";
import CircularProgress from "components/CircularProgress/index";
import heroImage from "public/login-clientes.png";
import Image from "next/image";
import { Link } from "components";

import {
  hideMessage,
  showAuthLoader,
  userSignIn,
} from "../../redux/actions/Auth";

const clientLogin = () => {
  const router = useRouter();
  const {loader, alertMessage, showMessage,authUser} = useSelector(({auth}) => auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (showMessage) {
      setTimeout(() => {
       dispatch(hideMessage());
      }, 100);
    }
    if(authUser !== null) {
      console.log(authUser.role);
      if(authUser.role === "client") {
        router.push("/clientes/panel");
      }
      else if (authUser.role === "broker") {
        router.push("/broker/panel");
      }
      else if (authUser.role === "insurer") {
        router.push("/aseguradoras/panel");
      }
    }
  }, [authUser]);

  // form validation rules
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = user => {
    dispatch(showAuthLoader());
    dispatch(userSignIn(user));
    // return userService
    //   .login(username, password)
    //   .then(() => {
    //     const returnUrl = "/clientes/panel";
    //     alertService.success("conexion exitosa");
    //     router.push(returnUrl);
    //   })
    //   .catch(alertService.error);
  }

  return (
    <Layout>
      <Head>
        <title>Atencion al Cliente Login: Proyecto Cosmos</title>
      </Head>
      <div className="container-fluid login-page">
        <div className="row h-100">
          <div className="col-12 col-sm-9" style={{backgroudSize: 'cover', backgroundPosition: 'left center' }}>
            <Image
              src={heroImage}
              alt="Acceso a Broker"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
          <div className="col-sm-3 login-side">
            <div className="login-wrapper text-center">
              <div className="w-100">
                <div className="login-logo-area">
                  <h2 className="mb-4" style={{fontWeight: '700', fontSize: '2.5rem'}}>MARCA BLANCA</h2>
                  <h5 className="text-center">Acceso clientes</h5>
                </div>
                <div className="mt-2 py-md-5">
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
                    <div className="invalid-feedback mt-n2 mb-2 text-left">
                      {errors.username?.message}
                    </div>
                    <input
                      type="password"
                      id="loginPassWord"
                      {...register("password")}
                      className={`form-control login-password ${
                        errors.password ? "is-invalid" : ""
                      }`}
                      placeholder="Contraseña"
                    />
                    <div className="invalid-feedback mt-n2 mb-2 text-left">
                      {errors.password?.message}
                    </div>
                    {/* <input
                      type="checkbox"
                      name="checkRememberCredentials"
                      id="checkRememberCredentials"
                    />
                    <span className="ml-2">Recordar Contraseña</span> */}
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
                  <Link href="/clientes/register">
                    <button className="btn btn-outline-primary btn-login">
                      CUENTA NUEVA
                    </button>
                  </Link>
                </div>
                <div>
                  <ul className="d-flex" style={{justifyContent: 'center', alignItems: 'center'}}>
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
                {loader ?
                  <div className="app-loader-view">
                    <CircularProgress/>
                  </div> : null}
              </div>
            </div>
          </div>
        </div>
        dddddddddddddddddddddddddd
      {showMessage ?
        alertService.error("conexion exitosa") : "null"}
      </div>
      
    </Layout>
  );
}
export default clientLogin;