import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import ListItem from "components/ListItem";
import { FaPlusCircle } from "react-icons/fa";
import "./careerList.scss";
import ModalWrapper from "components/ModalWrapper";
import AddEducation from "./AddEducation";
import AddWorkExprience from "./AddWorkExprience";
import AddFormation from "./AddFormation";

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

const CareerList = () => {
  const [isOpenEducation, setIsOpenEducation] = useState(false);
  const [isOpenFormation, setIsOpenFormation] = useState(false);
  const [isOpenWorkExprience, setIsOpenWorkExprience] = useState(false);

  return (
    <div className="careerList">
      <ModalWrapper
        isOpen={isOpenEducation}
        setIsOpen={setIsOpenEducation}
        title="Add Your Education"
      >
        <AddEducation />
      </ModalWrapper>
      <ModalWrapper
        isOpen={isOpenFormation}
        setIsOpen={setIsOpenFormation}
        title="Add Your Formation"
      >
        <AddFormation />
      </ModalWrapper>
      <ModalWrapper
        isOpen={isOpenWorkExprience}
        setIsOpen={setIsOpenWorkExprience}
        title="Add Your Work Exprience"
      >
        <AddWorkExprience />
      </ModalWrapper>
      <div className="careerList__grid">
        <Grid container spacing={3}>
          <Grid item xs={12} lg={4} xl={12}>
            <div className="careerList__grid__title">Education</div>
            <div className="careerList__grid__list">
              {EDUCATION.map((x) => (
                <ListItem key={x.bachelor} education={{ ...x }} />
              ))}
              <div
                onClick={() => setIsOpenEducation(true)}
                className="careerList__grid__list__addBtn"
              >
                <FaPlusCircle
                  className="careerList__grid__list__addBtn__icon"
                  size={30}
                />{" "}
                <span>Add a new education</span>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} lg={4} xl={12}>
            <div className="careerList__grid__title">Work Exprience</div>
            <div className="careerList__grid__list">
              {EDUCATION.map((x) => (
                <ListItem key={x.bachelor} education={{ ...x }} />
              ))}
              <div
                onClick={() => setIsOpenWorkExprience(true)}
                className="careerList__grid__list__addBtn"
              >
                <FaPlusCircle
                  className="careerList__grid__list__addBtn__icon"
                  size={30}
                />{" "}
                <span>Add a new work exprience</span>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} lg={4} xl={12}>
            <div className="careerList__grid__title">Formation</div>
            <div className="careerList__grid__list">
              {EDUCATION.map((x) => (
                <ListItem key={x.bachelor} education={{ ...x }} />
              ))}
              <div
                onClick={() => setIsOpenFormation(true)}
                className="careerList__grid__list__addBtn"
              >
                <FaPlusCircle
                  className="careerList__grid__list__addBtn__icon"
                  size={30}
                />{" "}
                <span>Add a new formation</span>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default CareerList;
