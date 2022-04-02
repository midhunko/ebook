import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { connect } from "react-redux";

function AddPage({ addEbook, ebook }) {
  const [title, setTitle] = useState("");
  const [para, setPara] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleParaChange = (event) => {
    setPara(event.target.value);
  };

  const savePage = (event) => {
    //event.preventDefault();
    let index = ebook?.length + 1;
    let params = {
      id: index,
      title: title,
      para: para,
    };
    let totalPages = [...ebook, params];
    localStorage.setItem("ebook", JSON.stringify(totalPages));
    addEbook(totalPages);
  };

  useEffect(() => {
    console.log(ebook);
  }, [ebook]);

  return (
    <>
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Title"
          fullWidth
          maxRows={4}
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <br />
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Page Content"
          fullWidth
          multiline
          rows={15}
          value={para}
          onChange={handleParaChange}
        />
      </div>
      <br />
      <Button variant="outlined" onClick={() => savePage()}>
        Save
      </Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddPage);
