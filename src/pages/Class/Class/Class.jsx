import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import dance from '../../../assets/cover/dance.png'
import { useEffect, useState } from 'react';
import InstructorPage from '../../Shared/InstructorPage/InstructorPage';

const Class = () => {
   
   const [menu, setMenu] = useState([]);
   
       
        useEffect(() => {
           fetch('http://localhost:5000/review')
           .then(res =>res.json())
           .then(data =>{
               const instructorPage = data.filter(item => item.category === 'classes');
               setMenu(instructorPage)
               
           })
        },[])
        
    return (
        <div>
            <Helmet>
                <title>Unick | Class</title>
            </Helmet>
            <Cover img={dance} title="Show all approved classes on this page"></Cover>
           <div className='grid md:grid-cols-3 gap-4 max-w-screen-xl mx-auto'>
            {
                menu.map(item => <InstructorPage
                 key={item._id}
                 item={item}
                ></InstructorPage>)
            }
            
           </div>
        </div>
        
    );
};

export default Class;