import React, { useState, useEffect, useRef, useContext } from 'react';
import { AppContext } from '../App';
import './main.css';
import SideMenu from '../components/SideMenu';
import Header from './Header';
import Home from './Home';
import Categories from './Categories';
import MyLibrary from './MyLibrary';
import Bag from './Bag';
import AboutUs from './AboutUs';

function Main() {
  const {library, bag} = useContext(AppContext);
  const [active, setActive] = useState(false);
  const [games, setGames] = useState([]);

  const homeRef = useRef();
  const categoriesRef = useRef();
  const libraryRef = useRef();
  const bagRef = useRef();
  const aboutusRef = useRef();

  const sections = [
    {
      name: 'home',
      ref: homeRef,
      active: true,
    },
    {
     name: 'categories',
     ref: categoriesRef,
     active: false,
    },
    {
     name: 'library',
     ref: libraryRef,
     active: false,
    },
    {
     name: 'bag',
     ref: bagRef,
     active: false,
    },
    {
      name: 'aboutus',
      ref: aboutusRef,
      active: false,
     },
     {
      name: 'viewMore',
      ref: categoriesRef,
      active: false,
     },
  ];

  const handelToggleActive=()=> {
    setActive(!active);
  };

  const handleSectionActive = target => {
    sections.forEach(section => {
      // ตรวจสอบว่า section.ref.current ไม่เป็น undefined ก่อนที่จะใช้ classList
      if (section.ref.current && section.ref.current.id === target) {
        section.ref.current.classList.add('active');
      } else {
        section.ref.current?.classList.remove('active'); // หรือสามารถใช้ optional chaining (?) ก็ได้
      } 
    });
  };



  const fetchData=()=> {
    fetch('http://localhost:8033/api/gamesData.json')
    .then(res=>res.json())
    .then(data=>{
      setGames(data);
    })
    .catch(e=>console.log(e.message));
  };

  useEffect(()=>{
     fetchData();
  },[]);

  return (
   <main>
     <SideMenu active={active} sectionActive={handleSectionActive} />
     <div className={`banner ${active ? 'active' : undefined}`}>
       <Header toggleActive={handelToggleActive}/>
        <div className="container-fliud">
         {games && games.length> 0 && (
             <>
              <Home games={games} reference={homeRef} />
              <Categories games={games} reference={categoriesRef} />
              <MyLibrary games={library} reference={libraryRef} />
              <Bag games={bag} reference={bagRef} />
              <AboutUs reference={aboutusRef}/>
              <viewMore games={games} reference={categoriesRef}/>             
             </>
         )}
        </div>
      </div>
   </main>
  );
}

export default Main;