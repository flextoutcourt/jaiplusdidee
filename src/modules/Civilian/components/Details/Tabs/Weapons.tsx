import React from 'react';
import useCivilian from '../../../hooks/useCivilian';
import { TabPanel } from '@headlessui/react';
import WeaponList from '../../../../weapons/components/WeaponList';

export default function Weapons() {

    const {civilian} = useCivilian();

  return (
    <>
        <TabPanel>
            {civilian && <WeaponList items={civilian?.Weapon} />}
        </TabPanel>
    </>
  );
}
