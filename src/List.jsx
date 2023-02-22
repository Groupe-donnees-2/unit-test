import React from 'react';
import { ListItem } from "./ListItem";

export function List(props) {
    const {items, checkable, onCheck, children} = props;

    return (
        <div className='list-container'>
            <div className='list-children'>{children}</div>
            <ul className='list'>
                {items.map((item, i) => {
                    const uniqueId = `${item}-${i}`;
                    return (
                        <ListItem key={uniqueId} checkable={checkable} id={uniqueId}
                                  onCheck={event => onCheck(event, item, i)} item={item}/>
                    );
                })}
            </ul>
        </div>
    );
}