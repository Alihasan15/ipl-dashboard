package com.example.ipldashboard.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.ipldashboard.model.Team;
import com.example.ipldashboard.repository.MatchRepository;
import com.example.ipldashboard.repository.TeamRepository;

@RestController
public class TeamController {
	
	private TeamRepository teamRepository;
	
	private MatchRepository matchRepository;

	public TeamController(TeamRepository teamRepository,MatchRepository matchRepository) {
		super();
		this.teamRepository = teamRepository;
		this.matchRepository= matchRepository;
	}



	@GetMapping("/team/{teamname}")
	public Team getTeamInfo(@PathVariable String teamname) {
		
		Team team= this.teamRepository.findByteamname(teamname);
		
		
		
		team.setMatches(this.matchRepository.findLatestMatchesByTeam(teamname, 4));
		
		return team;
		
	}
	
	
	
	
}
