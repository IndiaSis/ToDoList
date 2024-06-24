import React, {useState} from 'react';
import Navbar from "./components/Navbar";
import Description from "./components/Description";
import Dynamic from "./components/Dynamic";
import To from "./components/To";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Features from "./components/Features";
import Find from "./components/Find";


function App() {
   
  const [tasks, setnewtask]=useState([]);



  function addNote(newNote){
      setnewtask(prevNote=>{
          return [...prevNote, newNote];
      });
  }




  return (
    <>
       <Navbar />
            <Description />
            <Dynamic />
            <To onAdd={addNote}/>
            <div className="dialogue">
            {tasks.map((taskitem, index)=>{
                return (
                    <Card 
                        key={index}
                        id={index}
                        title={taskitem.title}
                        content={taskitem.content}
                        // onDelete={deleteNote}
                        // onComplete={completeNote}
                        // onEdit={editNote}
                        />
                );
            })}
            </div>
            
            <Find />
            <Features />
            <Footer />
    
    
    </>
  );
}

export default App;
