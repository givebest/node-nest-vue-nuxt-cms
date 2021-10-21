import Layout from '@/layout'

const productRouter = {
  path: '/product',
  component: Layout,
  redirect: '/product/list',
  name: 'Product',
  meta: {
    title: 'product',
    icon: 'example',
  },
  children: [
    {
      path: 'list',
      component: () => import('@/views/product/list'),
      name: 'ProductListManagement',
      meta: { title: 'productListManagement', noCache: true },
    },
    {
      path: 'create',
      component: () => import('@/views/product/create'),
      name: 'ProductCreate',
      breadcrumb: false,
      meta: { title: 'productCreate', noCache: true },
    },
    {
      path: 'update',
      component: () => import('@/views/product/update'),
      hidden: true,
      name: 'ProductUpdate',
      breadcrumb: false,
      meta: { title: 'productUpdate', noCache: true },
    },

    // 分类
    {
      path: 'category/list',
      component: () => import('@/views/product/category/list'),
      name: 'CategoryManagement',
      meta: { title: 'categoryManagement', noCache: true },
    },
    {
      path: 'category/create',
      component: () => import('@/views/product/category/create'),
      hidden: true,
      name: 'ProductCategoryCreate',
      breadcrumb: false,
      meta: { title: 'productCategoryCreate', noCache: true },
    },
    {
      path: 'category/update',
      component: () => import('@/views/product/category/update'),
      hidden: true,
      name: 'ProductCategoryUpdate',
      breadcrumb: false,
      meta: { title: 'productCategoryUpdate', noCache: true },
    },
  ],
}
export default productRouter
