import React, { useState } from "react";
import { Button, Checkbox, Grid, TextField } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import "./addWorkExprience.scss";
import ProofGrid from "../ProofGrid";

const AddWorkExprience = () => {
  const [workExprience, setWorkExprience] = useState({
    proof: "none",
    folder: "none",
    formation: "none",
    websiteLink: "",
    videoLink: "",
  });
  const { proof, folder, formation, websiteLink, videoLink } = workExprience;

  const handleChange = (e) => {
    if (e.target.name === "proof") {
      if (e.target.value !== proof) {
        setWorkExprience((prev) => ({
          ...prev,
          folder: "none",
          formation: "none",
          websiteLink: "",
          videoLink: "",
        }));
      }
    }
    setWorkExprience((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  console.log("add", workExprience);
  return (
    <div className="addWorkExprience">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div className="addWorkExprience__field">
            <p className="label">Job Title*</p>
            <TextField
              required
              className="addWorkExprience__field__input"
              fullWidth
              variant="outlined"
              size="medium"
              required
              placeholder="Manager Senior"
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="addWorkExprience__field">
            <p className="label">Company Name*</p>
            <TextField
              required
              className="addWorkExprience__field__input"
              fullWidth
              variant="outlined"
              size="medium"
              required
              placeholder="Enter title"
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="addWorkExprience__field">
            <p className="label">City*</p>
            <TextField
              required
              type="number"
              className="addWorkExprience__field__input"
              fullWidth
              variant="outlined"
              size="medium"
              required
              placeholder="Enter postal code"
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="addWorkExprience__field">
            <p className="label">Domain</p>
            <TextField
              required
              className="addWorkExprience__field__input"
              fullWidth
              variant="outlined"
              size="medium"
              required
              placeholder="Enter domain"
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="addWorkExprience__field addWorkExprience__field--checkbox">
            <p className="label">Currently In Post</p>
            <div>
              <Checkbox
                id="currentlyInPost"
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
              <label style={{ cursor: "pointer" }} htmlFor="currentlyInPost">
                Currently in post
              </label>
            </div>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="addWorkExprience__field addWorkExprience__field__datePicker">
            <p className="label">Date Start*</p>
            <MuiPickersUtilsProvider className="" utils={DateFnsUtils}>
              <KeyboardDatePicker
                required
                inputVariant="outlined"
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                // value={selectedDate}
                onChange={(date) => console.log("date", date)}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </MuiPickersUtilsProvider>
          </div>
        </Grid>

        <Grid item xs={6}>
          <div className="addWorkExprience__field addWorkExprience__field__datePicker">
            <p className="label">Date End*</p>
            <MuiPickersUtilsProvider className="" utils={DateFnsUtils}>
              <KeyboardDatePicker
                required
                inputVariant="outlined"
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                // value={selectedDate}
                onChange={(date) => console.log("date", date)}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </MuiPickersUtilsProvider>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="addWorkExprience__field">
            <p className="label">Description</p>
            <TextField
              className="addWorkExprience__field__input"
              multiline
              rows={3}
              placeholder="Enter specifics of the position, example: 'management of a team of 20 people...'"
              defaultValue=""
              variant="outlined"
            />
          </div>
        </Grid>
        <ProofGrid handleChange={handleChange} data={workExprience} />
        <Grid item xs={12}>
          <div className="addWorkExprience__field">
            <p className="label">Reference</p>
            <TextField
              className="addWorkExprience__field__input"
              multiline
              rows={2}
              placeholder="Enter contact name, company contact, phone contact etc..."
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

export default AddWorkExprience;
