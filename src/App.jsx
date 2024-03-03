import { useState } from 'react'
import CoreConcepts from './components/CoreConcepts.jsx';
import Header from './components/header/Header.jsx'
import TabButton from './components/tabButton.jsx';
import { CORE_CONCEPTS } from './data.js';
import { EXAMPLES } from './data.js';


function App() {
    const [selectedTopic, setSelectedTopic] = useState()

    // console.log(...CORE_CONCEPTS);
    function handleClicked(selectedButtons) {
        // console.log(selectedButtons);
        setSelectedTopic(selectedButtons)
    }



    let tabContent = <p>Please select a topic.</p>;

    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        );
    }


    return (<div>
        <Header />
        <main>
            <section id="core-concepts">
                <h2>Core Concepts</h2>
                <CoreConcepts />
            </section>
            <section id="examples">
                <h2>Examples</h2>
                <menu>
                    <TabButton isSelected={selectedTopic === 'components'}
                        onselect={() => handleClicked('components')}>Components</TabButton>
                    <TabButton isSelected={selectedTopic === 'jsx'}
                        onselect={() => handleClicked('jsx')}>JSX</TabButton>
                    <TabButton isSelected={selectedTopic === 'props'}
                        onselect={() => handleClicked('props')}>Props</TabButton>
                    <TabButton isSelected={selectedTopic === 'state'}
                        onselect={() => handleClicked('state')}> State</TabButton>




                </menu>
                {tabContent}
            </section>
        </main>
    </div>)
}

export default App
