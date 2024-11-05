import './Divisor.css';

const Divisor = () => {
    return(
        <div className='divisor'>
            <div>
                {/* <img src='IMG/ÍconeLaticínios.png' alt='icone leites' /> */}
                <div className='itens'></div>
                <p>Leites</p>
            </div>
            <div>
                {/* <img src='IMG/ÍconeFrutasSecas.png' alt='icones cereais' /> */}
                <div className='itens'></div>
                <p>Cereais</p>
            </div>
            <div>
                {/* <img src='IMG/ÍconeOleos.png' alt='icone óleos' /> */}
                <div className='itens'></div>
                <p>Óleos</p>
            </div>
        </div>
    );
};

export default Divisor;