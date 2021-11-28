import PropTypes from 'prop-types';
import Button from './Button';
import { useLocation } from 'react-router-dom'

const Header = ({ title, onAdd, showAdd }) => {
    // const name = 'Seth';
    // const x = true;

    const location = useLocation()

    return (
        <header className='header'>
            <h1 style={{ color: 'black', backgroundColor: 'white'}}>{ title }</h1>
            {/* <p style={paragraphyStyles}>This developer here is { x ? name : 'Unknown' }.</p> */}
           
            {location.pathname === '/' && <Button color={showAdd ? 'red' : 'black'} title={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>}
        </header>
    )
}

Header.defaultProps =  {
    title: "Abi Seth React Application"
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

// const paragraphyStyles = {
//     color: 'blue',
//     fontFamily: 'Fira Code'
// }

export default Header
