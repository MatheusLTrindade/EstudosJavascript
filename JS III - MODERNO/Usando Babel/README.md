# BABEL

## Install
```node
npm i -D @babel/core @babel/cli @babel/preset-env
```
<br>

## How to use

Use in terminal:
```node
npx babel file_name.js
```
or create new file:
```node
npx babel file_name.js --out-file new_file_name.js
```
<br>

## Using Preset
preset is used to make files compatible with previous versions
```node
npx babel file_name.js --out-file new_file_name.js --presets=@babel/preset-env
```
or compile all files in the folder for to a new folder:
```node
npx babel name_folder --out-dir new_name_folder --presets=@babel/preset-env 
```
<br>

## Create shortcut script
```json
{
  "name": "babel",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "babel" : "babel src --out-dir dist --presets=@babel/preset-env"
  },
  "keywords": [],
  "author": "Matheus",
  "license": "ISC",
  "devDependencies": {
    "@babel/cli": "^7.22.5",
    "@babel/core": "^7.22.5",
    "@babel/preset-env": "^7.22.5"
  }
}
```
then just use the command:
```node
npm run babel
```

#### Another option is to create the file `babel.config.js` and include in it:
```js
module.exports = {
    presets: [
        ["@babel/preset-env"]
    ]
}
```
and alter o shortcut script `babel` for:
```json
{
  "name": "babel",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "babel" : "babel src --out-dir dist"
  },
  "keywords": [],
  "author": "Matheus",
  "license": "ISC",
  "devDependencies": {
    "@babel/cli": "^7.22.5",
    "@babel/core": "^7.22.5",
    "@babel/preset-env": "^7.22.5"
  }
}
```
then just use the command:
```node
npm run babel
```
