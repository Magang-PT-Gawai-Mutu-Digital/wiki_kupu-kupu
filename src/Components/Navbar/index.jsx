import React from "react";
import Logo from "../Logo";
import SearchBar from "../SearchBar";

export default function Navbar() {
  return (
    <div>
      <header class="text-primary-black body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
          <nav class="flex flex-wrap items-center font-semibold">
            <a class="mr-5 hover:text-primary-green active: border-b-2 text-primary-green" href="#">
              Beranda
            </a>
            <a class="mr-5 hover:text-primary-green" href="#">
              Klasifikasi
            </a>
            <a class="mr-5 hover:text-primary-green" href="#">
              Foto & Video
            </a>
            <a class="hover:text-primary-green" href="#">
              Tentang
            </a>
          </nav>
          <a
            href="#"
            class="flex order-first lg:order-none title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0"
          >
            <Logo />
          </a>
          <div class="inline-flex lg:justify-end mt-4 md:mt-0 items-center justify-center gap-2">
            <SearchBar/>
            <button class="inline-flex text-primary-white bg-primary-green border-0 py-2 px-6 rounded">
              Button
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
