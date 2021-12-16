import React from "react";
import { Wrapper, CardsDaysWeek } from "./styles";

//sol
import LightModeTwoToneIcon from "@mui/icons-material/LightModeTwoTone";

//lua
// import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';;

//lua com nuvem
// import NightsStayTwoToneIcon from '@mui/icons-material/NightsStayTwoTone';

//neve
// import AcUnitIcon from "@mui/icons-material/AcUnit";

//guarda-chuva
// import UmbrellaIcon from "@mui/icons-material/Umbrella";

type Props = {
  title: string;
  tempMin: number;
  tempMax: number;
};

export default function CardsDays({ title, tempMin, tempMax }: Props) {
  return (
    <Wrapper>
      <h2 className="nameDay">{title}</h2>
      <div className="icon">
        <LightModeTwoToneIcon />
        <CardsDaysWeek>
          <b className="textTemp">
            max <p className="number">{tempMax}</p>cº
          </b>
          <b className="textTemp">
            min <p className="number">{tempMin}</p>cº
          </b>
        </CardsDaysWeek>
      </div>
    </Wrapper>
  );
}
