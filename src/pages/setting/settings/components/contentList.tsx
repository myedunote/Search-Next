/*
 * @Author: Vir
 * @Date: 2021-06-20 18:42:57
 * @Last Modified by: Vir
 * @Last Modified time: 2021-06-21 22:21:18
 */

import {
  createStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemProps,
  ListItemSecondaryAction,
  ListItemText,
  ListProps,
  ListSubheader,
  makeStyles,
} from '@material-ui/core';
import React from 'react';

export interface ContentListItemProps extends ListItemProps {
  icon?: React.ReactNode;
  text?: React.ReactNode;
  secondaryAction?: React.ReactNode;
}

export interface ContentListProps extends ListProps {
  dataMap?: any[]; //数据源
  itemBuilder?: (item: any, index: number) => React.FC; //自定义item
  title?: string;
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      paddingLeft: 0,
    },
  }),
);

export const ContentListItem: React.FC<ContentListItemProps> = ({
  children,
  icon,
  text,
  secondaryAction,
  ...props
}) => {
  const classes = useStyles();
  console.log(props);
  return (
    // @ts-ignore 忽略ListItem button类型问题
    <ListItem className={classes.root} {...props}>
      {children ? (
        children
      ) : (
        <>
          {icon && <ListItemIcon>{icon}</ListItemIcon>}
          {text && <ListItemText>{text}</ListItemText>}
          {secondaryAction && (
            <ListItemSecondaryAction>{secondaryAction}</ListItemSecondaryAction>
          )}
        </>
      )}
    </ListItem>
  );
};

export const ContentList: React.FC<ContentListProps> = ({
  dataMap,
  itemBuilder,
  children,
  title,
  disablePadding = true,
  ...props
}) => {
  return (
    <List
      disablePadding={disablePadding}
      subheader={<ListSubheader>{title}</ListSubheader>}
      {...props}
    >
      {children}
    </List>
  );
};
