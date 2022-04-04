import React, { useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";

import { connect } from "react-redux";

const drawerWidth = 240;

function SideBar({ addEbook, ebook }) {
  let navigate = useNavigate();

  useEffect(() => {
    if (!ebook?.length) {
      if (localStorage.getItem("ebook")) {
        let data = localStorage.getItem("ebook");
        addEbook(JSON.parse(data));
      }
    }
  }, []);

  const sortedTitles = (ebook) => {
    if (ebook?.length) {
      let titles = ebook.sort((a, b) => (a.id > b.id ? 1 : -1));
      return titles;
    }
    return [];
  };

  const returnTitle = (title) => {
    if (title?.length > 10) return title?.substr(0, 10) + "...";
    if (title?.length < 10) return title;
  };

  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        {/* <Toolbar /> */}
        {ebook && ebook?.length > 0 && (
          <List>
            {sortedTitles(ebook)?.map((text, index) => (
              <ListItem button key={index}>
                <ListItemText
                  primary={returnTitle(text?.title)}
                  onClick={() => {
                    navigate("/page", { state: text });
                  }}
                  //key={index}
                />
              </ListItem>
            ))}
          </List>
        )}
        {!ebook?.length && (
          <List>
            {["Add pages"].map((text, index) => (
              <ListItem button key={index}>
                <ListItemText
                  primary={text}
                  onClick={() => {
                    navigate("/page");
                  }}
                  //key={index}
                />
              </ListItem>
            ))}
          </List>
        )}
      </Drawer>
    </>
  );
}

const mapStateToProps = (state) => ({
  ebook: state.ebook,
});

const mapDispatchToProps = (dispatch) => ({
  addEbook: (data) => {
    dispatch({ type: "ADD_BOOK", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
