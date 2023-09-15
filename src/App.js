//1 import area
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Notfound from './pages/Notfound';
import Createstudents from './pages/student/Createstudents';
import Createteachers from './pages/teacher/Createteachers';
import Home from './pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/teacher/create' element={<Createteachers />}></Route>
          <Route path='/student/create' element={<Createstudents />}></Route>
          <Route path='*' element={<Notfound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
