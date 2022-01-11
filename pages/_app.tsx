import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

// import "styles/globals.css";

import { userService } from "../services";
import { Nav, Alert, SideBar, Modal } from "../components";
import { GlobalStyles } from "../styles/globalStyles";
import { ModalUser } from "../components/demo/modalUser";
import { ModalCotizacion } from "../components/demo/modalCotizacion";
import { ModalCargarCotizacion } from "../components/demo/modalCargarCotizacion";

export default App;

function App({ Component, pageProps }) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [authorized, setAuthorized] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalUserVisible, setModalUserVisible] = useState(false);
  const [modalCotizacionVisible, setModalCotizacionVisible] = useState(false);
  const [sideBarVisible, setSideBarOpen] = useState(false);
  const [modalCCVisible, setModalCCVisible] = useState(false);
  useEffect(() => {
    // on initial load - run auth check
    authCheck(router.asPath);

    // on route change start - hide page content by setting authorized to false
    const hideContent = () => setAuthorized(false);
    router.events.on("routeChangeStart", hideContent);

    // on route change complete - run auth check
    router.events.on("routeChangeComplete", authCheck);

    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off("routeChangeStart", hideContent);
      router.events.off("routeChangeComplete", authCheck);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.body.className = modalCotizacionVisible ? "modal-mode" : "";
    document.body.className = modalCCVisible ? "modal-mode" : "";

    document.body.className = modalUserVisible ? "modal-mode" : "";
    document.body.className = modalVisible ? "modal-mode" : "";
  });
  function authCheck(url: string) {
    // redirect to login page if accessing a private page and not logged in
    setUser(userService.userValue);
    const publicPaths = [
      "/account/login",
      "/account/register",
      "/account/register-lead",
    ];
    const path = url.split("?")[0];
    if (!userService.userValue && !publicPaths.includes(path)) {
      setAuthorized(false);
      router.push({
        pathname: "/account/login",
        query: { returnUrl: router.asPath },
      });
    } else {
      setAuthorized(true);
    }
  }

  return (
    <>
      <GlobalStyles>
        <Head>
          <title>Broker - Proyecto Cosmos</title>

          {/* eslint-disable-next-line @next/next/no-css-tags */}
          <link
            href="//netdna.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
            rel="stylesheet"
          />
        </Head>
        <Modal
          modalVisible={modalVisible}
          onOutsideClick={() => setModalVisible(false)}
        />
        <ModalUser
          modalUserVisible={modalUserVisible}
          onOutsideClick={() => {
            setModalUserVisible(false);
          }}
        />
        <ModalCotizacion
          modalCotizacionVisible={modalCotizacionVisible}
          onOutsideClick={() => {
            setModalCotizacionVisible(false);
          }}
        />
        <ModalCargarCotizacion
          modalCCVisible={modalCCVisible}
          onOutsideClick={() => {
            setModalCCVisible(false);
          }}
        />
        <div className={`app-container`}>
          {user ? (
            <>
              <Nav />
              <div className="tooltip-wrapper">
                <SideBar
                  sideBarVisible={sideBarVisible}
                  onOutsideClick={() => setSideBarOpen(false)}
                />
                <div
                  className={`layout ${
                    sideBarVisible ? " layout-modal-mode" : ""
                  } `}
                >
                  <Alert />

                  {authorized && (
                    <Component
                      {...pageProps}
                      onClick={setModalVisible}
                      onClickUser={setModalUserVisible}
                      onClickCotizacion={() => setModalCotizacionVisible(true)}
                      openSideBar={() => setSideBarOpen(!sideBarVisible)}
                      onClickCargarCotizacion={() => setModalCCVisible(true)}
                    />
                  )}
                </div>
              </div>
            </>
          ) : (
            <>
              <Alert />
              {authorized && (
                <Component
                  {...pageProps}
                  onClick={setModalVisible}
                  onClickCotizacion={() => setModalCotizacionVisible(true)}
                  onClickCargarCotizacion={() => setModalCCVisible(true)}
                  onClickUser={setModalUserVisible}
                />
              )}
            </>
          )}
        </div>
      </GlobalStyles>
    </>
  );
}
