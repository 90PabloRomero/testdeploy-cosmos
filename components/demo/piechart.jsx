export default function NextFC() {
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
    { label: "Solicitudes Recibidas", value: "640481178825" },
    { label: "Solicitudes Realizadas", value: "640481178825" },
    { label: "Solicitudes Aceptadas", value: "152441577181" },
    { label: "Solicitudes Rechazadas", value: "30193577746" },
  ],
};

const chartConfigs = {
  type: "doughnut",
  width: 650,
  height: 250,
  dataFormat: "json",
  dataSource: dataSource,
};
