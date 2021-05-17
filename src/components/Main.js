import React from 'react';
import HornedBeast from './HornedBeast'
import hornsData from './data.json'


class Main extends React.Component {



    render() {
        return (
            <>
                {hornsData.map((item, idx) => {

                    return (
                        <HornedBeast
                            key={idx}
                            title={item.title}
                            imgsrc={item.image_url}
                            description={item.description}

                        />

                    )
                })}


            </>
        )
    }

}

export default Main;

