A Router wrapper for react-router, it allows you to create multiple Routers sharing the same history.

## Install

```npm 
npm install --save react-browser-router
```

## Example

```js
import React, { Component } from "react";
import { render } from "react-dom";
import { 
    BrowserRouter, 
    Route, 
    Link
} from "react-browser-router";
import Home from "./components/Home";
import About from "./components/About";
import Nav from "./components/Nav";

class NavComponent extends Component {
    render() {
        return (<BrowserRouter>
            <div>
                <Nav />
            </div>
        </BrowserRouter>);
    }
}

class ViewComponent extends Component {
    render() {
        return (<BrowserRouter>
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>

                <Route path="/" component={Home} />
                <Route path="/about" render=(props) => (<About {...props} />) />
            </div>
        </BrowserRouter>);
    }
}

render(<ViewComponent />, viewElement);
render(<NavComponent />, navElement);

```