import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: { 'API-KEY': 'fc0e9266-ee84-4d92-8045-eb80a5b49b4c' },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },

  followUser(id) {
    return instance.post(`follow/${id}`, {}).then((response) => response.data);
  },

  unfollowUser(id) {
    return instance.delete(`follow/${id}`, {}).then((response) => response.data);
  },
};
