import './style.scss'
import CarouselComponent from '../common/CarouselComponent/CarouselComponent.jsx'
import SofaImg_1 from '../../assets/images/11.jpg'
import SofaImg_2 from '../../assets/images/22.jpg'
import SofaImg_3 from '../../assets/images/33.jpg'
function Home() {
    const images = [SofaImg_1, SofaImg_2, SofaImg_3]
    return (
        <div className="home-wrapper">
            <CarouselComponent images={images} blurred>
            <div className="text-wrapper">
                    <p id="title">
                        Exclusive Deals Of <br />
                        Furniture <span>Collection</span>
                    </p>
                    <p id="desc">
                        Exprore different catalog for our showroom and online service <br />
                        client happyness for our furniture this 
                    </p>

                    <div className="buttons">
                        <button className="red-btn">
                            Buy Now 
                        </button>
                        <button className="white-btn">
                            Explore 
                        </button>
                    </div>
                </div>
                </CarouselComponent>
        </div>
    );
}

export default Home;