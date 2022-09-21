import { useQuery } from "@apollo/client";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { searchDataKupu } from "../../GraphQL/Query";

import { BiSearchAlt } from "react-icons/bi";
import { MdOutlineCancel } from "react-icons/md";

export default function SearchBar() {
  const [data, setData] = useState([]);

  //search
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.binomial_name
        .toLowerCase()
        .includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  //query data from graphql
  const { data: allDataKupu } = useQuery(searchDataKupu);
  useEffect(() => {
    if (allDataKupu) {
      setData(allDataKupu?.species);
    }
  }, [allDataKupu]);

  return (
    <>
      <div className="ml-2 mt-2 row justify-start">
        <div className="xl:w-80 ">
          <div className="input-group relative flex items-center justify-evenly w-full mb-2 bg-primary-white border border-solid hover:border-primary-blue border-primary-gray3 rounded-lg p-2">
            <input
              type="search"
              className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-primary-gray bg-primary-white bg-clip-padding rounded-md transition ease-in-out m-0 focus:text-primary-gray focus:bg-primary-white focus:border-primary-white focus:outline-none"
              placeholder="Cari kupu-kupu disini..."
              aria-label="Search"
              aria-describedby="button-addon3"
              value={wordEntered}
              onChange={handleFilter}
            />

            {filteredData.length === 0 ? (
              <div className="w-1/6">
                <BiSearchAlt className="w-4 text-primary-gray" />
              </div>
            ) : (
              <div className="w-1/6">
                <MdOutlineCancel
                  onClick={clearInput}
                  className="w-4 text-primary-gray"
                />
              </div>
            )}
          </div>

          {filteredData.length !== 0 && (
            <div className="flex flex-col absolute z-10 mt-2 w-64 min-w-max items-center bg-primary-white text-base float-right py-4 text-left rounded-lg shadow-lg m-0 bg-clip-padding border-none">
              {filteredData.slice(0, 15).map((value, key) => {
                return (
                  <NavLink
                    to={`/detail/${value.id}`}
                    state={{ value }}
                    onClick={value.id}
                  >
                    <p>{value.binomial_name}</p>
                  </NavLink>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
