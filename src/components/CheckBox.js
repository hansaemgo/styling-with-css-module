import React from 'react';

function CheckBox ({ checked, children, ...rest}) {
    return (
        <div>
            <label>
                <input type="checkbox" checked={checked} {...rest}/>
                <div>{checked ? '체크됨' : '체크안됨'}</div>
            </label>
            <span>
                {children}
            </span>
        </div>
    );
}

export default CheckBox;