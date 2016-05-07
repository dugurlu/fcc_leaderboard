# webpack_scaffolding
Scaffolding that can be used to as entry point for new Node, Webpack, React, Sass projects.


## Features 
- ES6, JSX via `babel-loader`
- [SASS](http://sass-lang.com/)
- CSS autoprefixing via `postcss/autoprefixer`
- [React](https://facebook.github.io/react/)
- [webpack](https://github.com/webpack/webpack)
- [webpack-dev-server](https://github.com/webpack/webpack-dev-server)

## Usage
### Install
To use webpack, react and all the other good stuff, first install the node dependencies with `npm install`.

### Build
Build your application with `webpack`.

### webpack-dev-server
Start the server with `npm run dev`.

Server uses `--inline` and `--hot` to refresh on changes.

The server can be accesses at [http://localhost:8081](http://localhost:8081)

### Switch between debug/production mode
To switch between debug and production, `NODE_ENV` can be used like this:
`NODE_ENV=production webpack` or `NODE_ENV=production npm run <script>`


###  Import React or CSS
To use react, simply import it: 
```
import React  from 'react'
import ReactDOM from 'react-dom'
```

To import CSS via javascript (supports .css as well as .scss file extensions):
`var css = require('../css/style.css')` or `import CSS from '../css/style.css'`



