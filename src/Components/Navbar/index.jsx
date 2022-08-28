import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo";
import SearchBar from "../SearchBar";

export default function Navbar() {
  return (
    <div>
      <header className="text-primary-black body-font">
        <div className="container mx-auto flex flex-wrap px-5 flex-col md:flex-row items-center justify-between">
          <nav className="flex flex-wrap items-center font-semibold">
            <NavLink to="/" activeclassName="active" className="mr-5 link hover:text-primary-green">
              Beranda
            </NavLink>
            <NavLink to="/klasifikasi" className="mr-5 link hover:text-primary-green">
              Klasifikasi
            </NavLink>
            <NavLink to="/foto" className="mr-5 link hover:text-primary-green">
              Galeri Foto
            </NavLink>
            <NavLink to="/tentang" className="mr-5 link hover:text-primary-green">
              Tentang
            </NavLink>
          </nav>
          <a
            href="#"
            className="flex order-first lg:order-none title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0"
          >
            <Logo />
          </a>
          <div className="inline-flex lg:justify-end mt-4 md:mt-0 items-center justify-center gap-2">
            <SearchBar/>
            <button className="inline-flex text-primary-white bg-primary-green border-0 py-2 px-6 rounded">
              Button
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
