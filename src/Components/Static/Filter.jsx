import React from "react";
import PropTypes from "prop-types";
import GeneralButton from "../Dynamic/GeneralButton";

//MU Components
import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

const Filter = ({ department, filterCount }) => {
  return (
    <div className="filterContainer">
      <div className="filterHeader">
        <span className="department">{department},&nbsp;</span> için
        <h1>Toplam {filterCount} sonuç bulduk </h1>
      </div>
      <div className="filterButtons">
        <span className="filterButtonsHeader">Filtrele:</span>
        <div className="filterButtonsSection">
          <GeneralButton
            styleName={"generalButton"}
            buttonText="Online Görüşmeye Uygun"
            buttonIcon={<Switch {...label} />}
          />
          <GeneralButton
            styleName={"generalButton"}
            buttonText="Soru Sormaya Uygun"
            buttonIcon={<Switch {...label} />}
          />

          <GeneralButton
            buttonFirstIcon={
              <i style={{ color: "grey" }} class="fa-solid fa-up-down"></i>
            }
            styleName={"generalButton"}
            buttonText="Sırala"
            buttonIcon={
              <i style={{ color: "blue" }} class="fa-solid fa-caret-down"></i>
            }
          />

          <GeneralButton
            buttonFirstIcon={<i class="fa-solid fa-address-book"></i>}
            styleName={"generalButtonContact"}
          />
        </div>
      </div>
    </div>
  );
};

Filter.propTypes = {
  department: PropTypes.string,
  filterCount: PropTypes.number,
};

export default Filter;
