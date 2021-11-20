import {useEffect} from 'react';
import { updateDocumentTitle } from 'utils';
import { useTranslation } from 'react-i18next';



interface DashboardComponent extends React.FunctionComponent { }

const Dashboard: DashboardComponent = () => {
  const {t} = useTranslation()
  useEffect(() => {
    updateDocumentTitle(t('Pages.Dashboard.Sidebar'));
  });
  return (
    <div >
      DASHBOARD
    </div>
  );

}

export default Dashboard;