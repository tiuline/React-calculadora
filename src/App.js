
import Button from './Components/Button'
import Input from './Components/Input'
import {Container, Content, Row, Column} from './styles'; 

const App = () => {
  return (
    <Container>
      <Content>
        <Input/>
        <Row>
          <Button label="%"/>
          <Button label="√"/>
          <Button label="x²"/>
          <Button label="1/x"/>
        </Row>
        <Row>
          <Button label="CE"/>
          <Button label="C"/>
          <Button label="<X"/>
          <Button label="÷"/>
        </Row>
        <Row>
          <Button label="7"/>
          <Button label="8"/>
          <Button label="9"/>
          <Button label="x"/>
        </Row>
        <Row>
          <Button label="4"/>
          <Button label="5"/>
          <Button label="6"/>
          <Button label="-"/>
        </Row>
        <Row>
          <Button label="1"/>
          <Button label="2"/>
          <Button label="3"/>
          <Button label="+"/>
        </Row>
        <Row>
          <Button label="±"/>
          <Button label="0"/>
          <Button label=","/>
          <Button label="="/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
