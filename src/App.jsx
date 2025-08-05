import { createBrowserRouter, RouterProvider  } from "react-router-dom";

import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import logo from '../src/ColgPics/logo.jpg'
import Faculty from "./pages/Faculty";
import Bsprogram from "./pages/Bsprogram";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";

const rout = createBrowserRouter(
  [
    {
      path:'/',
      element: <div>
           <Header/>
         <Home/>
         <Footer/>
      </div> 
    },
    {
      path:'/faculty',
      element: <div>
         <Header/>
         <Faculty/>
         <Footer/>
      </div> 
    },
    {
      path:'/bsprograms',
      element: <div>
         <Header/>
         <Bsprogram/>
         <Footer/>
      </div> 
    },
 {
      path:'/gallery',
      element: <div>
         <Header/>
         <Gallery/>
         <Footer/>
      </div> 
    },


    {
      path:'/contact',
      element:<div>
         <Header/>
        <Contact/>
           <Footer/>
      </div>
    }

  ]
)


function App() {

  
  
  return (
    <div className="overflow-hidden">

        <RouterProvider router={rout}/>
    </div>
  )
}

export default App
