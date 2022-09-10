import { useQuery } from "@apollo/client";
import { getAllDataKupu } from "../../Query";

export default function useQueryAllKupuKupu() {
    const { data: dataAllKupu } = useQuery(getAllDataKupu);
  
    return {
      dataAllKupu,
    };
  }