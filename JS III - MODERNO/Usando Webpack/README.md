# WEBPACK

## Install
```node
npm i -D webpack webpack-cli
```
<br>

## How to use
```node
npx webpack
```
<br>

## Configuring Webpack
create the file `webpack.config.js`

- Development
    ```js
    const path = require('path');

    module.exports = {
        entry: {
            index: './src/index.js',
            hello: './src/hello.js'
        },
        mode: 'development',
        output: {
            path: path.resolve(__dirname, 'public'),
            filename: '[name].bundle.min.js'
        }
    }
    ```
<br>

- Production
    ```js
    const path = require('path');

    module.exports = {
        entry: {
            index: './src/index.js',
            hello: './src/hello.js'
        },
        mode: 'production',
        output: {
            path: path.resolve(__dirname, 'public'),
            filename: '[name].bundle.min.js'
        }
    }
    ```
<br><br>

## Utilizing Loaders
example utilizing CSS

1. install loader:
    ```node
    npm i -D style-loader css-loader
    ``` 
2. include the `module` in the `webpack.config.js`:
    ```js
    module.exports = {
        entry: {
            index: './src/index.js',
        },
        mode: 'development',
        module: {
            rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }]
        }
    }
    ```
3. import CSS from file .js
    ```js
    import dayjs from 'dayjs'
    import './styles/index.css'

    alert(`Hoje é: ${dayjs().format("DD/MM/YYYY")}`)
    ```
4. run webpack
    ```node
    npx webpack
    ```
<br>

## Utilizing Plugins
example utilizing CSS

1. install loader:
    ```node
    npm i -D mini-css-extract-plugin
    ``` 
2. include the `plugins` in the `webpack.config.js`:
    ```js
    const MiniCssExtractPlugin = require('mini-css-extract-plugin')

    module.exports = {
        entry: {
            index: './src/index.js',
        },
        mode: 'development',
        module: {
            rules: [{
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }]
        },
        plugins: [
            new MiniCssExtractPlugin()
        ]
    }
    ```