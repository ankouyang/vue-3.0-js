import { get } from './http'

export const LIST = (params) => get('/list', params, false)