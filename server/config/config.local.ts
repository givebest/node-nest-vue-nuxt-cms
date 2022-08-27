// 开发环境配置
export default () => ({
  mysql: {
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '123456789',
    database: 'nest_cms_api',
    synchronize: false,
  },
});
