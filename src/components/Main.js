import React from 'react';
import HornedBeast from './HornedBeast'
import Form from 'react-bootstrap/Form'
import hornsData from './data.json'

import CardColumns from 'react-bootstrap/CardColumns'



class Main extends React.Component {

    constructor(props) {
        super(props)

    }

    numberOfHorns = (event) => {
        let numberOfHorns = parseInt(event.target.value)
        let yy;


        console.log(numberOfHorns);

        if (numberOfHorns) {
            yy = hornsData.filter((item) => {

                if (numberOfHorns == item.horns) {
                    return item
                }


            })
            // console.log(yy);
        } else {
            yy = hornsData
        }

        this.props.renderingFilteredBeast(yy);


    }




    render() {

        return (
            <>
                < Form >

                    <Form.Group controlId="exampleForm.SelectCustomHtmlSize">
                        <Form.Label>Select your favourite programming language</Form.Label>
                        <Form.Control as="select" custom name='numberOfHorns' onChange={this.numberOfHorns}>
                            <option value='0'>All</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='100'>WoooW!</option>

                        </Form.Control>
                    </Form.Group>
                </Form >

                <CardColumns>

                { this.props.hornedData.map((item, idx) => {

                    return (
                        <HornedBeast
                            key={idx}
                            title={item.title}
                            imgsrc={item.image_url}
                            description={item.description}
                            renderingSelectedAnimal={this.props.renderingSelectedAnimal}

                        />

                    )
                })

                }
                </CardColumns>
                {/* { this.state.newArr.forEach((item, idx) => {
                    return (
                        <HornedBeast
                            key={idx}
                            title={item.title}
                            imgsrc={item.image_url}
                            description={item.description}
                            renderingSelectedAnimal={this.props.renderingSelectedAnimal}

                        />

                    )

                }


                )} */}

            </>
        )


    }
}

export default Main;

