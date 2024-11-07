import { Route, Routes } from 'react-router-dom';
import './App.css';

import CreateSocietyForm from './component/CreateSocietyForm';
import SideBar from './component/SideBar';
import ResidentManagement from './pages/ResidentManagement';
import FinancialManagement from './pages/FinancialManagement';
import Header from './component/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import FacilityManagement from './pages/FacilityManagement';
function App() {
  return (
    <div className="d-flex"> {/* Flexbox container to position sidebar and content side by side */}
      {/* Main content area */}
      <div className="content-area" style={{ marginLeft: '290px', padding: '20px', width: '100%' }}> 
      <SideBar />
    <Header />
        <Routes>
          {/* Your route components */}
          <Route path='/ ' element={<CreateSocietyForm />} />
          <Route path='/residentmanagement' element={<ResidentManagement />} />
          <Route path='/financialmanagement' element={<FinancialManagement />} />
          <Route path='/facilitymanagement' element={<FacilityManagement />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
