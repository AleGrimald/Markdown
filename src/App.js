import './App.css';
import {useState} from 'react';
import {marked} from 'marked';

function App() {
  const [texto, setTexto]= useState(`
  # Markdown FCC
  ## Dev: Grimaldi Oscar Alejandro
  [Github Repo](https://github.com/AleGrimald?tab=repositories)

  \`
  const manejoTexto = (e)=>{
    setTexto(e.target.value);
  };
  \`

  \`\`\`
  {
    "firstName": "John",
    "lastName": "Smith",
    "age": 25
  }
  \`\`\`
  
  - 500cc de Aceite
  - 2Kg de Papa
  - 400g de Queso Cremoso

  > blockquote

  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

  **Fin del Proyecto N° 2**
  `);

  marked.setOptions({
    breaks: true,
  });
  
  const manejoTexto = (e)=>{
    setTexto(e.target.value);
  };

  return (
    <div className="App">
      <textarea id="editor" cols="30" rows="10" onChange={manejoTexto} value={texto}/>
      <div id="preview" dangerouslySetInnerHTML={{__html:marked.parse(texto)}}></div>
    </div>
  );
}

export default App;
