import SectionFlashCards from './SectionFlashCards';
import Footer from './Footer';
import { Fragment } from 'react';
function Body(){
    const sectionInitial = <section className='section-initial'>
        <div className='container-initial'>
            <div className='initial'>
                <div className='logo'>
                    <img src='./images/logo.png' />                    
                </div>
                <div className='name-logo'>Zap Recall</div>
            </div>
        </div>
    </section>; 
    return (
        <Fragment>
            <section className='body'>
                {sectionInitial}
                <SectionFlashCards />
            </section>
            <Footer />
        </Fragment>
    );
}

export default Body;