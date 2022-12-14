import React, { useEffect, useState } from "react";
import headerNavigationStyle from "./header-navigation.module.sass";

const HederNavigation: React.FC<{
  data: {}[];
  currentPage: number;
  currentPageClickHandler: Function;
}> = (props) => {
  useEffect(() => {
    const wheelListener = (e: any) => {
      if (e.deltaY < 0 && props.currentPage > 1) {
        props.currentPageClickHandler(props.currentPage - 1);
      } else if (e.deltaY > 0 && props.currentPage !== props.data.length) {
        props.currentPageClickHandler(props.currentPage + 1);
      }
    };

    document.addEventListener("wheel", wheelListener);
  }, [props.currentPage, props]);

  return (
    <div className={headerNavigationStyle.headerNavigationItems}>
      {props.data.map((item: any) => {
        return (
          <div
            className={
              props.currentPage === item.id
                ? headerNavigationStyle.headerNavigationItemActive
                : headerNavigationStyle.headerNavigationItem
            }
            key={item.id}
            onClick={() => {
              props.currentPageClickHandler(item.id);
            }}
          >
            <div
              className={
                props.currentPage === item.id
                  ? headerNavigationStyle.navigationLineSelected
                  : headerNavigationStyle.navigationLine
              }
            >
              <div
                className={
                  props.currentPage === item.id
                    ? headerNavigationStyle.navigationLineSelected
                    : headerNavigationStyle.navigationLineHovered
                }
              ></div>
            </div>
            <div
              className={
                props.currentPage === item.id
                  ? headerNavigationStyle.navigationDot
                  : headerNavigationStyle.navigationDotHidden
              }
            ></div>
            <div
              className={
                props.currentPage === item.id
                  ? headerNavigationStyle.headerNavigationItemTextActive
                  : headerNavigationStyle.headerNavigationItemText
              }
            >
              {item.text.toUpperCase()}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HederNavigation;
