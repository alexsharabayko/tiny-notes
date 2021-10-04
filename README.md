# tiny-notes

A tiny project to show main concepts of programming on React js.

It was create with manual webpack config, not with create-react-app or something like that

## Available commands

- `npm start` - start dev server on port 6001
- `npm run build` - builds app to a dist folder
- `npm run g css-component "my component"` - build with outputting ifo to `app-stats.json` file which can be  seen in https://chrisbateman.github.io/webpack-visualizer/

## How to run the app

 - Clone the project
 - Go to the project folder
 - Run `npm install`
 - Run `npm start`
 
 ## Project Structure
 
 ## Root folder
 
 - `src` - app code folder
 - `webpack.config.js` - bundler config file
 - `tsconfig.js` - ts config file
 
 ### Src folder:

- `apis` - folder which contains all calls to APIs (now it;s just emulated)
- `components` - common reusable components, which depend only on their props
- `domains` - shared interfaces, types, constants
- `screens` - components which are connected to business logic and can influence on global state
- `styles` - folder which consist of app global styles and helpers
- `utils` - helpers functions/methods for routine tasks: formatting, updating, some calculating, etc.
- `globals.d.ts` - file contains some global declarations for correct ts work
- `index.html` - pattern file for index file in dist
- `index.js` - main entry js file

### A component folder:

- main .js file
- css module (if it's needed)
- additional .js files (also they could be placed in `components` folder)
- assets folder (if it's required)

## What need to be added to extend the app

- Prettier: to make formatting the same across the app
- EsLint: to make code style the same across the app
- Store: for small size apps like this it's not required at all, but if an app is going to have more that a few pages - some approach is required 
- Components Generator: some approach to quickly create a component: js file with predefined component function + css file    
- Tests: some tests to decrease regression
