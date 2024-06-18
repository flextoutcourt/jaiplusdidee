import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { fetcher } from '../../../core/utils/functions';
import useNavbarContext from '../../../core/hooks/useNavbarContext';

export default function ExtendedDetails() {

    const {id} = useParams();
    const {setTitle} = useNavbarContext();

    const {data} = useSWR(`/api/civilians/${id}`, fetcher);

    useEffect(() => {
        if(data){
            setTitle(`${data.firstname} ${data.lastname}`)
        }
    }, [data])

  return (
    <div className="flex flex-col">
        <img src="https://picsum.photos/1920/1080" alt="" className="aspect-video w-1/3 rounded-lg shadow-md" />
        <div className="w-full">
          {/* Add tab system */}
        </div>
    </div>
  );
}
