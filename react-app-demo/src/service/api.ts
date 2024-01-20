import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getUsers = async() => {
  return (await axios.get(`${BASE_URL}/users`)).data
};

export const getAlbums = async() => {
  return (await axios.get(`${BASE_URL}/albums`)).data
};

export const getUserById = async(userId: any) => {
  const res = await axios.get(`${BASE_URL}/users/${userId}`);
  return res.data
};

export const getUserAlbums = async(userId: any) => {
  return (await axios.get(`${BASE_URL}/albums?userId=${userId}`)).data
};

export const getAlbumById = async(albumId: number) => {
  return (await axios.get(`${BASE_URL}/albums/${albumId}`)).data
};

export const getAlbumPhotos = (albumId: any) => {
  return axios.get(`${BASE_URL}/photos?albumId=${albumId}`);
};

export const getPhotoById = (photoId: any) => {
  return axios.get(`${BASE_URL}/photos/${photoId}`);
};

export const updatePhotoTitle = (photoId: any, title: any) => {
  return axios.patch(`${BASE_URL}/photos/${photoId}`, { title });
};
