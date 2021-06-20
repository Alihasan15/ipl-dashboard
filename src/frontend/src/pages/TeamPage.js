import { React,useState,useEffect } from 'react';
import { MatchDetail } from '../components/MatchDetail';
import '../css/TeamPage.css';
import {nameToLogo} from '../functions/logoPath';
import { useParams } from 'react-router';

export const TeamPage =()=>{

  const [team,setTeamState]=useState({});
  const { teamName } = useParams();

  useEffect(
    
    ()=>{

        const fetchMatchesAsync = async ()=>{

            const resp = await fetch(`http://localhost:8080/team/${teamName}`);
            const data = await resp.json();
            console.log(data);
            setTeamState(data);

        }
        fetchMatchesAsync();
    },[teamName]);
  
    const logo = `/assets/${nameToLogo[team.teamname]}`;

    if(!team || !team.teamname){
      return <h1>Team Not Found</h1>;
    }
    return (
      <div className="TeamPage">
        <header id="teamPageHeader">
          <h1>
            {team.teamname}
          </h1>
          <img src={logo} className="logo" alt="logo"/>
        </header>
        <MatchDetail team = {team}/>
      </div>
    );
}


