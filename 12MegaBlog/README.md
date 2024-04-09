# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Procedure for this project
### A. Setup enviroment variables:
1. We need them for operations where we want the server to directly interact with the application. For eg., ID, password, etc. we need these values to be stored as system variables as we cannot use them in React as it is a front-end library of javascript, so, it can accessed by the browser itself. When we deploy our project in vercel, etc., there they have a seperate secret manager for handling these variables and accessing them. The methods of accessibility depends on installing path of react, for eg. react-app, vite, etc.
2. The enviroment variable must be at the root of the project, ie, it must not be inside any folder like App.jsx, etc.
3. It is of the format '.env', it is necessary to start the name of enviroment variable with '.'.
4. We never ship this '.env' file to github, so we add it to gitignore.
5. But since we will need to use the variables made, we make a sample file named '.env.sample' having only the names of variables equivalent to null string, 0, etc.
6. There are different ways of accessing enviroment variables for front-end, back-end, there are even different ways for accessing them in react itself depending upon the type of installer, for eg., react-app, vite.