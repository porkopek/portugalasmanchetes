import React, { useState } from 'react';
import {
  Container,
  Grid,
  IconButton,
  makeStyles,
  Theme,
  createStyles,
  Button,
  SvgIcon,
  AppBar,
  Toolbar,
} from '@material-ui/core';
import { Link, NavLink } from 'react-router-dom';

import CountryMenu, { Language } from './country-menu';
import { ReactComponent as UpdateIcon } from 'assets/update.svg';
import { ReactComponent as FireIcon } from 'assets/fire.svg';
import { ReactComponent as ExploreIcon } from 'assets/explore.svg';
import { ReactComponent as UserIcon } from 'assets/user.svg';
import settingsIcon from 'assets/settings.svg';
import './nav.css';
export interface INavProps {
  height?: number;
  onDirectionChanges: () => void;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,.05)',
    },
    // menuButton: {
    //   [theme.breakpoints.down('sm')]: {
    //     minWidth: 44,
    //   },
    // },
    // brand: {
    //   flexGrow: 1,
    //   display: 'none',
    //   [theme.breakpoints.up('sm')]: {
    //     display: 'block',
    //   },
    // },
  })
);
const initialLanguage =
  (localStorage.getItem('initialFlag') as Language) || 'pt';
export default function Nav({ onDirectionChanges }: INavProps) {
  const [language, setLanguage] = useState<Language>(initialLanguage);
  const classes = useStyles();

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
              <NavLink to={`/news/relevant/${language}`}>
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
              <NavLink to={`/news/new/${language}`}>
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
              <NavLink to={`/explore/${language}`}>
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
            {/* <Grid item>
              <NavLink to={`/explore/${language}`}>
                <Button>
                  <img
                    style={{ height: 20 }}
                    src={process.env.PUBLIC_URL + '/favicon.png'}
                    alt=""
                  />{' '}
                  Meus
                </Button>
              </NavLink>
            </Grid> */}
            <Grid item>
              <CountryMenu
                initialFlag={initialLanguage}
                onLanguageChanges={setLanguage}
              />
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
