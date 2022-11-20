import React, { useState } from 'react';
import Aboutme from './pages/Aboutme';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Navigation from './Navigation';
import Footer from './pages/Footer';

export default function Mypage() {
    //set Aboutme as the default section
    const [currentPage, setCurrentPage] = useState('Aboutme');

    const renderPage = ()=> {
        if(currentPage==='Aboutme') {
            return (<Aboutme/>);
        } if (currentPage === 'Portfolio') {
            return(<Portfolio/>);
        } if (currentPage === 'Contact') {
            return(<Contact/>);
        } else {
            return (<Resume/>);
        }
    };
    //change the currentpage state
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
            <Footer/>
        </div>
        
    );
}