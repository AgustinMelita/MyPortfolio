import { useState, useEffect } from 'react';
import "./styles/app.css"
import { Navbar } from './components/common/Navbar';
import { MainBanner } from "./components/common/MainBanner";
import { CodeScreen } from "./components/common/CodeScreen";
import { Contact } from './components/common/Contact';
import { SpinnerComponent } from "./components/common/SpinnerComponent";
import fondo from "./assets/space.mp4";
import { Suspense } from 'react';
import { Projects } from "./components/common/Projects";




function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fakeLoading = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

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
                  <Projects className="app-project"/>
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
