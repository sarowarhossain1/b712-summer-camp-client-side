import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopularClass = () => {
    const [menu, setMenu] = useState([]);

 useEffect(() => {
    fetch('http://localhost:5000/class')
    .then(res => res.json())
    .then(data =>{
       const popularItems = data.filter(item => item.category === 'popular')
       setMenu(popularItems)})
 },[])
    return (
        <section className="mb-8 pt-12">
           <SectionTitle
            heading="FROM OUR CLASSES"
            subHeading="Popular Classes"
           ></SectionTitle> 
           <div className="grid md:grid-cols-3 gap-4 max-w-screen-xl mx-auto">
            {
                menu.map(item => <MenuItem
                 key={item._id}
                 item={item}
                ></MenuItem>)
            }
           </div>
        </section>
    );
};

export default PopularClass;