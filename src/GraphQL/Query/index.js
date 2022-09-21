import { gql } from "@apollo/client";

export const getAllDataKupu = gql`
  query AllDataKupu {
    species(limit: 5) {
      binomial_name
      description
      id
      indonesian_name
      species_name
      thumbnail
      butterfly_images {
        id
        lifecycle_images
      }
      butterfly_all_images {
        id
        image
      }
      persebarans {
        id
        alamat
        latitude
        link
        longtitude
      }
      referensis {
        id
        penulis
        judul
        tahun_terbit
        nama_jurnal
        volume
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
          id
          indonesian_name
          species_name
          thumbnail
          butterfly_images {
            lifecycle_images
            id
          }
          butterfly_all_images {
            id
            image
          }
          persebarans {
            id
            alamat
            latitude
            link
            longtitude
          }
          referensis {
            id
            penulis
            judul
            tahun_terbit
            nama_jurnal
            volume
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
          id
          indonesian_name
          species_name
          thumbnail
          butterfly_images {
            lifecycle_images
            id
          }
          butterfly_all_images {
            id
            image
          }
          persebarans {
            id
            alamat
            latitude
            link
            longtitude
          }
          referensis {
            id
            penulis
            judul
            tahun_terbit
            nama_jurnal
            volume
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
      id
      indonesian_name
      species_name
      thumbnail
      butterfly_images {
        id
        lifecycle_images
      }
      butterfly_all_images {
        id
        image
      }
      persebarans {
        id
        alamat
        latitude
        link
        longtitude
      }
      referensis {
        id
        penulis
        judul
        tahun_terbit
        nama_jurnal
        volume
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

export const searchDataKupu = gql`
  query AllDataKupu {
    species {
      binomial_name
      description
      id
      indonesian_name
      species_name
      thumbnail
      butterfly_images {
        id
        lifecycle_images
      }
      butterfly_all_images {
        id
        image
      }
      persebarans {
        id
        alamat
        latitude
        link
        longtitude
      }
      referensis {
        id
        penulis
        judul
        tahun_terbit
        nama_jurnal
        volume
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