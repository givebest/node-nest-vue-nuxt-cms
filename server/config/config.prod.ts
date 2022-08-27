// 生产环境配置
export default () => ({
  mysql: {
    host: '10.0.224.4',
    port: 25532 || 3306,
    username: 'root',
    password: '',
    database: 'nest_cms_api',
    synchronize: false,
  },
});
