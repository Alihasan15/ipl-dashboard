import { React } from 'react';
import '../css/TeamPage.css'
import { MatchSmallCard } from './MatchSmallCard';
import { RecentMatches } from './RecentMatches';

export const MatchDetail =()=>{
  return (
    <div className="MatchDetail">
        <MatchSmallCard />
        <div className="matchDetailContent mb10">
          <RecentMatches />
          <div className="pieChart"></div>
        </div>
    </div>
  );
}


