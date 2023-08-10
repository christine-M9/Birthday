// src/App.js
import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import BirthdayMessage from './BirthdayMessage';
import About from './About';

const AppContainer = styled.div`
  text-align: center;
  padding: 50px;
`;

const NavContainer = styled.nav`
  margin-top: 20px;
`;

const NavLinkList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
`;

const NavLinkItem = styled.li`
  margin: 0 20px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  font-size: 18px;
  &:hover {
    color: #ff6b6b;
  }
`;

const App = () => (
  <Router>
    <AppContainer>
      <NavContainer>
        <NavLinkList>
          <NavLinkItem>
            <NavLink to="/">HOME</NavLink>
          </NavLinkItem>
          <NavLinkItem>
            <NavLink to="/birthday">BIRTHDAY MESSAGE</NavLink>
          </NavLinkItem>
          <NavLinkItem>
            <NavLink to="/about">ABOUT</NavLink>
          </NavLinkItem>
        </NavLinkList>
      </NavContainer>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/birthday" element={<BirthdayMessage husbandName="JAMES" yourName="CHRISTINE." />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </AppContainer>
  </Router>
);

export default App;
