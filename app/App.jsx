import { Route, Routes, Router } from "@solidjs/router"
import Home from "./components/Home"
import API from "./components/API"
import SourceCode from "./components/SourceCode"
import Donate from "./components/Donate"
import NotFound from "./components/404";

export default function App() {
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