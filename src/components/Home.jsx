import React from "react";
import Cars from '../components/Cars';
import car1 from '../components/images/car1.avif';
import car2 from '../components/images/car2.avif';
import car3 from '../components/images/car3.avif';


const Home = () => {
    
    let id = 100;     

    const Car = [
        {
            id:1,
            image:{car1},
            text:"Mercede Benz",
            buy:"Buy mercedes"
        },
        {
            id:2,
            image:{car2},
            text:"Audi Q3",
            buy:"Buy Audi"
        },
        {
            id:3,
            image:{car3},
            text:"Verna",
            buy:"Buy Verna"
        }
    ]


    return(
        <>

        {
            Car.map((value,id)=>{
                return(
                    <Cars key={id++} image={value.image} text={value.text} buy={value.buy} />
                )
            })
        }    



            {/* <Car
            image={car1} 
            text="Mercedesbenz"
            buy = "Buy benz"
            />
            <Car 
            image={car2}
            text="audiQ3"
            buy="Buy Audi"
            />
            <Car 
            image={car3}
            text="Verna"
            buy="buy verna"
            /> */}
        </>
    )
}

export default Home;