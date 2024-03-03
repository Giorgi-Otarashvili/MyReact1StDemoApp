import { CORE_CONCEPTS } from "../data"
export default function CoreConcepts () {
return (
    <ul>
 {CORE_CONCEPTS.map((concept)=>(
    <li key={concept.title}>
        <img src={concept.image}/>
        <h3>{concept.title}</h3>
        <p>{concept.description}</p>
    </li>
 ))}
</ul>
)
}