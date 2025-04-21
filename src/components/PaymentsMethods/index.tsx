"use client"
import 'swiper/css'
import 'swiper/css/autoplay'
import { Swiper, SwiperSlide } from 'swiper/react'
import { dataPaymentMethods } from './PaymentMethods.data'
import Image from 'next/image'
import { CtaDark } from '../CtaDark'
import { Autoplay } from 'swiper/modules'

export function PaymentsMethods() {
    return (
        <div className="relative py-20 md:py-64" id="servicios">
            <div className="relative w-full overflow-hidden">
                <Swiper
                    modules={[Autoplay]}
                    breakpoints={{
                        320: {
                            slidesPerView: 8,
                            spaceBetween: 15
                        }
                    }}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false
                    }}
                    grabCursor={true}
                    loop={true}
                    speed={2000}
                    spaceBetween={30}
                    centeredSlides={true}
                    className="mySwiper"
                >
                    <div className="absolute flex">
                        {dataPaymentMethods.map(({ id, image }) => (
                            <SwiperSlide key={id} className="flex items-center slider-horizontal">
                                <Image src={image} alt="Payment" className="h-[60px] w-[120px] object-contain" />
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>
            </div>

            <CtaDark />
        </div>
    )
}