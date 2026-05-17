const config = {
  baseUrl: "https://mesto.nomoreparties.co/v1/apf-cohort-203",
  headers: {
    authorization: "452def1e-bcd7-4069-a33c-c4f8cef5efe1",
    "Content-Type": "application/json",
  },
};

const request = (url, options = {}) => {
  return fetch(`${config.baseUrl}${url}`, {
    ...options,
    headers: config.headers,
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
};

export const getUserInfo = () => {
  return request(`/users/me`);
};

export const getCardList = () => {
  return request(`/cards`);
};

export const setUserInfo = ({ name, about }) => {
  return request(`/users/me`, {
    method: "PATCH",
    body: JSON.stringify({ name, about }),
  });
};

export const setUserAvatar = (avatar) => {
  return request(`/users/me/avatar`, {
    method: "PATCH",
    body: JSON.stringify({ avatar }),
  });
};

export const addNewCard = ({ name, link }) => {
  return request(`/cards`, {
    method: "POST",
    body: JSON.stringify({ name, link }),
  });
};

export const deleteCardFromServer = (cardId) => {
  return request(`/cards/${cardId}`, {
    method: "DELETE",
  });
};

export const changeLikeCardStatus = (cardId, isLiked) => {
  const method = isLiked ? "DELETE" : "PUT";
  return request(`/cards/likes/${cardId}`, {
    method,
  });
};
