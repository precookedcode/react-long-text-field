import React from 'react';
import { colors } from '@precooked/utils';

interface LongTextFieldProps {
    label: string;
    description?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    rows?: number; // Cantidad de líneas o renglones
    resizable?: boolean; // Define si el campo es expandible o no
    containerStyle?: React.CSSProperties;
    labelStyle?: React.CSSProperties;
    descriptionStyle?: React.CSSProperties;
    className?: string;
    id?: string;
    [key: string]: any; // Para props adicionales
}

const LongTextField: React.FC<LongTextFieldProps> = ({
    value,
    onChange,
    placeholder,
    rows = 3,
    resizable = true,
    label,
    description,
    containerStyle,
    labelStyle,
    descriptionStyle,
    className,
    id, ...props }) => {
    return (
        <>
            <div
                className={`precooked-long-text-field ${className}`}
                style={{
                    background: "#fff",
                    width: "100%",
                    borderColor: colors.medium,
                    borderWidth: "2px",
                    borderRadius: "10px",
                    borderStyle: "solid",
                    boxSizing: "border-box",
                    backgroundColor: "#fff",
                    position: "relative",
                    padding: "10px",
                    marginTop: "10px",
                    ...containerStyle
                }}
                id={id}
            >
                <label style={{
                    position: "absolute",
                    top: "-13px",
                    left: "10px",
                    display: "inline-block",
                    padding: "0 5px",
                    background: "#fff",
                    fontWeight: "600",
                    color: colors.text,
                    ...labelStyle
                }}>{label}</label>

                <textarea
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    rows={rows}
                    style={{
                        resize: resizable ? 'both' : 'none',
                        outline: "none",
                        backgroundColor: "transparent",
                        border: "none",
                        width: "100%",
                        color: colors.text,
                    }} // Control de expansión
                    {...props}
                />
            </div>
            {description && <p style={{
                fontWeight: 300,
                fontStyle: "italic",
                display: "block",
                padding: "3px",
                margin: 0,
                color: colors.textTint,
                fontSize: ".9em",
                ...descriptionStyle
            }}>{description}</p>}
        </>

    );
};

export default LongTextField;
