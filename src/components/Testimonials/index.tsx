"use client"

import { Reveal } from "../Reveal"
import { Slide } from "./Slide"

export function Testimonials() {
    return (
        <div className="relative p-8 md:py-64" id="testimonios">
            <div className="grid max-w-5xl gap-8 mx-auto my-6 md:grid-cols-2">
                <Reveal>
                    <h2 className="text-5xl mb-5 font-semibold">
                        Esto dicen nuestros clientes sobre pedir con nuestra app
                    </h2>
                </Reveal>
                <Reveal>
                    <div className="self-center">
                        <p className="text-primaryDark">Descubre por qué nuestros clientes prefieren pedir sus platos favoritos directamente desde nuestra aplicación. 
                            ¡Comodidad, rapidez y sabor en un solo lugar!</p>
                    </div>
                </Reveal>
            </div>

            <Slide />
        </div>
    )
}