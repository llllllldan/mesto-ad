import axios from "axios";

const config = {
  baseUrl: "https://mesto.nomoreparties.co/v1/apf-cohort-203",
  headers: {
    authorization: "fb15848b-5663-40d8-95ca-b42a7eae5a20",
    "Content-Type": "application/json",
  },
};

export const getUserInfo = () => {
  return axios
    .get(`${config.baseUrl}/users/me`, { headers: config.headers })
    .then((res) => res.data);
};

export const getCardList = () => {
  return axios.get(`${config.baseUrl}/cards`, { headers: config.headers }).then((res) => res.data);
};

export const setUserInfo = ({ name, about }) => {
  return axios
    .patch(`${config.baseUrl}/users/me`, { name, about }, { headers: config.headers })
    .then((res) => res.data);
};

export const setUserAvatar = (avatar) => {
  return axios
    .patch(`${config.baseUrl}/users/me/avatar`, { avatar }, { headers: config.headers })
    .then((res) => res.data);
};

export const addNewCard = ({ name, link }) => {
  return axios
    .post(`${config.baseUrl}/cards`, { name, link }, { headers: config.headers })
    .then((res) => res.data);
};

export const deleteCardFromServer = (cardId) => {
  return axios
    .delete(`${config.baseUrl}/cards/${cardId}`, { headers: config.headers })
    .then((res) => res.data);
};

export const changeLikeCardStatus = (cardId, isLiked) => {
  if (isLiked) {
    return axios
      .delete(`${config.baseUrl}/cards/likes/${cardId}`, {
        headers: config.headers,
      })
      .then((res) => res.data);
  } else {
    return axios
      .put(`${config.baseUrl}/cards/likes/${cardId}`, {}, { headers: config.headers })
      .then((res) => res.data);
  }
};
