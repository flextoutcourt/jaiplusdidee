import React, { useState } from 'react';
import LicenceItem from './LicenceItem';
import SearchInput from '../../core/components/inputs/SearchInput';
import { LicenceType } from '../types/LicenceType';

export default function LicenceList({items}: {items: LicenceType[]}) {
    
    const [search, setSearch] = useState<LicenceType[]>(items);

    const handleChange = (e: any) => {
        if(e.target.value === ''){
            setSearch(items);
        }else{
            setSearch(
                items.filter(
                    (item) => 
                        item.type.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()) ||
                        item.DeliveredBy.Civilian.firstname.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()) ||
                        item.DeliveredBy.Civilian.lastname.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()) ||
                        item.DeliveredBy.matricule.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
                )
            )
        }
    }

  return (
    <>
        <div className="mb-2">
            <SearchInput handleChange={handleChange} />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
            {search.map((item) => (
                <LicenceItem key={item.uuid} licence={item} />
            ))}   
        </div>
    </>
  );
}
