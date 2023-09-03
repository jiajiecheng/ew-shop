import http from '@/utils/http'
import type { AxiosResponse } from 'axios'
// 获取主页全部数据
export function getHomeData(parmars?: any): Promise<AxiosResponse<any, any>> {
  return http.get('/api/index', parmars)
}