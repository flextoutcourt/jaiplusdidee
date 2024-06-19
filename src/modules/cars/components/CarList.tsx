import React, { useState } from 'react';
import { CarType } from '../types/CarType';
import SearchInput from '../../core/components/inputs/SearchInput';
import CarItem from './CarItem';

export default function CarList({items}: {items: CarType[]}) {

    const [search, setSearch] = useState<CarType[]>(items);

    const handleChange = (e: any) => {
        if(e.target.value === ''){
            setSearch(items)
        }else{
            setSearch(items.filter(
                (item) => 
                    item.brand.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()) ||
                    item.model.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()) ||
                    item.immat.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
            ))
        }
    }

  return (
    <>
        <SearchInput handleChange={handleChange} />
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
            {search.map((item) => (
                <CarItem key={item.uuid} item={item} />
            ))}
        </div>
    </>
  );
}
