import {ChangeEventHandler, CSSProperties, FC, LegacyRef, MutableRefObject, useRef, useState} from 'react';
export interface ITextFieldProps {
    className?: string;
    value?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    type?: "text" | "password" | "number";
    label?: string;
}

const TextField:FC<ITextFieldProps> = ({ className,value,onChange,type="text",label }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isMouseOver, setIsMouseOver] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const onFocus = () => {
        setIsFocused(true);
    }
    const onBlur = () => {
        setIsFocused(false);
    }
    const onMouseEnter = () => {
        setIsMouseOver(true);
    }
    const onMouseLeave = () => {
        setIsMouseOver(false);
    }
    const onLabelClick = () => {
        if(inputRef.current) {
            inputRef.current.focus();
        }
    }
    const inputStyles:CSSProperties = {
        border: "none",
        outline: "none",
        width: "100%",
        height: "100%",
        paddingInline:"15px",
        paddingBlock: "10px",
        color: "#333",
        borderRadius: "8px",
    }
    const style:CSSProperties = {
        border: isMouseOver || isFocused ? "1px solid #000" : "1px solid #ccc",
        borderRadius: "8px",
        outline: "1px solid #ccc",
        position: "relative",
    }
    const placeHolderContainerStyle:CSSProperties = {
        position: "absolute" ,
        bottom: isFocused ? "85%" : "50%",
        transform: isFocused ? "translateY(0)" : "translateY(50%)",
        zIndex: 2,
        left: isFocused ? "10px" : "10px",
        fontSize: isFocused ? "10px" : "14px",
        fontWeight: isFocused ? 'bold' : 'normal',
        backgroundColor: "#fff",
        transition: "all 0.25s ease-in-out",
        color: isFocused ? "#000" : "#ccc",
        overflow: "hidden",
        textWrap: "nowrap",
        maxWidth: "calc(100% - 20px)",
    }
    return <div style={style} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={["",className].join(" ")}>
        {
            label &&
            <div onClick={onLabelClick} style={placeHolderContainerStyle}>
                <span>{label}</span>
            </div>
        }
        <input ref={inputRef} value={value} onChange={onChange} onFocus={onFocus} onBlur={onBlur} style={inputStyles} type={type} />
    </div>;
};

export default TextField;
    