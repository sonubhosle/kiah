import React, { lazy,Suspense } from 'react'
import './App.css'
import {Route,Routes} from 'react-router-dom'
import Navigation from './Components/Navigation/Navigation';
import Loader from './Components/Loader/Loader';
import Footer from './Components/Footer/Footer';
const Home = lazy(() => import ('./Pages/Home.jsx'));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      <Footer />
    </Suspense>
  )
}

export default App