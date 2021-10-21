# GiiBee CMS

> A CMS system developed using nest.js based on node.js and nuxt.js based on vue.js, which can generate static HTML and is beneficial to SEO.


## Getting started

### CMS API server

```bash
cd server

npm install 

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

* Serve: [http://localhost:3000/](http://localhost:3000/)
* API documentation: [http://localhost:3000/api/](http://localhost:3000/api/)

### CMS management

```bash
cd admin

npm install 

# serve with hot reload at localhost:3002
npm run dev

# build for production and launch server

npm run build:stage

npm run build:prod
```

* Serve: [http://localhost:3002/](http://localhost:3002/)


### CMS web

```bash
cd web

npm install 

# serve with hot reload at localhost:3001
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

* Serve: [http://localhost:3001/](http://localhost:3001/)


## Features

* NestJS + MySql output API.
* NuxtJS + Vue + Bootstrap-vue can generate static HTML for the whole site.
* Element UI + Vue realizes CMS management.
* Front-end and back-end separation.
* Commodity classification supports custom routing and web page description (SEO).
* Product name supports custom routing and web page description (SEO).
* Responsive web pages, adapted to PC and mobile terminals.

## screenshot

### CMS web
![home](screenshot/web/mobile-home.png)    

![home](screenshot/web/home.jpg)    

![product](screenshot/web/mobile-product.png)    

![product](screenshot/web/product.jpg)    

![about](screenshot/web/mobile-about.png)    
![about](screenshot/web/about.jpg)    

### CMS management

![banner](screenshot/admin/banner.png)    

![product](screenshot/admin/product-create.png)    

![product](screenshot/admin/product.png)    

### CMS  API

![API](screenshot/server/api.jpg)    

## License

[Apache License 2.0](LICENSE).
