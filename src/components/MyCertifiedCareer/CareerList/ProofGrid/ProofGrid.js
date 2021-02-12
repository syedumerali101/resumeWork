import { Grid, MenuItem, Select, TextField } from "@material-ui/core";
import React from "react";
import { FOLDERS, FORMATIONS, PROOFS } from "constants/options";

import "./proofGrid.scss";

const ProofGrid = ({ data, handleChange }) => {
  const { proof, formation, folder, websiteLink, videoLink } = data;
  const TYPE_OF_PROOF_OPTIONS =
    proof === PROOFS[1].value
      ? FOLDERS
      : proof === PROOFS[2].value
      ? FORMATIONS
      : null;
  const getLabelByProof = () => {
    if (proof === PROOFS[1].value) return "Select A Folder";
    if (proof === PROOFS[2].value) return "Formation";
    if (proof === PROOFS[3].value) return "A Website Link";
    else return "A Video Link";
  };

  return (
    <>
      <Grid item xs={proof !== "none" ? 6 : 12}>
        <div className="proofGrid__field">
          <p className="proofGrid__field__label">Proof</p>

          <Select
            name="proof"
            value={proof}
            onChange={handleChange}
            variant="outlined"
            defaultValue="none"
            className="proofGrid__field__input"
          >
            {PROOFS.map((x, index) => (
              <MenuItem
                disabled={x.value === "none"}
                key={x.label}
                value={x.value}
              >
                {x.label}
              </MenuItem>
            ))}
          </Select>
        </div>
      </Grid>
      {proof !== "none" ? (
        <Grid item xs={6}>
          <div className="proofGrid__field">
            <p className="proofGrid__field__label">{getLabelByProof()}</p>
            {TYPE_OF_PROOF_OPTIONS ? (
              <Select
                name={proof === PROOFS[1].value ? "folder" : "formation"}
                value={proof === PROOFS[1].value ? folder : formation}
                onChange={handleChange}
                variant="outlined"
                defaultValue="none"
                className="proofGrid__field__input"
              >
                {TYPE_OF_PROOF_OPTIONS.map((x, index) => (
                  <MenuItem
                    disabled={x.value === "none"}
                    key={x.label}
                    value={x.value}
                  >
                    {x.label}
                  </MenuItem>
                ))}
              </Select>
            ) : (
              <TextField
                className="proofGrid__field__input"
                fullWidth
                variant="outlined"
                size="medium"
                required
                value={proof === PROOFS[3].value ? websiteLink : videoLink}
                name={proof === PROOFS[3].value ? "websiteLink" : "videoLink"}
                placeholder={
                  proof === PROOFS[3].value
                    ? "Enter website link"
                    : "Enter video link"
                }
              />
            )}
          </div>
        </Grid>
      ) : null}
    </>
  );
};

export default ProofGrid;
