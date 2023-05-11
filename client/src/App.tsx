import React from 'react';
import { ToastContainer, Zoom } from 'react-toastify';

// Routes 
import AllRoutes from "./routes/AllRoutes"

// Footer
import Footer from "./components/Footer"

// Navbar
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="App">
      <ToastContainer        
        limit={1}
        position="top-center"
        autoClose={2500}
        hideProgressBar={true}
        closeButton={false}
        closeOnClick
        transition={Zoom}
        pauseOnFocusLoss={false}
      />
      <Navbar />
      <main id='main'>
        <AllRoutes />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
