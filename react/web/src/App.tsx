import React, { useState, useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Main from './main/Main';
import MainAA from './mainAA/MainAA';
import MainAAA from './mainAAA/MainAAA';
import MyService from './service/Service';
import { ColorPicker } from 'primereact/colorpicker';
import Register from './register/Register';
import About from './about/About';
import RegisterAA from './registerAA/RegisterAA';
import RegisterAAA from './registerAAA/RegisterAAA';
import SubContent from './subContent/SubContent';
import SubContentAA from './subContentAA/SubContentAA';
import SubContentAAA from './subContentAAA/SubContentAAA';
import ContentAAA from './contentAAA/ContentAAA';
import ContentAA from './contentAA/ContentAA';
import Content from './content/Content';


interface State {
  label: string;
  url: string;
  target: string;
}


const myService = new MyService();

const App: React.FC = () => {

  const navigate = useNavigate()

  var [animation, setAnimation] = useState(true)


  const toast = useRef(null);
  const menuLeft = useRef<Menu>(null!);

  const [currentSize, setCurrentSize] = useState<string>("size1");
  const [currentLevel, setCurrentLevel] = useState<string>('');
  var [currentForeground, setCurrentForegorund] = useState<string>('#000000')
  var [currentBackground, setCurrentBackground] = useState<string>('#ffffff')
  var [menuItems, setMenuItems] = useState<State[]>([{ label: 'home', url: '/main/AAA', target: "_self" }])

  useEffect(() => {
    const sizeSubscription = myService.getCurrentSize().subscribe((size) => {
      setCurrentSize(size);
    });

    const animSubscription = myService.getCurrentAnimationSource().subscribe((a) => {
      setAnimation(a);
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

    myService.currentBc.subscribe((menu) => {
      setMenuItems(prevMenuItems => {
        const uniqueItems = menu.filter(newItem => !prevMenuItems.some(prevItem => prevItem.label === newItem.label));
        return [...prevMenuItems, ...uniqueItems];
      });
    });

    return () => {
      sizeSubscription.unsubscribe();
      levelSubscription.unsubscribe();
      foregorundSubscription.unsubscribe();
      backgroundSubscription.unsubscribe();
      animSubscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    console.log(currentLevel)
  }, [currentLevel, menuItems])


  var items = [
    { label: 'Level A', tabindex: "2", target: "_self" },
    { label: 'Level AA', tabindex: "2", target: "_self" },
    { label: 'Level AAA', tabindex: "8", target: "_self" },
    { separator: true, url: '' },
    { label: 'Font size up 50%', command: () => upSize(), tabindex: "9" },
    { label: 'Font size down 50%', command: () => downSize(), tabindex: "10" },
    { separator: true, url: '' },
    { label: 'Start/Stop Animations', command: () => anim(), tabindex: "1" },
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

  function anim(): void {
    myService.updateAnimation(!animation);
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
            <li><a tabIndex={1} target="_self" onKeyDown={(e) => e.key === 'Enter' ? navigate('/home/' + currentLevel) : null} onClick={() => navigate('/home/' + currentLevel)}>Home</a></li>
            <li><a tabIndex={1} target="_self" onKeyDown={(e) => e.key === 'Enter' ? navigate('/about') : null} onClick={() => navigate('/about')}>About</a></li>
            <li><a tabIndex={1} target="_self" onKeyDown={(e) => e.key === 'Enter' ? navigate('/register/A') : null} onClick={() => navigate('/register/A')}>Register</a></li>
          </ul>
        </nav>
        <div className='abutton'>
          <Menu model={items} onShow={() => getCurrentLocation()} popup ref={menuLeft} id="popup_menu_left" tabIndex={2} appendTo={'self'} />
          <Button label="a11y menu" icon="pi pi-align-left" className="mr-2" tabIndex={1}
            onClick={(event) => menuLeft.current.toggle(event)} aria-controls="popup_menu_left" aria-haspopup />
          {currentLevel === 'AAA' && <div className='colorPickerDiv' style={{ paddingTop: '5px' }}>
            <ColorPicker inputId="cp-hex" format="hex" value={currentForeground} onChange={(e) => { setCurrentForegorund('#' + String(e.value)) }} className="vc" />
            <ColorPicker inputId="cp-hex" format="hex" className="vc" value={currentBackground} onChange={(e) => { setCurrentBackground('#' + String(e.value)) }} />
          </div>}
        </div >
      </header >
      <div>
        {currentLevel === 'AAA' && (
          <div className="breads">
            <a className="breadHome" href="/main/AAA">
              <i aria-label="home link" role="link" className="pi pi-home"></i>
            </a>
            <div className="breadContainer">
              {menuItems.map((b, index) => (
                <div key={index} className="bread">
                  <a className="breadLink" href={b.url}>{b.label}</a>
                  {index !== menuItems.length - 1 && <p className="breadDash">&gt;</p>}
                </div>
              ))}
            </div>
          </div>
        )}
        {currentLevel !== 'AAA' && <div className="block"></div>}
      </div>
      <div>
        <div tabIndex={0} className='routers'>
          <Routes >
            <Route path='*' element={<Navigate to="/main/A" replace={true} />} />
            <Route path='/about' element={<About size={currentSize} level={menuItems} service={myService} foreground={currentForeground} background={currentBackground} />} />
            <Route path='/main/A' element={<Main service={myService} size={currentSize} level={currentLevel} />} />
            <Route path='/main/AA' element={<MainAA service={myService} size={currentSize} level={currentLevel} />} />
            <Route path='/main/AAA' element={<MainAAA foreground={currentForeground} background={currentBackground} service={myService} size={currentSize} level={menuItems} />} />
            <Route path='/register/A' element={<Register level={currentLevel} service={myService} size={currentSize} />} />
            <Route path='/register/AA' element={<RegisterAA level={currentLevel} service={myService} size={currentSize} />} />
            <Route path='/register/AAA' element={<RegisterAAA level={currentLevel} service={myService} size={currentSize} />} />
            <Route path='/sub/A' element={<SubContent service={myService} size={currentSize} level={currentLevel} />} />
            <Route path='/sub/AA' element={<SubContentAA service={myService} size={currentSize} level={currentLevel} />} />
            <Route path='/sub/AAA' element={<SubContentAAA service={myService} size={currentSize} level={menuItems} foreground={currentForeground} background={currentBackground} />} />
            <Route path='/content/AAA' element={<ContentAAA animated={animation} service={myService} size={currentSize} level={menuItems} foreground={currentForeground} background={currentBackground} />} />
            <Route path='/content/AA' element={<ContentAA service={myService} size={currentSize} level={currentLevel} foreground={currentForeground} background={currentBackground} />} />
            <Route path='/content/A' element={<Content service={myService} size={currentSize} level={currentLevel} foreground={currentForeground} background={currentBackground} />} />
          </Routes>
        </div>
        <footer>
          <a tabIndex={0} target="_self" onKeyDown={(e) => e.key === 'Enter' ? navigate('/home/A') : null} onClick={() => navigate('/home/A')}>Home</a>
          <a tabIndex={0} target="_self" onKeyDown={(e) => e.key === 'Enter' ? navigate('/about') : null} onClick={() => navigate('/about')}>About</a>
          <a tabIndex={0} target="_self" onKeyDown={(e) => e.key === 'Enter' ? navigate('/register/A') : null} onClick={() => navigate('/register/A')}>Register</a>
        </footer>
      </div>
    </div >

  );
}

export default App;
