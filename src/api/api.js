import axios from 'axios';

const API_BASE_URL = 'https://rickandmortyapi.com/api';

export const fetchEpisodes = (page = 1) => {
    return axios.get(`${API_BASE_URL}/episode?page=${page}`);
};

export const fetchEpisode = (id) => {
    return axios.get(`${API_BASE_URL}/episode/${id}`);
};

export const fetchCharacter = (id) => {
    return axios.get(`${API_BASE_URL}/character/${id}`);
};
