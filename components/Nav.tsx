import { useState, useEffect } from "react";

import { NavLink } from ".";
import { userService } from "services";

export { Nav };

function Nav() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscription = userService.user.subscribe((x) => setUser(x));
    return () => subscription.unsubscribe();
  }, []);

  function logout() {
    userService.logout();
  }

  // only show nav when logged in
  if (!user) return null;

  return (
    // <nav className="navbar navbar-expand navbar-dark bg-dark">
    //   <div className="navbar-nav">
    //     <NavLink href="/" exact className="nav-item nav-link">
    //       Home
    //     </NavLink>
    //     <NavLink href="/users" className="nav-item nav-link">
    //       Users
    //     </NavLink>
    //     <a onClick={logout} className="nav-item nav-link">
    //       Logout
    //     </a>
    //   </div>
    // </nav>
    <header>
      <div className="logo-area">
        <div className="logo">MARCA BLANCA</div>
      </div>

      <nav className="nav-area">
        <ul className="header-nav">
          <li>
            <a href="">Inicio</a>
          </li>
          <li>
            <a href="" className="active">
              Comercial
            </a>
          </li>
          <li>
            <a href="">emisión</a>
          </li>
          <li>
            <a href="">cobranzas</a>
          </li>
          <li>
            <a href="">Polizas Activas</a>
          </li>
          <li>
            <a href="">indemnizar</a>
          </li>
          <li>
            <a onClick={logout} className="nav-item nav-link">
              salir
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
