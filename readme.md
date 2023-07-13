# custom components demo project

type `npm start` to start the dev server

## some key notes -

- the custom elements are defined in index.js file along with their respective html templates
- the custom elements MUST HAVE A HYPHEN (-) IN THEIR NAME
- import the custom elements in index.js file and create an array of them along with their names and templates | see [index.js](./src/index.js) file for reference

## uses -

- [webpack](https://webpack.js.org/)
  to compile the code and bundle it into a single file
- [html-loader](https://webpack.js.org/loaders/html-loader/)
  to import the html templates directly into the js file
- [html-webpack-plugin](https://webpack.js.org/plugins/html-webpack-plugin/)
  to generate the html file with the bundled js file
- [custom-elements](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements)
  to create custom elements with our own tag names

## dev dependencies -

- [webpack-cli](https://www.npmjs.com/package/webpack-cli)
  to run webpack commands from the terminal
- [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server)
  to run the dev server
