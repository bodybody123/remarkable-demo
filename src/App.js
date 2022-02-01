import './App.css';
import { useRef } from 'react';
import { Remarkable } from 'remarkable';

const md = new Remarkable();

const App = () => {
  const preview = useRef('');

  const handleChange = e => {
    preview.current.innerHTML = md.render(e.target.value);
  }

  return (
    <div className="App">
      <div ref={preview}></div>
      <textarea onChange={handleChange}></textarea>
    </div>
  );
}

export default App;
