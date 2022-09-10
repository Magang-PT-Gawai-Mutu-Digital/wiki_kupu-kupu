import React, { useState } from "react";

import { useParams } from "react-router-dom";
import Tabs from "../../Components/Tabs";

export default function Detail(props) {
  const {dataKupu} = props    
    const { id } = useParams();
  return (
    <>
    <Tabs dataKupu={dataKupu}/>
    </>
  );
}
