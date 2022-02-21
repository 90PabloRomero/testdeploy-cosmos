import { leadService } from "../services";

import { useEffect, useState } from "react";
import { Link } from "../components";
import CalendarArea from "../components/Calendar";
import Image from "next/image";
import addIcon from "../public/add.png";
import editIcon from "../public/edit.png";
import sendIcon from "../public/icon3.png";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  return router.push("/clientes/login");
};
export default Home;
