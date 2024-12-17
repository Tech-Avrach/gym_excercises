// import './App.css';
// import { Route, Routes } from 'react-router-dom';
// import { Box }  from '@mui/material'
// import { Home }  from './pages/Home';
// import  ExcerciseDetail  from './pages/ExcerciseDetail';
// import { Navbar } from './components/Navbar';
// import { Footer } from './components/Footer';
// import NotFound from './pages/NotFound';
// import AnimCursor from './components/AnimCursor';
// function App() {
//   return (
//     <>
//     <AnimCursor/>
//     <Box width="400px" sx={{width:{ xl: '1488px'}}} m='auto'>
//       <Navbar />
//       <Routes>
//       <Route path='/' element={<Home/>} />
//       <Route path='/excercise/:id' element={<ExcerciseDetail />} />
//       <Route path='*' element={<NotFound />} />
//       </Routes>
//       <Footer/>
//     </Box>
//     </>
//   );
// }

// export default App;


import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import { Home } from './pages/Home';
import ExcerciseDetail from './pages/ExcerciseDetail';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import NotFound from './pages/NotFound';
import AnimCursor from './components/AnimCursor';

function App() {
  return (
    <>
      <Box width="400px" sx={{ width: { xl: '1488px' } }} m='auto'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/excercise/:id' element={<ExcerciseDetail />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
        {/* Conditionally render AnimCursor based on media query */}
        <div className="hide-on-mobile">
          <AnimCursor />
        </div>
      </Box>
    </>
  );
}

export default App;
