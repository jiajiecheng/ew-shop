import request from './request'

const http = {
  get(url: string, params?: any, headers?: any) {
    const config = {
      method: 'GET',
      url,
      params: params ? params : {},
      headers: headers ? headers : {}
    }
    return request(config);
  },
  post(url: string, data?: any, headers?: any) {
    const config = {
      method: 'POST',
      url,
      data: data ? data : {},
      headers: headers ? headers : {}
    }
    return request(config);
  }
}

export default http