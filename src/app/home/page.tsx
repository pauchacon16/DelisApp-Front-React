import { BestBusiness } from "@/src/components/BestBusiness"
import { Footer } from "@/src/components/Footer"
import { Header } from "@/src/components/Header"
import { PaymentsMethods } from "@/src/components/PaymentsMethods"
import { Testimonials } from "@/src/components/Testimonials"

function HomePage(){
    return (
        <>
            <Header />
            <BestBusiness />
            <Testimonials />
            <PaymentsMethods />
            <Footer />
        </>
    )
}
export default HomePage