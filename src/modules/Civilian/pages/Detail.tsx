import MainLayout from '../../core/components/layouts/Main';
import ExtendedDetails from '../components/Details/Extended';
import CivilianProvider from '../providers/CivilianProvider';

export default function CivilianDetail() {

  return (
    <MainLayout>
      <CivilianProvider>
        <ExtendedDetails />
      </CivilianProvider>
    </MainLayout>
  );
}
