import { Grid, MenuItem, TextField, Select, Button } from "@material-ui/core";
import React, { useState } from "react";
import { VALIDITY, YEAR_END } from "constants/options";
import ProofGrid from "../ProofGrid";
import "./addFormation.scss";

const AddFormation = () => {
  const [formationData, setFormationData] = useState({
    proof: "none",
    folder: "none",
    formation: "none",
    websiteLink: "",
    videoLink: "",
  });
  const { proof, folder, formation, websiteLink, videoLink } = formationData;

  const handleChange = (e) => {
    if (e.target.name === "proof") {
      if (e.target.value !== proof) {
        setFormationData((prev) => ({
          ...prev,
          folder: "none",
          formation: "none",
          websiteLink: "",
          videoLink: "",
        }));
      }
    }
    setFormationData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="addFormation">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div className="addFormation__field">
            <p className="label">Title Formation*</p>
            <TextField
              className="addFormation__field__input"
              fullWidth
              variant="outlined"
              size="medium"
              required
              placeholder="Enter title"
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="addFormation__field">
            <p className="label">Domain</p>
            <TextField
              className="addFormation__field__input"
              fullWidth
              variant="outlined"
              size="medium"
              placeholder="Enter domain"
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="addFormation__field">
            <p className="label">City*</p>
            <TextField
              className="addFormation__field__input"
              fullWidth
              type="number"
              variant="outlined"
              size="medium"
              required
              placeholder="Enter postal code"
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="addFormation__field">
            <p className="label">Year End Formation*</p>
            <Select
              required
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
        <Grid item xs={6}>
          <div className="addFormation__field">
            <p className="label">Validity</p>

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
              {VALIDITY.map((x, index) => (
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
        <Grid item xs={12}>
          <div className="addFormation__field">
            <p className="label">Description</p>
            <TextField
              className="addFormation__field__input"
              multiline
              rows={3}
              placeholder="Enter specifics of the position, example: 'management of a team of 20 people...'"
              defaultValue=""
              variant="outlined"
            />
          </div>
        </Grid>
        <ProofGrid handleChange={handleChange} data={formationData} />
        <Grid item xs={12}>
          <div className="addFormation__field">
            <p className="label">Reference</p>
            <TextField
              className="addFormation__field__input"
              multiline
              rows={2}
              placeholder="Enter contact name, company contact, phone contact etc..."
              defaultValue=""
              variant="outlined"
            />
          </div>
        </Grid>
        <Grid className="addFormation__field__btnContainer" item xs={12}>
          <Button
            // onClick={() => history.push("/register")}
            color="primary"
            className="addFormation__field__btnContainer__btn"
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

export default AddFormation;
