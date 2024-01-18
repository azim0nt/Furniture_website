import './style.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import SofaImg1 from '../../assets/images/sofaPng1.png'
import SofaImg2 from '../../assets/images/sofaPng2.png'
import SofaImg3 from '../../assets/images/sofaPng3.png'

function Arrivals() {
    return ( 
        <div className="arrivals-wrapper">
            <h1 id='title'>New Arrilas</h1>
            <Carousel showIndicators={false} autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={false}>
                <div className="card">
                    <div className="top">
                        <img src={SofaImg1} width={300}  alt="" />
                    </div>
                    <div className="bottom">
                        <button className="red-btn">Buy Now</button> <p id="price">$ 299.00</p>
                    </div>
                </div>
                <div className="card">
                    <div className="top">
                        <img src={SofaImg2} width={300}  alt="" />
                    </div>
                    <div className="bottom">
                        <button className="red-btn">Buy Now</button> <p id="price">$ 299.00</p>
                    </div>
                </div>
                <div className="card">
                    <div className="top">
                        <img src={SofaImg3} width={300}  alt="" />
                    </div>
                    <div className="bottom">
                        <button className="red-btn">Buy Now</button> <p id="price">$ 299.00</p>
                    </div>
                </div>
        
            </Carousel>
        </div>
     );
}

export default Arrivals;