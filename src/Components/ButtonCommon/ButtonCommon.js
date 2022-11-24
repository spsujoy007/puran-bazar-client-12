import React from 'react';

const ButtonCommon = ({children}) => {
    return (
        <button className='btn-primary btn'>{children}</button>
    );
};

export default ButtonCommon;