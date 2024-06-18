import React, { useEffect } from 'react';
import useSWR from 'swr';
import { fetcher } from '../../core/utils/functions';
import Small from './Details/Small';
import useSelected from '../../core/hooks/useSelected';
import { User } from '../../auth/types/AuthType';
import Button from '../../core/design-system/Button';
import { DeleteMany } from '../services/CivilianServices';
import { toast } from 'react-toastify';
import SwrContext from '../../core/context/SwrContext';
import SwrProvider from '../../core/providers/SwrProvider';
import useSwrContext from '../../core/hooks/useSwrContext';

export default function List({}) {

    const {data, mutate} = useSWR('/api/civilians', fetcher);

    const {selected, setSelected} = useSelected();

    const handleChange = (e: any) => {
        if(e.target.checked){
            setSelected(data);
        }else{
            setSelected([]);
        }
    }

    const isSelected = () => {
        return selected?.length === data?.length
    }

    const deleteSelected = (e: any) => {
        DeleteMany(selected).then(() => {
            mutate();
            setSelected([]);
            toast.success("test");
        });
    }

  return (
    <>
        <div className="flex justify-between items-center mb-4">
            <div className="flex flex-1 items-center gap-4 max-w-xl">
                <input type="checkbox" id="selected" className="h-6 w-6 rounded border-gray-300 accent-indigo-500" onChange={handleChange} checked={isSelected()} />
                <label htmlFor="selected" className="text-gray-500 font-medium">{selected.length > 0 && selected.length + ' civilians selected'}</label>
                {selected?.length > 0 && 
                    <div className="max-w-96 flex gap-2">
                        <Button variant='delete' onClick={deleteSelected}>Delete</Button>
                    </div>
                }
            </div>
            <input type="text" className="rounded-md bg-gray-200 max-w-3xl py-1 px-2" />
        </div>
        <div className="grid grid-cols-4 gap-4">
            {data?.map((item: User) => (
                <Small civilian={item} key={item.uuid} />
            ))}
        </div>
    </>
  );
}
