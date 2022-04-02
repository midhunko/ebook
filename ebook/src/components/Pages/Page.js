import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";

function Page({ ebook }) {
  const location = useLocation();
  console.log(location.state);
  useEffect(() => {
    console.log(ebook);
  }, [ebook]);
  return (
    <>
      <div>
        <TextField
          id="outlined-multiline-flexible"
          //label="Title"
          disabled={true}
          fullWidth
          maxRows={4}
          value={location.state.title}
        />
      </div>
      <br />
      <div>
        <TextField
          id="outlined-multiline-flexible"
          //label="Page Content"
          fullWidth
          multiline
          disabled={true}
          rows={15}
          value={location.state.para}
        />
      </div>
    </>
  );
}
const mapStateToProps = (state) => ({
  ebook: state.ebook,
});

export default connect(mapStateToProps, null)(Page);
