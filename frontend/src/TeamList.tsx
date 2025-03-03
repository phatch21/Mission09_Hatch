import { useEffect, useState } from "react";
import TeamCard from "./TeamCard";

interface Team {
  school: string;
  name: string;
  city: string;
  state: string;
}

const TeamList = () => {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    fetch("/CollegeBasketballTeams.json") // Fetch from public folder
      .then((res) => res.json())
      .then((data) => setTeams(data.teams)) // Access "teams" array in JSON
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {teams.map((team, index) => (
        <TeamCard
          key={index}
          school={team.school}
          mascot={team.name}
          city={team.city}
          state={team.state}
        />
      ))}
    </div>
  );
};

export default TeamList;
