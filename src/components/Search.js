import React ,{useState,useEffect} from 'react';
import axios from 'axios';

const Search = () => {
    const[term,setTerm] = useState("programming");
    const[results,setResults] = useState([]);
    //console.log('I RUN WITH EVERY RENDER ');
    //console.log(results);

    useEffect(() => {
        //console.log('I ONLY RUN ONCE');
        //console.log(results);
        const search = async () =>{
            const {data} = await axios.get('http://en.wikipedia.org/w/api.php',{
              params: {
                  action:'query',
                  list: 'search',
                  origin: '*',
                  format: 'json',
                  srsearch: term,
              },
        });
        setResults(data.query.search);    
    };

    if(term && !results.length){
        search();
    } else{
        const timeoutId = setTimeout(() => {
            if(term) {
                search();
            }
        },1000);

        return () => {
            clearTimeout(timeoutId);
        };
    }

        
        
    },[term,results.length]);

   /* useEffect(() => {
        console.log('Initial remder or term was changed');
        return () => {
            const timeoutId = setTimeout(() => {
                if(term) {
                    search();
                }
            },500);
        };

    },[term]);*/

    const renderedResults = results.map((result) =>{
        return(
            <div key={result.pageid} className='item'>
                <div className="right floated content">
                    <a 
                    href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    className="ui button ">
                        Go
                        </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                </div>
            </div>
        );
    }
                
    );

        

        /*another approach

        (async () => {
            await axios.get('');
        })();
         its defines a function and invokes it immediately */

        /* third method
         axios.get('ehfgwef')
         .then((response) =>{
             console.log(response.data);
         });*/
    
    // We can't use async await as we use in axios with class components inside useEffect
    // },[]); Run at initial render
    // });   -> Run at initial render ->(AND) Run after every rerender
    // }[term,efgh,ghh]);  -> [data] ->(AND) Run at initial render -> Run after every rerender if data has changed since last render.

    return (
    <div>
        <div className="ui form">
            <div className="field">
                <label>Enter Search Term</label>
                <input
                value={term}
                onChange={e => setTerm(e.target.value)} 
                className="input"
                 />
            </div>
        </div>
        <div className="ui celled list">{renderedResults}</div>
    </div>

    );
};

export default Search;

/*
The 'useEffect' Hook

Allow function componenets to use something like lifescyvle methods.

We configure the hook to run some code automatically in one of three scenerios:

1. When the component is rendered for first time only.
2. When the componenet is rendered for the first time and whenever it rerenders.
3. When the component is rendered for the (first time and whenever it rerenders AND some pieces of data has changed).



*/