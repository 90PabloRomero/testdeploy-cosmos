import { useState, useEffect } from "react";

import { NavLink } from ".";
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

export { SideBar };

function SideBar({ sideBarVisible, onOutsideClick }) {
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
                Renovaciones
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
                Convenios
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
                Venta directa
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
                Label
              </a>
            </li>
            <li>
              <a href="#">
                <span>
                  <Image
                    src={iconSalir}
                    alt=" "
                    quality={100}
                    layout="fixed"
                    width="20"
                    height="20"
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
