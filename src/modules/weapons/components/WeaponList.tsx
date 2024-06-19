import React, { useState } from 'react';
import WeaponItem from './WeaponItem';
import SearchInput from '../../core/components/inputs/SearchInput';
import { WeaponType } from '../types/WeaponType';

export default function WeaponList({items}: {items: WeaponType[]}) {

    const [search, setSearch] = useState<WeaponType[]>(items);

    const handleChange = (e: any) => {
        if(e.target.value === ''){
            setSearch(items);
        }else{
            setSearch(items.filter(
                (item) => 
                    item.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()) || 
                    item.uuid.includes(e.target.value)
            ))
        }
    }
    
  return (
    <>
        <SearchInput handleChange={handleChange} />
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
            {search.map((item) => (
                <WeaponItem key={item.uuid} weapon={item} />
            ))}   
        </div>
    </>
  );
}
