
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import { NotFound } from './components/NotFound';
import { ProfileSection } from './components/ProfileSection';
import { MedicalRecords } from './components/MedicalRecords';
import { ContextProvider } from './context';

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='profile' element={<ProfileSection />} />
            <Route path='profile/records' element={<MedicalRecords />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </ContextProvider>
    </BrowserRouter>



  );
}

export default App;
