import Link from "next/link";

export default function Custom404() {
  return (
    <div className="h-100 w-full d-flex flex-column text-center">
      <div>
        <h3>404 - Pagina no encontrada</h3>
      </div>
      <div>
        <Link href="/">Regresar al Inicio</Link>
      </div>
    </div>
  );
}
