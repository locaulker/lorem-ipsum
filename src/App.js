import React, { useState } from "react"
import data from "./data"

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])

  const handleSubmit = e => {
    e.preventDefault()
    console.log("You Submitted Me!")
  }

  return (
    <section className="section-center">
      <h3>Tired of Boring Lorem Ipsum</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={e => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel impedit
          suscipit explicabo ut repudiandae obcaecati laboriosam cumque non
          repellat sapiente omnis dolorum quo debitis voluptates illo, nulla
          nesciunt saepe minus et earum, numquam commodi officia. Magni in
          repellendus odit eligendi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel impedit
          suscipit explicabo ut repudiandae obcaecati laboriosam cumque non
          repellat sapiente omnis dolorum quo debitis voluptates illo, nulla
          nesciunt saepe minus et earum, numquam commodi officia. Magni in
          repellendus odit eligendi.
        </p>
      </article>
    </section>
  )
}

export default App
