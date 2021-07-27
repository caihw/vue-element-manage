/* eslint-disable */
import request from 'axios'
/* 重复点击取消上一次请求 */
let pending = []
let cancelToken = request.CancelToken
const removePending = (config) => {
  for (let p in pending) {
    if (pending[p].u === config.url + JSON.stringify(config.data) + '&' + config.method) {
      pending[p].f() //执行取消操作
      pending.splice(p, 1)
    }
  }
}
// 请求拦截器配置
request.interceptors.request.use(
  (config) => {
    removePending(config)
    config.cancelToken = new cancelToken((c) => {
      pending.push({ u: config.url + JSON.stringify(config.data) + '&' + config.method, f: c })
    })
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 返回拦截器配置
request.interceptors.response.use(
  (response) => {
    removePending(response.config)
    return response
  },
  (error) => {
    return Promise.resolve(error.response)
  }
)

const baseURL = import.meta.env.VITE_APP_BASE_API || ''
const httpServer = (opts, data) => {
  let token = localStorage.getItem('token')
  let HYtimestamp = new Date().getTime()
  let Public = {
    //公共参数
    HYtimestamp: HYtimestamp
  }
  let httpData = null
  if (opts.contentType === 'multipart/form-data') {
    if (data instanceof FormData) {
      httpData = data
    } else {
      const formData = new FormData()
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key])
      })
      httpData = formData
    }
  } else {
    if (opts.hasNoHYtimestamp) {
      httpData = opts.paramsIsAry ? data : Object.assign(data)
    } else {
      httpData = Object.assign(Public, data)
    }
  }
  let httpDefaultOpts = {
    //http默认配置
    method: opts.method || '',
    baseURL: opts.baseURL || baseURL, // 接口公共部分
    responseType: opts.responseType ?? '',
    url: opts.url,
    timeout: opts.timeout ?? 60000,
    params: httpData,
    data: httpData,
    headers:
      opts.method.toLowerCase() == 'get'
        ? {
            //配置请求头数据
            'X-Requested-With': 'XMLHttpRequest',
            Accept: 'application/json, text/plain, */*, application/octet-stream',
            'Content-Type': opts.contentType || 'application/json; charset=UTF-8',
            token: token
          }
        : {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': opts.contentType || 'application/json',
            token: token
          }
  }

  if (opts.method.toLowerCase() == 'get' || opts.method.toLowerCase() == 'delete') {
    delete httpDefaultOpts.data
  } else {
    if (opts.paramsIsAry && opts.method.toLowerCase() === 'post') {
      delete httpDefaultOpts.data
    } else {
      delete httpDefaultOpts.params
    }
  }
  let promise = new Promise((resolve, reject) => {
    request(httpDefaultOpts)
      .then((res) => {
        resolve(res)
      })
      .catch((response) => {
        reject(response)
      })
  })
  return promise
}

export default httpServer
