import request from '@/utils/request'

export function productsCount() {
  return request({
    url: '/products/list/count',
    method: 'get',
  })
}

export function bannerCount() {
  return request({
    url: '/banner/list/count',
    method: 'get',
  })
}

export function aboutCount() {
  return request({
    url: '/about/list/count',
    method: 'get',
  })
}

export function usersCount() {
  return request({
    url: '/users/list/count',
    method: 'get',
  })
}
