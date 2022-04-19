import axios from "axios"
import qs from "query-string"

export function loginApi(payload) {
  return axios({
    method: 'POST',
    url: '/login',
    data: payload,
  })
  .then(res => res.data)
  .catch(err => {
    throw err.response.data
  })
}

export function registerApi(payload) {
  return axios({
    method: 'POST',
    url: '/register',
    data: payload,
  })
  .then(res => res.data)
  .catch(err => {
    throw err.response.data
  })
}

export function updateUser(payload, token) {
  return axios({
    method: 'POST',
    url: '/user/update',
    data: payload,
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  .then(res => res.data)
  .catch(err => {
    throw err.response.data
  })
}

export function getTransaksi(params, token) {
  return axios({
    method: 'GET',
    url: `/admin/transaction/show?${qs.stringify(params)}`,
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  .then(res => res.data)
  .catch(err => {
    throw err.response.data
  })
}

export function deleteTransaksi(id, token) {
  return axios({
    method: 'DELETE',
    url: `/admin/transaction/${id}`,
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  .then(res => res.data)
  .catch(err => {
    throw err.response.data
  })
}

export function getPetugas(params, token) {
  return axios({
    method: 'GET',
    url: `/user/all?${qs.stringify(params)}`,
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  .then(res => res.data)
  .catch(err => {
    throw err.response.data
  })
}

export function deletePetugas(id, token) {
  return axios({
    method: 'DELETE',
    url: `/user/${id}`,
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  .then(res => res.data)
  .catch(err => {
    throw err.response.data
  })
}

export function getRiawayat(params, token) {
  return axios({
    method: 'GET',
    url: `/pickup/snapshoot/view?${qs.stringify(params)}`,
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  .then(res => res.data)
  .catch(err => {
    throw err.response.data
  })
}

export function checkPassword(payload, token) {
  return axios({
    method: 'POST',
    url: `/user/check-password`,
    headers: {
      'Authorization': `Bearer ${token}`
    },
    data: payload,
  })
  .then(res => res.data)
  .catch(err => {
    throw err.response.data
  })
}

export function changePassword(payload, token) {
  return axios({
    method: 'POST',
    url: `/user/change-password`,
    headers: {
      'Authorization': `Bearer ${token}`
    },
    data: payload,
  })
  .then(res => res.data)
  .catch(err => {
    throw err.response.data
  })
}