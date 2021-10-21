import request from '@/utils/request'
const urlPath = '/product-categories/'

export function fetchList(query) {
  return request({
    url: `${urlPath}`,
    method: 'get',
    params: query,
  })
}

export function remove(data) {
  return request({
    url: `${urlPath}`,
    method: 'delete',
    data,
  })
}

export function getDetail(id) {
  return request({
    url: `${urlPath + id}`,
    method: 'get',
  })
}

export function create(data) {
  return request({
    url: `${urlPath}`,
    method: 'post',
    data,
  })
}

export function update(data) {
  return request({
    url: `${urlPath + data.id}`,
    method: 'put',
    data,
  })
}

export function findByIds(ids) {
  return request({
    url: `${urlPath}find-by-ids`,
    method: 'post',
    ids,
  })
}
