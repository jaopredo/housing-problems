import { Children } from "react"
import { FaFaucet } from 'react-icons/fa'
import { BsLightbulbFill, BsFillGearFill, BsFillBox2Fill } from 'react-icons/bs'
import { GiSofa } from 'react-icons/gi'
import { RiPlantFill } from 'react-icons/ri'

import WomanWorker from '../assets/woman-worker.jpg'

function Services() {
    const iconsList = [
        { icon: FaFaucet, message: "Plumbing repair"},
        { icon: BsLightbulbFill, message: "Electricity repair"},
        { icon: GiSofa, message: "Furniture repair"},
        { icon: BsFillGearFill, message: "Equipment repair"},
        { icon: BsFillBox2Fill, message: "Home repairs"},
        { icon: RiPlantFill, message: "Garden renovation"}
    ]

    return <article>
        <section>
            <h1>We bring the best services to You</h1>
            <p>Sample text. asdsf  lçlçkjweró cxplç, zxcvpou</p>
            <ul>
                {Children.toArray(iconsList.map(iconObj => <li>
                    <iconObj.icon/>
                    <p>{iconObj.message}</p>
                </li>))}
            </ul>
        </section>
        <section>
            <div>
                <h1>Home Repair</h1>
                <h2>27 DIY Home Repair Tips</h2>
                <p>27 clever DIY home repair tips every home owner should know. It's that time again, where we want to share some very resourceful household.</p>
                <button>contact us</button>
            </div>
            <img src={WomanWorker} alt="Trabalhadora" />
        </section>
    </article>
}

export default Services;