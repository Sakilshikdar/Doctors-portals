import React from 'react';

const Button = ({children}) => {
    return (
        <div>
            <button class="btn bg-gradient-to-r from-secondary to-primary uppercase text-white font-bold border-none">{children}</button>
        </div>
    );
};

export default Button;