import Header from './components/Header';
import Form from './components/Form';
import StoryBoard from './components/StoryBoard';
import './App.css';
import './index.css';
import { useState } from 'react';

function App() {

  const [prompts, setPrompts] = useState([]);

  return (

    <div>

      <Header />

      <main className='container' style={{height: "auto", overflowX: "hidden",
  overflowY: "auto", margin: "15px"}}>
        <Form setPrompts={setPrompts}/>
        <div style={{backgroundColor:"grey", borderRadius:"15px", marginLeft:"15px", width:"100%"}}>
        <StoryBoard prompts = {prompts}/>
        </div>
        
      </main>

    </div>

  );
}

export default App;
