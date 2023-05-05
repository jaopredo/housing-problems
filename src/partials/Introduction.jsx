/* IMAGES */
import Worker from '@assets/worker.jpg'

function Introduction() {
    return <article>
        <section>
            <h1>Have any<br/>household<br/>problems?</h1>
            <span>THE EASY</span>
            <p>Home repair services can be booked through our platform using an easy-to-use website or mobile app and it only takes a few seconds.</p>
            <span>+55 (88) 99512-0974 </span>
        </section>
        <img src={Worker} alt="Worker Image" />
    </article>
}

export default Introduction