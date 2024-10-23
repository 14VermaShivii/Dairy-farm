import React from "react";
export const Header= () =>{
    return(
      
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid fixed">
          <a className="navbar-brand" to="#">logo</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-contend-end d-flex" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" to="/Home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="/card">Card</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="/Divider">Divider</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="/Process">Process</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="/our-passion">our-passion</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="/products">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="/row">Login</a>
              </li>
              
              </ul>
              </div>
          </div>
        {/* </div> */}
      </nav>
    )
}