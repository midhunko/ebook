import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { Button } from "@mui/material";

function Page({ ebook }) {
  const location = useLocation();
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(true);
  };

  const handleSave = (data) => {
    let params = {
      id: data?.id,
      title: data?.title,
      para: data?.para,
    };
    console.log(params, "edit");
    setEdit(false);
  };

  return (
    <>
      <div>
        <TextField
          id="outlined-multiline-flexible"
          //label="Title"
          disabled={edit ? false : true}
          fullWidth
          maxRows={4}
          value={location.state.title}
         // onChange={handleTitleChange}
        />
      </div>
      <br />
      <div>
        <TextField
          id="outlined-multiline-flexible"
          //label="Page Content"
          fullWidth
          multiline
          disabled={edit ? false : true}
          rows={15}
          value={location.state.para}
         // onChange={handleParaChange}
        />
      </div>
      <br />
      {edit ? (
        <>
          {" "}
          <Button
            variant="outlined"
            onClick={() => {
              handleSave(location.state);
            }}
          >
            Save
          </Button>
        </>
      ) : (
        <>
          {" "}
          <Button
            variant="outlined"
            onClick={() => {
              handleEdit();
            }}
          >
            Edit
          </Button>
        </>
      )}
    </>
  );
}
const mapStateToProps = (state) => ({
  ebook: state.ebook,
});

export default connect(mapStateToProps, null)(Page);
