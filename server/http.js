import axios from 'axios'

let baseUrl = '/'
axios.defaults.baseURL = baseUrl
axios.defaults.timeout = 30000
axios.defaults.withCredentials = true

// 请求拦截器，设置token
axios.interceptors.request.use(config => {
    //暂时不设置config
    return config
}, error => {
    // 可以安装elementui等ui组件，将错误信息输出到界面。
    console.log(error)
    return Promise.error(error)
})
// 响应拦截器
axios.interceptors.response.use(response => {
    if (response.status === 200) {
        //相应的拦截设置
          return Promise.resolve(response.data)

    } else {
        return Promise.reject(response.data)
    }
})

// 2、封装请求方式
// @param url 接口地址
// @param data 携带参数
// @param file 上传文件对象
// @param auth 是否携带token
// get请求
export function get (url, data) {
    return axios.get(url, data)
}
// post请求
export function post (url, data) {
    return axios.post(url, data)
}
// put请求
export function put (url, data) {
    return axios.put(url, data)
}
// delete 请求
export function del (url, data) {
    return axios.delete(url, data)
}
// upload 请求
export function uploader (url, file) {
    let params = new FormData()
    params.append('file', file)
    return axios.post(url, params)
}