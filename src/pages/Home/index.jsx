import React from 'react';
import { Body } from '../../Components/Molecules/Body';
import { Header } from '../../Components/Molecules/Header';

import { Container } from './style';

export  const Home =()=> {
  return (
    <Container>
        <Header/>
        <Body/>
    </Container>
      );
};

