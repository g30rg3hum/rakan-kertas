import Image from "next/image";
import Nav from "./nav";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4">
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
