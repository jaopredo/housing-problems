import { Children } from "react"

import getAvalitaions from "@api/getAvaliations"

function Ratings() {
    const dataAvaliations = getAvalitaions()

    return <article>
        <section>
            <h1>Read what our clients say</h1>
            <ul>
                {Children.toArray(dataAvaliations.map(client => <li>
                    <img src={client.image} alt="" />
                    <div>
                        <p>{client.feedback}</p>
                        <span>{client.name}</span>
                    </div>
                </li>))}
            </ul>
        </section>
        <section>
            <h1>Having any housing problems?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos totam assumenda, dicta numquam saepe ratione dolores consequatur deleniti cumque quod vo</p>
            <p>+1 (234) 567-8910</p>
        </section>
    </article>
}

export default Ratings;