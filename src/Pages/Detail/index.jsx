import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import Tabs from "../../Components/Tabs";
import { getDataKupuKupuById } from "../../GraphQL/Query";

export default function Detail() {
  const { id } = useParams();
  const [datakupu, setData] = useState([])
  const {data: kupuById} = useQuery(getDataKupuKupuById, {variables: {id_spesies : id}})

  console.log(datakupu);

  useEffect(() => {
    if (kupuById) {
      setData(kupuById?.species);
    }
  }, [kupuById]);


  return (
    <>
      <Tabs datakupu={datakupu}/>
    </>
  );
}
