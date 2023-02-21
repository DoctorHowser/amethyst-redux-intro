import {useState} from 'react'
import {useDispatch} from 'react-redux';

function ElementForm() {

    const dispatch = useDispatch();

    const [elementInput, setElementInput] = useState('');


    const handleSubmit = (event) => {
        //stop form from refreshing page
        event.preventDefault();
    
        dispatch({
          type: 'ADD_ELEMENT',
          payload: elementInput
        })
    
        setElementInput('');
      }

    return (
        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            placeholder='Element Name'
            onChange={ (event) => setElementInput(event.target.value)}
            value={elementInput} 
             />
          <button type='submit'>ADD ELEMENT</button>
        </form>
    )


}

export default ElementForm;