// src/components/BirthdayMessage.js
import React from 'react';
import styled from 'styled-components';

const MessageContainer = styled.div`
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

const BirthdayMessage = ({ husbandName, yourName }) => (
  <MessageContainer>
    <Greeting>Happy Birthday to My Wonderful Husband!</Greeting>
    <MessageText>
      Dear {husbandName},
      From the moment we met, my world has been brighter and more beautiful. Your love and presence have added meaning to every moment, and today, on your special day, I want to celebrate you like never before.
      You are my rock, my confidant, and my greatest blessing. Your kindness, wisdom, and love inspire me to become a better person every day.
      May this birthday be filled with joy, laughter, and unforgettable moments. As we journey through life together, know that my love for you grows stronger with each passing day.
      Here's to another year of wonderful memories, shared dreams, and endless love. Happy birthday, my love! I love you Babey.
      With all my heart,
      {yourName}
    </MessageText>
  </MessageContainer>
);

export default BirthdayMessage;
