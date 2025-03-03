interface TeamProps {
  school: string;
  mascot: string;
  city: string;
  state: string;
}

const TeamCard: React.FC<TeamProps> = ({ school, mascot, city, state }) => {
  return (
    <div className="border p-4 rounded shadow-md bg-white">
      <h2 className="text-lg font-semibold">{school}</h2>
      <p className="text-gray-600">Mascot: {mascot}</p>
      <p className="text-gray-500">
        {city}, {state}
      </p>
    </div>
  );
};

export default TeamCard;
