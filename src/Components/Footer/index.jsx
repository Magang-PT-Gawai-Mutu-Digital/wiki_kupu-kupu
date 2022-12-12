import React from "react";
import { NavLink } from "react-router-dom";
import {BsWhatsapp, BsInstagram, BsEnvelope} from 'react-icons/bs';
import Logo from "../Logo";

export default function Footer() {
  return (
    <div>
      <footer className="body-font">
        <hr className="w-full" />
        <div className="container px-5 py-12 mx-auto flex tablet:items-center laptop:items-start tablet:flex-row tablet:flex-nowrap flex-wrap">
          <div className="w-1/2 flex-shrink-0 tablet:mx-0 mx-auto text-center tablet:text-left">
            <NavLink
              to="/"
              className="flex title-font font-medium items-center tablet:justify-start justify-center text-gray-900"
            >
              <Logo />
            </NavLink>
            <p className="mt-2 text-sm text-primary-gray">
              Katalog Kupu-Kupu merupakan website yang digunakan untuk
              memberikan informasi mengenai spesies kupu-kupu yang ada di Taman Kupu-Kupu Gita
              Persada Lampung, Indonesia.
            </p>
          </div>
          <div className="flex-grow flex flex-wrap tablet:pl-20 -mb-10 tablet:mt-0 mt-10 tablet:text-left text-center">
            <div className="laptop:w-1/2 tablet:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                HUBUNGI KAMI
              </h2>
              <nav className="list-none mb-10 ml-8">
                <li className="flex items-center gap-4">
                  <BsEnvelope/>
                  <a
                    className="hover:text-primary-green"
                    href="mailto:martinus.id@gmail.com"
                  >
                    Email
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <BsWhatsapp/>
                  <a
                    className="hover:text-primary-green"
                    href="https://wa.me/+6285764647399"
                    rel="noreferrer"
                    target="_blank"
                  >
                    WhatsApp
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <BsInstagram/>
                  <a
                    className="hover:text-primary-green"
                    href="https://www.instagram.com/gitapersadalampung/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Instagram
                  </a>
                </li>
              </nav>
            </div>
            <div className="laptop:w-1/2 tablet:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                TAMAN KONSERVASI
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a
                    className="hover:text-primary-green"
                    href="https://kupu-kupu.id/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Lampung
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col phone:flex-row">
            <p className=" text-sm text-center phone:text-left">
              © 2022 kupu-kupu.id —
              <a
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                className="ml-1"
                target="_blank"
              >
                Taman Kupu-Kupu Gita Persada Lampung
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
