import React from 'react';
import MainLayout from '../core/components/layouts/Main';
import AgentList from '../agents/components/AgentList';

export default function AgentIndex() {
  return (
    <MainLayout title="Agents list">
        <AgentList />
    </MainLayout>
  );
}
