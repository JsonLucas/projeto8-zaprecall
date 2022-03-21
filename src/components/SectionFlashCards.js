import SingleFlashCard from "./subcomponents/SingleFlashCard";
function SectionFlashCards({icon, setIcon, cont, setCont, avaliations, setAvaliation, deck}){
    return(
        <section className='section-flash-cards'>
            <div className='container-cards'>
                <div className='cards'>
                    <SingleFlashCard icon={icon} setIcon={setIcon} cont={cont} setCont={setCont}
                    avaliations={avaliations} setAvaliation={setAvaliation} deck={deck}/>
                </div>
            </div>
        </section>
    );
}
export default SectionFlashCards;