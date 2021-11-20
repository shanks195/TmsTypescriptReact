import { FC, useRef } from 'react';
import clsx from 'clsx';
import infoStyle from './style';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { applyTemplateUserView, getCurrentTemplateUserView, setCurrentValue } from 'features/template-user-view/store/slice';
import InputDebounce, { InputDebounceRef } from 'views/components/base/InputDebounce';
import { useTranslation } from 'react-i18next';
import { IMetadataInfo } from 'types/models/TemplateUserView';

const MetadataInfo: FC = () => {

  const classes = infoStyle();
  const { t } = useTranslation();

  const codeContractRef = useRef<InputDebounceRef>(null);
  const current = useSelector(getCurrentTemplateUserView);

  const dispatch = useDispatch();

  const onClickSave = () => {
    console.log('loccccDataBeforeSend', current.data);
    current.data && dispatch(applyTemplateUserView({template_id: '501', data: current.data}));
  }

  const changeInfoMetadata = () => {
    const value = codeContractRef.current?.getValue();
    value && dispatch(setCurrentValue(value));
  }

  return (
    <div className={clsx(classes.root)}>
      <div className={clsx(classes.label, 'mscb-outside-card-label ellipsis bg-white text-upper text-primary')}>
        {t('Pages.Layout.Reivew.Info')}
      </div>
      <div className={classes.rowLine}><div className={classes.colorPath}></div></div>
      <div className={clsx(classes.codeContract)}>
        {(() => {
          if (!current.isGroup) {
            return <InputDebounce
              type='text'
              label={current.label}
              value={current.data[current.active] ?? ''}
              ref={codeContractRef}
              onChange={changeInfoMetadata}
              timeout={300}
            />
          }
        })()}
      </div>
      <div className='btnSaveInfo'>
        <Button variant="contained" className="rounded-0" color="success"
          onClick={onClickSave}>{t('Pages.Layout.Review.Button.Apply')}</Button>
      </div>
    </div>
  )

}

export default MetadataInfo;