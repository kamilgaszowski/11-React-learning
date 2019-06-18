import React from 'react';
import Container from '../Container/Container';
import {faqData} from '../../data/dataStore';
import Hero from '../Hero/Hero';

class FAQ extends React.Component {
  render (){
    return (

      <Container>
        <Hero title={faqData.title} image={faqData.image} />
        <p>{faqData.description}</p>
      </Container>

    

    );
  }

}
export default FAQ;