import React from 'react';
import clsx from 'clsx';
import langStyle from './style';
import FlagIcon from 'views/components/base/FlagIcon';
import Select, { SelectRef } from 'views/components/base/Select';
import { APP_LANGUAGES, APP_LANG_DEFAULT } from 'utils/constants';
import { useTranslation } from 'react-i18next';
import { getLang } from 'utils';


export interface ILanguageProps{
  variant?: 'outlined' | 'filled';
}

const Language: React.FC<ILanguageProps> = props => {

  const classes = langStyle();
  const selectRef = React.useRef<SelectRef>(null);
  const { variant = 'filled' } = props;
  const { i18n } = useTranslation();

  const changeLang = () => {
    const current = selectRef.current?.getValue() ?? APP_LANG_DEFAULT.code;
    if (current !== i18n.language) i18n.changeLanguage(current.toString());
  }

  return <Select 
    ref={ selectRef }
    onChange={ changeLang }
    className={ clsx(classes.root, 'language', variant) }
    value={ getLang() }
    options={
      APP_LANGUAGES.map(lang => ({
        value: lang.code,
        label: <div className="lang-item">
          <FlagIcon code={ lang.country_code.toLowerCase() } />
          <span className="lang-code">{ lang.country_code }</span>
          <span className="lang-sep"> / </span>
          <span className="lang-name">{ lang.name }</span>
        </div>
      }))
    } 
  />

}

export default React.memo(Language);