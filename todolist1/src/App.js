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

  function deleteTask(id){
    setnewtask(prevNote=>{
      return prevNote.filter((taskitem, index)=>{
        return index !== id;
      });
    });
  }


  function deleteAllTask(){
    setnewtask([]);
  }


  function s(){
    return tasks.length;
  }

  // function completeTask(id){
  //   const [style, settaskstyle]=useState("none");

  //   tasks.map((taskitem, index)=>{
  //         if (index===id){
  //           taskitem.title.style.text-decoration = "line-through";
  //         }
  //   })



  // }




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
                        onDelete={deleteTask}
                        // onComplete={completeTask}
                        
                        // onEdit={editNote}
                        />
                );
            })}
            </div>
            
            {/* <Find /> */}
            <Features deleteAll={deleteAllTask}/>
            <Footer />
    
    
    </>
  );
}

export default App;

