import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/users',
    method: 'get',
    params: query,
  })
}

export function remove(data) {
  return request({
    url: '/users',
    method: 'delete',
    data,
  })
}

export function getDetail(id) {
  return request({
    url: '/users/' + id,
    method: 'get',
  })
}

export function fetchPv(pv) {
  return request({
    url: '/vue-element-admin/article/pv',
    method: 'get',
    params: { pv },
  })
}

export function create(data) {
  return request({
    url: '/users',
    method: 'post',
    data,
  })
}

export function update(data) {
  return request({
    url: '/users/' + data.id,
    method: 'put',
    data,
  })
}

export function updatePassword(data) {
  return request({
    url: '/users/password/' + data.id,
    method: 'put',
    data,
  })
}

export function nameIsExists(username) {
  return request({
    url: '/users/username/' + username,
    method: 'get',
  })
}
