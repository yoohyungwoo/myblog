export interface IReqOptions {
  method: string
  meta?: object
  headers?: HeadersInit
  data?: object
  params?: any
}
export interface ISystemError {
  code?: string
  httpStatusCode?: number
  message?: string
}

export const prefixUrl: string = import.meta.env.VITE_API_CONTEXT_PATH

export const request = async (url: string, options: IReqOptions) => {
  const { method, headers, data, params } = options
  const reqObj: RequestInit = {
    method,
  }
  const header = new Headers()

  if (!headers) {
    header.append('Content-Type', 'application/json')
    reqObj.headers = header
  }
  else {
    // header가 별도로 필요할때 호출하는곳에서 넘겨줘야함. 예) 엑셀다운로드
    reqObj.headers = headers
  }
  if (data)
    reqObj.body = JSON.stringify(data)

  url = `${prefixUrl}${url}`
  if (params) {
    Object.keys(params).forEach((key) => {
      if (!params[key])
        delete params[key]
    })
    const paramsStr = Object.keys(params).map(key => `${key}=${params[key]}`).join('&')
    url = `${url}?${paramsStr}`
  }
  try {
    const response = await fetch(url, reqObj)
    if (response.ok)
      return response.json()
  }
  catch (e) {
    return e
  }
}
