import ThreeScene from './Earth';
import '../styling/Home.css'

function Home() {
    return (
        <div className="home-container">
            <div className="earth">
                <ThreeScene />
            </div>
        </div>
    )
}

export default Home