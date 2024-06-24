import React, {useState} from "react";
// import Icon from '@mui/material/Icon';
// import Fab from '@mui/material/Fab';
// import Zoom from '@mui/material/Zoom';



function To(props){

    const [isExpanded, setExpanded]=useState(false);

    function expand(){
        setExpanded(true);
    }

    const [note, setNote]=useState({
        title:"",
        content:"",
    });

    function handlechange(event){
        const {name, value}=event.target;

        setNote((prevNote)=>{
            return{
                ...prevNote,
                [name]:value
        };
        })
    }

    function submitNote(event){
        props.onAdd(note);
        setNote({
            title:"",
            content:"",
        })
        event.preventDefault();
    }

    // const [taskname, settaskname]=useState('');

    // function handlechange(event){
    //     settaskname(event.target.value);
    // }

    // function addtask(event){
    //     props.onAdd(taskname);
    //     settaskname('');
    //     event.preventDefault();
    // }

    
return (
        // <div  className="form dialogue d-flex flex-row  p-3">
            
        //     <form className="col-12 w-75 ml-5 mb-3 p-3 col-lg-7  me-lg-2">
        //     <input  type="text" name="title" value={taskname} onChange={handlechange} className="form-control " placeholder="Title"  />
        //     </form>
        //     <button className="btn mb-3" type="button" onClick={addtask}  id="button-addon2" >I Got This!</button>
            
        // </div>
        <div>
            <form className="create-note">
                {isExpanded && (
                    <input name="title" value={note.title} placeholder="Title" onChange={handlechange}/>
                )}
                <textarea name="content" onClick={expand} onChange={handlechange} placeholder="Take a Note..." value={note.content} rows={isExpanded?3:1}/>
            <button className="btn btn-primary mt-5" type="button" onClick={submitNote}  id="button-addon2" >I Got This!</button>
            
                
            
                {/* <Zoom in={isExpanded}>
                    <Fab onClick={submitNote}>
                      <Icon color="primary">add_circle</Icon>
                    </Fab>
                </Zoom> */}
                
            </form>
        </div>
    );
}

export default To;