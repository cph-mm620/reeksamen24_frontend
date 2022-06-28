### What is where ?

[Background info](#background-info)

[Starting the project](#write-the-following-in-the-terminal-at-the-begining-of-the-project)

[Font awesome icons](#font-awesome-icons)

[Loading icons](#loading-icons)

[Proptypes](#proptypes)

[Routes](#routes)

[UseState](#usestate)

[UseEffect](#useeffect)

[If else](#if-else)

[Map](#map)

[Filter](#filter)

[Forms](#forms)

[Fetch](#fetch)

[Checking if token has expired](#checking-if-the-token-has-expired)

# Background info

.prettierignore - stops prettier from changing this readme file

netlify.toml - to show all sites on netlify 

# Write the following in the terminal at the begining of the project

npm i - to install everything in package.json

npm run dev - to start the project on localhost

ctrl + c - to stop the project

# How to install different things

## Font awesome icons

npm i --save @fortawesome/fontawesome-svg-core 

npm i --save @fortawesome/free-solid-svg-icons

npm i --save @fortawesome/react-fontawesome

### Using font awesome icons

```javascript
import { FaAngleUp } from "react-icons/fa";

<FaAngleDown />
```

#### Some of the options

```javascript
<FaAngleDown />
<FaAngleUp />
<GiHamburgerMenu/>
<BsEmojiSmile/>
```

link to a million other options : https://react-icons.github.io/react-icons/icons?name=fa


## Loading icons

npm i react-loading-icons

### Using Loading icons

```javascript
import LoadingIcons from "react-loading-icons";

<LoadingIcons.ThreeDots className="loading"/>

// to show the loading icon when your function is trying to fetch and hide it when the fetch has completed
const fetchFunction = async () => {
    document.querySelector(".loading").style.display = "block";
    const res = await fetch(Url);
    const data = await res.json();
    document.querySelector(".loading").style.display = "none";
    return data;
  };
```

#### Options

```javascript
<LoadingIcons.Audio />
<LoadingIcons.BallTriangle />
<LoadingIcons.Bars />
<LoadingIcons.Circles />
<LoadingIcons.Grid />
<LoadingIcons.Hearts />
<LoadingIcons.Oval />
<LoadingIcons.Puff />
<LoadingIcons.Rings />
<LoadingIcons.SpinningCircles />
<LoadingIcons.TailSpin />
<LoadingIcons.ThreeDots />
```

## PropTypes

npm i prop-types

### Using PropTypes

```javascript
ComponentName.defaultProps = {
  optionalBool: true,
  optionalNumber: 3,
};

ComponentName.propTypes = {
  // You can declare that a prop is a specific JS type. By default, these are all optional.
  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol,

  // An array of a certain type
  optionalArrayOf: PropTypes.arrayOf(PropTypes.number),

  // An object with property values of a certain type
  optionalObjectOf: PropTypes.objectOf(PropTypes.number),

  // An object taking on a particular shape
  optionalObjectWithShape: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  }),

  // You can chain any of the above with `isRequired` to make sure a warning
  // is shown if the prop isn't provided.
  requiredFunc: PropTypes.func.isRequired,

  // A required value of any data type
  requiredAny: PropTypes.any.isRequired,
}
```

***

## Routes

npm i react-router-dom

### Using routes

```javascript
// this goes in the main.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

// this goes inside the render 
// the app route goes around all others, that way everything on the App component gets shown no matter what site you are on
<BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="site" element={<SomeComponent />}></Route>
        <Route path="anotherSite" element={<SomeOtherComponent />}></Route>
      </Route>
      <Route
        // default for when the link is wrong
        // like this http://localhost:3000/hjklhjklh
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <h1>There's nothing here!</h1>
            <p>
              <a href="/">To go back click here!</a>
            </p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>

//this goes in the App.jsx
import { Outlet, Link } from "react-router-dom";

//this goes inside the render 
<nav>
    <Link to="/site">
        Site 
    </Link>
    <Link to="/anotherSite">
        Another site 
    </Link>
</nav>
<Outlet />
```

***

## UseState

```javascript
import { useState } from "react";

// the following should be the first thing in a component
const [getter, setter] = useState(false);
const [getter, setter] = useState([]); 
const [getter, setter] = useState(""); 
const [getter, setter] = useState({}); 

// above render and below useStates
setter(set the value here)

// add to a useState array
getter.push(new value)

// in render method
<p>{getter}</p>

// this is for show hide (only works with a boolean)
<button onClick={(e) => {
    setter(!getter); 
}}>button name</button>
```

***
## UseEffect

```javascript
import { useState, useEffect } from "react";// if you use both
import { useEffect } from "react"; // if you only use useEffect

/* useEffect goes right under the useStates

The useEffect Hook allows you to perform side effects in your components.

Some examples of side effects are: fetching data, directly updating the DOM, and timers.

useEffect accepts two arguments. The second argument is optional.

useEffect(<function>, <dependency>)*/

useEffect(() => {
  //Runs on every render
});

useEffect(() => {
  //Runs only on the first render
}, []);

useEffect(() => {
  //Runs on the first render
  //And any time any dependency value changes
}, [prop, state]);
```

***

## If else

```javascript
{useStateBooleanGetter && (
    <Component/>
)}

{useStateBooleanGetter ? (
    if its true
) : (
    if its false
)}

{useStateNumber === 2 ? (
    if its true
) : (
    if its false
)}

{useStateArray.length > 0 ? (
    if its true
) : (
    if its false
)}
```

***
## Map

```javascript
// always check if its empty first (someList.length > 0)
{someList.length > 0 &&
    someList.map((element, index) => {
      // always put a key element on mapped objects
        return <SingleItemInListComponent key={index} props={element} />;
    })
}
```

***
## Filter

```javascript
const filterFunction = listToFilter.filter((el) =>
    // whatever you want to filter here
    // examples
    el.name.toLowerCase().includes("name value")
    el.id == 2;
);

// you can also make them separately
const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
```

***
## Forms

```html
<form onSubmit={onSubmitFunction}>
    <div className="form-control"> 
      <!-- it is best to wrap input and label in a div, it makes it easier to make it pretty in css -->
        <label for="fname">First name:</label>
        <!-- for in lable matches id and name in input -->
        <input type="text" id="fname" name="fname" placeholder="what it should say if empty"> 
    </div>
</form>
```

### Most important input types

```html
<input type="text"> 
<input type="password"> 
<input type="number"> 
<input type="button">
<input type="checkbox">
<input type="date">
<input type="datetime-local">
<input type="email">
<input type="hidden">
<input type="radio">
<input type="submit">

<textarea name="message" rows="10" cols="30"></textarea>

<select id="cars" name="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
</select>
```

***
## FETCH

### Create

make a useState for everything that should go in the Entity class

```javascript
const makeFunc = async (newThing) => {
  const res = await fetch(makeThingUrl, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(newThing),
  });
  const data = await res.json();
  
  if(data !== null){
    alert("it worked");
  }else{
    alert("something went wrong");
  }
};

const onSubmit = (e) => {
  e.preventDefault();
  let thing = {
    // here you put the names of all the useState elementslike this
    name, 
    otherElement,
  };
  // make one of these for all elements that should not be null
  if (!name) {
    alert("Please enter a name");
    return;
  }

  //then you call the make function ( if the function was send as a prop  put the name of the prop here instead of the makeFunc )
  makeFunc({thing});

  // do this for all the elements
  setName("");
  // if its an array
  setName([]);
};

// in the render you need a form that calls the submit function
<form onSubmit={onSubmit}>
  <input
    type="text"
    placeholder="Name"
    // on each input the value should be the name of the useState
    value={name}
    // each input should have an onChange like this
    onChange={(e) => setName(e.target.value)}
  ></input>
  // the submit button has to be an input with the type submit
  // the value is the text inside the button
  <input type="submit" value="Make your thing" />
</form>
```

### Read

```javascript
import { urlFromSettings } from "../settings";

const [listOfStuff, setListOfStuff] = useState([]);

useEffect(() => {
  const getStuff = async () => {
    const fromAPI = await getListFromEndpoint();
    // if you need to get something by id or name or whatever
    const fromAPI = await getListFromEndpoint(id);
    setCocktailsList(fromAPI);
  };
  getStuff();
}, []);

const getListFromEndpoint = async () => {
  // if you need to get something by id
const getListFromEndpoint = async (id) => {

  const res = await fetch(urlFromSettings);
    // if you need to get something by id
  const res = await fetch(urlFromSettings + id);

  const data = await res.json();
  return data.drinks;
};

// then you map it in the render and best to send it to a component with the info
{listOfStuff.length > 0 &&
  listOfStuff.map((element, index) => {
    return <StuffComponent key={index} props={element} />;
})}
```

### Update

for an update you need a way to get the correct Entity to update

- you can put a checkbox on the elements from see all and get the id from there

- you can make an endpoint for get by id or get by name and use that to change it

- you can also have an input that takes a number and you update that

other than that its mostly the same as create on the front-end with the form and function side, the only real difference is the method is PUT instead of POST

```javascript
const updateFunc = async (newThing) => {
  const res = await fetch(updateThingUrl, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(newThing),
  });
  const data = await res.json();
};

// you can also use the placeholder to show the current values
<input placeholder={currentValue}>
```

### Delete

here you also need a way to get the id, you have the same options as update

```javascript
const deleteFunc = async (id) => {
  await fetch(deleteThingUrl + id, {
      method: "DELETE",
  });
};
```

### do stuff with admin access

```javascript
const getSomeAdminThing = async () => {
  // you need to set the token to localStorage in the login and signup functions
  let token = localStorage.getItem("token");
  const res = await fetch(getSomeAdminThingUrl, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      "x-access-token": token,
    },
  });
}
```

### Checking if the token has expired

```javascript
let token = localStorage.getItem("token");

if (token !== null) {
  if (isTokenExpired(token)) {
    logOutFunc();
  }
}

function isTokenExpired(token) {
  const expiry = JSON.parse(atob(token.split(".")[1])).exp;
  return Math.floor(new Date().getTime() / 1000) >= expiry;
}
```