"use client"

import Link from "next/link"
import { Reveal } from "../Reveal"
import { dataFeaturesBusiness } from "./BestBusiness.data"

export function BestBusiness() {
    return (
        <div className="relative px-6 py-20 md:py-64" id="features">
            <div className="grid max-w-5xl mx-auto md:grid-cols-2">
                <div>
                    <Reveal>
                        <h2 className="text-5xl font-semibold">


                            <span className="block degradedBlue bg-blueLight">Tú disfrutas,</span>
                            nosotros te lo llevamos
                        </h2>
                    </Reveal>
                    <Reveal>
                        <p className="max-w-md mt-10">Con nuestra app exclusiva, pedir tus platos favoritos 
                            nunca fue tan fácil. Explora nuestro menú completo, personaliza tu orden y recíbela donde quieras. 
                            ¡El sabor de DelisApp al alcance de tu mano!</p>
                    </Reveal>
                    <Reveal>
                        <div className="my-8">
                            <Link href="#clients" className="px-4 py-3 rounded-md bg-blueRadial">Elige tu Menú</Link>
                        </div>
                    </Reveal>
                </div>

                <div className="grid items-center py-5 md:p-8">
                    {dataFeaturesBusiness.map(({ id, icon, title, description }) => (
                        <Reveal key={id}>
                            <div className="grid grid-flow-col gap-5 px-4 py-2 rounded-3xl group hover:bg-radialBlack">
                                <span className="text-2xl">
                                    {icon}
                                </span>
                                <div>
                                    <h4 className="text-primary">{title}</h4>
                                    <p className="text-primaryDark">{description}</p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </div>
    )
}