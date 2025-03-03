import Header from "./Header.tsx";
import TeamList from "./TeamList.tsx";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <TeamList />
    </div>
  );
}

export default App;
