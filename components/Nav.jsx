import { useState } from "react";

import { useRouter } from "next/router";
import { Link } from "components";

export { Nav };

function Nav() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const subscription = userService.user.subscribe((x) => setUser(x));
  //   return () => subscription.unsubscribe();
  // }, []);

  // // only show nav when logged in
  // if (!user) return null;

  return (
    <header className=" d-print-none">
      <div className="logo-area">
        <div className="logo">
          <Link href="/">MARCA BLANCA</Link>
        </div>
        <h6 className="">
          {router.route === "/clientes/panel"
            ? "Sistema de Servicio al Cliente"
            : router.route === "/"
            ? "Sistema de Operación del Bróker"
            : "Sistema de Aseguradoras"}
        </h6>
      </div>

      {router.route === "/" ? (
        ""
      ) : router.route === "/clientes/panel" ? (
        ""
      ) : (
        <>
          <nav className="nav-area">
            <ul className="header-nav ">
              <li>
                <a href="" className="active">
                  Comercial
                </a>
              </li>
              <li>
                <a href="">Emisión</a>
              </li>
              <li>
                <a href="">Cobranzas</a>
              </li>
              <li>
                <a href="">Polizas Activas</a>
              </li>
              <li>
                <a href="">Indemnización</a>
              </li>
            </ul>
          </nav>
        </>
      )}
    </header>
  );
}
