import axios from "axios";

const URLPROVINCE = "https://api.kerjoo.com/api/v1/reference/provinces";
const URLKAB = "https://api.kerjoo.com/api/v1/reference/regencies_of";
const URLKEC = "https://api.kerjoo.com/api/v1/reference/districts_of";
const URLDESA = "https://api.kerjoo.com/api/v1/reference/villages_of";

export const getProvinces = async () => {
    try {
        const { data, status, statusText } = await axios.get(URLPROVINCE);
        return { data, status, statusText };
    } catch (error) {
        console.log(error);
    }
};

export const getKabupatens = async (id = 0) => {
    try {
        const { data, status, statusText } = await axios.get(`${URLKAB}/${id}`);
        return { data, status, statusText };
    } catch (error) {
        console.log(error);
    }
};

export const getKecamatan = async (id = 0) => {
    try {
        const { data, status, statusText } = await axios.get(`${URLKEC}/${id}`);
        return { data, status, statusText };
    } catch (error) {
        console.log(error);
    }
};

export const getDesa = async (id = 0) => {
    try {
        const { data, status, statusText } = await axios.get(
            `${URLDESA}/${id}`
        );
        return { data, status, statusText };
    } catch (error) {
        console.log(error);
    }
};
