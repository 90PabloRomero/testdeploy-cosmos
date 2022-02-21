import Head from 'next/head';
import React from 'react';
import Page from '../../components/core';
import dynamic from "next/dynamic";
import CircularProgress from "../../components/CircularProgress";
const ClientHome = dynamic(() => import('../../routes/clientes/panel'),{
  loading: () => <CircularProgress />, ssr: false,
});
export default Page(() => (
  <>
    <Head>
      <title>Client DashBoard: Proyecto Cosmos</title>
    </Head>
    <>
      <ClientHome />
    </>
    
  </>
));