import React from 'react';
import { Header1, Header2, Description, Container, Row, TitleText } from './styled';

export default function Card() {
  return <Container>
    <TitleText>We utilize a distinct set of tools based on your specific requirements</TitleText>
    <Row>
      <Header1>Tools</Header1>
      <Header2>CAWI</Header2>
    </Row>
    <Description>
      Computer-Assisted Web Interviewing is a vital tool in our arsenal, allowing us to conduct surveys and collect data through online platforms with the assistance of specialized software, ensuring efficient and accurate data collection for our clients' market research needs
    </Description>
  </Container >;
}
