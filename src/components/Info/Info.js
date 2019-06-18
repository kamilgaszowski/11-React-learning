import React from 'react';
import Container from '../Container/Container';
import {infoData} from '../../data/dataStore';
import Hero from '../Hero/Hero';


class Info extends React.Component {
  render (){
    return (

      <Container>
        <Hero title={infoData.title} image={infoData.image} />
        <p>{infoData.description}</p>
      </Container>
    );
  }

}

export default Info;