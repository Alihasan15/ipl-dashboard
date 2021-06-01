import { React } from 'react';

export const MatchSmallCard =()=>{
  return (
    <div className="MatchSmallCard mbt30">
      <div className="matches MatchesPlayed">
        <div className="matchTitle">Matches Played</div>
        <div className="count">24</div>
      </div>
      <div className="matches MatchesWins">
        <div className="matchTitle">Matches Wins</div>
        <div className="count">24</div>
      </div>
      <div className="matches MatchesLost">
        <div className="matchTitle">Matches Lost</div>
        <div className="count">24</div>
      </div>
    </div>
  );
}


