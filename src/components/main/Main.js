import hello from "../../assets/hello.svg";
import Charts from "../charts/Charts";
import { Chart } from "react-google-charts";
import { IconContext } from "react-icons";
import { BsCoin } from "react-icons/bs";
import { TbBackhoe } from "react-icons/tb";
import "./Main.css";

export const data = [
  ["Task", "Hours per Day"],
  ["Fuel", 11],
  ["Shopping", 2],
  ["Factory", 2],
  ["Workshop", 2],
  ["Energy", 7],
];

export const options = {
  is3D: true,
  backgroundColor: "#f3f4f6",
};

const Main = () => {
  return (
    <main>
      <div className="main__container">
        <div className="hero">
          <div className="main__title">
            <img src={hello} alt="hello" />
            <div className="main__greeting">
              <h1>Hello User</h1>
              <p>Welcome to your dashboard</p>
            </div>
          </div>
          <div className="period__card">
            <p>Select the analysis period</p>
            <div className="date__container">
              <input type="date" />
              to
              <input type="date" />
            </div>
          </div>
        </div>

        <div className="main__cards">
          <div className="card">
            <i className="fa fa-money fa-2x text-green"></i>
            <p className="text-primary-p">Initial Balance (-4%)</p>
            <div className="card_inner">
              <p className="font-bold text-title">US$</p>
              <span className="font-bold text-title">230,000.00</span>
            </div>
          </div>
          <div className="card">
            <i className="fa fa-sign-in fa-2x text-lightblue"></i>
            <p className="text-primary-p">Income</p>
            <div className="card_inner">
              <p className="font-bold text-title">US$</p>
              <span className="font-bold text-title">15,000.00</span>
            </div>
          </div>
          <div className="card">
            <i className="fa fa-sign-out fa-2x text-red"></i>
            <p className="text-primary-p">Expense</p>
            <div className="card_inner">
              <p className="font-bold text-title">US$</p>
              <span className="font-bold text-title">45,000.00</span>
            </div>
          </div>
          <div className="card">
            <i className="fa fa-money fa-2x text-green"></i>
            <p className="text-primary-p">Current Balance (-4%)</p>
            <div className="card_inner">
              <p className="font-bold text-title">US$</p>
              <span className="font-bold text-title">200,000.00</span>
            </div>
          </div>
          <div className="card">
            <IconContext.Provider value={{ color: "green", size: "30px" }}>
              <div>
                <TbBackhoe />
              </div>
            </IconContext.Provider>
            <p className="text-primary-p">Production</p>
            <div className="card_inner">
              <p className="font-bold text-title">Ton</p>
              <span className="font-bold text-title">300.00</span>
            </div>
          </div>
          <div className="card">
            <IconContext.Provider value={{ color: "yellow", size: "30px" }}>
              <div>
                <BsCoin />
              </div>
            </IconContext.Provider>
            <p className="text-primary-p">Cost per Ton</p>
            <div className="card_inner">
              <p className="font-bold text-title">US$/Ton</p>
              <span className="font-bold text-title">60.00</span>
            </div>
          </div>
        </div>
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Balance</h1>
                <p>Balance variation over the specified time</p>
              </div>
              <i className="fa fa-usd"></i>
            </div>
            <Charts />
          </div>
          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Cost Centers</h1>
                <p>Relative impact over the specified period</p>
              </div>
              <i className="fa fa-area-chart"></i>
            </div>
            <Chart
              chartType="PieChart"
              data={data}
              options={options}
              width={"100%"}
              height={"400px"}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
