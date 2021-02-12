import { Grid } from "@material-ui/core";
import React from "react";

import ListItem from "../ListItem";
import "./timeline.scss";

const EDUCATION = [
  {
    educationType: "Diploma",
    market: "Master Commercial",
    yearEnd: 2010,
    school: "Harvard School",
    level: "Obtained",
    bachelor: "Bachelor +4",
    verified: true,
  },
  {
    educationType: "Diploma",
    market: "Commercial",
    yearEnd: 2010,
    school: "MIT Institute",
    level: "Level",
    bachelor: "Bachelor +6",
    verified: false,
  },
];

const Timeline = () => {
  return (
    <div className="timeline">
      <div className="timeline__grid">
        <Grid container spacing={3}>
          <Grid item xs={12} lg={4} xl={12}>
            <div className="timeline__grid__title">Education</div>
            <div className="timeline__grid__list">
              {EDUCATION.map((x) => (
                <ListItem
                  route="timeline"
                  key={x.bachelor}
                  education={{ ...x }}
                />
              ))}
            </div>
          </Grid>
          <Grid item xs={12} lg={4} xl={12}>
            <div className="timeline__grid__title">Work Exprience</div>
            <div className="timeline__grid__list">
              {EDUCATION.map((x) => (
                <ListItem
                  route="timeline"
                  key={x.bachelor}
                  education={{ ...x }}
                />
              ))}
            </div>
          </Grid>
          <Grid item xs={12} lg={4} xl={12}>
            <div className="timeline__grid__title">Formation</div>
            <div className="timeline__grid__list">
              {EDUCATION.map((x) => (
                <ListItem
                  route="timeline"
                  key={x.bachelor}
                  education={{ ...x }}
                />
              ))}
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Timeline;
