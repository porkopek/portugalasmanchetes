import React from 'react';
import {
  Container,
  Grid,
  makeStyles,
  createStyles,
  Button,
  SvgIcon,
  AppBar,
  Toolbar,
  Theme,
} from '@material-ui/core';
import { NavLink, useLocation, Link } from 'react-router-dom';

import CountryMenu, { Language } from './country-menu';
import WhatshotTwoToneIcon from '@material-ui/icons/WhatshotTwoTone';
import AutorenewTwoToneIcon from '@material-ui/icons/AutorenewTwoTone';
import FindInPageTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import SettingsTwoToneIcon from '@material-ui/icons/SettingsTwoTone';
import './nav.css';
export interface INavProps {
  height?: number;
  onDirectionChanges: () => void;
  daysSince2020First: string;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.type === 'light' ? 'white' : '#252424',
      boxShadow: '0 2px 4px rgba(0,0,0,.15)',
    },
    buttonLabel: {
      color: theme.typography.body2.color,
    },
  })
);
//-- TODO detect change in language. Manage state of CountryMenu
const initialLanguage = (localStorage.getItem('language') as Language) || 'all';
export default function Nav({ daysSince2020First }: INavProps) {
  const { pathname } = useLocation();
  const language = (pathname.split('/').filter((z) => z)[0] || initialLanguage) as Language;
  const classes = useStyles();
  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <Container>
          <Grid
            container
            alignItems="center"
            spacing={1}
            style={{ flexWrap: 'nowrap', overflow: 'auto' }}
          >
            <Grid item>
              <NavLink to={`/${language}/articles/relevant/${daysSince2020First}/`}>
                <Button
                  startIcon={
                    <SvgIcon>
                      <WhatshotTwoToneIcon />
                    </SvgIcon>
                  }
                >
                  <span className={classes.buttonLabel}>Capa</span>
                </Button>
              </NavLink>
            </Grid>
            <Grid item>
              <NavLink to={`/${language}/articles/new/${daysSince2020First}/`}>
                <Button
                  startIcon={
                    <SvgIcon>
                      <AutorenewTwoToneIcon />
                    </SvgIcon>
                  }
                >
                  Recentes
                </Button>
              </NavLink>
            </Grid>

            <Grid item>
              <NavLink to={`/${language}/explore/trends/${daysSince2020First}/`}>
                <Button
                  startIcon={
                    <SvgIcon>
                      <FindInPageTwoToneIcon />
                    </SvgIcon>
                  }
                >
                  Explorar
                </Button>
              </NavLink>
            </Grid>

            <Grid item>
              <CountryMenu language={language} />
            </Grid>
            <Grid item>
              <Link to={'#'}>
                <Button
                  startIcon={
                    <SvgIcon>
                      <SettingsTwoToneIcon width="24px" height="24px" />
                    </SvgIcon>
                  }
                >
                  Definições
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
