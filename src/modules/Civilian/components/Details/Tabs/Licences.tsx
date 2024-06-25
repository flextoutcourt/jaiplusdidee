import { TabPanel } from '@headlessui/react';
import React from 'react';
import LicenceList from '../../../../licences/components/LicenceList';
import useCivilian from '../../../hooks/useCivilian';

export default function Licences() {

    const {civilian} = useCivilian();

  return (
    <>
        <TabPanel>
            {civilian && <LicenceList items={civilian?.Licence} />}
        </TabPanel>
    </>
  );
}
