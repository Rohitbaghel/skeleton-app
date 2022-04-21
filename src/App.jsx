
import {useState} from 'react';
import './App.css';
import {ExplorerSkeleton} from './Components/ExplorerSkeleton';
import HomeScreenSkeleton from './Components/HomeScreenSkeleton';

function App() {
  const [loading, setLoading]=useState(true)
  setTimeout(() =>{
  setLoading(false)
  }, 2000)
  return (
    <div className="App">
  {loading ? <HomeScreenSkeleton/> : <ExplorerSkeleton/>}
    </div>
  );
}

export default App;
