import { TabPanel } from '@headlessui/react';
import React from 'react';
import useCivilian from '../../../hooks/useCivilian';
import CarList from '../../../../cars/components/CarList';

export default function Cars() {

    const {civilian} = useCivilian();

  return (
    <>
        <TabPanel>
            {civilian && <CarList items={civilian?.Car} />} 
        </TabPanel>
    </>
  );
}
