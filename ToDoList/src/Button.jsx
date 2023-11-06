import React, { useState } from 'react';

const Button = ({text,onclick}) => {
    //const [count, setCount] = useState(0);
    return <button onClick={() => onclick()}>{text}</button>;
};

export default Button
