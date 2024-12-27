import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "./App.css";
import graphData from "./tokenData.json"; // Import your JSON data
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./NewsSection.css";
import "./InvestmentComponent.css";
import profile from "./assets/profile.png";
import eth from "./assets/eth.png";
import bell from "./assets/bell.png";
import setting from "./assets/setting.png";
import colab from "./assets/colab.png";
import info from "./assets/info.png";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  const [selectedToken, setSelectedToken] = useState(null); // Track the selected token
  const [priceData, setPriceData] = useState([]); // Store token-specific price data

  const history = [
    { type: "Bought", quantity: "10 Stocks", date: "August 19, 2021", price: "$1,432.2", perStock: "$143.22 each" },
    { type: "Sold", quantity: "2 Stocks", date: "August 9, 2021", price: "$290.41", perStock: "$145.2 each" },
    { type: "Sold", quantity: "3 Stocks", date: "July 25, 2021", price: "$450", perStock: "$150 each" },
    { type: "Bought", quantity: "5 Stocks", date: "June 28, 2021", price: "$681.5", perStock: "$136.3 each" },
    { type: "Sold", quantity: "2 Stocks", date: "June 16, 2021", price: "$278.8", perStock: "$139.4 each" },
    { type: "Bought", quantity: "2 Stocks", date: "June 8, 2021", price: "$278.84", perStock: "$156.42 each" },
  ];


  const newsData = [
    {
      title: "German Politician Asks Apple CEO Tim Cook to Abandon CSAM Scanning Plans",
      date: "18 Aug, 6:11 AM",
      views: 46,
    },
    {
      title: "Apple Producing AirPods 3 in China Instead of Vietnam Due to Pandemic Disruption",
      date: "17 Aug, 3:58 AM",
      views: 93,
    },
    {
      title: "Apple Appeals Corellium Copyright Lawsuit Loss After Settling Other Claims",
      date: "14 Aug, 9:23 PM",
      views: 12,
    },

  ];

  const cardData = [
    { token: "1", chain: "data", provider: "data", balance: "data.03", liquidity: "$data.02B", volume: "$4,data,404,776", logo: "🔵" },
    { token: "2", chain: "data", provider: "Metis", balance: "3,960.20", liquidity: "$40.27B", volume: "$42,355,689,642", logo: "🟢" },
    { token: "3", chain: "data", provider: "Metis", balance: "2,010.50", liquidity: "$12.56B", volume: "$2,556,789,123", logo: "🟡" },
    { token: "4", chain: "data", provider: "Metis", balance: "0.76", liquidity: "$810.50B", volume: "$9,760,234,567", logo: "🟠" },
    { token: "5", chain: "data", provider: "Metis", balance: "4.52", liquidity: "$160.32B", volume: "$12,345,678,901", logo: "🔷" },
    { token: "6", chain: "data", provider: "Metis", balance: "203.43", liquidity: "$50.67B", volume: "$1,456,678,999", logo: "🟤" },
    { token: "7", chain: "data", provider: "Metis", balance: "10,000", liquidity: "$8.02B", volume: "$256,678,433", logo: "🟣" },
    { token: "8", chain: "data", provider: "Metis", balance: "2,456", liquidity: "$15.43B", volume: "$1,345,555,333", logo: "🟩" },
    { token: "9", chain: "data", provider: "Metis", balance: "654.21", liquidity: "$6.89B", volume: "$543,123,678", logo: "🔺" },
  ];

  // Function to fetch price data for a selected token
  const fetchPriceData = (token) => {
    const data = graphData[token] || [];
    setPriceData(data);
  };

  // Fetch price data whenever a token is selected
  useEffect(() => {
    if (selectedToken) {
      fetchPriceData(selectedToken);
    }
  }, [selectedToken]);

  // Chart.js data
  const chartData = {
    labels: priceData.map((data) => data.date), // Dates for the x-axis
    datasets: [
      {
        label: `${selectedToken} Price`,
        data: priceData.map((data) => data.price), // Prices for the y-axis
        fill: false,
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.1,
      },
    ],
  };

  // Function to handle token selection
  const handleTokenSelect = (token) => {
    setSelectedToken(token);
  };

  // Function to go back to the dashboard
  const handleBack = () => {
    setSelectedToken(null);
  };

  // Find selected token details
  const tokenDetails = selectedToken
    ? cardData.find((item) => item.token === selectedToken)
    : null;

  return (
    <div className="app">
      {selectedToken ? (
        <div className="detail-page">
          <button className="back-button" onClick={handleBack}>Back</button>
          {tokenDetails ? (
            <div className="detail-container">
              <div className="graph-section">
                <div className="navbar">
                  <h1>{tokenDetails.token} Price Chart</h1>

                  <div className="price-info">
                    <div className="price-item">
                      <div className="dominant-text" style={{ color: 'green' }}>
                        4.54%
                      </div>
                      <div className="sub-text">High</div>
                    </div>
                    <div className="price-item">
                      <div className="dominant-text">
                        IT
                      </div>
                      <div className="sub-text">Sector</div>
                    </div>
                    <div className="price-item">
                      <img
                        src={eth}
                        alt="coin"
                        className="coin-logo"
                      />
                    </div>
                  </div>
                </div>

                <div className="container">
                  <div className="sidebar">
                    {/* Profile Section */}
                    <div className="profile-section">
                      <img
                        src={profile}
                        alt="Profile"
                        className="profile-image"
                      />
                    </div>

                    {/* Sidebar Icons */}
                    <div className="sidebar-icons">
                      {/* Notification Icon */}
                      <div className="sidebar-item">
                        <img
                          src={bell}
                          alt="Notifications"
                          className="sidebar-icon"
                        />
                      </div>

                      {/* Collections Icon */}
                      <div className="sidebar-item">
                        <img
                          src={colab}
                          alt="Collections"
                          className="sidebar-icon"
                        />
                      </div>

                      {/* Settings Icon */}
                      <div className="sidebar-item">
                        <img
                          src={setting}
                          alt="Settings"
                          className="sidebar-icon"
                        />
                      </div>

                      {/* Info Icon */}
                      <div className="sidebar-item">
                        <img
                          src={info}
                          alt="Info"
                          className="sidebar-icon"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="graph-placeholder">
                    <Line data={chartData} />
                    <div className="news-section">
                      <div className="read-once">
                        <h2>Apple in News</h2>
                        <button
                          className="read-more"
                          onClick={() => alert("Navigate to full news or show more news")}
                        >
                          Read more
                        </button>
                      </div>
                      <div className="news-cards">
                        {newsData.map((item, index) => (
                          <div className="news-card" key={index}>
                            <p className="news-title">{item.title}</p>
                            <div className="news-meta">
                              <span className="news-date">{item.date}</span>
                              <span className="news-views">👁 {item.views}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>

              </div>
              <div className="investment-container">
                <div className="price-section">
                  <div className="price">
                    <p className="subtext">Buying</p>
                    <p className="value">$149.86</p>
                    <button className="buy-button">Buy</button>
                  </div>
                  <div className="price">
                    <p className="subtext">Selling</p>
                    <p className="value">$149.73</p>
                    <button className="sell-button">Sell</button>
                  </div>
                </div>

                <div className="history-section">
                  <div className="history_container">
                    <h3>Your History</h3>
                    <button className="view-full">View Full</button>
                  </div>
                  <ul>
                    {history.map((item, index) => (
                      <li key={index} className="history-item">
                        <div className="details-container">
                          <span className={`dot ${item.type.toLowerCase()}`}></span>
                          <div className="details">
                            <p>{`${item.type} ${item.quantity}`}</p>
                            <p>{item.date}</p>
                          </div>
                        </div>
                        <div className="price-details">
                          <p>{item.price}</p>
                          <p>{item.perStock}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="invest-idea">
                  <div className="idea-header">
                    <h3>Invest-Idea</h3>
                    <button className="view-others">View Others</button>
                  </div>
                  <div className="sab-kuch">
                    <div className="idea-card">
                      <h4>Apple</h4>
                      <img src={eth} alt="Apple Logo" />
                    </div>
                    <div className="footer">
                      <p className="earnings">You can earn <h3 id="usc">Up to 12% in 11 months</h3></p>
                      <div className="bsc">
                        <span id="dsc">BSC +74.9</span><span className="time">2 hours ago</span>

                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ) : (
            <p>Token details not found.</p>
          )}
        </div>
      ) : (
        <div className="dashboard">
          <div className="left-panel">
            <ul className="sections">
              <li>Secondary Market</li>
            </ul>
          </div>
          <div className="main-content">
            <h1>Secondary Market</h1>
            <div className="card-container">
              {cardData.map((item, index) => (
                <div
                  className="card"
                  key={index}
                  onClick={() => handleTokenSelect(item.token)} // Select token when card is clicked
                  style={{ cursor: "pointer" }}
                >
                  <div className="card-header">
                    <div className="token-logo">{item.logo}</div>
                    <div>
                      <h2>{item.token}</h2>
                      <p>{item.balance} {item.token}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;




