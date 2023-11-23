import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import GameSwiper from '../components/GameSwiper';
import GameCard from '../components/GameCard';
import './Categories';

function Home({games, reference}) {
  return (
     <section id="home" className='home active' ref={reference}>
        <div className="container-fluid">
            <div className="row"> 
               <GameSwiper games={games} /> 
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <h2 className="sectionTitle">โปรโมชันเกม</h2>
                </div>
                <div className="col-lg-6 d-flex justify-content-end align-items-right">
                    {/* ใช้ Link แทน <a> */}
                  <Link to='#' className="viewMore">
                     เกมอื่นๆของเรา <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
            </div>
            <div className="row">
               {
                 games.slice(0,4).map( game=> (
                    <GameCard key={game._id} game={game} />
                 ))
               }
            </div>
        </div>
     </section>
  );
}

export default Home