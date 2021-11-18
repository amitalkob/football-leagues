import React from 'react'

type Props = {
  title: string,
  teams: any[],
  index: number
}

const Tab: React.FC<Props> = ({ title, teams, index }) => {
    const createTeams = () => {
        const teams_arr: any[] = teams[index]
        return teams_arr.map((team, i) => {
            return (
                <div className="team_info">
                    <img className="img" src={team.strTeamLogo} alt="Team Logo"/> 
                    <div className="name">{team.strTeam}</div>
                </div>
            )
        })
    }
    return (
       <div key="teams">{createTeams()}</div>
       //<div></div>
    )
}

export default Tab