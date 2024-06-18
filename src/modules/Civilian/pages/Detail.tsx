import React from 'react';
import MainLayout from '../../core/components/layouts/Main';
import AgentDetail from '../../agents/pages/Detail';
import ExtendedDetails from '../components/Details/Extended';

export default function CivilianDetail() {

  return (
    <MainLayout>
      <ExtendedDetails />
    </MainLayout>
  );
}
