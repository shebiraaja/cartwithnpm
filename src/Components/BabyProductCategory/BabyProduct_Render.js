import React from 'react'
import Baby_Category from './Baby_Category';
import { Link } from 'react-router-dom';
import babycategoryData from './babyCategoryData'; 

const BabyProduct_Render = () => {
    return (    
        <>
            <h1 className="text-center mt-3">Baby Products</h1>

            <section  style={{margin: '2.5rem'}}>
            
                <div className="row justify-content-center">
                
                    {
                        babycategoryData.babycategoriesData.map((item, index) => {
                            return (
                                <Baby_Category 
                                    img={item.img}
                                    title={item.title}
                                    desc={item.desc}
                                    price={item.price + '€'}
                                    item={item}
                                    path={item.path}
                                    key={index}
                                />

                            )
                        })
                    }

                </div>

            </section>
        </>
    )
}

export default BabyProduct_Render;
