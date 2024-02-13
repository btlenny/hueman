import './App.css';
import CalendarGrid from '../../components/CalendarGrid/CalendarGrid.jsx';
import NavBar from '../../components/NavBar/NavBar.jsx';

export default function App() {
  return (
    <main className="App">
      <h1>hueman</h1>
      <CalendarGrid />
      <NavBar />
    </main>
  );
}