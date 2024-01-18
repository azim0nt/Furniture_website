import './style.scss'
import SofaSpecialImg from  '../../assets/images/SpecialSofaImg.png';

function SpecialSofa() {
    return ( 
        <div className="special-sofa-wrapper">
            <div className="special-sofa">
                <div className="left">
                    <img src={SofaSpecialImg} width={'100%'} alt="" />
                </div>
                <div className="right">
                    <p id="title">
                        Special <span>offer</span> <br />
                        Furniture <br />
                        Sale
                    </p>
                    <hr id='line' />
                    <button className="red-btn">
                        Buy Now
                    </button>
                </div>
            </div>
            <div className="up-to-50">
                <p>up to</p>
                <p>50%</p>
                <p>off</p>
            </div>
        </div>
     );
}

export default SpecialSofa;