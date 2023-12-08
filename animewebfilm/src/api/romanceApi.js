import axiosClient from "./axiosClient";

const romanceApi = {
    getAll(params) {
        const url = '/informations';
        return axiosClient.get(url, { params });
    },

    get(id) {
        const url = `/informations/${id}`;
        return axiosClient.get(url);
    },

    add(data) {
        const url = '/informations';
        return axiosClient.post(url, data);
    },

    update(data) {
        const url = `/informations/${data.id}`;
        return axiosClient.patch(url, data);
    },

    remove(id) {
        const url = `/informations/${id}`;
        return axiosClient.delete(url);
    }
};

export default romanceApi;