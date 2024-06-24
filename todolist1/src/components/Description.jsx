import React from "react";

function Description(){
    return(
<div>
            <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src="https://res.cdn.office.net/todo/1893689_2.120.1/icons/welcome-center.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
      </div>
      <div className="col-lg-6">
      
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">IndiaSis To Do</h1>
        <p className=" fw-bold text-body-emphasis lh-1 mb-3">To do gives you focus, from work to play</p>
        <p className="lead">Streamline your tasks and boost productivity with our intuitive to-do list website. Easily organize your day, prioritize tasks, and stay on top of deadlines—all in one place. Say goodbye to scattered notes and missed appointments, and hello to effortless organization and efficiency.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <a href="#getstart"><button type="button" className="btn btn-primary btn-lg px-4 me-md-2" fdprocessedid="mnz5us">Get Started</button></a>
          <a href="https://www.mindmesh.com/glossary/what-is-to-do-list"><button type="button" className="btn btn-outline-secondary btn-lg px-4" fdprocessedid="89voi">Learn more</button></a>
        </div>
      </div>
    </div>
  </div>
  <div className="container px-4">
    <h2 className="d-flex justify-content-center mb-3">Why IndiaSis To Do?</h2>
    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
      <div className="col">
        <div className="">
          <div className="card-header py-5">
            <h4 className="my-0 c fw-normal">Intuitive task Management</h4>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="">
          <div className="card-header py-5">
            <h4 className="my-0 c fw-normal">Seamless due date tracking</h4>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="">
          <div className="card-header py-5">
            <h4 className="my-0 c fw-normal">Beautiful and user-friendly design</h4>
          </div>
        </div>
      </div>
    </div>
    
  </div>
  </div>




    );
}

export default Description;