import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './container/Login'
import JobList from './container/JobList';
import JobDetail from './container/JobDetail';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/job-list" element={<JobList/>} />
          <Route path="/job-detail" element={<JobDetail/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
