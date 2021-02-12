import { Button, Grid, MenuItem, Select, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { EDUCATION_TYPES, STATUS, YEAR_END } from "constants/options";
import ProofGrid from "../ProofGrid";

import "./addEducation.scss";

const AddEducation = () => {
  const [education, setEducation] = useState({
    proof: "none",
    folder: "none",
    formation: "none",
    websiteLink: "",
    videoLink: "",
  });
  const { proof, folder, formation, websiteLink, videoLink } = education;

  const handleChange = (e) => {
    if (e.target.name === "proof") {
      if (e.target.value !== proof) {
        setEducation((prev) => ({
          ...prev,
          folder: "none",
          formation: "none",
          websiteLink: "",
          videoLink: "",
        }));
      }
    }
    setEducation((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  console.log("education<>", education);

  return (
    <div className="addEducation">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div className="addEducation__field">
            <p className="label">Title Education*</p>
            <TextField
              className="addEducation__field__input"
              fullWidth
              variant="outlined"
              size="medium"
              required
              placeholder="Enter title"
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="addEducation__field">
            <p className="label">Education Type</p>

            <Select
              variant="outlined"
              defaultValue="none"
              className="addEducation__field__input"
              // value={state.age}
              // onChange={handleChange}

              // inputProps={{
              //   name: 'age',
              //   id: 'outlined-age-native-simple',
              // }}
            >
              {EDUCATION_TYPES.map((type, index) => (
                <MenuItem
                  key={type.label}
                  disabled={type.value === "none"}
                  value={type.value}
                >
                  {type.label}
                </MenuItem>
              ))}
            </Select>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="addEducation__field">
            <p className="label">Domain</p>
            <TextField
              className="addEducation__field__input"
              fullWidth
              variant="outlined"
              size="medium"
              required
              placeholder="Enter domain"
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="addEducation__field">
            <p className="label">Status</p>

            <Select
              variant="outlined"
              defaultValue="none"
              className="addEducation__field__input"
              // value={state.age}
              // onChange={handleChange}

              // inputProps={{
              //   name: 'age',
              //   id: 'outlined-age-native-simple',
              // }}
            >
              {STATUS.map((x, index) => (
                <MenuItem
                  key={x.label}
                  disabled={x.value === "none"}
                  value={x.value}
                >
                  {x.label}
                </MenuItem>
              ))}
            </Select>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="addEducation__field">
            <p className="label">Year End</p>

            <Select
              variant="outlined"
              defaultValue="none"
              className="addEducation__field__input"
              // value={state.age}
              // onChange={handleChange}

              // inputProps={{
              //   name: 'age',
              //   id: 'outlined-age-native-simple',
              // }}
            >
              {YEAR_END.map((year, index) => (
                <MenuItem
                  key={year.label}
                  disabled={year.value === "none"}
                  value={year.value}
                >
                  {year.label}
                </MenuItem>
              ))}
            </Select>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="addEducation__field">
            <p className="label">Description</p>
            <TextField
              className="addEducation__field__input"
              multiline
              rows={3}
              placeholder="Enter description"
              defaultValue=""
              variant="outlined"
            />
          </div>
        </Grid>
        <ProofGrid handleChange={handleChange} data={education} />

        <Grid item xs={12}>
          <div className="addEducation__field">
            <p className="label">Reference</p>
            <TextField
              className="addEducation__field__input"
              multiline
              rows={2}
              placeholder="Enter school name, city etc"
              defaultValue=""
              variant="outlined"
            />
          </div>
        </Grid>
        <Grid className="addEducation__field__btnContainer" item xs={12}>
          <Button
            // onClick={() => history.push("/register")}
            color="primary"
            className="addEducation__field__btnContainer__btn"
            size="large"
            variant="contained"
          >
            SEND TO VERIFICATION
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddEducation;
