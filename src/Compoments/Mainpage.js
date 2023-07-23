import React from "react";
import { ImSearch } from "react-icons/im";
import { HiOutlineHome } from "react-icons/hi";
import { FaRegNewspaper } from "react-icons/fa";
import "./Mainpage.css";
import { FaRegUser } from "react-icons/fa";
import { CgMenuBoxed } from "react-icons/cg";
import { BiBell, BiSolidCircle } from "react-icons/bi";
import { TbLogout } from "react-icons/tb";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
  Cell,
} from "recharts";
export const Mainpage = () => {
  const data = [
    { name: "20", A: 80, color: "#ADD8E6" },
    { name: "22", A: 90, color: "#ADD8E6" },
    { name: "25", A: 100, color: "#ADD8E6" },
    { name: "26", A: 120, color: "#ADD8E6" },
    { name: "30", A: 140, color: "#ADD8E6" },
    { name: "31", A: 150, color: "#6495ED" },
    { name: "35", A: 180, color: "#6495ED" },
    { name: "36", A: 190, color: "#6495ED" },
    { name: "40", A: 220, color: "#6495ED" },
    { name: "45", A: 240, color: "#6495ED" },
    { name: "60", A: 250, color: "#000080" },
    { name: "62", A: 280, color: "#000080" },
    { name: "65", A: 320, color: "#000080" },
  ];

  const yTicks = [0, 100, 200, 300];

  const xAxisTickFormatter = (name) => {
    return ["20", "25", "30", "35", "40", "60", "65"].includes(name) ? name : "";
  };
  const barFill = (data) => {
    return data.color;
  };
  return (
    
      <div className="subcontainer">
        <nav className="nav">
          <div>
            <img
              src="./images/butterflyimage-removebg-preview.png"
              className="butterfly"
            ></img>
            <div className="tabsearch">
              <ImSearch />
            </div>
          </div>
          <div className="navcontainer">
            <div className="home">
              <div className="homeicon">
                <HiOutlineHome />
              </div>
              <div className="sideicon">
                <FaRegNewspaper />
              </div>
              <div className="sideicon">
                <CgMenuBoxed />
              </div>
              <div className="sideicon">
                <FaRegUser />
              </div>
              <div className="mobilesearch">
                {" "}
                <ImSearch />
              </div>
            </div>
            <div className="notify">
              <div className="bell">
                <div className="bellicon">
                  <BiBell />
                </div>
                <div className="dot">
                  <BiSolidCircle />
                </div>
              </div>
              <div className="exit">
                <TbLogout />
              </div>
            </div>
          </div>
        </nav>
        <aside>
          <div className="profilemaincontainer">
            <div className="profile">
              <div>
                <img src="./images/profile.jpg" className="profileimg"></img>
              </div>
              <div className="namediv">
                <div>
                  <p className="name">Hi Mike,</p>
                </div>
                <div>
                  <p className="welcomemesg">Welocome back.</p>
                </div>
              </div>
            </div>
            <p className="day">Today</p>
            <div>
              <div className="transactiondiv">
                <div>
                  <p className="transprice" id="firstprice">
                    $19,892
                  </p>
                  <p className="transpurpose">Account Balance</p>
                </div>
                <div>
                  <div>
                    <p className="transprice">$4,000</p>
                    <p id="transpurpose">
                      Year-to-Date <span>Contributions</span>
                    </p>
                  </div>
                  <div>
                    <p className="transprice">$1,892</p>
                    <p className="transpurposelast">Total Interest</p>
                  </div>
                </div>
              </div>
              <button className="wantbtn">I want to</button>
            </div>
            <p className="trasactiondetail">Recent Transactions</p>
            <div className="transdetailconatainer">
              <div>
                <p className="date">2020-08-07</p>
                <p className="trans">Withdrawal Transfer to Bank-XXX11</p>
                <hr className="hrtag"></hr>
              </div>
              <div>
                <p className="date">2020-07-21</p>
                <p className="trans">Withdrawal Transfer to Bank-XXX11</p>
                <hr className="hrtag"></hr>
              </div>
              <div>
                <p className="date">2020-07-16</p>
                <p className="trans">Withdrawal Transfer to Bank-XXX11</p>
                <hr className="hrtag"></hr>
              </div>
            </div>
          </div>
        </aside>
        <div className="datacontainer">
          <p className="income">Retirement Income</p>
          <p className="year">Starting Year 2056</p>
          <div className="goalcontainer">
            <div>
              <p>$300,000</p>
              <p>My Goal</p>
            </div>
            <div className="goalsubcontainer">
              <div>
                <p>59%</p>
                <p>Goal Achieve</p>
              </div>
              <div>
                <p>$300</p>
                <p>Est.Monthly Income</p>
              </div>
            </div>
          </div>
          <div>
          <div >
          <h1>Contribution overtime</h1>
      <BarChart
        width={700}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 80,
          bottom: 5,
        }}
        barSize={30}
      >
        <XAxis
          dataKey="name"
          scale="point"
          padding={{ left: 10, right: 10 }}
          tickFormatter={xAxisTickFormatter}
        />
        <YAxis ticks={yTicks} axisLine={false} tickLine={false} />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" tickLine={false} />
        <Bar dataKey="A">
          
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Bar>
      </BarChart>
    </div>
          </div>
          <div>
            <div>
              <p className="prohead">How do I compare to my peers?</p>
              <p className="prosubhead">These numbers represent current goal achievement</p>
              <div className="progressdiv">
                <div className="proside">
                  <div>
                    Age:Under 30<div></div>
                  </div>
                  <div>
                    Salary:K 20-K 30<div></div>
                  </div>
                  <div>Gender:Male</div>
                </div>
                <div style={{ display: "flex" }} className="progressmain">
                  <div class="progress-container">
                    <svg class="progress-circle" >
                      <circle
                        class="progress-background"
                        cx="60"
                        cy="60"
                        r="50"
                      ></circle>
                      <circle class="progress" cx="60" cy="60" r="50"></circle>
                    </svg>
                    <div class="progress-text">75%</div>
                    
                  </div>

                  <div class="progress-container1">
                   
                    <svg class="progress-circle1">
                      <circle
                        class="progress-background1"
                        cx="60"
                        cy="60"
                        r="50"
                      ></circle>
                      <circle class="progress1" cx="60" cy="60" r="50"></circle>
                    </svg>
                    <div class="progress-text1">95%</div>
                   
                  </div>
                  <div class="progress-container2">
                    <svg class="progress-circle2">
                      <circle
                        class="progress-background2"
                        cx="60"
                        cy="60"
                        r="50"
                      ></circle>
                      <circle class="progress2" cx="60" cy="60" r="50"></circle>
                    </svg>
                    <div class="progress-text2">59%</div>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rightcontainer">
          <div>
            <div>
              <h2 className="righthead">Retirement Strategy</h2>
            </div>
            <div>
              <div>
                <p className="sliderhead">Employee Contribution</p>
                <div className="slidermaincontainer">
                  <div class="slidecontainer">
                    <input
                      type="range"
                      min="1"
                      max="100"
                      value="50"
                      className="slider"
                    />
                  </div>
                  <div>
                    <p className="sliderper">12%</p>
                  </div>
                </div>
              </div>
              <div>
                <p id="sliderhead">Retirement Age</p>
                <div className="slidermaincontainer">
                  <div class="slidecontainer">
                    <input
                      type="range"
                      min="1"
                      max="100"
                      value="80"
                      className="slider"
                      id="myRange"
                    />
                  </div>
                  <div>
                    <p className="sliderper2">65</p>
                  </div>
                </div>
              </div>
              <hr></hr>
              <div>
                <div className="rate">
                  <div>
                    <p className="ratediv">Employer Contribution</p>
                  </div>
                  <div>
                    <p className="rateper">8.4%</p>
                  </div>
                </div>
                <div className="rate">
                  <div>
                    <p className="ratediv">Interest Rate</p>
                  </div>
                  <div>
                    <p className="rateper">5%</p>
                  </div>
                </div>
              </div>
            </div>
            <button className="updatebtn">Update</button>
          </div>
          <div>
            <div>
              <p className="helpdocs">View Help Docs</p>
            </div>

            <div>
              <div className="brdiv"></div>
              <div>
                <div className="addiv">
                  <p>
                    <span className="firstad">Are you considering a</span>{" "}
                    <br />
                    <span className="seconad">Housing Advance?</span>
                    <br />
                    <span className="thirdad">
                      Limited time reduced interest.
                    </span>
                  </p>
                </div>
                <p className="lastad">Learn More</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  
  );
};
