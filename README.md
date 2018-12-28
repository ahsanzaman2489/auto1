# Auto1 test
##### front end developer screening test for the auto1 


# Stack
* React
* Redux 
* ES6
* Webpack
* SaSS
* Jest 
* Enzyme
* flow


# Architecture
I defined following layers for my application 

* Containers hold state for child component. 
* React views are in components.
* Services • common service for all actions.  
* Lazy Loads component • component which render other component on demand.  
* Store All of the communication between these layers is one way. 

For example React Views => Action Creators => Store => React Views. 
Just Action Creators layer through Service layer can communicate with external APIs.
I used Redux-thunk for asynchronously dispatch actions to store. 
 
# Folder Structure: 
In React application folder structure varies depending on how your team mutual decision. I usually adopt the following structure. 
* Whole application will reside in src folder. 
* App configurations will reside in config folder. 
* npm scripts in scripts folder. 


# Routes: 
* HOST/cars/list 
* HOST/cars/detail/:stockNumber
 
# Tests:(Unit, snapshot)  
* Reducers
* Actions
* Components
* Containers 

# Prerequisite
* Windows
* Nodejs
* npm

##### scripts
* To start development server ```npm start```
* To run all test ```npm run test```
* To run all test and to generate test coverage ```npm run coverage```

# Project setup (Windows)
* open command prompt
* clone this project in you computer with git``` git clone https://github.com/ahsanzaman2489/auto1.git```
* cd to cloned directory ``` cd ./auto1 ```
* Install dependencies ``` npm install ```
* Install Global dependencies  ``` npm install -g webpack webpack-dev-server```
* move to server folder and Install dependencies ``` cd ./mock-server ``` ``` npm install```
* after installing dependencies start both servers in both folders ```npm start```
* webpack dev server will open automatically on  ```http://localhost:3000```

# run production build
* in root directory 
* ```npm run build``` to create build
* ```npm install -g serve```to install serve package you static app
* ```npm serve -s build``` to serve your app on ```http://localhost:5000```

# flow (Typings)
install flow types for dependencies ```flow-typed install ``` in your root directory
run ```flow ``` in your root directory it will check for static types

