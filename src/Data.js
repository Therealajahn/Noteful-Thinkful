import React from 'react';


function Data(props) {
    const DataContext = React.createContext(props.state);
    return(
        <DataContext.Provider>
        </DataContext.Provider>
    )
}

export default Data;