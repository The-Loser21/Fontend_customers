import React, { useState, useRef } from 'react';
import fc1 from '../assets/fc1.png';
import fc2 from '../assets/fc2.png';
import fc3 from '../assets/fc3.png';
import fc4 from '../assets/fc4.png';
import fc5 from '../assets/fc5.png';
import fc7 from '../assets/fc7.png';
import fc8 from '../assets/fc8.png';
import './FeaturedCars.style.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ChiTiet from '../DesignCar/ChiTiet';
import { Link } from 'react-router-dom';
import Modal from '@mui/material/Modal';
export const FeaturedCars = () => {
    const cars = [
        { id: 1, title: "BMW 6-Series Gran Coupe", brand: "BMW", model: "X5", prize: "$89,395", year: "2017", pretitle: "Nemo enim ipsam voluptatem...", image: fc1 },
        { id: 2, title: "BMW 6-Series Gran Coupe", brand: "Toyota", model: "Camry", prize: "$89,395", year: "2024", pretitle: "Nemo enim ipsam voluptatem...", image: fc2 },
        { id: 3, title: "BMW 6-Series Gran Coupe", brand: "Toyota", model: "Camry", prize: "$89,395", year: "2017", pretitle: "Nemo enim ipsam voluptatem...", image: fc3 },
        { id: 5, title: "BMW 6-Series Gran Coupe", brand: "Toyota", model: "Camry", prize: "$89,395", year: "2017", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.", image: fc4 },
        { id: 6, title: "BMW 6-Series Gran Coupe", brand: "BMW", model: "X5", prize: "$89,395", year: "2017", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.", image: fc5 },
        { id: 7, title: "BMW 6-Series Gran Coupe", brand: "BMW", model: "X5", prize: "$89,395", year: "2017", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.", image: fc7 },
        { id: 8, title: "BMW 6-Series Gran Coupe", prize: "$89,395", year: "2017", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.", image: fc7 },
        { id: 9, title: "BMW 6-Series Gran Coupe", prize: "$89,395", year: "2017", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.", image: fc8 },
        { id: 10, title: "BMW 6-Series Gran Coupe", prize: "$89,395", year: "2017", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.", image: fc8 },
        { id: 11, title: "BMW 6-Series Gran Coupe", prize: "$89,395", year: "2017", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.", image: fc8 },
        { id: 12, title: "BMW 6-Series Gran Coupe", prize: "$89,395", year: "2017", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.", image: fc8 },
        { id: 13, title: "BMW 6-Series Gran Coupe", prize: "$89,395", year: "2017", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.", image: fc8 },
        { id: 14, title: "BMW 6-Series Gran Coupe", prize: "$89,395", year: "2017", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.", image: fc8 },
        { id: 15, title: "BMW 6-Series Gran Coupe", prize: "$89,395", year: "2017", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.", image: "fc3.png" },

    ];

    const itemsPerPage = 9;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(cars.length / itemsPerPage);

    // Tạo tham chiếu đến phần tử container để cuộn lên đầu
    const containerRef = useRef(null);

    const currentCars = cars.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

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

    const FeaturedCar = ({ car }) => {
        return (
            <Box className="featured-car">
                <div className="featured-car__box">
                    <div className="featured-car__img">
                        <img src={car.image} alt={car.title} />
                    </div>
                    <div className="featured-car__info">
                        <p>{car.year} <span className="featured-car__mi-span">3100 mi</span> <span className="featured-car__hp-span">240HP</span> automatic</p>
                    </div>
                </div>
                <div className="featured-car__txt">
                    <h2><a href="#">{car.title}</a></h2>
                    <h3>{car.prize}</h3>
                    <p>{car.pretitle}</p>
                </div>
            </Box>
        );
    };

    const handleequal = () => {

    };

    // Trạng thái cho Modal so sánh
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCar, setSelectedCar] = useState(null); // Lưu thông tin xe được chọn

    const handleOpenModal = (car) => {
        setSelectedCar(car);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedCar(null);
    };

    return (
        <section id="featured-cars" className="featured-cars" ref={containerRef}>
            <div className="featured-cars__container">
                <div className="featured-cars__header">
                    {/* <h2>Checkout <span>the</span> featured cars</h2>
                    <p>featured cars</p> */}
                    <h2>Danh sách xe</h2>
                    <Box className="filter-module" mt={0} sx={{ padding: '0 0' }}>
                        <Box className="filter-module" mt={4} sx={{ padding: '0 100px' }}>
                            {/* Bộ lọc hãng xe */}
                            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                                {/* <h3>Hãng xe</h3> */}
                                <Box display="flex" flexWrap="wrap" gap={2}>
                                    {["BMW", "Toyota", "Honda", "Mercedes", "Mazda"].map((brand, index) => (
                                        <Button
                                            key={index}
                                            variant="outlined"
                                            sx={{
                                                textTransform: 'none',
                                                borderRadius: '20px',
                                                padding: '4px 12px',
                                            }}
                                            onClick={() => console.log(`Filter by brand: ${brand}`)}
                                        >
                                            {brand}
                                        </Button>
                                    ))}
                                </Box>
                            </Box>

                            {/* Bộ lọc giá xe */}
                            <Box display="flex" justifyContent="space-between" alignItems="center">
                                {/* <h3>Giá xe</h3> */}
                                <Box display="flex" flexWrap="wrap" gap={2}>
                                    {[
                                        "Dưới 100 triệu",
                                        "100 - 300 triệu",
                                        "300 - 500 triệu",
                                        "500 - 700 triệu",
                                        "700 triệu - 1 tỷ",
                                        "Trên 1 tỷ",
                                    ].map((priceRange, index) => (
                                        <Button
                                            key={index}
                                            variant="outlined"
                                            sx={{
                                                textTransform: 'none',
                                                borderRadius: '20px',
                                                padding: '4px 12px',
                                            }}
                                            onClick={() => console.log(`Filter by price: ${priceRange}`)}
                                        >
                                            {priceRange}
                                        </Button>
                                    ))}
                                </Box>
                            </Box>
                        </Box>

                    </Box>
                </div>
                <div className="featured-cars__content">
                    <Box sx={{ width: 1, padding: '0 100px' }}>
                        <Box className="featured-car__grid" display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2}>
                            {currentCars.map((car, index) => (
                                <Box key={car.id} className="featured-car">
                                    <div className="featured-car__box">
                                        <div className="featured-car__img">
                                            <img src={car.image} alt={car.title} />
                                        </div>
                                        <div className="featured-car__info">
                                            <p>{car.year} <span className="featured-car__mi-span">3100 mi</span> <span className="featured-car__hp-span">240HP</span> automatic</p>
                                        </div>
                                    </div>
                                    <div className="featured-car__txt">
                                        <h2>
                                            <Link to={`/car/${car.id}`}>{car.title}</Link> {/* Điều hướng đến trang chi tiết */}
                                            <button
                                                type='button'
                                                onClick={() => handleOpenModal(car)}
                                            >
                                                + So Sánh
                                            </button>
                                        </h2>
                                        <h3>{car.prize}</h3>
                                        <p>{car.pretitle}</p>
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

            {/* Modal */}
            <Modal
                open={isModalOpen}
                onClose={handleCloseModal}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: '10px', // Đặt modal cách mép dưới màn hình 10px
                        left: '50%',
                        transform: 'translateX(-50%)', // Căn giữa theo chiều ngang
                        width: 400,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        borderRadius: '8px',
                    }}
                >
                    {selectedCar ? (
                        <>
                            <h2 id="modal-title">{selectedCar.title}</h2>
                            <p id="modal-description">Giá: {selectedCar.prize}</p>
                            <p>Năm sản xuất: {selectedCar.year}</p>
                            <img src={selectedCar.image} alt={selectedCar.title} style={{ width: '100%' }} />
                            <Button
                                onClick={handleCloseModal}
                                sx={{
                                    mt: 2,
                                    textTransform: 'none',
                                    borderRadius: '20px',
                                    backgroundColor: '#1976d2',
                                    color: '#fff',
                                }}
                            >
                                Đóng
                            </Button>
                            <Button
                                onClick={handleCloseModal}
                                sx={{
                                    mt: 2,
                                    textTransform: 'none',
                                    borderRadius: '20px',
                                    backgroundColor: '#1976d2',
                                    color: '#fff',
                                }}
                            >
                                Xác nhận so sánh
                            </Button>
                        </>
                    ) : (
                        <p>Không có thông tin xe.</p>
                    )}
                </Box>
            </Modal>

        </section>
    );
};

