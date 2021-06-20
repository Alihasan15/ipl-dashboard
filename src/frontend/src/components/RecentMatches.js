import { React } from 'react';
import '../css/TeamPage.css'

export const RecentMatches = ({teamname,match,id})=>{
    
    const matchResult = teamname===match.matchWinner?"recentMatch won":"recentMatch lost";
    
    return (
        <div className={matchResult} data-id={id}>
            <div className="team1">{match.team1}
            </div>
            <div className="vs">vs</div>
             <div className="team2">{match.team2}</div>
        </div>
    )
}
