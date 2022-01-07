import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

// import "styles/globals.css";

import { userService } from "services";
import { Nav, Alert, SideBar } from "components";
import { Modal } from "components/Modal";
import { GlobalStyles } from "styles/globalStyles";

export default App;

function App({ Component, pageProps }) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [authorized, setAuthorized] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [sideBarVisible, setSideBarOpen] = useState(false);

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
    document.body.className = modalVisible ? "modal-mode" : "";
  });
  function authCheck(url: string) {
    // redirect to login page if accessing a private page and not logged in
    setUser(userService.userValue);
    const publicPaths = ["/account/login", "/account/register"];
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
      <div className={`app-container`}>
        {user ? (
          <>
            <GlobalStyles />
            <div className="tooltip-wrapper">
              <SideBar
                sideBarVisible={sideBarVisible}
                onOutsideClick={() => setSideBarOpen(false)}
              />
              <div className="layout">
                <Nav />
                <Alert />

                {authorized && (
                  <Component
                    {...pageProps}
                    onClick={setModalVisible}
                    openSideBar={() => setSideBarOpen(!sideBarVisible)}
                  />
                )}
              </div>
            </div>
          </>
        ) : (
          <>
            <GlobalStyles />
            <Alert />
            {authorized && (
              <Component {...pageProps} onClick={setModalVisible} />
            )}
          </>
        )}
      </div>
    </>
  );
}
