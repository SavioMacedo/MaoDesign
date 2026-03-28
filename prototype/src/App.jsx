import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StatusBar from './components/StatusBar';
import HomeScreen from './screens/HomeScreen';
import ViewerScreen from './screens/ViewerScreen';
import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className="phone-frame">
        <StatusBar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/viewer/:id" element={<ViewerScreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
