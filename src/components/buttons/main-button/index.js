import React from 'react';

//styles
import '../button.scss';
import './main-button.scss';

const MainButton = ({text, className}) => {
    return <button className={`btn-main ${className}`}>{text}</button>
};

export default MainButton;