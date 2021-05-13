import React,{ useState } from 'react';


const Accordion = ({items}) =>{
    // array destructuring
    const[activeIndex,setActiveIndex] = useState(null);
    // active index = piece of state
    // function to change this piece of state
    // use state(null) =  initial value for this piece of state
    const onTitleClick = (index) =>{
          console.log('title clicked',index);
          setActiveIndex(index);
    };
    const renderedItems = items.map((item,index) => {
        const active = index === activeIndex ? 'active': '';
        return( 
        <React.Fragment key={item.title}>
           <div 
           className={`title  ${active}`}
           onClick={() => onTitleClick(index)}
           >
               <i className="dropdown icon"></i>
               {item.title}
           </div>
           <div className={`content ${active}`}>
             <p>{item.content}</p>
           </div>
        </React.Fragment>
        );
    });
    return (
    <div className="ui styled accordion">
        {renderedItems}
        
    </div>
    );
};

export default Accordion;

/*
array destructuring

const colors = ['red','yellow'];
**one way***
const red = colors[0];
const yellow = colors[1];
*** destructuring in one line ***
const[ red , yellow ] = colors; 
*/