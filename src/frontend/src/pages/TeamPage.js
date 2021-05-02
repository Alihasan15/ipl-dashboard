import { React } from 'react';
import { MatchDetail } from '../components/MatchDetail';
import '../css/TeamPage.css'
import csk from '../assets/csk.svg'

export const TeamPage =()=>{
  return (
    <div className="TeamPage">
      <header id="teamPageHeader">
        <h1>
          Team Dashboard
        </h1>
        <img src={csk} className="logo" alt="logo"/>
      </header>
      <MatchDetail />
    </div>
  );
}


