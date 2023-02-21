import {useSelector} from 'react-redux';

function ElementList() {

    const elements = useSelector(store => store.elementList);

    return (
        <ul>
            {elements.map( (element, i) => {
                return (
                    <li key={i}>{element}</li>
                )
            })}
        </ul>
    )

}

export default ElementList;