import axios from 'axios'

export const HOST = 'https://www.easy-mock.com/mock/5b596a1c2d340a0cf1673504/fallowfish'

export const HOST_LOCAL = '/BBLServer/'

export const HOST_FILE_LOCAL = '/BBLFiLeServer/'

export const PERFIX_IMAGE = 'http://127.0.0.1:8080/BBLFiLeServer/upload/'

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

export function doLogin(params, params1) {
  const url = HOST_LOCAL + 'login.do'
  //第一种写法
  console.log(params, 'params***')
  //第二种写法
  console.log(params1, 'params%%%%')
  return axios.post(url, params, {
    headers: {
      Authorization: 'Bearer 5llcq3GiwABUg-Fxs...',
      Accept: 'application/json',
      dataType: 'JSONP',//重点在这里，加上这个属性就可以跨域请求了
    }
  })
}

export function doRegist(params) {
  const url = HOST_LOCAL + 'regsiter.do'
  return axios.post(url, params, {
    headers: {
      Authorization: 'Bearer 5llcq3GiwABUg-Fxs...',
      Accept: 'application/json',
      dataType: 'JSONP',
    }
  })
}

export function doFindcheckphoto(params) {
  const url = HOST_LOCAL + 'findcheckphoto.do'
  return axios.post(url, params, {
    headers: {
      Authorization: 'Bearer 5llcq3GiwABUg-Fxs...',
      Accept: 'application/json',
      dataType: 'JSONP',
    }
  })
}

export function doFindcomplanitpagelist(params) {
  const url = HOST_LOCAL + 'findcomplanitpagelist.do'
  return axios.post(url, params, {
    headers: {
      Authorization: 'Bearer 5llcq3GiwABUg-Fxs...',
      Accept: 'application/json',
      dataType: 'JSONP',
    }
  })
}

//上传图片保存路径
export function doUpheadimage(params) {
  const url = HOST_LOCAL + 'upheadimage.do'
  return axios.post(url, params, {
    headers: {
      Authorization: 'Bearer 5llcq3GiwABUg-Fxs...',
      Accept: 'application/json',
      dataType: 'JSONP',
    }
  })
}

//上传图片
export function doUpload(params, file) {
  const url = HOST_FILE_LOCAL + 'fileupload.do'
  var formdata = new FormData();// 创建form对象
  formdata.append('img', file, params.name);// 通过append向form对象添加数据,可以通过append继续添加数据
  console.log(params.name, '>>>name')
  let config = {
    headers: {'Content-Type': 'multipart/form-data'}
  };
  return axios.post(url, formdata, config)
}
