import Navbar from "../../components/Navbar/Navbar";
import Menu from "../../components/Menu/Menu";
import Cards from "../../components/Cards/Cards";
import "./Home.css"

function Home() {

    return (
        <>
            <Navbar />
            <section className="content">
                <Menu />
                <Cards />
            </section>
        </>
    )
}

export default Home;