import React from 'react';
import data from '../../helpers/data';
import {Card} from "react-bootstrap";

const Albums = () => {
    const renderAlbums = (props, index) =>{
        return(
            <Card style={{width:'18rem'}} key={index}>
                <Card.Img variant='top' src={props.src.large}/>
                <Card.Body>
                    <Card.Title>{props.photographer}</Card.Title>
                </Card.Body>
            </Card>
        );
    };

  return (
    <div className='flex'>{data.map(renderAlbums)}</div>
  )
}

export default Albums