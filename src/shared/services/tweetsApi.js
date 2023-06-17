import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://64070bc6862956433e622bcc.mockapi.io/api/users',
});

export const getAllUsers = async (page=1, limit=3 ) => {
    const result = await instance.get(`?page=${page}&limit=${limit}`);
    console.log('result', result);
  return result.data;
};

export const updUserFollowing = async ({ id, following, followers }) => {
  const result = await instance.put(`${id}`, { following, followers });
  return result.data;
};

export const getUserByCategory = async category => {
  const result = await instance.get(`?${category}`);
  return result.data;
};
