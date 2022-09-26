import * as React from 'react';
import Box from '@mui/material/Box';
import { CardExterno } from './styled';
import CardBox from '../CardBox';
import Card1 from '../CardDumb/Card1';
import Card2 from '../CardDumb/Card2';


export default function BoxSx() {
  
    const card1 = () => {return <Card1/>}
    const card2 = () => {return <Card2/>}

  return (
    <CardExterno>
        <CardBox card={card1()} link={"/consult"}/>
        <CardBox card={card2()} link={"/exam"} />
    </CardExterno>
  );
}