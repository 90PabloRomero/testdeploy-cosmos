import { Link } from "components";
import Head from "next/head";

export default PrintPage;

function PrintPage() {
  function handlePrint() {
    window.print();
  }
  return (
    <>
      <Head>
        <title>Imprimir Cotizacion - Cosmos</title>
      </Head>
      <div className="container mt-4">
        {/*  */}
        <div className="d-flex justify-content-around pt-4">
          <div className=" d-print-none">
            <Link href="/">
              <button className="btn btn-primary">Regresar</button>
            </Link>
          </div>
          <button
            onClick={handlePrint}
            className="btn btn-primary d-print-none"
          >
            Imprimir
          </button>
        </div>
        {/*  */}
        <div className="container mt-5 border p-0">
          <div className="text-right">
            <h1 className="ml-auto m-0 p-0 mr-5 mt-4">
              <strong>VUMI</strong>
            </h1>
            <small className="ml-auto mr-2 ">empresa de medicina prepaga</small>
          </div>
          <h2 className="bg-warning text-center m-0 p-0 py-2 text-white">
            <strong>ABSOLUTE VIP</strong>
          </h2>
          <div className="border-bottom border-warning text-right py-2 px-4">
            Tarifas Efectivas: <strong>1 de Enero 2022</strong>
          </div>
          <div className="container border-top border-warning mt-1 solicitude-data m-0 p-0">
            <div className="d-flex justify-content-between px-5">
              <div className="">
                <div className="my-1">
                  Nombre del Solicitante:
                  <strong>Nombre del Agente</strong>
                </div>
                <div className="my-1">
                  Nombre del Agente:
                  <strong>Nombre del Agente</strong>
                </div>
                <div className="my-1">
                  Pais:
                  <strong>Ecuador Zona I</strong>
                </div>
              </div>
              <div className="">
                Fecha de cotización: <strong>10/01/2022</strong>
              </div>
            </div>
          </div>
          {/*  */}
          <div className=" text-center bg-warning text-white">
            <strong>Información del Aplicante</strong>
          </div>
          {/*  */}
          <div className="container solicitude-data m-0 p-0 pt-1 ">
            <div className="d-flex justify-content-between px-5">
              <div className="">
                <div className="my-1">
                  Edad del Solicitante:
                  <strong>40</strong>
                </div>
                <div className="my-1">
                  Edad del Conyuge:
                  <strong>39</strong>
                </div>
              </div>
              <div className="">
                Número de Hijos: <strong>1</strong>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="my-4 text-left bg-warning text-white">
            <strong>Anexos</strong>
          </div>
          {/*  */}
          <div className="container solicitude-data m-0 p-0 pt-1 border-bottom border-warning">
            <div className="d-flex justify-content-between px-5">
              <div className="">
                <div className="my-1">
                  Anexo de Cobertura Plus:
                  <strong>No</strong>
                </div>
              </div>
              <div className=""></div>
            </div>
          </div>
          {/*  */}
          <div className="container solicitude-data m-0 p-0 mt-1 pt-1 border-top border-warning">
            <div className="d-flex justify-content-between px-5">
              <div className="">
                <div className="my-1">&nbsp;</div>
              </div>
              <div className=""></div>
            </div>
          </div>
          {/*  */}
          <div className="pl-2 text-left bg-warning text-white">
            <div className="d-flex">
              <div className="col-3 d-flex flex-column">DEDUCIBLES*</div>
              <div className="col-2">Opcion I</div>
              <div className="col-2">Opcion II</div>
              <div className="col-2">Opcion III</div>
              <div className="col-2">Opcion IV</div>
            </div>
          </div>
          {/*  */}
          <div className="pl-2 text-left solicitude-data">
            <div className="d-flex">
              <div className="col-3 d-flex flex-column">Fuera de EUA</div>
              <div className="col-2 text-center">$500</div>
              <div className="col-2 text-center">$50.000</div>
              <div className="col-2 text-center">$10.000</div>
              <div className="col-2 text-center">$20.00</div>
            </div>
          </div>
          {/*  */}
          <div className="pl-2 text-left solicitude-data">
            <div className="d-flex">
              <div className="col-3 d-flex flex-column">Dentro de EUA</div>
              <div className="col-2 text-center">$1.000</div>
              <div className="col-2 text-center"></div>
              <div className="col-2 text-center"></div>
              <div className="col-2 text-center"></div>
            </div>
          </div>
          {/*  */}
          <div className="pl-2 text-left bg-warning text-white">
            <div className="d-flex">
              <div className="col-3 d-flex flex-column">
                <strong>MENSUAL</strong>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="pl-2 text-left solicitude-data">
            <div className="d-flex">
              <div className="col-3 d-flex flex-column">Principal</div>
              <div className="col-2 text-right border-right">N/A</div>
              <div className="col-2 text-right border-right">N/A</div>
              <div className="col-2 text-right border-right">N/A</div>
              <div className="col-2 text-right border-right">N/A</div>
            </div>
          </div>
          {/*  */}
          <div className="pl-2 text-left solicitude-data">
            <div className="d-flex">
              <div className="col-3 d-flex flex-column">Conyuge</div>
              <div className="col-2 text-right border-right">N/A</div>
              <div className="col-2 text-right border-right">N/A</div>
              <div className="col-2 text-right border-right">N/A</div>
              <div className="col-2 text-right border-right">N/A</div>
            </div>
          </div>
          {/*  */}
          <div className="pl-2 text-left solicitude-data">
            <div className="d-flex">
              <div className="col-3 d-flex flex-column">Niño(s)</div>
              <div className="col-2 text-right border-right">N/A</div>
              <div className="col-2 text-right border-right">N/A</div>
              <div className="col-2 text-right border-right">N/A</div>
              <div className="col-2 text-right border-right">N/A</div>
            </div>
          </div>
          {/*  */}
          <div className="pl-2 text-left solicitude-data">
            <div className="d-flex">
              <div className="col-3 d-flex flex-column">
                Anexo de Cobertura Plus (Principal)
              </div>
              <div className="col-2 text-right border-right">N/A</div>
              <div className="col-2 text-right border-right">N/A</div>
              <div className="col-2 text-right border-right">N/A</div>
              <div className="col-2 text-right border-right">N/A</div>
            </div>
          </div>
          {/*  */}
          <div className="pl-2 text-left solicitude-data">
            <div className="d-flex">
              <div className="col-3 d-flex flex-column">
                Anexo de Cobertura Plus (Conyuge)
              </div>
              <div className="col-2 text-right border-right">N/A</div>
              <div className="col-2 text-right border-right">N/A</div>
              <div className="col-2 text-right border-right">N/A</div>
              <div className="col-2 text-right border-right">N/A</div>
            </div>
          </div>
          {/*  */}
          <div className="pl-2 text-left solicitude-data">
            <div className="d-flex">
              <div className="col-3 d-flex flex-column">
                Anexo de Cobertura Plus (Niños)
              </div>
              <div className="col-2 text-right border-right">N/A</div>
              <div className="col-2 text-right border-right">N/A</div>
              <div className="col-2 text-right border-right">N/A</div>
              <div className="col-2 text-right border-right">N/A</div>
            </div>
          </div>
          {/*  */}
          <div className="pl-2 text-left solicitude-data">
            <div className="d-flex">
              <div className="col-3 d-flex flex-column text-warning my-2">
                <em>Impuesto:</em>
              </div>
              <div className="col-2 text-right border-right"></div>
              <div className="col-2 text-right border-right"></div>
              <div className="col-2 text-right border-right"></div>
              <div className="col-2 text-right border-right"></div>
            </div>
          </div>
          {/*  */}
          <div className="pl-2 text-left solicitude-data">
            <div className="d-flex">
              <div className="col-3 d-flex flex-column">
                <em>Seguro Campesino (0.5%)</em>
              </div>
              <div className="col-2 text-right border-right">$0,00</div>
              <div className="col-2 text-right border-right">$0,00</div>
              <div className="col-2 text-right border-right">$0,00</div>
              <div className="col-2 text-right border-right">$0,00</div>
            </div>
          </div>
          {/*  */}
          <div className="mt-2 text-left bg-light solicitude-data">
            <div className="d-flex">
              <div className="col-3 d-flex flex-column">
                <strong>Total Mensual</strong>
              </div>
              <div className="col-2 text-right border-right">
                <strong>N/A</strong>
              </div>
              <div className="col-2 text-right border-right">
                <strong>N/A</strong>
              </div>
              <div className="col-2 text-right border-right">
                <strong>N/A</strong>
              </div>
              <div className="col-2 text-right border-right">
                <strong>N/A</strong>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="text-left bg-light solicitude-data">
            <div className="d-flex">
              <div className="col-3 d-flex flex-column">
                <strong>Total 3 meses anticipados</strong>
              </div>
              <div className="col-2 text-right border-right">
                <strong>N/A</strong>
              </div>
              <div className="col-2 text-right border-right">
                <strong>N/A</strong>
              </div>
              <div className="col-2 text-right border-right">
                <strong>N/A</strong>
              </div>
              <div className="col-2 text-right border-right">
                <strong>N/A</strong>
              </div>
            </div>
          </div>
          {/*  */}
          <div className=" text-left bg-light solicitude-data">
            <div className="d-flex">
              <div className="col-3 d-flex flex-column">
                <strong>Total 6 meses anticipados</strong>
              </div>
              <div className="col-2 text-right">
                <strong>N/A</strong>
              </div>
              <div className="col-2 text-right">
                <strong>N/A</strong>
              </div>
              <div className="col-2 text-right">
                <strong>N/A</strong>
              </div>
              <div className="col-2 text-right">
                <strong>N/A</strong>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="text-left bg-light solicitude-data">
            <div className="d-flex">
              <div className="col-3 d-flex flex-column">
                <strong>Total 12 meses anticipados</strong>
              </div>
              <div className="col-2 text-right">
                <strong>N/A</strong>
              </div>
              <div className="col-2 text-right">
                <strong>N/A</strong>
              </div>
              <div className="col-2 text-right">
                <strong>N/A</strong>
              </div>
              <div className="col-2 text-right">
                <strong>N/A</strong>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </>
  );
}
