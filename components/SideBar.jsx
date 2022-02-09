import { useState, useEffect } from "react";

import { Link } from ".";
import { userService } from "../services";
import Image from "next/image";

import iconFoco from "./../public/icono-foco.png";
import iconMano from "./../public/mano.png";
import iconCasa from "./../public/casa.png";
import iconManos from "./../public/manos.png";
import iconPorcentaje from "./../public/porcentaje.png";
import iconLabel from "./../public/label.png";
import iconSalir from "./../public/salir.png";

import OutsideClickHandler from "react-outside-click-handler";

import { useRouter } from "next/router";

export function ClientSB() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscription = userService.user.subscribe((x) => setUser(x));
    return () => subscription.unsubscribe();
  }, []);

  function logout() {
    userService.logout();
  }
  return (
    <>
      <ul className="txt-center sidebar-client sidebar-nav">
        <li>
          <Link href="/">
            <div className="txt-center">
              <Image
                src={iconFoco}
                alt=" "
                quality={100}
                layout="fixed"
                width="25"
                height="25"
              />
            </div>
            <p className="p-side"> Cotizaciones Solicitadas</p>
          </Link>
        </li>
        <li>
          <Link href="/">
            <div>
              <Image
                src={iconMano}
                alt=" "
                quality={100}
                layout="fixed"
                width="25"
                height="25"
              />
            </div>
            <p className="p-side"> Documentos por Cargar</p>
          </Link>
        </li>
        <li>
          <Link href="/">
            <div className="txt-center">
              <Image
                src={iconCasa}
                alt=" "
                quality={100}
                layout="fixed"
                width="25"
                height="25"
              />
            </div>
            <p className="p-side"> Polizas emitidas</p>
          </Link>
        </li>
        <li>
          <Link href="/">
            <div>
              <Image
                src={iconManos}
                alt=" "
                quality={100}
                layout="fixed"
                width="25"
                height="25"
              />
            </div>
            <p className="p-side"> Cobranza pendiente</p>
          </Link>
        </li>
        <li>
          <Link href="/">
            <div className="txt-center">
              <Image
                src={iconPorcentaje}
                alt=" "
                quality={100}
                layout="fixed"
                width="25"
                height="25"
              />
            </div>
            <p className="p-side">Indemnizaciones activas</p>
          </Link>
        </li>
        <li>
          <Link href="#">
            <div className="txt-center">
              <Image
                src={iconLabel}
                alt=" "
                quality={100}
                layout="fixed"
                width="25"
                height="25"
              />
            </div>
            <p className="p-side"> Documentos</p>
          </Link>
        </li>
        <li>
          <a href="#" onClick={logout}>
            <div className="txt-center">
              <Image
                src={iconSalir}
                alt=" "
                quality={100}
                layout="fixed"
                width="25"
                height="25"
              />
            </div>
            Cerrar Sesión
          </a>
        </li>
      </ul>
    </>
  );
}
export function BrokerSB() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscription = userService.user.subscribe((x) => setUser(x));
    return () => subscription.unsubscribe();
  }, []);

  function logout() {
    userService.logout();
  }
  return (
    <>
      <ul className=" txt-center  sidebar-broker sidebar-nav">
      <li>
          <Link href="/">
            <div className="txt-center">
              <Image
                src={iconFoco}
                alt=" "
                quality={100}
                layout="fixed"
                width="25"
                height="25"
              />
            </div>
            <p className="p-side"> Oportunidad</p>
          </Link>
        </li>
        <li>
          <Link href="/">
            <div>
              <Image
                src={iconMano}
                alt=" "
                quality={100}
                layout="fixed"
                width="25"
                height="25"
              />
            </div>
            <p className="p-side"> Visualizar clientes</p>
          </Link>
        </li>
        <li>
          <Link href="/">
            <div className="txt-center">
              <Image
                src={iconCasa}
                alt=" "
                quality={100}
                layout="fixed"
                width="25"
                height="25"
              />
            </div>
            <p className="p-side"> Ver Reclamos</p>
          </Link>
        </li>
        <li>
          <Link href="/">
            <div>
              <Image
                src={iconManos}
                alt=" "
                quality={100}
                layout="fixed"
                width="25"
                height="25"
              />
            </div>
            <p className="p-side">Seguimiento</p>
          </Link>
        </li>
        <li>
          <Link href="/">
            <div className="txt-center">
              <Image
                src={iconPorcentaje}
                alt=" "
                quality={100}
                layout="fixed"
                width="25"
                height="25"
              />
            </div>
            <p className="p-side">Reportes</p>
          </Link>
        </li>
        <li>
          <Link href="#">
            <div className="txt-center">
              <Image
                src={iconLabel}
                alt=" "
                quality={100}
                layout="fixed"
                width="25"
                height="25"
              />
            </div>
            <p className="p-side"> Estadísticas</p>
          </Link>
        </li>
        <li>
          <a href="#" onClick={logout}>
            <div className="txt-center">
              <Image
                src={iconSalir}
                alt=" "
                quality={100}
                layout="fixed"
                width="25"
                height="25"
              />
            </div>
            Cerrar Sesión
          </a>
        </li>
      </ul>
    </>
  );
}
export function InsuSB() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscription = userService.user.subscribe((x) => setUser(x));
    return () => subscription.unsubscribe();
  }, []);

  function logout() {
    userService.logout();
  }
  return (
    <>
      <ul className="sidebar-nav txt-center  sidebar-insurance">
        <li>
          <a href="#">
            <div>
              <Image
                src={iconFoco}
                alt=" "
                quality={100}
                layout="fixed"
                width="25"
                height="25"
              />
            </div>
            Oportunidad
          </a>
        </li>
        <li>
          <a href="#">
            <div>
              <Image
                src={iconMano}
                alt=" "
                quality={100}
                layout="fixed"
                width="25"
                height="25"
              />
            </div>
            Ver clientes
          </a>
        </li>
        <li>
          <a href="#">
            <div>
              <Image
                src={iconCasa}
                alt=" "
                quality={100}
                layout="fixed"
                width="25"
                height="25"
              />
            </div>
            Ver Reclamos
          </a>
        </li>
        <li>
          <a href="#">
            <div>
              <Image
                src={iconManos}
                alt=" "
                quality={100}
                layout="fixed"
                width="25"
                height="25"
              />
            </div>
            Seguimiento
          </a>
        </li>
        <li>
          <a href="#">
            <div>
              <Image
                src={iconPorcentaje}
                alt=" "
                quality={100}
                layout="fixed"
                width="25"
                height="25"
              />
            </div>
            Reportes
          </a>
        </li>
        <li>
          <a href="#">
            <div>
              <Image
                src={iconLabel}
                alt=" "
                quality={100}
                layout="fixed"
                width="25"
                height="25"
              />
            </div>
            Estadísticas
          </a>
        </li>
        <li>
          <a href="#" onClick={logout}>
            <div>
              <Image
                src={iconSalir}
                alt=" "
                quality={100}
                layout="fixed"
                width="25"
                height="25"
              />
            </div>
            Cerrar Sesión
          </a>
        </li>
      </ul>
    </>
  );
}

function SideBar({ sideBarVisible, onOutsideClick }) {
  const router = useRouter();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscription = userService.user.subscribe((x) => setUser(x));
    return () => subscription.unsubscribe();
  }, []);

  function logout() {
    userService.logout();
  }

  // only show when logged in
  if (!user) return null;

  return (
    <aside className={` sidebar-area  d-print-none`}>
      <OutsideClickHandler onOutsideClick={onOutsideClick}>
        <nav>
          {router.route === "/clientes/panel" ? (
            <ClientSB />
          ) : router.route === "/broker/panel" ? (
            <BrokerSB />
          ) : router.route === "/aseguradoras/panel" ? (
            <InsuSB />
          ) : null}
        </nav>
      </OutsideClickHandler>
    </aside>
  );
}
export { SideBar };
