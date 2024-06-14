import React from "react";
import { useFormContext } from "react-hook-form";

type TextInputType = {
    label: string;
    name: string;
    rules?: {};
    spanning?: 2|4;
    type?: string;
    extra?: React.ReactNode
}

export default function TextInput({label, name, rules = {}, spanning = 2, type = "text", extra}: TextInputType){

    const {register} = useFormContext();

    return(
        <div>
            <div className={extra ? "flex items-center justify-between": ""}>
                <label htmlFor={name} className="block text-sm font-semibold leading-6 text-gray-900">
                {label}
                </label>
                {extra}
            </div>
            <div className="mt-2.5">
              <input
                type={type}
                id={name}
                autoComplete={name}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register(name, rules)}
              />
            </div>
        </div>
    )

}