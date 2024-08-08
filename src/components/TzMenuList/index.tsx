import React, { useMemo } from "react";

import "./index.less";
import {
  MenuItem,
  MenuItemProps,
  MenuList,
  MenuListProps,
} from "@mui/material";

export const TzMenuList = (props: MenuListProps) => {
  const realProps = useMemo(() => {
    return {
      ...props,
      className: `tz-menu-list ${props.className || ""}`,
    };
  }, [props]);
  return <MenuList {...realProps} />;
};

export const TzMenuItem = (props: MenuItemProps) => {
  const realProps = useMemo(() => {
    return {
      ...props,
      className: `tz-menu-item ${props.className || ""}`,
    };
  }, [props]);
  return <MenuItem {...realProps} />;
};

export interface TzMenuListNoramlProps extends MenuListProps {
  menuList?: MenuItemProps[];
}

export const TzMenuListNoraml = (props: TzMenuListNoramlProps) => {
  const { menuList, ...menuListProps } = props;

  const _menuList = useMemo(() => {
    return menuList?.map((menuItemProps, index) => {
      return <TzMenuItem key={index} {...menuItemProps} />;
    });
  }, [menuListProps]);
  return <TzMenuList {...menuListProps}>{_menuList}</TzMenuList>;
};
