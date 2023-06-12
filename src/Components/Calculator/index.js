import Button from '../Button';
import Input from '../Input';

import {CalculatorContainer} from './styles'; 
import {Container, Content, Row} from './styles'; 
import {useState} from 'react';

const Calculator = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('0');

  const handleAddNumber = (number) => {
    setCurrentNumber( prev => `${number}${prev}`)
  };

  const handleSumNumbers = () =>{
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+')
    }else{
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }

  const handleMinusNumbers = () =>{
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+')
    }else{
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }

  const handleTimesNumbers = () =>{
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('x')
    }else{
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }
  
  const handleDivideNumbers = () =>{
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('÷')
    }else{
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }
  
  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumbers();
          break;
        default: 
          break;
      }
    }
  }

  const handleClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0');
    setOperation('0');
  };

  return (
    <CalculatorContainer >
      <Container>
        <Content>
          <Input value={currentNumber}/>
          <Row>
            <Button label="%"/>
            <Button label="√"/>
            <Button label="x²"/>
            <Button label="1/x"/>
          </Row>
          <Row>
            <Button label="CE"/>
            <Button label="C" onClick={handleClear}/>
            <Button label="⌫"/>
            <Button label="÷" onClick={() => handleDivideNumbers()}/>
          </Row>
          <Row>
            <Button label="7" onClick={() => handleAddNumber('7')}/>
            <Button label="8" onClick={() => handleAddNumber('8')}/>
            <Button label="9" onClick={() => handleAddNumber('9')}/>
            <Button label="x" onClick={() => handleTimesNumbers()}/>
          </Row>
          <Row>
            <Button label="4" onClick={() => handleAddNumber('4')}/>
            <Button label="5" onClick={() => handleAddNumber('5')}/>
            <Button label="6" onClick={() => handleAddNumber('6')}/>
            <Button label="-" onClick={() => handleMinusNumbers()}/>
          </Row>
          <Row>
            <Button label="1" onClick={() => handleAddNumber('1')}/>
            <Button label="2" onClick={() => handleAddNumber('2')}/>
            <Button label="3" onClick={() => handleAddNumber('3')}/>
            <Button label="+" onClick={() => handleSumNumbers()}/>
          </Row>
          <Row>
            <Button label="±" onClick={() => handleAddNumber('±')}/>
            <Button label="0" onClick={() => handleAddNumber('0')}/>
            <Button label="," onClick={() => handleAddNumber('.')}/>
            <Button label="=" onClick={() => handleEquals()}/>
          </Row>
        </Content>
      </Container>
    </CalculatorContainer>
  );
}
  
  export default Calculator;
  