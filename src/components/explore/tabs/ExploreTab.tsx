import React from 'react';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
export const ExploreTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: 'none',
      minWidth: 72,

      marginRight: theme.spacing(4),

      '&:hover': {
        color: '#40a9ff',
        opacity: 1,
      },
      '&$selected': {
        color: '#1890ff',
        fontWeight: theme.typography.fontWeightMedium,
      },
      '&:focus': {
        color: '#40a9ff',
      },
    },
    selected: {},
  })
)((props: StyledTabProps) => <Tab disableRipple {...props} />);
interface StyledTabProps {
  label: string;
}
