package com.example.ipldashboard.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Transient;

@Entity
public class Team {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	private String teamname;
	private long totalMatches;
	private long totalWins;
	private long totalLost;
	private String Logo;
	
	@Transient
	private List<Match> matches;
	
	public Team() {
		
	}
	
	public Team(String teamname, long totalMatches) {
		super();
		this.teamname = teamname;
		this.totalMatches = totalMatches;
	}
	
	
	@Override
	public String toString() {
		return "Team [teamname=" + teamname + ", totalMatches=" + totalMatches + ", totalWins=" + totalWins + ", totalLost=" + totalLost + "]";
	}


	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getTeamname() {
		return teamname;
	}
	public void setTeamname(String teamname) {
		this.teamname = teamname;
	}
	public long getTotalMatches() {
		return totalMatches;
	}
	public void setTotalMatches(long totalMatches) {
		this.totalMatches = totalMatches;
	}
	public long getTotalWins() {
		return totalWins;
	}
	public void setTotalWins(long totalWins) {
		this.totalWins = totalWins;
	}
	public long getTotalLost() {
		return totalLost;
	}
	public void setTotalLost(long totalLost) {
		this.totalLost = totalLost;
	}
	public String getLogo() {
		return Logo;
	}
	public void setLogo(String logo) {
		Logo = logo;
	}

	public List<Match> getMatches() {
		return matches;
	}

	public void setMatches(List<Match> matches) {
		this.matches = matches;
	}
	
	
	
	
}
