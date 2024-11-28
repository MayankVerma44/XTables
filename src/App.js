import React, { useState } from 'react';

const XTable = () => {
  // DATABASE
  const [tableData, setTableData] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" }
  ]);

  // Sort by Date functionality
  const sortByDate = () => {
    const sortedData = [...tableData].sort((a, b) => {
      // First, compare dates in descending order
      const dateComparison = new Date(b.date) - new Date(a.date);
      
      // If dates are the same, sort by views in descending order
      if (dateComparison === 0) {
        return b.views - a.views;
      }
      
      return dateComparison;
    });

    setTableData(sortedData);
  };

  // Sort by Views functionality
  const sortByViews = () => {
    const sortedData = [...tableData].sort((a, b) => {
      // First, compare views in descending order
      const viewComparison = b.views - a.views;
      
      // If views are the same, sort by date in descending order
      if (viewComparison === 0) {
        return new Date(b.date) - new Date(a.date);
      }
      
      return viewComparison;
    });

    setTableData(sortedData);
  };

  return (
    <div className="container">
      <h1>Date and Views Table</h1>
      
      <div className="button-container">
        <button onClick={sortByDate}>Sort by Date</button>
        <button onClick={sortByViews}>Sort by Views</button>
      </div>
      
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.views}</td>
              <td>{item.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default XTable;