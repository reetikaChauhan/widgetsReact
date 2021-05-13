import React,{useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';


const items = [
    {
        title: 'what is React?',
        content: 'React is a front end javascript framework'

    },
    {
        title: 'Why use React?',
        content: 'React is a favourite javacsript library among engineers'

    },
    {
        title: 'How do you use react?',
        content: 'You use react react by creating components'

    }

]

const options = [
    {
        label:'The color Red',
        value: 'red'
    },
    {
        label:'The color Green',
        value: 'green'
    },
    {
        label:'The shade of blue',
        value: 'blue'
    },
    
];



// short cut for commenting in html ( command+k+c)
const App = () => {
    const [selected,setSelected] = useState(options[0]);
    //const [showDropdown, setShowDropdown] = useState(true);
    
    return(
        
        <div>
            {/* <button onClick= {() => setShowDropdown(!showDropdown)} >Toggle Dropdown</button>  */}
            {/* <Search /> */}
            <Header />
            <Route path="/">
                <Accordion items={items}/>
            </Route>
            <Route path="/translate">
                <Translate />
            </Route >
            <Route path="/list"> 
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown  
                    label='Select a color'
                    options={options}
                    selected={selected}
                    onSelectedChange = {setSelected}
                />
                <h4 style={{color:`${selected.value}`}}>This text is {selected.value} </h4>
            </Route>
             {/* {showDropdown ? 
            <div>
            <Dropdown 
            options={options}
            selected={selected}
            onSelectedChange = {setSelected}
            /> 
            <h4 style={{color:`${selected.value}`}}>This text is {selected.value} </h4>
            </div>
            : null 
            }  */}
            
           
        
        </div>
    );
};

export default App;