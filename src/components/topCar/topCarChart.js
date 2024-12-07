import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TopCarChart = () => {
  const [chartData, setChartData] = useState(null);
  const [error, setError] = useState(null);

  const token =    'eyJhbGciOiJIUzI1NiJ9.eyJwaG9uZU51bWJlciI6ImFiYzEyMyFAIyIsInN1YiI6ImFiYzEyMyFAIyIsImV4cCI6MTczNDM1ODY0M30.Xx4ovaVcacu_6sfePLCWjIvOIwOfkOmTSDtpW6tBUoc';


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8088/api/v1/car/top', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        console.log('Dữ liệu trả về từ API:', data);

        const labels = data.map(car => car.name); // Tên xe
        const views = data.map(car => car.views); // Lượt xem của xe

        // Kiểm tra labels và views
        console.log('Labels:', labels);
        console.log('Views:', views);

        // Cập nhật dữ liệu cho biểu đồ
        setChartData({
          labels: labels,
          datasets: [
            {
              label: 'Lượt xem',
              data: views,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        });
      } catch (err) {
        setError(err.message); // Ghi nhận lỗi nếu có
      }
    };

    fetchData();
  }, []); 

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!chartData) {
    return <p>Đang tải biểu đồ...</p>;
  }

  console.log('chartData:', chartData); // Kiểm tra chartData trước khi render

  return (
    <div style={{ width: '80%', margin: '0 auto', padding: '20px' }}>
      <Bar
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Top 5 Xe Có Lượt Xem Nhiều Nhất',
            },
          },
        }}
      />
    </div>
  );
};

export default TopCarChart;
