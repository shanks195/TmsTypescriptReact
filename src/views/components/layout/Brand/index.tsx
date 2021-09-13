import React from 'react';
import clsx from 'clsx';
import Logo from 'assets/images/logo/scb-white.svg';
import PAGE_URL from 'app/PageURL';
import brandStyle from './style';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Brand: React.FC = () => {

  const classes = brandStyle();
  const { t } = useTranslation();

  const className = clsx(classes.root, "flex items-center justify-between");

  return <div className={ className }>
    <Link to={ PAGE_URL.Dashboard } className="flex">
      <img src={ Logo } alt={ t('App.Name') } />
    </Link>
  </div>

}

export default Brand;