import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getKlasifikasiKupu } from "../../GraphQL/Query";
import Logo from "../Logo";
import SearchBar from "../SearchBar";

export default function Navbar() {
  const [isToggleOn, setIsToggleOn] = useState(true);
  const handleClickToggle = () => {
    setIsToggleOn(!isToggleOn);
  };

  const [dataKupu, setDataKupu] = useState([]);
  const { data: dataKlasifikasi } = useQuery(getKlasifikasiKupu);

  useEffect(() => {
    if (dataKlasifikasi) {
      setDataKupu(dataKlasifikasi?.famili);
    }
  }, [dataKlasifikasi]);

  return (
    <div>
      <header className="text-primary-black body-font">
        <div className="container mx-auto flex flex-wrap laptop:px-5 tablet:flex-row tablet:justify-center tablet:px-5 phone:px-2 phone:justify-center items-center laptop:justify-between">
          <nav className="inline-flex flex-wrap items-center font-semibold">
            <NavLink
              to="/"
              activeclassName="active"
              className="mr-5 link hover:text-primary-green"
            >
              Beranda
            </NavLink>
            <div>
              <button
                id="nav-toggle"
                onClick={() => handleClickToggle()}
                className="mr-5 inline-flex items-center hover:text-primary-green"
                aria-expanded="true"
                aria-haspopup="true"
              >
                Klasifikasi
                <svg
                  className="w-4 h-4 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              {isToggleOn ? (
                ""
              ) : (
                <div className="flex flex-col absolute z-10 mt-2 w-32 -ml-4 min-w-max items-center bg-primary-white text-base float-left py-2 list-none text-left rounded-lg shadow-lg m-0 bg-clip-padding border-none">
                  {dataKupu?.map((data, index) => (
                    <NavLink
                      to={`/klasifikasi/${data.id}`}
                      state={{ data }}
                      onClick={data.id}
                      className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap hover:text-primary-green"
                    >
                      {data.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            <NavLink to="/foto" className="mr-5 link hover:text-primary-green">
              Galeri Foto
            </NavLink>
            <NavLink
              to="/tentang"
              className="mr-5 link hover:text-primary-green"
            >
              Tentang
            </NavLink>
          </nav>
          <NavLink
            to="/beranda"
            className="flex order-first laptop:order-none title-font font-medium items-center text-gray-900 laptop:items-center laptop:justify-center mb-4 tablet:mb-0"
          >
            <Logo />
          </NavLink>
          <div className="inline-flex laptop:justify-end mt-4 tablet:mt-0 items-center justify-center gap-2">
            <SearchBar/>
          </div>
        </div>
      </header>
    </div>
  );
}
