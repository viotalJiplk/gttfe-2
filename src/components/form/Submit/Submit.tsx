import React, { PropsWithChildren } from 'react';
import CTA from '../../../components/layout/CTA/CTA';
import classes from './Submit.module.scss';

interface SubmitProps extends PropsWithChildren{
    className?: string,
    onClick?: Function,
}

const Submit: React.FC<SubmitProps> = props => {
    return <CTA onClick={props.onClick} className={[classes.Submit, props.className].join(' ')}>
        {props.children}
    </CTA>
};

export default Submit;