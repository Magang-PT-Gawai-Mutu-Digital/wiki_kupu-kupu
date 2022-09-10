import { getDataKupuKupuById } from "../../Query";
import { useQuery } from "@apollo/client";

export default function useQueryKupuKupu() {
  const { data: dataKupu } = useQuery(getDataKupuKupuById);

  return {
    dataKupu,
  };
};

