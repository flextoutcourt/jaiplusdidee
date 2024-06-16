import { useEffect, useState } from 'react';
import usePusher from '../../pusher/hooks/usePusher';
import { BackupType } from '../types/BackupType';
import BackupItem from './BackupItem';
import useAuth from '../../auth/hooks/useAuth';


export default function BackupList() {

  // take all the channels from the entitiesOnAgent => pusher.subscribe(agent.entities.map())
  const [backups, setBackups] = useState<BackupType[]>([]);
  const {pusher} = usePusher();
  const {user} = useAuth();

  useEffect(() => {
    if(pusher){
      const channel = pusher.subscribe('backup_channel');
      user.Entities.map((entity) => {
        channel.bind(`new:${entity.code}:backup`, (data: any) => {
          setBackups([data, ...backups]);
        });
        channel.bind(`delete:${entity.code}:backup`, (data: BackupType) => {
          setBackups(backups.filter((backup) => backup.uuid !== data.uuid));
        });
      })
    }
  }, [pusher, backups]);

  return (
    <div className="flex flex-col gap-2">
        {backups.map((item) => (
            <BackupItem key={item.uuid} backup={item} />
        ))}
    </div>
  );
}
