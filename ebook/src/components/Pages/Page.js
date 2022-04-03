import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { connect } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

function Page({ ebook, addEbook }) {
  const location = useLocation();
  let navigate = useNavigate();

  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState("");
  const [para, setPara] = useState("");

  useEffect(() => {
    if (!ebook?.length) {
      navigate("/");
    }
  }, [ebook]);

  useEffect(() => {
    if (edit) {
      setTitle(location.state.title);
      setPara(location.state.para);
    }
    if (!edit) {
      setTitle("");
      setPara("");
    }
  }, [edit]);

  const handleEdit = () => {
    setEdit(true);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleParaChange = (event) => {
    setPara(event.target.value);
  };

  const handleSave = (data) => {
    let temp = [];
    let params = {
      id: data?.id,
      title: title,
      para: para,
    };
    temp = ebook.filter((item) => item.id !== data.id);
    let newPages = [...temp, params];
    // newPages.sort((a, b) => (a.id < b.id ? 1 : -1));
    localStorage.setItem("ebook", JSON.stringify(newPages));
    addEbook(newPages);
    setEdit(false);
    navigate("/");
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
          value={edit ? title : location.state.title}
          onChange={handleTitleChange}
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
          value={edit ? para : location.state.para}
          onChange={handleParaChange}
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
      <span className="btn-margin">
        <Button
          variant="outlined"
          onClick={() => {
            navigate("/");
          }}
        >
          + Add Page
        </Button>
      </span>
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

export default connect(mapStateToProps, mapDispatchToProps)(Page);
