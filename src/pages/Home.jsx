import Header from '../components/(routes)/home/Header';
import Promis from '../components/(routes)/home/promis';
import Services from '../components/(routes)/home/Services';
import Success from '../components/(routes)/home/Success';
import Projects from '../components/(routes)/home/Projects';
import Methodology from '../components/(routes)/home/methodology';
import Tools from '../components/(routes)/home/tools';
import Customers from '../components/(routes)/home/Customers';
import Form from '../components/(routes)/home/Form';    
import Footer from '../components/(routes)/home/Footer';
export default function Home() {
    return (
        <>
            <Header /> 
            <Promis />
            <Services />
            <Success />
            <Projects />
            <Methodology />
            <Tools />
            <Customers />
            {/* <Form /> */}
            <Footer />  
        </>
    )
} 