import Image from "next/image";
import Nav from "./nav";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 background-texture shadow rounded-md fixed inset-x-0 top-5 mx-5 bg-white z-50">
      <Image
        src="/images/rakan-kertas-logo.png"
        alt="Rakan Kertas Logo"
        width={200}
        height={100}
      />
      <Nav />
    </header>
  );
}
