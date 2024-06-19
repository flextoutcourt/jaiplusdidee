import React from 'react';
import MainLayout from '../../core/components/layouts/Main';
import List from '../components/List';
import SelectProvider from '../../core/providers/SelectProvider';
import SwrProvider from '../../core/providers/SwrProvider';
import useSWR from 'swr';
import { fetcher } from '../../core/utils/functions';

export default function CivilianList({}) {

  const {data} = useSWR('/api/civilians', fetcher);

  return (
    <MainLayout>
      <SwrProvider>
        <SelectProvider>
          {data && <List items={data} />}
        </SelectProvider>
      </SwrProvider>
    </MainLayout>
  );
}
