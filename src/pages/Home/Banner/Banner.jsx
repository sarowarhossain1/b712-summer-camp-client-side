import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../../assets/home/banner1.jpg'
import img2 from '../../../assets/home/banner2.jpg'
import img3 from '../../../assets/home/banner3.jpg'
import img4 from '../../../assets/home/banner4.jpg'
import img5 from '../../../assets/home/banner5.jpg'
import img6 from '../../../assets/home/banner6.jpg'


const Banner = () => {
    return (
        <Carousel >
        <div>
            <img className="bg-orange-300 bg-opacity-50" src={img1} />
            <p className="text-3xl text-center -mt-[550px] text-slate-400 align-baseline  me-96 uppercase font-bold " ><button className="btn btn-primary bg-orange-600">Kids Dance</button> <br /> <span className="font-bold text-pink-800 text-3xl"> Hip Hop Dance Club</span></p>
        </div>
        <div>
            <img src={img2} />
          
        </div>
        <div>
            <img src={img3} />
           
        </div>
        <div>
            <img src={img4} />
          
        </div>
        <div>
            <img src={img5} />
        
        </div>
        <div>
            <img src={img6} />
        
        </div>
    </Carousel>
    );
};

export default Banner;