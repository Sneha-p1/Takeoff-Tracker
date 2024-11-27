import React from 'react'
import Head from '../components/Head';
import Home from '../components/Home';
import Footer from '../components/Footer';
import img from '../Images/img.jpg';


const styles = {
    backgroundImage: `url(${img})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
};


const HomePage = () => {
  return (
    <>
     <div style={styles}>
          <Head/>
          <Home/>
          <Footer/>
    </div>
    </>
  )
}

export default HomePage