import React from 'react';

const App = () => {
    const date = new Date()
    const hours = date.getHours()
    let msg
    const style = {
        fontSize: 20
    }
    if(hours < 12){
        msg = 'Morning'
        style.color = 'red'
    }else if(hours > 12 && hours <=16){
        msg = 'Afternoon'
        style.color = 'blue'
    }else if(hours >16 && hours<= 20){
        msg = 'Evening'
        style.color = 'green'
    }else{
        msg = 'Night'
        style.color = 'purple'
    }
    return(
        <div>
            <h1 style={style}> {`The time is ${hours}, Good ${msg}`}</h1>
        </div>
    )
}
export default App