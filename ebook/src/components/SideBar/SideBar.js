import React, { useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";

//import ebookJSON from "../../eBookData.json";
import { connect } from "react-redux";

const drawerWidth = 240;

function SideBar({ addEbook, ebook }) {
  let navigate = useNavigate();
  // console.log(JSON.stringify(ebookJSON));

  /*  useEffect(() => {
    if (!localStorage.getItem("ebook")) {
      localStorage.setItem("ebook", JSON.stringify(ebookJSON));
      let data = [];
      for (var i in ebookJSON) {
        data.push([i, ebookJSON[i]]);
        console.log(data);
      }
      ebook?.length === 0 && addEbook(data);
    }
    if (localStorage.getItem("ebook")?.length > 0) {
      let data = localStorage.getItem("ebook");
      addEbook(data);
    }
  }, []); */

  /*  useEffect(() => {
    console.log(ebook);
  }, [ebook]);
 */

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
            {ebook?.map((text, index) => (
              <ListItem button key={text}>
                <ListItemText
                  primary={returnTitle(text?.title)}
                  onClick={() => {
                    navigate("/page", { state: text });
                  }}
                />
              </ListItem>
            ))}
          </List>
        )}
        {/*  <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </Drawer>
    </>
  );
}

const mapStateToProps = (state) => ({
  ebook: state.ebook,
});

const mapDispatchToProps = (dispatch) => ({
  addEbook: (data) => {
    //console.log(data);
    dispatch({ type: "ADD_BOOK", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
