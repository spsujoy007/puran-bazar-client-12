import React from 'react';

const ButtonCommon = ({children}) => {
    return (
        <button className='btn btn-primary btn-gradient-to-r from-primary to-secondary'>{children}</button>
    );
};

export default ButtonCommon;