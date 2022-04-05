import logo from './../assets/images/logo.png';
function Header(){
    return (
        <section className='section-initial'>
            <div className='container-initial'>
                <div className='initial'>
                    <div className='logo'>
                        <img src={logo} />                    
                    </div>
                    <div className='name-logo'>ZapRecall</div>
                </div>
            </div>
        </section>
    );
}

export default Header;