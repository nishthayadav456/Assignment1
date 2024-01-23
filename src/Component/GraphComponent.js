import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
const GraphComponent = () => {
  const [selectedData, setSelectedData] = useState(null);
  const dummyData = [
    {
      name: 'Jenny',
      data: [
        { month: 'Jan', services: 2000, tender: 3000, marketplaces: 1578 },
        { month: 'Feb', services: 2500, tender: 3500, marketplaces: 1800 },
        { month: 'Mar', services: 2300, tender: 3200, marketplaces: 2000 },
      ],
    },
    {
      name: 'John',
      data: [
        { month: 'Jan', services: 1000, tender: 4000, marketplaces: 2578 },
        { month: 'Feb', services: 1200, tender: 4200, marketplaces: 2700 },
        { month: 'Mar', services: 1500, tender: 4500, marketplaces: 2900 },
      ],
    },
    {
      name: 'Alice',
      data: [
        { month: 'Jan', services: 3000, tender: 2000, marketplaces: 2578 },
        { month: 'Feb', services: 3200, tender: 2200, marketplaces: 2700 },
        { month: 'Mar', services: 3400, tender: 2400, marketplaces: 2900 },
      ],
    },
  ];
  const transactionHistory = [
    { name: 'Jenny', transaction: '₹300000',date:"Jan,20,2023",type:"MarketPlace"},
    { name: 'John', transaction: '₹400000',date:"Jun,30,2023",type:"Finance" },
    { name: 'Alice', transaction: '₹500000',date:"May,15,2023",type:"Services" },
    // Add more transactions
  ];

  const options = {
    xaxis: {
      categories: dummyData[0].data.map((item) => item.month),
    },
  };
  useEffect(() => {
    setSelectedData(dummyData[0].name);
  }, []);
  const handleClick = (name) => {
    setSelectedData(name);
  };
  const selectedChartData = selectedData
    ? dummyData.find((item) => item.name === selectedData)?.data || []
    : [];
  const seriesData = selectedChartData.map((item) => ({
    name: selectedData,
    data: [item.services, item.tender, item.marketplaces],
  }));
  return (
    <div>
      <Chart className="graph-div"
        type="bar"
        width={800}
        height={600}
        series={seriesData}
        options={options}
      />
      {/* <div>
        {selectedData && (
          <div>
            <h3>{selectedData} Data:</h3>
            <ul>
              {selectedChartData.map((item, index) => (
                <li key={index}>
                  <strong>Month:</strong> {item.month},{' '}
                  <strong>Services:</strong> {item.services},{' '}
                  <strong>Tender:</strong> {item.tender},{' '}
                  <strong>Marketplaces:</strong> {item.marketplaces}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div> */}
      <div>
        <h2>Transaction History</h2>
        <table className="transaction-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Date</th>
              <th>Transaction</th>

            </tr>
          </thead>
          <tbody>
            {transactionHistory.map((transaction, index) => (
              <tr key={index} onClick={() => handleClick(transaction.name)}>
                <td>{transaction.name}</td>
                <td>{transaction.type}</td>
                <td>{transaction.date}</td>
                <td>{transaction.transaction}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default GraphComponent;







