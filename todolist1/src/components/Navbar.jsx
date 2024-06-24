import React from "react";


function Navbar(){
    return (
<div >
   <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
  <a href="#"><img className="logo" src="./logo.png" height="50px" alt="logo" /></a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <div className="mx-auto">
      <ul className="navbar-nav">
        <li className="nav-item mt-2">
          <a className="nav-link active" aria-current="page" href="#">About</a>
        </li>
        <li className="nav-item mt-2 d-block get">
          <a className="nav-link d-block active" href="#getstart" >Get Started</a>
        </li>
        <li className="nav-item mt-2">
          <a className="nav-link active" href="#contact-us">Contact Us</a>
        </li>
      </ul>
      </div>
      {/* <div className="dark-buttons">
         <a onclick="myfunction()" className="p-2" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className="bi bi-circle-fill" viewBox="0 0 16 16">
                    <circle cx="8" cy="8" r="8"/>
                            </svg>
                </a>
                <a className="p-2" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="grey" className="bi bi-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            </svg>
        </a>

    </div> */}
      
    </div>
      
  
    
    
  </div>
</nav>
</div>
    );
}

export default Navbar;