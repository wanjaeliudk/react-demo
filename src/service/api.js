import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getUsers = () => {
  return axios.get(`${BASE_URL}/users`);
};

export const getAlbums = () => {
  return axios.get(`${BASE_URL}/albums`);
};

export const getUserById = (userId) => {
  return axios.get(`${BASE_URL}/users/${userId}`);
};

export const getUserAlbums = (userId) => {
  return axios.get(`${BASE_URL}/albums?userId=${userId}`);
};

export const getAlbumById = (albumId) => {
  return axios.get(`${BASE_URL}/albums/${albumId}`);
};

export const getAlbumPhotos = (albumId) => {
  return axios.get(`${BASE_URL}/photos?albumId=${albumId}`);
};

export const getPhotoById = (photoId) => {
  return axios.get(`${BASE_URL}/photos/${photoId}`);
};

export const updatePhotoTitle = (photoId, title) => {
  return axios.patch(`${BASE_URL}/photos/${photoId}`, { title });
};
