/**
 * ADMIN => TOUTES LES BACKUPS
 * COMMANDER => TOUTES LES BACKUPS SASP sud, nord, doa, crime, special
 * COMMAND STAFF => TOUTES LES BACKUPS SASP SUD, DOA, CRIME
 * SUPERVISOR => TOUTES LES BACKUPS DE LEURS UNITES
 * OFFICERS => TOUTES LES BACKUPS DE LEURS UNITES
 * 
 * 
 */

import { useEffect, useState } from 'react';
import usePusher from '../../pusher/hooks/usePusher';
import { BackupType } from '../types/BackupType';
import BackupItem from './BackupItem';


export default function BackupList() {

  // take all the channels from the entitiesOnAgent => pusher.subscribe(agent.entities.map())
  const [backups, setBackups] = useState<BackupType[]>([]);
  const {pusher} = usePusher();

  useEffect(() => {
    console.log('use effect')
    if(pusher){
      console.log('pusher is defined')
      const channel = pusher.subscribe('my-channel');
      channel.bind('my-event', (data:any) => {
        setBackups([data, ...backups])
      })
    }
  }, [pusher, backups]);

  return (
    <div className="flex flex-col gap-2">
        {backups.map((item, key) => (
            <BackupItem key={item.titre} backup={item} />
        ))}
    </div>
  );
}
