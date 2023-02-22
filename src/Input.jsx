import React from 'react';

export function Input(props) {
    const { onChange, onKeyUp } = props;

    return (
        <input id='add-todo' type="text" onChange={onChange} onKeyUp={onKeyUp}/>
    );
}