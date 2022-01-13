import { useState, useEffect } from "react";

import { Link, NavLink } from ".";
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
      <ul className="sidebar-nav">
        <li>
          <Link href="/">
            <span>
              <Image
                src={iconFoco}
                alt=" "
                quality={100}
                layout="fixed"
                width="18"
                height="18"
              />
            </span>
            Cotizaciones Solicitadas
          </Link>
        </li>
        <li>
          <Link href="/">
            <span>
              <Image
                src={iconMano}
                alt=" "
                quality={100}
                layout="fixed"
                width="18"
                height="18"
              />
            </span>
            Documentos por Cargar
          </Link>
        </li>
        <li>
          <Link href="/">
            <span>
              <Image
                src={iconCasa}
                alt=" "
                quality={100}
                layout="fixed"
                width="18"
                height="18"
              />
            </span>
            Polizas emitidas
          </Link>
        </li>
        <li>
          <Link href="/">
            <span>
              <Image
                src={iconManos}
                alt=" "
                quality={100}
                layout="fixed"
                width="18"
                height="18"
              />
            </span>
            Cobranza pendiente
          </Link>
        </li>
        <li>
          <Link href="/">
            <span>
              <Image
                src={iconPorcentaje}
                alt=" "
                quality={100}
                layout="fixed"
                width="18"
                height="18"
              />
            </span>
            Indemnizaciones activas
          </Link>
        </li>
        <li>
          <Link href="#">
            <span>
              <Image
                src={iconLabel}
                alt=" "
                quality={100}
                layout="fixed"
                width="18"
                height="18"
              />
            </span>
            Documentos
          </Link>
        </li>
      </ul>
    </>
  );
}
export function BrokerSB() {
  return (
    <>
      <ul className="sidebar-nav">
        <li>
          <a href="#">
            <span>
              <Image
                src={iconFoco}
                alt=" "
                quality={100}
                layout="fixed"
                width="20"
                height="20"
              />
            </span>
            Oportunidad
          </a>
        </li>
        <li>
          <a href="#">
            <span>
              <Image
                src={iconMano}
                alt=" "
                quality={100}
                layout="fixed"
                width="20"
                height="20"
              />
            </span>
            Ver clientes
          </a>
        </li>
        <li>
          <a href="#">
            <span>
              <Image
                src={iconCasa}
                alt=" "
                quality={100}
                layout="fixed"
                width="20"
                height="20"
              />
            </span>
            Ver Reclamos
          </a>
        </li>
        <li>
          <a href="#">
            <span>
              <Image
                src={iconManos}
                alt=" "
                quality={100}
                layout="fixed"
                width="20"
                height="20"
              />
            </span>
            Seguimiento
          </a>
        </li>
        <li>
          <a href="#">
            <span>
              <Image
                src={iconPorcentaje}
                alt=" "
                quality={100}
                layout="fixed"
                width="20"
                height="20"
              />
            </span>
            Reportes
          </a>
        </li>
        <li>
          <a href="#">
            <span>
              <Image
                src={iconLabel}
                alt=" "
                quality={100}
                layout="fixed"
                width="20"
                height="20"
              />
            </span>
            Estadísticas
          </a>
        </li>
      </ul>
    </>
  );
}
export function InsuSB() {
  return (
    <>
      <div className="ul"></div>
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
          <ul>
            <li>
              <a href="#" onClick={logout}>
                <span>
                  <Image
                    src={iconSalir}
                    alt=" "
                    quality={100}
                    layout="fixed"
                    width="18"
                    height="18"
                  />
                </span>
                Cerrar Sesión
              </a>
            </li>
          </ul>
        </nav>
      </OutsideClickHandler>
    </aside>
  );
}
export { SideBar };
