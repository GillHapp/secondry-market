import React from 'react';
import './App.css'; // Assuming you have CSS for styling

function StockDashboard() {
  return (
    <div className="dashboard">
      {/* Left Panel */}
      <aside className="left-panel">
        <div className="menu-icon">[=]</div>
        <nav className="menu">
          <ul>
            <li>Secondary Market</li>
            
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <header className="stock-header">
          <h1>Apple</h1>
          <span className="sector">Information Technologies</span>
          <div className="performance">
            Half Year Profitability: <strong>+15.59%</strong>
          </div>
        </header>

        {/* Overview Section */}
        <section className="overview">
          <h2>Overview</h2>
          <div className="stock-chart">
            {/* Placeholder for chart */}
            <img src="https://via.placeholder.com/400x200" alt="Chart" />
            <p>
              $149.86 <span className="positive">+0.91%</span>
            </p>
          </div>
        </section>

        {/* Apple in News Section */}
        <section className="news">
          <h3>Apple in News</h3>
          <ul>
            <li>Apple Appeals Corellium Copyright Lawsuit - 12 Aug</li>
            <li>Apple Aims for AI Dominance - 16 Aug</li>
            <li>Amazon, Google & Apple team up - 13 Aug</li>
          </ul>
        </section>
      </main>

      {/* Right Sidebar */}
      <aside className="right-sidebar">
        <div className="stock-actions">
          <h4>20 Stocks</h4>
          <div className="buy-sell">
            <button className="buy">Buy $149.86</button>
            <button className="sell">Sell $149.73</button>
          </div>
        </div>

        <div className="history">
          <h4>Your History</h4>
          <ul>
            <li>Bought 10 Stocks - $142.21 (Aug 16, 2021)</li>
            <li>Sold 5 Stocks - $130.41 (Aug 3, 2021)</li>
            <li>Bought 3 Stocks - $128.45 (July 6, 2021)</li>
          </ul>
        </div>

        <div className="invest-idea">
          <h4>Invest-Idea</h4>
          <p>Apple: Up to 12% in 11 months</p>
          <span>BCS - 74.85%</span>
        </div>
      </aside>
    </div>
  );
}

export default StockDashboard;