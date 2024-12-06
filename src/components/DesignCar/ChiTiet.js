import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import './chitiet.css';
import { Hero } from '../Hero/Hero';
import fc2 from '../assets/fc1.png';
import { Button } from '@mui/material'; // Sử dụng button từ Material-UI

export const CarDetail = () => {
    const { id } = useParams(); // Lấy ID từ URL
    const [car, setCar] = useState(null); // Lưu thông tin chi tiết xe
    const [loading, setLoading] = useState(true); // Trạng thái loading

    // Lấy thông tin chi tiết của xe từ API
    useEffect(() => {
        const fetchCarDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8088/api/v1/car/${id}`);
                setCar(response.data.car);
                setLoading(false); // Xong
            } catch (error) {
                console.error('Lỗi khi lấy thông tin chi tiết xe:', error);
                setLoading(false);
            }
        };
        fetchCarDetails();
    }, [id]);

    if (loading) {
        return <p>Loading...</p>; // Hiển thị khi đang tải
    }

    if (!car) {
        return <p>Car not found</p>; // Nếu không tìm thấy xe
    }

    return (
        <div>
            <Hero />

            <div className="car-detail-sidebar">
                <h2>Thông tin thêm</h2>
                <span>Đây là một mẫu xe mới bạn có thể ấn chi tiết
                    để tìm hiểu kĩ hơn về xe và có cái nhìn tốt về
                    thị trường xe hiện nay.
                </span>
                <p><strong>Price:</strong> {car.price}</p>
                <p><strong>Location:</strong> {car.location || 'Unknown'}</p>
            </div>

            <div className="car-detail-container">
                <h1>{car.title}</h1>
                <img src={car.image || fc2} alt={car.title} />
                <p><strong>Year:</strong> {car.year_manufacture}</p>
                <p><strong>Name:</strong> {car.name}</p>
                <p><strong>Model:</strong> {car.model}</p>

                <Button variant="contained" color="primary">
                    Xem chi tiết
                </Button>
            </div>
            {/* Cột bên phải */}


            <Footer />
        </div>
    );
};
