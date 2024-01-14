import './style.scss'
import CarouselComponent from '../common/CarouselComponent/CarouselComponent.jsx'
import SofaImg_1 from '../../assets/images/sofa1.jpg'
import SofaImg_2 from '../../assets/images/sofa2.jpg'
import SofaImg_3 from '../../assets/images/sofa3.jpg'
function Home() {
    const images = [SofaImg_1, SofaImg_2, SofaImg_3]
    return (
        <div className="home-wrapper">
            <CarouselComponent images={images} blurred>
                
                </CarouselComponent>
        </div>
    );
}

export default Home;