import { useEffect, useState } from "react";
import CalendarArea from "components/Calendar";
import Image from "next/image";
import addIcon from "public/add.png";
import editIcon from "public/edit.png";
import sendIcon from "public/icon3.png";
import Head from "next/head";
import LeadCreator from "components/LeadCreator";

const Home = () => {
  return (
    <>
      <Head>
        <title>Servicio de Clientes - Cosmos</title>
      </Head>
      <main>
        <h1>Solicitud de cotizacion</h1>
        <LeadCreator />
      </main>
    </>
  );
};
export default Home;
