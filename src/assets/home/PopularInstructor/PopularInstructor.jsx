import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import PopularItem from "../../../pages/Shared/PopularItem/PopularItem";


const PopularInstructor = () => {
 const [menu, setMenu] = useState([]);

 useEffect(() =>{
    fetch('class.json')
    .then(res =>res.json())
    .then(data =>{
        const instructorItems = data.filter(item => item.category === 'instructor');
        setMenu(instructorItems)
    })
 },[])

    return (
        <section className="mb-8 pt-12">
            <SectionTitle
            heading="FROM OUR INSTRUCTOR"
            subHeading="Popular Instructor"
            ></SectionTitle>
            <div className="grid md:grid-cols-3 gap-4 max-w-screen-xl mx-auto">
                {
                    menu.map(item => <PopularItem
                     key={item._id}
                     item={item}
                    ></PopularItem>)
                }
            </div>
        </section>
    );
};

export default PopularInstructor;