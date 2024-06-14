import BackupProvider from '../providers/BackupProvider';
import BackupList from './BackupList';

interface backupType {
    titre: string;
    type: number;
}
  
export default function Backup() {

  return (
    <>
        <BackupProvider>
            <BackupList />
        </BackupProvider>
    </>
  );
}
