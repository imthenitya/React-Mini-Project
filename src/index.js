import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
let day="";
const cssStyle={ 
    textTransform: 'capitalize',
};

const d= new Date(2020, 10, 20, 12, 0);
let hour= d.getHours();
const minute= d.getMinutes();

if (hour>5 && hour<12){
    day="good morning";
    cssStyle.color = 'green';
}
else if(hour>11 && hour<20){
    day="good afternoon";
    cssStyle.color = 'blue';
}
else{
    day="good night";
    cssStyle.color = 'red';
}

ReactDOM.render(
    <React.Fragment>
<p>Hello Sir,<span style={cssStyle}> {day}</span></p>
</React.Fragment>,
document.getElementById('root')
)