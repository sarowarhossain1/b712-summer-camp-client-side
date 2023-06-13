import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import instructorImg from '../../assets/cover/cover1.jpg'
import PopularInstructor from "../../assets/home/PopularInstructor/PopularInstructor";


const Instructor = () => {
    return (
        <div>
           <div>
           <Helmet>
                <title>Unick ~ Instructor</title>
            </Helmet>
            <Cover img={instructorImg}></Cover>
            </div> 
            
    
      <div className=" ">
       <PopularInstructor></PopularInstructor>
        
      </div>
    </div>
 

    );
};

export default Instructor;