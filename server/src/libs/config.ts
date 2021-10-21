const baseHosts = {
  // development
  development: {
    baseHost: 'http://localhost:3000/',
    uploadPath: 'public/',
  },

  // production
  production: {
    baseHost: 'http://app.api',
    uploadPath: 'public/',
  },
};

export { baseHosts };
