import React, { useState } from "react";
import "../../App.css";
import DeskripsiTab from "./DeskripsiTab";
import GaleriFotoTab from "./GaleriFotoTab";
import PersebaranTab from "./PersebaranTab";
import ReferensiTab from "./ReferensiTab";
import SiklusHidupTab from "./SiklusHidupTab";

export default function Tabs() {
  const [toogleState, setToogleState] = useState(1);
  const toogleTab = (index) => {
    setToogleState(index);
  };
  return (
    <div className="flex flex-col items-center justify-center h-full mb-8">
      <div className="w-10/12 bg-primary-white rounded-lg shadow-xl p-4">
        <div className="bloc-tabs">
          <button
            className={toogleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toogleTab(1)}
          >
            Deskripsi
          </button>
          <button
            className={toogleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toogleTab(2)}
          >
            Siklus Hidup
          </button>
          <button
            className={toogleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toogleTab(3)}
          >
            Galeri Foto
          </button>
          <button
            className={toogleState === 4 ? "tabs active-tabs" : "tabs"}
            onClick={() => toogleTab(4)}
          >
            Persebaran
          </button>
          <button
            className={toogleState === 5 ? "tabs active-tabs" : "tabs"}
            onClick={() => toogleTab(5)}
          >
            Referensi
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={toogleState === 1 ? "content active-content" : "content"}
          >
            <DeskripsiTab />
          </div>
          <div
            className={toogleState === 2 ? "content active-content" : "content"}
          >
            <SiklusHidupTab />
          </div>
          <div
            className={toogleState === 3 ? "content active-content" : "content"}
          >
            <GaleriFotoTab />
          </div>
          <div
            className={toogleState === 4 ? "content active-content" : "content"}
          >
            <PersebaranTab />
          </div>
          <div
            className={toogleState === 5 ? "content active-content" : "content"}
          >
            <ReferensiTab />
          </div>
        </div>
      </div>
    </div>
  );
}
