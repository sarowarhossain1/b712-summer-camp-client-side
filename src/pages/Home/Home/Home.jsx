import { Helmet } from "react-helmet-async";
import PopularInstructor from "../../../assets/home/PopularInstructor/PopularInstructor";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularClass from "../PopularClass/PopularClass";



const Home = () => {
 
    return (
        <div>
             <Helmet>
                <title>Unick ~ Home</title>
            </Helmet>
           <Banner></Banner>
           <Category></Category>
           <PopularClass></PopularClass>
           <PopularInstructor></PopularInstructor>
        </div>
    );
};

export default Home;