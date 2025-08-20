import React from 'react';

type HelloProps = {
    name: string,
    age?: number // optional
}

const Day1_Hello: React.FC<HelloProps> = ({ name, age }) => {
    return (
        <h1 aria-label="greeting">
            Hello, {name}! {age ? `(Age: ${age})` : ''}
        </h1>
    );
}

export default Day1_Hello;