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
  follow(userID) {
    // return instance.post(`follow/${userID}`, {}).then((response) => response.data);
    return instance.post(`follow/${userID}`).then((response) => response.data);
  },
  unfollow(userID) {
    return instance.delete(`follow/${userID}`).then((response) => response.data);
  },
  getProfile(userID) {
    console.warn('Deprecated method. Please use profileAPI object');
    return profileAPI.getProfile(userID);
  },
};

export const profileAPI = {
  getProfile(userID) {
    return instance.get(`profile/${userID}`);
  },
  getStatus(userID) {
    return instance.get(`profile/status/${userID}`);
  },
  updateStatus(status) {
    return instance.put(`profile/status/`, { status: status });
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login/`, {
      email: email,
      password: password,
      rememberMe: rememberMe,
    });
  },
  logout() {
    return instance.delete(`auth/login/`);
  },
};
