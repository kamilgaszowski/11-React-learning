import React from 'react';
import Container from '../Container/Container';
import PropTypes from 'prop-types';
import {faqData} from '../../data/dataStore';
import Hero from '../Hero/Hero';

class FAQ extends React.Component {

    static propTypes = {
      title: PropTypes.string,
      image: PropTypes.string,
    };
    static defualtProps = {
      title: faqData.title,
      image: faqData.image,
    };
    render (){

      //const {title, image} = this.props;

      return (

        <Container>
          <Hero title='find answers to the most frequently asked question' image='http://uploads.kodilla.com/bootcamp/fer/11.react/space.png' />
          <h2>Info</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Container>

    

      );
    }

}
export default FAQ;