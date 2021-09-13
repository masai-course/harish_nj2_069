import TopSection from './components/topSection';
import './App.css';
import DisplayItems from './components/DisplayItems';

function App() {
  return (
    <div className="App">
      <TopSection />
      {/* <BottomSection /> */}
      <DisplayItems finalglist/>
    </div>
  );
}

export default App;
