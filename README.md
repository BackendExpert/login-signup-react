# Login SignUp React Template

- This NPM Package is Develop for ReactJS Frontend Developers to make development easy.
- The one Command make the all Login Sign Up interfaces

# Releases

## v1.0.0 - 27 May 2024

- Initial release of the Project
- only for Login(signin)

# IMPORTANT Notice

- This NPM package works only with <b>ReactJS + Vite + Tailwind CSS</b> Projects
- The Common Working NPM Package will be Released in the Future.

# How to use this NPM Package

- Before install the Package you must install following Packages

- - react-router-dom
- - axios

- after install above packages

- install using following NPM script

``` 
    npm i login-signup-react

```

- and then go to your `package.json` file 
- find `scripts`
- add following command

```json

    "SignInUp": "node node_modules/login-signup-react/index.js --destination=src/components/LoginSignUp"

```


``` json  

  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "serve": "vite preview",
    "SignInUp": "node node_modules/login-signup-react/index.js --destination=src/components/LoginSignUp"
  },

```

- after that run the command

```

    npm run SignInUp

```

- after you running the command you can see a folder `LoginSignUp` in path `src/components` in your Project

- after done this you have to update App.jsx file in the project

``` jsx


import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./components/LoginSignUp/SignIn"; // Importing the Templete the created by run npm package

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* declare the Route */}
        {/* the path can change whatever you want */}
        <Route path="/" element={<SignIn />} /> 


      </Routes> 
    </BrowserRouter>
  )
}
```



<hr>

# License and copyright notice of Package

- The Package Licensed Under ISC

# Developers and Designers


