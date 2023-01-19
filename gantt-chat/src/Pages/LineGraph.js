import React, { useState } from "react";
import Chart from "react-apexcharts";
import { FaQuestionCircle, FaToggleOn, FaToggleOff } from "react-icons/fa";
import "../Styles/LineGraph.css";

export const LineGraph = () => {
  const [toggle, setToggle] = useState(false);
  const [product, setProduct] = useState([
    {
      name: "In-person Visit",
      data: [45, 67, 87, 34, 87, 45, 69, 76],
    },
    {
      name: "Online Visit",
      data: [62, 145, 27, 97, 45, 56, 87, 21],
    },
    {
      name: "Anytime Consult",
      data: [12, 35, 17, 97, 45, 56, 20, 11],
    },
  ]);
  const [option, setOption] = useState({
    title: { text: "Patient August Report" },
    xaxis: {
      title: { text: "Patient Visited in August" },
      categories: [
        "25 Aug",
        "26 Aug",
        "27 Aug",
        "27 Aug",
        "28 Aug",
        "29 Aug",
        "30 Aug",
        "31 Aug",
      ],
    },
    yaxis: {
      title: { text: "No. of Patient Consulted", style: { color: "gray" } },
    },
  });

  return (
    <>
      <div className="linecont">
        <header className="top_header">
          <h2>CUNSULTATION HISTORY</h2>
          <div className="top_side">
            <h6>KR4ALL Visits</h6>
            {toggle ? (
              <FaToggleOn
                style={{ color: "green", height: "30px", width: "25px" }}
                onClick={() => setToggle(!toggle)}
              />
            ) : (
              <FaToggleOff
                style={{ color: "green", height: "30px", width: "25px" }}
                onClick={() => setToggle(!toggle)}
              />
            )}
            <FaQuestionCircle
              style={{ color: "gray", height: "30px", width: "25px" }}
            />
          </div>
        </header>

        <div>
          <Chart
            type="line"
            width={"100%"}
            height={350}
            series={product}
            options={option}
          ></Chart>
        </div>
      </div>
    </>
  );
};
