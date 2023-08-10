// src/components/HomePage.js
import React from 'react';
import styled from 'styled-components';
import './index.css'; // Import the index.css file

const HomePageContainer = styled.div`
  text-align: center;
  padding: 50px;
`;

const CardContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

const HomePageText = styled.p`
  font-size: 18px;
`;

const HomePage = () => (
  <HomePageContainer>
    <CardContainer>
      <HomePageText>
        Wishing a very <span style={{ color: '#ff6b6b', fontWeight: 'bold' }}>Happy Birthday</span> to the most amazing husband in the world! May your day be filled with love, joy, and wonderful surprises.
        Thank you for being the incredible person you are. Here's to many more years of happiness and cherished moments together.
      </HomePageText>
    </CardContainer>
  </HomePageContainer>
);

export default HomePage;
