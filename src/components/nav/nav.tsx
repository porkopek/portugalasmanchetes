import React, { useState } from 'react';
import {
  Container,
  Grid,
  IconButton,
  makeStyles,
  createStyles,
  Button,
  SvgIcon,
  AppBar,
  Toolbar,
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';

import CountryMenu, { Language } from './country-menu';
import { ReactComponent as UpdateIcon } from 'assets/update.svg';
import { ReactComponent as FireIcon } from 'assets/fire.svg';
import { ReactComponent as ExploreIcon } from 'assets/explore.svg';
import settingsIcon from 'assets/settings.svg';
import './nav.css';
import { getStoredCategoriesString } from 'lib/utils';
export interface INavProps {
  height?: number;
  onDirectionChanges: () => void;
}
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,.05)',
    },
  })
);
//-- TODO detect change in language. Manage state of CountryMenu
const initialLanguage = (localStorage.getItem('language') as Language) || 'all';
export default function Nav({ onDirectionChanges }: INavProps) {
  const [language, setLanguage] = useState<Language>(initialLanguage);
  const classes = useStyles();
  const categories = getStoredCategoriesString();
  return (
    <AppBar classes={classes}>
      <Toolbar>
        <Container>
          <Grid
            container
            alignItems="center"
            spacing={1}
            style={{ flexWrap: 'nowrap', overflow: 'auto' }}
          >
            <Grid item>
              <NavLink to={`/${language}/articles/${categories}/relevant`}>
                <Button
                  startIcon={
                    <SvgIcon>
                      <FireIcon width="24px" height="24px" />
                    </SvgIcon>
                  }
                >
                  Capa
                </Button>
              </NavLink>
            </Grid>
            <Grid item>
              <NavLink to={`/${language}/articles/${categories}/new`}>
                <Button
                  startIcon={
                    <SvgIcon>
                      <UpdateIcon width="24px" height="24px" />
                    </SvgIcon>
                  }
                >
                  Recentes
                </Button>
              </NavLink>
            </Grid>

            <Grid item>
              <NavLink to={`/${language}/explore`}>
                <Button
                  startIcon={
                    <SvgIcon>
                      <ExploreIcon />
                    </SvgIcon>
                  }
                >
                  Explorar
                </Button>
              </NavLink>
            </Grid>

            <Grid item>
              <CountryMenu language={initialLanguage} onLanguageChanges={setLanguage} />
            </Grid>
            <Grid item>
              <IconButton onClick={onDirectionChanges}>
                <img src={settingsIcon} alt="" style={{ width: 20 }} />
              </IconButton>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
