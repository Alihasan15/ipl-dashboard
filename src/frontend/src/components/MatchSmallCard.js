import { React } from 'react';

export const MatchSmallCard =({team})=>{
  return (
    <div className="MatchSmallCard mbt30">
      <div className="matches MatchesPlayed">
        <div className="matchTitle">Matches Played</div>
        <div className="count">{team.totalMatches}</div>
      </div>
      <div className="matches MatchesWins">
        <div className="matchTitle">Matches Wins</div>
        <div className="count">{team.totalWins}</div>
      </div>
      <div className="matches MatchesLost">
        <div className="matchTitle">Matches Lost</div>
        <div className="count">{team.totalLost}</div>
      </div>
    </div>
  );
}


