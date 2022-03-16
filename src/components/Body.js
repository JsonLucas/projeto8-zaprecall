import SectionFlashCards from './SectionFlashCards';
import Footer from './Footer';
import React from 'react';
function Body(){
    function renderInitial(){
        alert('hello world');
    }
    return (
        <React.Fragment>
            <section className='body'>
                <section className='section-initial'>
                    <div className='container-initial'>
                        <div className='initial'>
                            <div className='logo'>
                                <img src='./images/logo.png' />                    
                            </div>
                            <div className='name-logo'>Zap Recall</div>
                        </div>
                    </div>
                </section>
                <SectionFlashCards />
            </section>
            <Footer />
        </React.Fragment>
    );
}

export default Body;