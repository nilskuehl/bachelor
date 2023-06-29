import React, { useState, useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Main from './main/Main';
import MainAA from './mainAA/MainAA';
import MainAAA from './mainAAA/MainAAA';
import MyService from './service/Service';
import { ColorPicker } from 'primereact/colorpicker';
import Register from './register/Register';


const myService = new MyService();

const App: React.FC = () => {


  const toast = useRef(null);
  const menuLeft = useRef<Menu>(null!);

  const [currentSize, setCurrentSize] = useState<string>("size1");
  const [currentLevel, setCurrentLevel] = useState<string>('');
  var [currentForeground, setCurrentForegorund] = useState<string>('#000000')
  var [currentBackground, setCurrentBackground] = useState<string>('#ffffff')

  useEffect(() => {
    const sizeSubscription = myService.getCurrentSize().subscribe((size) => {
      setCurrentSize(size);
    });


    const levelSubscription = myService.getCurrentLevel().subscribe((level) => {
      setCurrentLevel(level);
    });

    const foregorundSubscription = myService.getCurrentForegorund().subscribe((foreground) => {
      setCurrentForegorund(foreground);
    });

    const backgroundSubscription = myService.getCurrentBackgroundSubject().subscribe((background) => {
      setCurrentBackground(background);
    });

    // Clean up subscriptions when component unmounts
    return () => {
      sizeSubscription.unsubscribe();
      levelSubscription.unsubscribe();
      foregorundSubscription.unsubscribe();
      backgroundSubscription.unsubscribe();
    };
  }, []);

  var items = [
    { label: 'Level A', tabindex: "2", target: "_self" },
    { label: 'Level AA', tabindex: "2", target: "_self" },
    { label: 'Level AAA', tabindex: "8", target: "_self" },
    { separator: true, url: '' },
    { label: 'Font size up 50%', command: () => upSize(), tabindex: "9" },
    { label: 'Font size down 50%', command: () => downSize(), tabindex: "10" },
  ]



  const upSize = () => {
    if (currentSize == "size1") {
      setCurrentSize("size15");
      console.log(currentSize);
      return
    }
    if (currentSize == "size15") {
      setCurrentSize("size2");
      console.log(currentSize);
      return
    }
    if (currentSize == "size2") {
      setCurrentSize("size2");
      console.log(currentSize);
      return
    }
    console.log("noting")
  }

  const downSize = () => {
    if (currentSize == "size1") {
      setCurrentSize("size1");
      console.log(currentSize);
      return
    }
    if (currentSize == "size15") {
      setCurrentSize("size1");
      console.log(currentSize);
      return
    }
    if (currentSize == "size2") {
      setCurrentSize("size15");
      console.log(currentSize);
      return
    }
  }

  function getCurrentLocation(): void {
    items[0].url = myService.currentLocation + '/A';
    items[1].url = myService.currentLocation + '/AA';
    items[2].url = myService.currentLocation + '/AAA';
  }

  return (
    <div className="App">
      <header>
        <h2>Accessibility Test</h2>
        <nav className="navbar">
          <ul className="navLinks">
            <li><a href="" tabIndex={1} target="_self">Home</a></li>
            <li><a href="/register/A" tabIndex={1} target="_self">About</a></li>
            <li><a href="#" tabIndex={1} target="_self">Contact</a></li>
          </ul>
        </nav>
        <div className='abutton'>
          <Menu model={items} onShow={() => getCurrentLocation()} popup ref={menuLeft} id="popup_menu_left" tabIndex={2} appendTo={'self'} />
          <Button label="a11y menu" icon="pi pi-align-left" className="mr-2" tabIndex={1}
            onClick={(event) => menuLeft.current.toggle(event)} aria-controls="popup_menu_left" aria-haspopup />
          {currentLevel === 'AAA' && <div className='colorPickerDiv' style={{ paddingTop: '5px' }}>
            <ColorPicker inputId="cp-hex" format="hex" value={currentForeground} onChange={(e) => { setCurrentForegorund('#' + String(e.value)) }} className="mb-3" />
            <ColorPicker inputId="cp-hex" format="hex" className="mb-3" value={currentBackground} onChange={(e) => { setCurrentBackground('#' + String(e.value)) }} />
          </div>}
        </div >
      </header >
      <div tabIndex={3}>
        <BrowserRouter>
          <Routes>
            <Route path='*' element={<Navigate to="/main/A" replace={true} />} />
            <Route path='/main/A' element={<Main service={myService} size={currentSize} level={currentLevel} />} />
            <Route path='/main/AA' element={<MainAA service={myService} size={currentSize} level={currentLevel} />} />
            <Route path='/main/AAA' element={<MainAAA foreground={currentForeground} background={currentBackground} service={myService} size={currentSize} level={currentLevel} />} />
            <Route path='/register/A' element={<Register level={currentLevel} service={myService} size={currentSize} />} />
          </Routes>
        </BrowserRouter>
      </div>
      <footer>
        <nav className="navbar">
          <ul className="navLinks">
            <li><a href="" tabIndex={1} target="_self">Home</a></li>
            <li><a href="/register/A" tabIndex={1} target="_self">About</a></li>
            <li><a href="#" tabIndex={1} target="_self">Contact</a></li>
          </ul>
        </nav>
      </footer>
    </div >

  );
}

export default App;
