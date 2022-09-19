import { gql } from "@apollo/client";

export const getAllDataKupu = gql`
  query AllDataKupu {
    species(limit: 5) {
      binomial_name
      description
      distribution_area
      id
      indonesian_name
      species_name
      thumbnail
      butterfly_images {
        id
        lifecycle_images
      }
      persebarans {
        id
        alamat
        latitude
        link
        longtitude
      }
      genus {
        genus_name
        id
        famili {
          id
          name
        }
      }
    }
  }
`;

export const getKlasifikasiKupu = gql`
  query AllKlasifikasi {
    famili {
      description
      id
      name
      genera {
        genus_name
        id
        species {
          binomial_name
          description
          distribution_area
          id
          indonesian_name
          species_name
          thumbnail

          butterfly_images {
            lifecycle_images
            id
          }
          persebarans {
            id
            alamat
            latitude
            link
            longtitude
          }
        }
      }
    }
  }
`;

export const getKlasifikasiKupuById = gql`
  query AllKlasifikasi($id_famili: Int!) {
    famili(where: { id: { _eq: $id_famili } }) {
      description
      id
      name
      genera {
        genus_name
        id
        species {
          binomial_name
          description
          distribution_area
          id
          indonesian_name
          species_name
          thumbnail
          butterfly_images {
            lifecycle_images
            id
          }
          persebarans {
            id
            alamat
            latitude
            link
            longtitude
          }
        }
      }
    }
  }
`;

export const getDataKupuKupuById = gql`
  query DataKupuById($id_spesies: Int!) {
    species(where: { id: { _eq: $id_spesies } }) {
      binomial_name
      description
      distribution_area
      id
      indonesian_name
      species_name
      thumbnail
      butterfly_images {
        id
        lifecycle_images
      }
      persebarans {
        id
        alamat
        latitude
        link
        longtitude
      }
      genus {
        genus_name
        id
        famili {
          id
          name
        }
      }
    }
  }
`;

export const getAllThumbnail = gql`
  query getThumbnail {
    species {
      id
      thumbnail
      binomial_name
    }
  }
`;
