import React, { useState, useEffect } from 'react';
import "./styles/app.css"
import { Navbar } from './components/common/Navbar';
import { MainBanner } from "./components/common/MainBanner";
import { CodeScreen } from "./components/common/CodeScreen";
import { Contact } from './components/common/Contact';
import { SpinnerComponent } from "./components/common/SpinnerComponent";
import fondo from "./assets/space.mp4";
import { Suspense } from 'react';




function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula un tiempo de carga, podrías realizar aquí tus operaciones asincrónicas
    const fakeLoading = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Limpia el temporizador al desmontar el componente
    return () => clearTimeout(fakeLoading);
  }, []);

  return (
    <>
    <Suspense fallback="Cargando traducciones">
      <div className={`app ${isLoading ? 'loading' : ''}`}>
        <div className="content-container">
          {isLoading && <SpinnerComponent/>}
          {!isLoading && (
            <div className="main-content" id="parallax-container">
              <div className="parallax-container">
              <div className='app-container'>
              <video className='video-background' src={fondo} autoPlay loop muted></video>
                  <Navbar className="app-navbar"/>
                  <MainBanner className="app-banner"/>
                  <CodeScreen className="app-codescreen"/>
                  <Contact  className="app-projects"/>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      </Suspense>
    </>
  )
}

export default App
