// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef(null);
  const [isValid, setIsValid] = React.useState(true);
  const [value, setValue] = React.useState('');
  function handleSubmit(event){
    event.preventDefault();
    // const username = event.target.elements[0].value;
    const username = inputRef.current.value;
    onSubmitUsername(username);
  }

  const onChange = (event) => {
    const { value } = event.target;
    // if(value === value.toLowerCase()){
    //   setIsValid(true);
    // }else {
    //   setIsValid(false);
    // }
    setValue(value.toLowerCase());
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='username'>Username:</label>
        <input id='username' onChange={onChange} value={value} type="text" ref={inputRef} />
        {/* {!isValid &&  <p role='alert'> value must be lowercase</p> } */}
      </div>
      {/* <button type="submit" disabled={!isValid}>Submit</button> */}
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
