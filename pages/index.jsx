import { useEffect } from "react";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  useEffect(() => {
    return router.push("/clientes/login");
  }, []);
  return (<></>);
};
export default Home;
