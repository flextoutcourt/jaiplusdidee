import React from 'react';
import MainLayout from '../../core/components/layouts/Main';
import List from '../components/List';
import SelectProvider from '../../core/providers/SelectProvider';
import SwrProvider from '../../core/providers/SwrProvider';

export default function CivilianList({}) {
  return (
    <MainLayout title='Civilians'>
      <SwrProvider>
        <SelectProvider>
          <List />
        </SelectProvider>
      </SwrProvider>
    </MainLayout>
  );
}
