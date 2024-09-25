/* eslint-disable @next/next/no-img-element */
import Nav from "./nav";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 background-texture shadow rounded-md fixed inset-x-0 top-5 mx-5 bg-white z-50">
      <img
        src="/images/rakan-kertas-logo.png"
        alt="Rakan Kertas Logo"
        width={200}
      />
      <Nav />
    </header>
  );
}
