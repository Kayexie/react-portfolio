import React from 'react';

function Navigation(props) {
    return(
        <nav class="navigation"> 
        <h2> Kaye XIE</h2>
        <div>
          <div className="tab">
            <a class ="navLink" href="#Aboutme" 
            onClick={()=>props.handlePageChange('Aboutme')}
            className={props.currentPage === 'Aboutme' ? 'nav-link active':'nav-link'}
            >About Me</a>
            <a class ="navLink" href="#Portfolio"
            onClick={()=>props.handlePageChange('Portfolio')}
            className={props.currentPage === 'Portfolio'?'nav-link active':'nav-link'}
            >Portfolio</a>
            <a class ="navLink" href="#Contact"
            onClick={()=>props.handlePageChange('Contact')}
            className={props.currentPage === 'Contact'?'nav-link active':'nav-link'}
            >Contact</a>
            <a class ="navLink" href="#Resume"
            onClick={()=>props.handlePageChange('')}
            className={props.currentPage === 'Resume'?'nav-link active':'nav-link'}
            >Resume</a>
          </div>
        </div>
    </nav>
    );
}
export default Navigation;