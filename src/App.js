import { useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';

const App = () => {
  const [ text, setText ] = useState('');
  const handleChange = (e) => {
    setText(e)
  }

  const handleClick = () => {
    try {
      axios.post('http://localhost:3005/create', 
      {text: text});
      setText('');
    }
    catch (e) {
      console.log(e);
    }
  }

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }
 
  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]

  return (
    <>
    <ReactQuill 
      value={text}
      onChange={handleChange}
      modules={modules}
      formats={formats} />

      <button onClick={handleClick}>Kirim</button>
    </>
  )
}

export default App;