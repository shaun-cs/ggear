# ggear

## setup
Either:
**npm install http-server -g**
and/or:
**npm install live-server -g**

1. npm init -y
2. npm install

## operation
test: `npm test`

start using live-server: `npm start`

## tricky things
All packages upgraded ok, except for **SystemJS**.
This package has changed radically, and is not backward compatible.
It now needs a plugin called **plugin-typescript** in order to be able to find and load the **typescript** package.
The documentation for configuring **SystemJS** is sketchy; what I have done in **systemjs.config.js** is more trial and error than certainty.
Would be loathed to deploy this into production without fully understanding it.

## TODOs

##### SystemJS configuration: 
really understand what configuration files are needed and how it works with typescript

##### Study Typescript import syntax
https://blog.jdriven.com/2017/06/typescript-and-es6-import-syntax/

