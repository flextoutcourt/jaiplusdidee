import React from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { fetcher } from '../../core/utils/functions';
import MainLayout from '../../core/components/layouts/Main';

export default function AgentDetail() {

    const {id} = useParams();

    const {data, isLoading, error} = useSWR(`/api/agents/${id}`, fetcher);

    console.log(data);

  return (
    <MainLayout title={`#${data?.matricule} ${data?.Civilian.firstname} ${data?.Civilian.lastname} `}>
        
    </MainLayout>
  );
}
