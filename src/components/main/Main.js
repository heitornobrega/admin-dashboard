import hello from "../../assets/hello.svg";
import Charts from "../charts/Charts";
import { Chart } from "react-google-charts";
import "./Main.css";
export const data = [
  ["Task", "Hours per Day"],
  ["Combustível", 11],
  ["Compras", 2],
  ["Fábrica", 2],
  ["Oficina", 2],
  ["Energia", 7],
];

export const options = {
  is3D: true,
  backgroundColor: '#f3f4f6',
};

const Main = () => {
  return (
    <main>
      <div className="main__container">
        <div className="main__title">
          <img src={hello} alt="hello" />
          <div className="main__greeting">
            <h1>Olá usuário</h1>
            <p>Bem vindo ao seu painel</p>
          </div>

        </div>

        <div className="main__cards">
          <div className="card">
            <i className="fa fa-money fa-2x text-green"></i>
            <p className="text-primary-p">Saldo inicial (-4%)</p>
            <div className="card_inner">
              <p className="font-bold text-title ">R$</p>
              <span className="font-bold text-title">230.000,00</span>
            </div>
          </div>
          <div className="card">
            <i className="fa fa-sign-in fa-2x text-lightblue"></i>
            <p className="text-primary-p">Entrada</p>
            <div className="card_inner">
              <p className="font-bold text-title ">R$</p>
              <span className="font-bold text-title">15.000,00</span>
            </div>
          </div>
          <div className="card">
            <i className="fa fa-sign-out fa-2x text-red"></i>
            <p className="text-primary-p">Saída</p>
            <div className="card_inner">
              <p className="font-bold text-title ">R$</p>
              <span className="font-bold text-title">45.000,00</span>
            </div>
          </div>
          <div className="card">
            <i className="fa fa-money fa-2x text-green"></i>
            <p className="text-primary-p">Saldo atual (-4%)</p>
            <div className="card_inner">
              <p className="font-bold text-title ">R$</p>
              <span className="font-bold text-title">200.000,00</span>
            </div>
          </div>
        </div>
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Saldo</h1>
                <p>Variação do saldo em função do tempo estipulado</p>
              </div>
              <i className="fa fa-usd"></i>
            </div>
            <Charts />
          </div>
          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Centros de custo</h1>
                <p>Impacto relativo sobre o perído estipulado</p>
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
            {/* <div className="charts__right__cards">
              <div className="card1">
                <h1>Lucro</h1>
                <p>R$2500</p>
              </div>
              <div className="card2">
                <h1>Pagamentos</h1>
                <p>R$250,00</p>
              </div>

              <div className="card3">
                <h1>Custos de hospedagens</h1>
                <p>R$2500</p>
              </div>

              <div className="card4">
                <h1>Banco de dados</h1>
                <p>R$180,00</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
