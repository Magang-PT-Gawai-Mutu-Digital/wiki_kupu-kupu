import { gql } from "@apollo/client";

export const getAllDataKupu = gql`
  query AllDataKupu {
    nama_umum(limit: 5) {
      id
      description
      image
      name
      nama_ilmiah {
        id
        name
        spesy {
          id
          name
          genus {
            id
            name
            sub_famili {
              id
              name
              famili {
                id
                name
              }
            }
          }
        }
      }
    }
  }
`;

export const getKlasifikasiKupu = gql`
  query AllKlasifikasi {
    nama_umum {
      id
      description
      image
      name
      nama_ilmiah {
        id
        name
        spesy {
          id
          name
          genus {
            id
            name
            sub_famili {
              id
              name
              famili {
                id
                name
              }
            }
          }
        }
      }
    }
  }
`;

export const getDataKupuKupuById = gql`
  query DataKupuById($id_namaumum: Int!) {
    nama_umum(where: { id: { _eq: $id_namaumum } }) {
      id
      description
      image
      name
      nama_ilmiah {
        id
        name
        spesy {
          id
          name
          genus {
            id
            name
            sub_famili {
              id
              name
              famili {
                id
                name
              }
            }
          }
        }
      }
    }
  }
`;
