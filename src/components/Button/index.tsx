import React from "react";
import './index.scss';  // Ensure this path is correct
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "@nextui-org/react";

interface ButnFieldProps {
    title: string;
    onClick: () => void;
    className: string;
    type?: "button" | "submit" | "reset";  // Optional, defaults to "button"
}

const ButnField: React.FC<ButnFieldProps> = ({ title, onClick, className, type = "button" }) => {
    return (
        <Button
            id="button-addon2"
            className={className}
            onClick={onClick}
            type={type}
        >
            {title}
        </Button>
    );
};

export default ButnField;
