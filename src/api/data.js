import axios from 'axios'
export const HOST = 'https://www.easy-mock.com/mock/5b596a1c2d340a0cf1673504/fallowfish'

export const HOST_LOCAL = 'http://127.0.0.1:8080/BBLServer/'

export const ERR_OK = 200;

export function getSearchresult() {
  const url = HOST + '/search/results'
  return axios.get(url)
}

export function getCategory() {
  const url = HOST + '/category'
  return axios.get(url)
}

export function getIndexbanner() {
  const url = HOST + '/indexbanner'
  return axios.get(url)
}

export function getIconlist() {
  const url = HOST + '/iconlist'
  return axios.get(url)
}

export function getTypelist() {
  const url = HOST + '/typelist'
  return axios.get(url)
}

export function getSmBanner() {
  const url = HOST + '/smallbanner'
  return axios.get(url)
}

export function getIndexNav() {
  const url = HOST + '/indexnav'
  return axios.get(url)
}

export function getBanner() {
  const url = HOST + '/banner'
  return axios.get(url)
}

export function getInterests() {
  const url = HOST + '/interests'
  return axios.get(url)
}
export function getQuestions() {
  const url = HOST + '/questions'
  return axios.get(url)
}

export function getTuhao() {
  const url = HOST + '/tuhao'
  return axios.get(url)
}

export function getChina() {
  const url = HOST + '/china'
  return axios.get(url)
}

export function getLists() {
  const url = HOST + '/lists'
  return axios.get(url)
}

export function doLogin({ commit, state }, params) {
  const url = HOST_LOCAL + 'login.do'
  return axios({
    url: url,
    type: 'POST',
    dataType: 'JSONP'//重点在这里，加上这个属性就可以跨域请求了
  })
}
