import React, { useCallback, useEffect, useState } from "react";
import useCurrency from "../../Hook/useCurrencyInfo";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft, faC } from '@fortawesome/free-solid-svg-icons'


function CurrencyConverter({

  currencyOptions = [],
}) {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertAmount, setConvertAmount] = useState();

  const CurrencyInfo = useCurrency(from);

  const options = Object.keys(CurrencyInfo);


  const convert = useCallback (() => {
    setConvertAmount(amount * CurrencyInfo[to]);
  },[amount, from, to, currencyOptions]);

  useEffect (() => {
    convert();
  }, [amount, from, to, currencyOptions])

  return (
    <>
      <div className=" container mb-4">
        {/* From */}
        <div className="row mb-3">
          <select
            className=" bg-dark border-0 text-light col-4"
           onChange={(e) =>{ setFrom(e.target.value); convert()}}
            value={from}

          >
            {(currencyOptions = options)}

            {currencyOptions.map((currency) => (
              <option value={currency} key={currency}>
                {currency}
              </option>
            ))}
          </select>
          <input
            type="text"
            className="border-0 bg-dark col-8 text-end text-light"
            placeholder="0"
            value={amount}
            onChange={(e) =>{ setAmount(e.target.value); convert()}}
          />
        </div>
        {/* To */}
        <div className="row">
          <select
            className=" bg-dark border-0 text-light col-4"
            onChange={(e) => {setTo(e.target.value);}}

            value={to}
            o
          >
            {(currencyOptions = options)}

            {currencyOptions.map((currency) => (
              <option value={currency} key={currency}>
                {currency}
              </option>
            ))}
          </select>
          <input

          value={convertAmount}
            type="number"
            className="border-0 bg-dark col-8 text-end text-light disabled"
            placeholder="0"
            disabled
          />
        </div>

          <div className="row">
            <div className="col">
              <div className=" col d-flex justify-content-around  mt-3">
                <button
                  value="7"
                  className=" btn btn-light fs-5 fw-bold"
                  onClick={(e) =>{ setAmount(amount + e.target.value);}}
                >
                  7
                </button>
                <button
                  value="8"
                  className=" btn btn-light fs-5 fw-bold"
                  onClick={(e) => {setAmount(amount + e.target.value);}}
                >
                  8
                </button>
                <button
                  value="9"
                  className=" btn btn-light fs-5 fw-bold"
                  onClick={(e) => setAmount(amount + e.target.value)}
                >
                  9
                </button>
                <button
                  value=""
                  className=" btn-primary fs-5 fw-bold"
                  onClick={() => setAmount("")}
                >
                  <FontAwesomeIcon icon={faC} />
                </button>
              </div>
            </div>

            <div className="col-9">
              <div className="row">
              <div className=" col d-flex justify-content-around  mt-3">
                <button
                  value="4"
                  className=" btn btn-light  fs-5 fw-bold"
                  onClick={(e) => setAmount(amount + e.target.value)}
                >
                  4
                </button>
                <button
                  value="5"
                  className=" btn btn-light fs-5 fw-bold"
                  onClick={(e) => setAmount(amount + e.target.value)}
                >
                  5
                </button>
                <button
                  value="6"
                  className=" btn btn-light fs-5 fw-bold"
                  onClick={(e) => setAmount(amount + e.target.value)}
                >
                  6
                </button>
              </div>
            </div>
            </div>

            <div className="col-9">
              <div className="row">

              <div className=" col d-flex justify-content-around  mt-3">
                <button
                  value="1"
                  className=" btn btn-light fs-5 fw-bold"
                  onClick={(e) => setAmount(amount + e.target.value)}
                >
                  1
                </button>
                <button
                  value="2"
                  className=" btn btn-light fs-5 fw-bold"
                  onClick={(e) => setAmount(amount + e.target.value)}
                >
                  2
                </button>
                <button
                  value="3"
                  className=" btn btn-light fs-5 fw-bold"
                  onClick={(e) => setAmount(amount + e.target.value)}
                >
                  3
                </button>

              </div>
              </div>
            </div>

            <div className="col">
            <div className="row">
              <div className=" col d-flex justify-content-around  mt-3">
                <button
                  value="00"
                  className=" btn btn-light fs-5 fw-bold"
                  onClick={(e) => setAmount(amount + e.target.value)}
                >
                  00
                </button>
                <button
                  value="0"
                  className=" btn btn-light fs-5 fw-bold"
                  onClick={(e) => setAmount(amount + e.target.value)}
                >
                  0
                </button>
                <button
                  value="."
                  className=" btn btn-light fs-5 fw-bold"
                  onClick={(e) => setAmount(amount + e.target.value)}
                >
                  .
                </button>


                <button
                  value=""
                  className=" btn-primary fs-5 fw-bold"
                  onClick={(e) => setAmount(amount.slice(0, -1))}

                >
                  <FontAwesomeIcon icon={faDeleteLeft} />
                </button>
              </div>
            </div>

            </div>
          </div>
      </div>
    </>
  );
}

export default CurrencyConverter;
