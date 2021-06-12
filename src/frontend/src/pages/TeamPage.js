import { React,useState,useEffect } from 'react';
import { MatchDetail } from '../components/MatchDetail';
import '../css/TeamPage.css';
import {nameToLogo} from '../functions/logoPath';

export const TeamPage =()=>{

  const [team,setTeamState]=useState({});

  useEffect(
    
    ()=>{

        const fetchMatchesAsync = async ()=>{

            const resp = await fetch('http://localhost:8080/team/Pune%20Warriors');
            const data = await resp.json();
            console.log(data);
            setTeamState(data);

        }
        fetchMatchesAsync();
    },[]);
  
    const logo = `/assets/${nameToLogo[team.teamname]}`;

  return (
    <div className="TeamPage">
      <header id="teamPageHeader">
        <h1>
          {team.teamname}
        </h1>
        <img src={logo} className="logo" alt="logo"/>
      </header>
      <MatchDetail />
    </div>
  );
}


