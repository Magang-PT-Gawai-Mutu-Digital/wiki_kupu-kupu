import axios from "axios"

const BASE_URL = "https://id.wikipedia.org/w/rest.php/v1/page/";

export const getDesc = async() => {
    const response = await axios.get(BASE_URL + "Kupu-kupu");
    return response.data;
}