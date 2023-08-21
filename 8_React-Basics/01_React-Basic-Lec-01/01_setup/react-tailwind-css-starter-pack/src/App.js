// import logo from './logo.svg';

import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';

function App(){
    return(
        <div className="main">
            <Item name="nirma"></Item>
            <ItemDate  day="20" month="june" year="1992"></ItemDate>

            <Item name="niere"  ></Item>
            <ItemDate day="50" month="vse" year="17712"></ItemDate>

            <Item></Item>
            <ItemDate></ItemDate>
            <div className="App">hello jii</div>
        </div>
        
    )
}

export default App;