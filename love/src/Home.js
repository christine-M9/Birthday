// src/components/Home.js
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const Greeting = styled.h2`
  color: #ff6b6b;
  font-size: 24px;
  margin-bottom: 15px;
`;

const MessageText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  text-align: left;
`;

const Home = ({ husbandName, yourName }) => (
  <CardContainer>
    <Greeting>Happy Birthday to My Wonderful Husband!</Greeting>
    <MessageText>
      Dear {husbandName},
      {/* Your message here */}
      With all my love,
      <br />
      {yourName}
    </MessageText>
  </CardContainer>
);

export default Home;
