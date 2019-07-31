
# REACT - REDUX - REACT ROUTER - SCSS Boilerplate
This boilerplate made using create-react-app with extra tweak, if you want to customize the webpack bundler, you can eject the react script using command *'npm run eject'*

> Work smart, not work hard.

 - ✅ Redux & Redux Dev Tools
 - ✅ SCSS
 - ✅ Managable File Directory
 - ✅ Axios
 - ✅ Service Call Wrapper With Interceptor (https://github.com/squalvj/frontendServiceArchitecture)
 - ✅ Proptypes
 - ✅ Lodash
 - ✅ React Router
 - ✅ Enzyme
 - ✅ Alias Import Abolute Path
 - ✅ .env production & development
 - ✅ mocks for offline api

# Folder Structure
*Make the structrure even more tidy than your room*

The folder structure is really easy to manage and it has strong meaning for new developer that would maintain this project, it would fit you guys that have OCD :)
This kind of structure is being used in large scale apps on my experience and quite reliable.
```
project
│   README.md
│   package.json
│   .env.development -> environment dev
│   .env.production -> environment production
└───build -> Builded package...
└───src
|	App.js -> Wrapper root component place modal here...
|	└───service -> List api & generic service wrapper...
|	└───store -> Configure the store settings...
|	└───reducers -> The place for all reducers...
|	└───module -> Standard getter call and custom error handling...
|	└───styles -> Base & Generic css class...
|	└───mocks -> Offline response mock for testing...
|	└───utils -> Generic reusable function...
|	└───components -> Generic component...
|	└───container
|	|	└───[NAME_OF_CONTAINER] -> can be wrapper for connecting redux state
|	|	|	└───COMPONENT -> the component inside container & the style itself
```

![enter image description here](https://i.kym-cdn.com/photos/images/newsfeed/001/206/382/b7a.gif)



# How to run
You might want to setup environment for development and production seperately, you can do this by:
- .env.development -> Setting variable for dev mode
- .env.production -> Setting variable for production mode

Running the project is easy like snapping your finger.

 1. install the dependencies by running 'yarn'
 2. run 'npm run start' to start development mode
 3. thats all...

## Build

 1. run 'npm run build'
 2. the compile file will be inside the folder **build**


Feel free to contact me if anything happen on squalvj@gmail.com
<br />
Medium: [https://medium.com/@squalvj](https://medium.com/@squalvj)
<br />
Github: [https://github.com/squalvj](https://github.com/squalvj)
<br />
Codepen: [https://codepen.io/squalvj/](https://codepen.io/squalvj/)