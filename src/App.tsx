import { useEffect, useState } from "react";
import axios from "axios";
import './App.scss';
import Tabs from './components/Tabs/Tabs'
import Tab from './components/Tabs/Tab'

const leagues: string[] = [
  "English Premier League",
  "English League Championship",
  "Scottish Premier League",
  "German Bundesliga",
  "Italian Serie A",
];

const App = () => {
  const [data, setData] = useState<any>(null);
  
  useEffect(() => {
    const league_teams: any[] = [] 
    leagues.map(async(league, index) => {
     league_teams[index] = (await axios.get("https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l="+league)).data.teams
      });
    setData(league_teams)
  }, []);
  
  return (
      <Tabs>
        <Tab title="English Premier League" teams={data} index={0}/>
        <Tab title= "English League Championship" teams={data} index={1}/>
        <Tab title="Scottish Premier League" teams={data} index={2}/>
        <Tab title="German Bundesliga" teams={data} index={3}/>
        <Tab title="Italian Serie A" teams={data} index={4}/>
      </Tabs>
  )
}

export default App;

