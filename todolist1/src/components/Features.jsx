import React from "react";


function Features(props){

    function handleDeleteAll(){
      props.deleteAll(props.id)
    }



    return (
        <>
        <div className="d-flex p-3 justify-content-center align-items-center">
          <button type="button" className=" btn btn-danger mb-3" onClick={handleDeleteAll}>Delete All Tasks</button>
          </div>
        {/* <div className="d-flex justify-content-center align-items-center">
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
              <div className="feature col text-center p-5">
                <div className=" d-flex align-items-center justify-content-center  bg-gradient  mb-3">
                  <p className="display-1"></p>
                </div>
                <h3 className="fs-3 mt-2  d-flex align-items-center justify-content-center  text-body-emphasis">Total Tasks</h3>
                <p className=" d-flex p-2 align-items-center justify-content-center">Number of tasks you have created</p>
                {/* <h3 className="fs-3 d-flex align-items-center justify-content-center text-body-emphasis">Total Tasks</h3>
                <p className=" d-flex align-items-center justify-content-center">Number of tasks you have created</p> */}
              {/* </div>
              <div className="feature text-center col p-5">
                <div className=" d-flex align-items-center justify-content-center  bg-gradient  mb-3">
                  <p className="display-1">1</p>
                </div>
                <h3 className="fs-3 mt-2  d-flex align-items-center justify-content-center  text-body-emphasis">Remaining To Do</h3>
                <p className=" d-flex align-items-center justify-content-center">Tasks remaining to complete</p>
              </div>
              <div className="feature col text-center p-5">
                <div className=" d-flex align-items-center justify-content-center  bg-gradient  mb-3">
                  <p className="display-1">0</p>
                </div>
                <h3 className="fs-3  d-flex align-items-center justify-content-center text-body-emphasis">Completed Tasks</h3>
                <p className=" d-flex align-items-center justify-content-center">Total Number of tasks Completed.</p>
              </div>
      
          </div> 
        </div>*/}
        </>
    );
}

export default Features;