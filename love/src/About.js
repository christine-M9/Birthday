// src/components/About.js
import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const AboutTitle = styled.h2`
  color: #ff6b6b;
  font-size: 24px;
  margin-bottom: 15px;
`;

const AboutText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  text-align: left;
`;

const About = () => (
  <AboutContainer>
    <AboutTitle>ABOUT</AboutTitle>
    <AboutText>
      This is a special app to send a heartfelt birthday message to my beloved husband. Expressing my love and making his day even more special!
    </AboutText>
  </AboutContainer>
);

export default About;
