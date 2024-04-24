import './App.css';
import DriverCard from './components/DriverCard';
import Header from './components/Header';
import Team from './components/Team';
import DashBoard from './components/DashBoard';

const racers = [
  { racerName: "Bektur", car: "Audi", id: 1 },
  { racerName: "Kai", car: "Mercedess", id: "2" },
  { racerName: "Elzada", car: "Mazda", id: "3" }
];
const racers2 = [
  { racerName: "Ayzada", car: "Lada", id: 4 },
  { racerName: "Nursultan", car: "Mercedess", id: "2" }
];

// request
// props
// state manager 

function App() {

  return (
    <div>
      <Header day={"Tuesday"} time={"10:12pm"} />
      <DashBoard teamsInfo={[ racers, racers2 ]} /> 
    </div>
  );
}

export default App;
