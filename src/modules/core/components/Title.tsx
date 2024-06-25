import React, { PropsWithChildren } from 'react';

interface TitleProps extends PropsWithChildren{
    isLoading: boolean;
}

export default function Title({children, isLoading}: TitleProps) {
  return (
    <>
        {isLoading ?
            <div className="animate-pulse h-2.5 bg-gray-300 rounded-full w-full"/>
            :
            <p className="font-extrabold text-center text-md xl:text-xl">
                {children}
            </p>
        }
    </>
  );
}
