import React, { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';

const MyChart = ({ carbonFile, chlorophyllFile, sstFile }) => {
  const chartRef = useRef(null); // Create a ref for the chart
  const [selectedMode, setSelectedMode] = useState('chlorophyll'); // State for selected mode
  const [data, setData] = useState({
    chlorophyll: [],
    carbon: [],
    sst: [],
  }); // State to hold all data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const chlorophyllResponse = await fetch(chlorophyllFile);
        const carbonResponse = await fetch(carbonFile);
        const sstResponse = await fetch(sstFile);

        const chlorophyllData = await chlorophyllResponse.json();
        const carbonData = await carbonResponse.json();
        const sstData = await sstResponse.json();

        // Extract the values from the objects
        setData({
          chlorophyll: chlorophyllData.mean_chlorophyll_values,
          carbon: carbonData.mean_carbon_values,
          sst: sstData.mean_sst_values,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [carbonFile, chlorophyllFile, sstFile]); // Fetch data when files change

  useEffect(() => {
    const run = () => {
      let base = +new Date(2024, 3, 1);
      let oneDay = 24 * 3600 * 1000;
      let date = [];

      // Generating dates based on the length of the data arrays
      for (let i = 0; i < 30; i++) {
        const now = new Date((base += oneDay));
        date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
      }

      // Prepare the series based on selected mode
      const series = [{
        name: selectedMode.charAt(0).toUpperCase() + selectedMode.slice(1),
        type: 'line',
        symbol: 'none',
        sampling: 'lttb',
        itemStyle: {
          color: selectedMode === 'chlorophyll' ? 'rgb(0, 128, 0)' : selectedMode === 'carbon' ? 'rgb(255, 165, 0)' : 'rgb(30, 144, 255)', // Change colors based on mode
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: selectedMode === 'chlorophyll' ? 'rgb(100, 255, 100)' : selectedMode === 'carbon' ? 'rgb(255, 228, 196)' : 'rgb(173, 216, 230)',
            },
            {
              offset: 1,
              color: selectedMode === 'chlorophyll' ? 'rgb(0, 128, 0)' : selectedMode === 'carbon' ? 'rgb(255, 165, 0)' : 'rgb(30, 144, 255)',
            },
          ]),
        },
        data: data[selectedMode],
      }];

      const option = {
        tooltip: {
          trigger: 'axis',
          position: function (pt) {
            return [pt[0], '10%'];
          },
        },
        title: {
          left: 'center',
          text: 'Concentration Over Time',
        },
        toolbox: {
          feature: {
            dataZoom: {
              yAxisIndex: 'none',
            },
            restore: {},
            saveAsImage: {},
          },
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: date,
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, '100%'],
          name: 'Concentration',
        },
        dataZoom: [
          {
            type: 'inside',
            start: 0,
            end: 10,
          },
          {
            start: 0,
            end: 10,
          },
        ],
        series: series,
      };

      // Initialize ECharts instance and set options
      const myChart = echarts.init(chartRef.current);
      myChart.setOption(option);

      // Cleanup function to dispose of the chart instance
      return () => {
        myChart.dispose();
      };
    };

    run(); // Call run function on selected mode change or data fetch
  }, [data, selectedMode]); // Run when data or selected mode changes

  const handleModeChange = (e) => {
    setSelectedMode(e.target.value);
  };

  return (
    <div>
      <select value={selectedMode} onChange={handleModeChange}>
        <option value="chlorophyll">Chlorophyll</option>
        <option value="carbon">Carbon</option>
        <option value="sst">Sea Surface Temperature</option>
      </select>
      <div
        ref={chartRef}
        style={{ width: '100%', height: '500px' }} // Increased height
      />
    </div>
  );
};

export default MyChart;
