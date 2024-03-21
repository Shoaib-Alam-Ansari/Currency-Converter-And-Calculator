import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDeleteLeft,
  faC,

} from "@fortawesome/free-solid-svg-icons";

function Calculator() {
  const [state, setState] = useState("");
  return (
    <>
      <div className=" p-3 " style={{ width: "18rem" }}>
        <input
          type="text"
          value={state}
          className=" form-control disabled text-end fs-5 fw-bold"
          placeholder="0"
          style={{ textAlign: "text-align:right;" }}
        />
        <div className=" d-flex justify-content-around  mt-3">
          <button className="btn-primary fs-5 fw-bold" onClick={() => setState("")}>
            <FontAwesomeIcon icon={faC} />
          </button>
          <button
            value="%"
            className="btn-primary fs-5 fw-bold"
            onClick={(e) =>
              state == ""
                ? alert("Invalid formate used")
                : setState(state + e.target.value)
            }
          >
            %
          </button>
          <button
            className="btn-primary fs-5 fw-bold"
            onClick={(e) => setState(state.slice(0, -1))}
          >
            <FontAwesomeIcon icon={faDeleteLeft} />
          </button>
          <button
            value="/"
            className="btn-primary fs-5 fw-bold"
            onClick={(e) =>
              state == ""
                ? alert("Invalid formate used")
                : setState(state + e.target.value)
            }
          >
            /
          </button>
        </div>
        <div className=" d-flex justify-content-around  mt-3">
          <button
            value="7"
            className=" btn btn-light fs-5 fw-bold"
            onClick={(e) => setState(state + e.target.value)}
          >
            7
          </button>
          <button
            value="8"
            className=" btn btn-light fs-5 fw-bold"
            onClick={(e) => setState(state + e.target.value)}
          >
            8
          </button>
          <button
            value="9"
            className=" btn btn-light fw-bold"
            onClick={(e) => setState(state + e.target.value)}
          >
            9
          </button>
          <button
            value="*"
            className="btn-primary fs-5 fw-bold"
            onClick={(e) =>
              state == ""
                ? alert("Invalid formate used")
                : setState(state + e.target.value)
            }
          >
            X
          </button>
        </div>
        <div className=" d-flex justify-content-around  mt-3">
          <button
            value="4"
            className=" btn btn-light fs-5 fw-bold"
            onClick={(e) => setState(state + e.target.value)}
          >
            4
          </button>
          <button
            value="5"
            className=" btn btn-light fs-5 fw-bold"
            onClick={(e) => setState(state + e.target.value)}
          >
            5
          </button>
          <button
            value="6"
            className=" btn btn-light fs-5 fw-bold"
            onClick={(e) => setState(state + e.target.value)}
          >
            6
          </button>
          <button
            value="-"
            className="btn-primary fs-5 fw-bold"
            onClick={(e) =>
              state == ""
                ? alert("Invalid formate used")
                : setState(state + e.target.value)
            }
          >
            -
          </button>
        </div>
        <div className=" d-flex justify-content-around  mt-3">
          <button
            value="1"
            className=" btn btn-light fw-bold fs-5"
            onClick={(e) => setState(state + e.target.value)}
          >
            1
          </button>
          <button
            value="2"
            className=" btn btn-light fw-bold fs-5"
            onClick={(e) => setState(state + e.target.value)}
          >
            2
          </button>
          <button
            value="3"
            className=" btn btn-light fs-5 fw-bold"
            onClick={(e) => setState(state + e.target.value)}
          >
            3
          </button>
          <button
            value="+"
            className="btn-primary fs-5 fw-bold"
            onClick={(e) =>
              state == ""
                ? alert("Invalid formate used")
                : setState(state + e.target.value)
            }
          >
            <FontAwesomeIcon icon={faAdd} />
          </button>
        </div>
        <div className=" d-flex justify-content-around  mt-3">
          <button
            value="00"
            className=" btn btn-light fs-5 fw-bold"
            onClick={(e) => setState(state + e.target.value)}
          >
            00
          </button>
          <button
            value="0"
            className=" btn btn-light fs-5 fw-bold"
            onClick={(e) => setState(state + e.target.value)}
          >
            0
          </button>
          <button
            value="."
            className=" btn btn-light fs-5 fw-bold"
            onClick={(e) => setState(state + e.target.value)}
          >
            .
          </button>
          <button
            value="="
            className="btn-primary fs-5 fw-bold"
            onClick={() => setState(eval(state))}
          >
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default Calculator;
