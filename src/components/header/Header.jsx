import reactImg from '../../assets/react-core-concepts.png'
import './Header.css'

const firstWord = ['Fundamental', 'Crucial', 'Core']

function random (firstWord) {
    const randomIndex = Math.floor(Math.random()* firstWord.length)
    return firstWord[randomIndex]
}
const word = random(firstWord)
export default function Header() {
    return (
        <header>
          <img src={reactImg} alt="Stylized atom" />
          <h1>React Essentials</h1>
          <p>
        
           {word} React concepts you will need for almost any app you are
            going to build!
          </p>
        </header>
      )
}