import React from "react";
import { Switch } from "@material-ui/core";
import { MdModeEdit } from "react-icons/md";
import { IoTrash, IoCheckmarkCircle } from "react-icons/io5";
import { GiSandsOfTime } from "react-icons/gi";

import "./listItem.scss";

const ListItem = ({ education, route }) => {
  const {
    educationType,
    market,
    bachelor,
    school,
    yearEnd,
    level,
    verified,
  } = education;
  return (
    <div className="listItem">
      <div className="listItem__row">
        <div className="listItem__row__content">
          <div className="listItem__row__col">
            <p>{educationType}</p>
            <p>{yearEnd}</p>
          </div>
          <div className="listItem__row__col">
            <p>{market}</p>
            <p>{school}</p>
          </div>
          <div className="listItem__row__col">
            <p>{bachelor}</p>
            <p>{level}</p>
          </div>
        </div>
        <div className="listItem__row__actions">
          {route === "timeline" ? null : (
            <>
              <div className="listItem__row__col listItem__row__col--action">
                <p className="listItem__row__col__iconContainer">
                  <MdModeEdit
                    className="listItem__row__col__iconContainer__icon"
                    size={23}
                  />
                </p>
              </div>
              <div className="listItem__row__col listItem__row__col--action">
                <p className="listItem__row__col__iconContainer">
                  <IoTrash
                    className="listItem__row__col__iconContainer__icon"
                    size={23}
                  />
                </p>
              </div>
            </>
          )}

          <div className="listItem__row__col listItem__row__col--action">
            <p>Status</p>
            <p className="listItem__row__col__iconContainer">
              {verified ? (
                <IoCheckmarkCircle
                  color="green"
                  className="listItem__row__col__iconContainer__icon"
                  size={23}
                />
              ) : (
                <GiSandsOfTime
                  className="listItem__row__col__iconContainer__icon"
                  size={23}
                />
              )}
            </p>
          </div>
          {route === "timeline" ? (
            <Switch
              // checked={state.checkedB}
              // onChange={handleChange}
              color="primary"
              name="checkedB"
              inputProps={{ "aria-label": "primary checkbox" }}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ListItem;
