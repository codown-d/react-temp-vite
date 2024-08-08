import { Cloud, ContentCopy, ContentCut } from "@mui/icons-material";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { TzMenuListNoraml } from "../../components/TzMenuList";
import { useMemo } from "react";

let PageMenuList = () => {
  let list = [
    {
      title: "Cut",
      icon: ContentCut,
    },
    {
      title: "Copy",
      icon: ContentCopy,
    },

    {
      title: "Paste",
      icon: null,
    },

    {
      title: (
        <>
          <Cloud fontSize="small" />
          Web Clipboard
        </>
      ),
      icon: null,
    },
  ];
  let menuList = useMemo(() => {
    return list.map(({ title, icon: Icon }) => {
      let children = (
        <>
          {title}
          {Icon ? (
            <ListItemIcon>
              <Icon fontSize="small" />
            </ListItemIcon>
          ) : null}
        </>
      );
      return { children };
    });
  }, []);
  return <TzMenuListNoraml menuList={menuList} />;
};
export default PageMenuList;
