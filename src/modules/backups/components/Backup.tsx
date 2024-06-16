import BackupProvider from '../providers/BackupProvider';
import BackupList from './BackupList';

export default function Backup() {

  return (
    <>
        <BackupProvider>
          <BackupList />
        </BackupProvider>
    </>
  );
}
