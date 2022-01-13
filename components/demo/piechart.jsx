import { useEffect, useState } from "react";
import { leadService } from "../../services";

export default function NextFC() {
  const [leads, setLeads] = useState(null);

  useEffect(() => {
    leadService.getAll().then((x) => setLeads(x));
  }, []);

  const FroalaCharts = require("froalacharts");
  const FroalaTheme = require("froalacharts/themes/froalacharts.theme.froala.js");
  const { default: ReactFC } = require("react-froalacharts");

  ReactFC.fcRoot(FroalaCharts, FroalaTheme);

  return <ReactFC {...chartConfigs} />;
}

const dataSource = {
  chart: {
    theme: "froala",
    paletteColors: "#F7931A, #3c3c3d, #1A9DF6, #52AF94, #E7BF29, #3D550C",
    renderAt: "HOLAS",
    defaultCenterLabel: "Total Market Cap<br>$1.02T",
    doughnutRadius: "0%",
  },
  data: [
    { label: "Solicitudes Recibidas", value: "10" },
    { label: "Solicitudes Realizadas", value: "10" },
    { label: "Solicitudes Aceptadas", value: "3" },
    { label: "Solicitudes Rechazadas", value: "7" },
  ],
};

const chartConfigs = {
  type: "doughnut",
  width: 650,
  height: 250,
  dataFormat: "json",
  dataSource: dataSource,
};
