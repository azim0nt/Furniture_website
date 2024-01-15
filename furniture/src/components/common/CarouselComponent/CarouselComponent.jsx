
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

// <CarouselComponent  images={[..., ..., ...]}  blurred={true} />

function CarouselComponent(props) {


    return (
        <div className="carousel-c-wrapper">
            <div className="carousel-c-children">
                {props.children}
            </div>
            <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={false} showArrows={false}>
                
                {
                    props.images && props.images.map((img, index) => {
                        return (            
                            <div key={index}>
                                <img 
                                    src={img} 
                                    alt={"Carousel-img-" + index} 
                                    width={'100%'}
                                    height={700}
                                   
                                />
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    );
}

export default CarouselComponent;