import { Route, Routes, Router } from "@solidjs/router"
import { Component } from 'solid-js'
import Home from "./components/Home"
import API from "./components/API"
import SourceCode from "./components/SourceCode"
import Donate from "./components/Donate"
import NotFound from "./components/404";

const App: Component = () => {
  return (
    <>
       <Router>
           <Routes>
               <Route path="/" component={Home} />
               <Route path="/api.html" component={API} />
               <Route path="/source-code.html" component={SourceCode} />
               <Route path="/donate.html" component={Donate} />
               <Route path={"/*"} component={NotFound} />
           </Routes>
       </Router>

    </>
  )
}
export  default App
