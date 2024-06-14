import classNames from "classnames";
import styled from "styled-components";

type ButtonType = {
    children: string | React.ReactNode;
    type?: "submit" | "reset" | 'button';
    onClick?: () => void;
    variant?: "primary"|"delete"|"warning"
}

export default function Button({children, type = 'submit', onClick, variant = 'primary'}: ButtonType) {
  return (
    <>
        <button
            onClick={onClick}
            type={type}
            className={classNames(
              "flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 shadow-lg",
              variant == "primary" ? "bg-indigo-600 hover:bg-indigo-500 text-white" : 
              variant == "delete" ? "bg-red-600 hover:bg-red-500 text-white" : 
              variant == "warning" ? "bg-orange-600 hover:bg-orange-500 text-white" : ''
            )}
            >
            {children}
        </button>
    </>
  );
}