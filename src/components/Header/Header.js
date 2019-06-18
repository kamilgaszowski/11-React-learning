import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';
import {settings} from '../../data/dataStore';
import Icon from '../Icon';

class Header extends React.Component {
  render() {
    
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link to={'/'} className={styles.logo} >
              <Icon name={settings.header.logo}/>
            </Link>
            <nav>
              <NavLink exact to='/' activeClassName='active'>{settings.header.homeLink.title}</NavLink>
              <NavLink exact to='/info' activeClassName='active'>{settings.header.infoLink.title}</NavLink>
              <NavLink exact to='/faq' activeClassName='active'>{settings.header.faqLink.title}</NavLink>
            </nav>

          </div>      
        </Container>
      </header>
    );
  }
}

export default Header;