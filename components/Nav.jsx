import { useState } from "react";
import { CurrencyDollarIcon, CollectionIcon } from "@heroicons/react/solid";
import { DocumentTextIcon } from "@heroicons/react/solid";
import { CashIcon } from "@heroicons/react/solid";
import { BadgeCheckIcon } from "@heroicons/react/solid";
import { ReceiptTaxIcon } from "@heroicons/react/solid";

import { useRouter } from "next/router";
import { Link } from "components";

export { Nav };

function Nav() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  return (
    <header className=" d-print-none">
      <div className="logo-area">
        <div className="logo">
          <Link
            href={
              router.route === "/clientes/panel"
                ? "/clientes/panel"
                : router.route === "/broker/panel"
                ? "/broker/panel"
                : router.route === "/aseguradoras/panel"
                ? "/aseguradoras/panel"
                : "/"
            }
          >
            MARCA BLANCA
          </Link>
        </div>
        <h6 className="">
          {router.route === "/clientes/panel"
            ? "Servicio al Cliente. Bienvenido"
            : router.route === "/broker/panel"
            ? "Sistema de Operación del Bróker. Bienvenido"
            : router.route === "/aseguradoras/panel"
            ? "Sistema de Operación de Aseguradoras. Bienvenido"
            : " "}
        </h6>
      </div>

      {router.route === "/" ? (
        ""
      ) : router.route === "/clientes/panel" ? (
        <>
          <nav className="nav-area">
            <ul className="header-nav ">
              <li>
                <li>
                  <a href="" className="active">
                    Todo
                    <CollectionIcon className="link-icon" />
                  </a>
                </li>
                <a href="">
                  Comercial
                  <CurrencyDollarIcon className="link-icon" />
                </a>
              </li>
              <li>
                <a href="">
                  Emisión <DocumentTextIcon className="link-icon" />
                </a>
              </li>
              <li>
                <a href="">
                  Cobranzas <CashIcon className="link-icon" />
                </a>
              </li>
              <li>
                <a href="">
                  Polizas Activas <BadgeCheckIcon className="link-icon" />
                </a>
              </li>
              <li>
                <a href="">
                  Indemnización <ReceiptTaxIcon className="link-icon" />
                </a>
              </li>
            </ul>
          </nav>
        </>
      ) : (
        <>
          <nav className="nav-area">
            <ul className="header-nav ">
              <li>
                <a href="" className="active">
                  Todo
                  <CollectionIcon className="link-icon" />
                </a>
              </li>
              <li>
                <a href="">
                  Comercial
                  <CurrencyDollarIcon className="link-icon" />
                </a>
              </li>
              <li>
                <a href="">
                  Emisión <DocumentTextIcon className="link-icon" />
                </a>
              </li>
              <li>
                <a href="">
                  Cobranzas <CashIcon className="link-icon" />
                </a>
              </li>
              <li>
                <a href="">
                  Polizas Activas <BadgeCheckIcon className="link-icon" />
                </a>
              </li>
              <li>
                <a href="">
                  Indemnización <ReceiptTaxIcon className="link-icon" />
                </a>
              </li>
            </ul>
          </nav>
        </>
      )}
    </header>
  );
}
