import { gql } from "@apollo/client";

export const getAllDataKupu = gql `
 query AllDataKupu {
  nama_ilmiah(limit: 5) {
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
`;

export const getKlasifikasiKupu = gql `
query AllKlasifikasi {
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

`;

export const getDataKupuKupuById = gql `
query DataKupuKupu($id: Int!, $id1: order_by = asc, $id2: order_by = asc, $id3: order_by = asc, $id4: order_by = asc, $id5: order_by = asc) {
  famili_by_pk(id: $id) {
    id
    name
    subfamilies(order_by: {id: $id1}) {
      id
      name
      genera(order_by: {id: $id2}) {
        id
        name
        spesiess(order_by: {id: $id3}) {
          id
          name
          ilmiahname(order_by: {id: $id4}) {
            id
            name
            generalname(order_by: {id: $id5}) {
              description
              id
              name
              image
            }
          }
        }
      }
    }
  }
}

`