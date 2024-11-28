import { useParams } from 'react-router-dom';
import fc1 from '../assets/fc1.png';
import fc2 from '../assets/fc2.png';
import fc3 from '../assets/fc3.png';
import fc4 from '../assets/fc4.png';
import fc5 from '../assets/fc5.png';
import fc7 from '../assets/fc7.png';
import fc8 from '../assets/fc8.png';
import { Header } from '../Header/Header';
import { Hero } from '../Hero/Hero';
import './chitiet.css';
import { Footer } from '../Footer/Footer';

export const CarDetail = () => {
    const { id } = useParams(); // Lấy ID từ URL
    const cars = [
        { id: 1, title: "BMW 6-Series Gran Coupe", prize: "$89,395", year: "2016", pretitle: "Nemo enim ipsam voluptatem...", image: fc1 },
        { id: 2, title: "BMW 6-Series Gran Coupe", prize: "$89,395", year: "2024", pretitle: "Nemo enim ipsam voluptatem...", image: fc2 },
        { id: 3, title: "BMW 6-Series Gran Coupe", prize: "$89,395", year: "2018", pretitle: "Nemo enim ipsam voluptatem...", image: fc3 },
        { id: 5, title: "BMW 6-Series Gran Coupe", prize: "$89,395", year: "2019", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.", image: fc4 },
        { id: 6, title: "BMW 6-Series Gran Coupe", prize: "$89,395", year: "20110", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.", image: fc5 },
        { id: 7, title: "BMW 6-Series Gran Coupe", prize: "$89,395", year: "2011", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.", image: fc7 },
        { id: 8, title: "BMW 6-Series Gran Coupe", prize: "$89,395", year: "2012", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.", image: fc8 },
        { id: 9, title: "BMW 6-Series Gran Coupe", prize: "$89,395", year: "2013", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.", image: fc8 },
        { id: 10, title: "BMW 6-Series Gran Coupe", prize: "$89,395", year: "2014", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.", image: fc8 },
        { id: 11, title: "BMW 6-Series Gran Coupe", prize: "$89,395", year: "2014", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.", image: fc8 },
        { id: 12, title: "BMW 6-Series Gran Coupe", prize: "$89,395", year: "2017", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.", image: fc8 },
        { id: 13, title: "BMW 6-Series Gran Coupe", prize: "$89,395", year: "2017", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.", image: fc8 },
        { id: 14, title: "BMW 6-Series Gran Coupe", prize: "$89,395", year: "2017", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.", image: fc8 },
        { id: 15, title: "BMW 6-Series Gran Coupe", prize: "$89,395", year: "2017", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.", image: fc8 },

        // Thêm các xe còn lại ở đây
    ];

    // Tìm chiếc xe theo ID
    const car = cars[id];

    if (!car) {
        return <p>Car not found</p>;
    }
    const handleDetail = () => {

    }


    return (
        <>
            <Header />
            <div style={{ height: '550px' }}>
                <Hero />
            </div>
            <div className="car-detail-container">
                <div className="car-detail-content">
                    <h1>{car.title}</h1>
                    <img src={car.image} alt={car.title} />
                    <p className="year">{car.year}</p>
                    <p className="price">{car.prize}</p>
                    <p>{car.pretitle}</p>
                    <div>
                        <button type='button' onClick={handleDetail}>Chi tiết</button>
                        {/* <button type='button' onClick={handleequal}>+ So Sánh</button> */}
                    </div>
                </div>
            </div>

            <Footer />
        </>

    );
};
