import "./styles/App.css";
import "./styles/nav.css";
import "./styles/header.css";
import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { loginUrl, getAsAdminUrl } from "./settings";
import LogIn from "./Components/Login";
import LogOut from "./Components/LogOut";
import SignUp from "./Components/SignUp";

function App() {
  const [getter, setGetter] = useState([2, 3, 4, 6, 78]);
  const [showHide, setShowHide] = useState(false);
  //this is for login
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");
  const [oneRole, setOneRole] = useState(false);
  const [loggedIn, setLoggedIn] = useState("");

  useEffect(() => {
    if (loggedIn === "") {
      let userNameLS = localStorage.getItem("userName");
      let loggedInLS = localStorage.getItem("loggedIn");
      let userRoleLS = JSON.parse(localStorage.getItem("userRole"));

      setUserName(userNameLS);
      setLoggedIn(loggedInLS);
      setUserRole(userRoleLS);

      let token = localStorage.getItem("token");
      if (token !== null) {
        if (isTokenExpired(token)) {
          logOutFunc();
        }
      }
    }
  });

  function isTokenExpired(token) {
    const expiry = JSON.parse(atob(token.split(".")[1])).exp;
    return Math.floor(new Date().getTime() / 1000) >= expiry;
  }

  const testingAdminGet = async () => {
    let token = localStorage.getItem("token");
    const res = await fetch(getAsAdminUrl, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "x-access-token": token,
      },
    });
    const data = await res.json();
    // console.log("data");
    // console.log(data);
    document.querySelector("#adminTestResponse").innerHTML =
      "did admin test work? : " + data.admin;
  };

  const logInFunc = async (user) => {
    const res = await fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await res.json();

    if (data.code !== null && data.code !== "" && data.code !== undefined) {
      alert(data.message);
      setLoggedIn(false);
    }

    if (
      data.username !== null &&
      data.username !== "" &&
      data.username !== undefined
    ) {
      setUserName(data.username);
      setUserRole(data.role0);
      let roleArray = [data.role0, data.role1];
      setUserRole(data.role0, data.role1);
      localStorage.setItem("userRole", JSON.stringify(roleArray));

      setLoggedIn(true);
      localStorage.setItem("userName", data.username);
      localStorage.setItem("loggedIn", true);
      localStorage.setItem("token", data.token);
      window.location.reload();
    }
  };

  const signUpFunc = async (user) => {
    const res = await fetch(signUpUrl, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await res.json();

    if (data.code !== null && data.code !== "" && data.code !== undefined) {
      alert(data.message);
      setLoggedIn(false);
    }

    if (
      data.username !== null &&
      data.username !== "" &&
      data.username !== undefined
    ) {
      setUserName(data.username);
      if (
        data.role1 !== null &&
        data.role1 !== "" &&
        data.role1 !== undefined
      ) {
        let roleArray = [data.role0, data.role1];
        setUserRole(data.role0, data.role1);
        localStorage.setItem("userRole", JSON.stringify(roleArray));
        setOneRole(false);
      } else {
        setUserRole(data.role0);
        localStorage.setItem("userRole", data.role0);
        setOneRole(true);
      }
      setLoggedIn(true);
      localStorage.setItem("userName", data.username);
      localStorage.setItem("loggedIn", true);
      localStorage.setItem("token", data.token);
      window.location.reload();
    }
  };

  const logOutFunc = async () => {
    setLoggedIn(false);
    setUserName("");
    setUserRole("");
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className="App">
      <header>
        <h1>The Race System</h1>
        {loggedIn && <p>Welcome {userName}</p>}
      </header>

      <nav>
        <Link to="/FetchCreate">Fetch create</Link>
        <Link to="/FetchRead">Fetch read</Link>
        <Link to="/FetchUpdate">Fetch update</Link>
        <Link to="/FetchDelete">Fetch delete</Link>
      </nav>
      <Outlet />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "20%",
          margin: "0 auto",
        }}
      >
        <button
          style={
            showHide
              ? {
                  backgroundColor: "red",
                  border: "solid 2px black",
                  margin: "10px 0",
                  padding: "5px",
                }
              : {
                  backgroundColor: "lightgrey",
                  border: "solid 2px black",
                  margin: "10px 0",
                  padding: "5px",
                }
          }
          onClick={(e) => {
            setShowHide(!showHide);
          }}
        >
          {showHide ? "hide content" : "show content"}
        </button>

        {showHide && <p style={{ margin: "5px" }}>this is a show hide</p>}

        {userRole !== null &&
          userRole !== undefined &&
          userRole.includes("admin") && (
            <button
              onClick={(e) => {
                testingAdminGet();
              }}
            >
              click me to test admin
            </button>
          )}
        <p id="adminTestResponse"></p>
      </div>

      {!loggedIn && <LogIn onAdd={logInFunc} />}

      {!loggedIn && <SignUp onAdd={signUpFunc} />}

      {loggedIn && <LogOut onClick={logOutFunc} />}
    </div>
  );
}

export default App;
