import {FC} from 'react';
export interface ITextFieldProps {
    className?: string;
}

const TextField:FC<ITextFieldProps> = ({ className }) => {
    return <div className={["",className].join(" ")}>
    Hello 👋, I am a TextField component.
    </div>;
};

export default TextField;
    