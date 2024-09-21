import Card from './Card'
import '../styling/About.css'

function About() {
    return (
        <div className="about-container">
            <div className="card-container">
                <Card name="Devanshu Mangal" field="Database + Backend" />
                <Card name="Ronit Rathod" field="Database + Backend" />
                <Card name="Dhairya Prajapati" field="Frontend" />
                <Card name="Manan Tarsaria" field="Database" />
            </div>
        </div>
    )
}

export default About