import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

export const MySwiper = () => {
    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={31}
            navigation={{
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next'
            }}
            onSwiper={(swiper) => {
                // ваша логика
            }}

            style={{
                // width: "100%",
                marginBottom: "100px"
            }}
        >
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>

            <SwiperSlide style={{ backgroundImage: "url(ProjektePage/SliderImages/VIPSanierungInKiel-Wik.png)", height: "647px", width:"321px", display: "flex", flexDirection: "column-reverse", alignItems: "center" }}>
                <p>Komplett Modernisierung</p>
            </SwiperSlide>

            <SwiperSlide style={{ backgroundImage: "url(ProjektePage/SliderImages/KomplettModernisierung.png)", height: "647px", display: "flex", flexDirection: "column-reverse", alignItems: "center" }}>
                <p>Strangsanierung In Kiel</p>
            </SwiperSlide>

            <SwiperSlide style={{ backgroundImage: "url(ProjektePage/SliderImages/StrangsanierungInKiel.png)", height: "647px", display: "flex", flexDirection: "column-reverse", alignItems: "center" }}>

                <p>Haus Mit 180m2 Grundfläche</p>
            </SwiperSlide>

            <SwiperSlide style={{ backgroundImage: "url(ProjektePage/SliderImages/HausMit180m2Grundfläche.png)", height: "647px", display: "flex", flexDirection: "column-reverse", alignItems: "center" }}>

                <p>VIP Sanierung In Kiel-Wik</p>
            </SwiperSlide>
        </Swiper>
    );
};
