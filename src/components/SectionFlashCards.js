import SingleFlashCard from "./SingleFlashCard";
function SectionFlashCards({icon, setIcon, cont, setCont, avaliations, setAvaliation}){
    return(
        <section className='section-flash-cards'>
            <div className='container-cards'>
                <div className='cards'>
                    <SingleFlashCard icon={icon} setIcon={setIcon} cont={cont} setCont={setCont}
                    avaliations={avaliations} setAvaliation={setAvaliation} />
                </div>
            </div>
        </section>
    );
}
export default SectionFlashCards;