import React, { useState } from 'react';
import { IconButton, MenuItem, Menu } from '@material-ui/core';
import spainFlag from 'assets/es.svg';
import portugalFlag from 'assets/pt.svg';
import ukFlag from 'assets/uk.svg';
import globalFlag from 'assets/global.svg';
import { useHistory, useLocation } from 'react-router-dom';
export type Language = 'es' | 'pt' | 'en' | 'all';

export interface ICountryMenuProps {
  language: Language;
  onLanguageChanges: (language: Language) => void;
}
const chooseFlag = (flag: Language) => {
  const language = localStorage.getItem('language');

  if (!flag && language) {
    flag = language as Language;
  }
  switch (flag) {
    case 'es':
      return spainFlag;

    case 'pt':
      return portugalFlag;

    case 'en':
      return ukFlag;

    case 'all':
      return globalFlag;

    default:
      return globalFlag;
  }
};
export default function CountryMenu({
  language,
  onLanguageChanges: onLanguageChange,
}: ICountryMenuProps) {
  const [flag, setFlag] = useState(language);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const { pathname } = useLocation();
  const { push } = useHistory();

  const handleChangeLanguage = (newLanguage: Language) => {
    onLanguageChange(newLanguage);
    setFlag(newLanguage);

    localStorage.setItem('language', newLanguage);
    setAnchorEl(null);
    const regx = RegExp(`/${flag}/`);
    const newRoute = pathname.replace(regx, '/' + newLanguage + '/');
    push(newRoute);
  };
  return (
    <div>
      <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
        <img src={chooseFlag(flag)} alt="" style={{ width: 20 }} />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={(_) => setAnchorEl(null)}
        keepMounted
        disableScrollLock={true}
      >
        <MenuItem onClick={(_) => handleChangeLanguage('all')}>
          <img src={chooseFlag('all')} alt="" style={{ width: 20 }} />
        </MenuItem>

        <MenuItem onClick={(_) => handleChangeLanguage('pt')}>
          <img src={chooseFlag('pt')} alt="" style={{ width: 20 }} />
        </MenuItem>

        <MenuItem onClick={(_) => handleChangeLanguage('es')}>
          <img src={chooseFlag('es')} alt="" style={{ width: 20 }} />
        </MenuItem>

        <MenuItem onClick={(_) => handleChangeLanguage('en')}>
          <img src={chooseFlag('en')} alt="" style={{ width: 20 }} />
        </MenuItem>
      </Menu>
    </div>
  );
}
