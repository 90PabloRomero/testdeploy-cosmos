import { useEffect, useState } from "react";
import CalendarArea from "components/Calendar";
import Image from "next/image";
import addIcon from "public/add.png";
import editIcon from "public/edit.png";
import sendIcon from "public/icon3.png";
import Head from "next/head";

const Home = ({ onClick, onClickCotizacion }) => {
  const [modalCalendarVisible, setModalCalendarVisible] = useState(false);
  // const [leads, setLeads] = useState(null);

  // useEffect(() => {
  //   leadService.getAll().then((x) => setLeads(x));
  // }, []);

  useEffect(() => {
    document.body.className = modalCalendarVisible ? "modal-mode" : "";
  });

  return (
    <>
      <Head>
        <title>Servicio de Clientes - Cosmos</title>
      </Head>
      <main>
        <h1>hola</h1>
      </main>
    </>
  );
};
export default Home;
