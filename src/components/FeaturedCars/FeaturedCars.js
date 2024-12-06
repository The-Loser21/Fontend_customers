import React, { useState, useEffect, useRef, useParams } from 'react';
import './FeaturedCars.style.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import axios from 'axios'; // Sử dụng axios để gửi yêu cầu API
import fc1 from '../assets/fc1.png';

// Mảng chứa các ảnh mặc định cho các hãng xe
const defaultImages = {
    "BMW": "path_to_bmw_default_image", // Thay thế bằng đường dẫn ảnh mặc định cho BMW
    "Toyota": "path_to_toyota_default_image", // Thay thế bằng đường dẫn ảnh mặc định cho Toyota
    "Honda": "path_to_honda_default_image", // Thay thế bằng đường dẫn ảnh mặc định cho Honda
    "Mercedes": "path_to_mercedes_default_image", // Thay thế bằng đường dẫn ảnh mặc định cho Mercedes
    "Mazda": "path_to_mazda_default_image" // Thay thế bằng đường dẫn ảnh mặc định cho Mazda
};

export const FeaturedCars = ({ onAddCarToComparison, scrollToServices }) => {
    const [cars, setCars] = useState([]);
    const [currentPage, setCurrentPage] = useState(10);
    const [selectedCar, setSelectedCar] = useState(null); // Xe đã chọn để so sánh
    const [carDetails, setCarDetails] = useState(null); // Thông tin chi tiết xe
    const containerRef = useRef(null);

    const itemsPerPage = 9;

    // Hàm lấy dữ liệu xe từ API

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await axios.get(`http://localhost:8088/api/v1/car?page=${currentPage}&limit=${itemsPerPage}`);
                const carsData = response.data.cars.map(car => ({

                    ...car,
                    image: car.image || defaultImages[car.brand] // Sử dụng ảnh mặc định nếu không có ảnh trong dữ liệu
                }));
                setCars(carsData);
                // console.log('kiemtra', carsData);

                carsData.forEach(car => {
                    console.log('kiemtra', car.id); // Log từng id của mỗi xe
                });
            } catch (error) {
                console.error("Lỗi khi lấy dữ liệu xe:", error);
            }
        };
        fetchCars();
    }, [currentPage]);
    const fetchCarDetails = async (id) => {

        console.log('Đang gọi API để lấy thông tin chi tiết xe với ID:', id);
        try {
            const response = await axios.get(`http://localhost:8088/api/v1/car/${id}`);

            // Kiểm tra dữ liệu trả về từ API
            console.log('Dữ liệu trả về từ API:', response.data.car);

            // Kiểm tra xem dữ liệu có tồn tại hay không
            if (response.data && response.data.car) {
                setCarDetails({
                    id: response.data.car.id,
                    name: response.data.car.name,
                    model: response.data.car.model,
                    price: response.data.car.price,
                    thumbnail: response.data.car.thumbnail || 'https://via.placeholder.com/150',
                    specifications: response.data.specificationResponseDTOS.map((spec) => ({
                        name: spec.name,
                        attributes: spec.attributes.map((attr) => ({
                            name: attr.name,
                            value: attr.value,
                        })),
                    })),
                });
            } else {
                console.error('Không có dữ liệu xe chi tiết');
            }
        } catch (error) {
            console.error("Lỗi khi lấy thông tin chi tiết xe:", error);
        }
    };

    const totalPages = Math.ceil(cars.length / itemsPerPage);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            containerRef.current.scrollIntoView({ behavior: 'smooth' }); // Cuộn lên đầu
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            containerRef.current.scrollIntoView({ behavior: 'smooth' }); // Cuộn lên đầu
        }
    };


    const handleCompareClick = (car) => {
        console.log('car', car);
        onAddCarToComparison(car); // Thêm xe vào bảng so sánh
        scrollToServices(); // Cuộn đến phần Services
    };

    return (
        <section id="featured-cars" className="featured-cars" ref={containerRef}>
            <div className="featured-cars__container">
                <div className="featured-cars__header">
                    <h2>Danh sách xe</h2>
                </div>
                <div className="featured-cars__content">
                    <Box sx={{ width: 1, padding: '0 100px' }}>
                        <Box className="featured-car__grid" display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2}>
                            {cars.map((car) => (
                                <Box key={car.id} className="featured-car">
                                    <div className="featured-car__box">
                                        <Link to={`/car/${car.id}`}>
                                            <div className="featured-car__img">

                                                <img src={car.image} alt={car.title} />
                                            </div>
                                            <div className="featured-car__info">
                                                <h3>{car.price}</h3>
                                                <p>{car.model}</p>
                                                <p>{car.year_manufacture}</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="featured-car__txt">
                                        <h2>
                                            <Link to={`/car/${car.id}`}><h1>{car.name}</h1></Link> {/* Điều hướng đến trang chi tiết */}
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={() => {
                                                    handleCompareClick(car);
                                                }}
                                            >
                                                So Sánh
                                            </Button>
                                        </h2>

                                    </div>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                    <Box
                        className="pagination-buttons"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        mt={2}
                    >
                        <Button
                            onClick={prevPage}
                            disabled={currentPage === 1}
                            sx={{
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                marginRight: '8px',
                                padding: '4px 12px',
                            }}
                        >
                            Previous
                        </Button>
                        <span style={{ margin: '0 16px' }}>Page {currentPage} of {totalPages}</span>
                        <Button
                            onClick={nextPage}
                            disabled={currentPage === totalPages}
                            sx={{
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                marginLeft: '8px',
                                padding: '4px 12px',
                            }}
                        >
                            Next
                        </Button>
                    </Box>
                </div>
            </div>
        </section>
    );
};