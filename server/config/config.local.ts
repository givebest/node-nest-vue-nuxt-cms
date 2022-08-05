// 开发环境配置
export default () => ({
  mysql: {
    host: 'localhost',
    port: 3306,
    username: 'nest_cms_api',
    password: 'nest_cms_api',
    database: 'nest_cms_api',
    synchronize: true,
  },
});
