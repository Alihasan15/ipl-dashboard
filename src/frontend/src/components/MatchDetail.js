import { React } from 'react';
import '../css/TeamPage.css'
import { MatchSmallCard } from './MatchSmallCard';
import { RecentMatches } from './RecentMatches';
import { Pie } from 'react-chartjs-2';


export const MatchDetail =({team})=>{

  const data = {
    labels: [
      'Wins',
      'Losses',
    ],
    datasets: [{
      label: 'pieData',
      data: [team.totalWins, team.totalLost],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)'
      ],
      
      hoverOffset: 4
    }]
  };

  const options= {
    plugins: {
      legend: {
        display: false
      }
    },
    elements: {
      arc: {
          borderWidth: 0
      }
    }
  };


  return (
    <div className="MatchDetail">
        <MatchSmallCard team={team}/>
        <div className="matchDetailContent mb10">
          <div className="recentMatches">
            {team.matches?.map(match=><RecentMatches match={match} teamname={team.teamname} key={match.id} id={match.id}/>)}
          </div>
          <div><Pie data={data} options={options}></Pie></div>
        </div>
    </div>
  );
}


