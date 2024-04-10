
import './App.css';

import Question from './Components/Question';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';

import QuizList from './Components/QuizList';

import AddVideo from './Components/addVideo';


function App() {
  return (
    <BrowserRouter>

    <Routes>

      <Route path='/' element={<Home/>}/>
     <Route path='/quiz' element={<Question/>}>
      <Route path=':quizid' element ={<Question/>}/>

     </Route>
     <Route path='/doquiz' element={<QuizList/>}>

      <Route path=':quizId' element={<QuizList/>} />

     </Route>

     <Route path='/addvideo' element ={<AddVideo/>}>

      <Route path=':courseid' element={<AddVideo/>}/>

     </Route>
     

    </Routes>
    
    
    </BrowserRouter>
  );
}

export default App;
