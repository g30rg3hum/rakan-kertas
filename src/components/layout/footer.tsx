import Link from "next/link";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import navItems from "./nav-items";

export default function Footer() {
  return (
    <footer className="px-6 py-10 bg-gray-950 text-white background-texture-2 flex flex-col gap-7 md:flex-row md:justify-between">
      <div>
        <h5 className="font-bold">&copy; 2024 Rakan Kertas Sdn Bhd</h5>
        <p className="mb-2">Also operating as LBS Industries</p>
        <div className="flex gap-1">
          <FaFacebookSquare size={30} />
          <FaLinkedin size={30} />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="flex flex-col gap-6 sm:flex-row">
          <div className="flex flex-col">
            <h5 className="font-bold mb-2">Navigation</h5>
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col">
            <h5 className="font-bold mb-2">Main office</h5>
            <p>
              Lorong Mak Mandin 4,
              <br />
              Kawasan Perindustrian
              <br />
              Mak Mandin,
              <br />
              13400 Butterworth,
              <br />
              Pulau Pinang
            </p>
          </div>
          <div className="flex flex-col">
            <h5 className="font-bold mb-2">Second office</h5>
            <p>
              No. 15 Jalan Sega Jaya 1,
              <br />
              Taman Perindustrian Saga Jaya
              <br />
              13600 Perai,
              <br />
              Pulau Pinang
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="flex flex-col">
            <h5 className="font-bold mb-2">LBS Industries</h5>
            <p>
              27, Lintang Bayan Lepas 6,
              <br />
              Bayan Lepas Free
              <br />
              Industrial Zone Phase 4,
              <br />
              11900 Bayan Lepas,
              <br />
              Pulau Pinang
            </p>
          </div>
          <div className="flex flex-col">
            <h5 className="font-bold mb-2">Email</h5>
            <p className="mb-6">rakankertas2@gmail.com</p>

            <h5 className="font-bold mb-2">Phone</h5>
            <p>04-3232273 / 04-6465573</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
