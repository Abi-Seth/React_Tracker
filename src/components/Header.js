import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title }) => {
    const name = 'Seth';
    const x = true;

    const onClick = () => {
        alert('Passed throug props to call func!')
    }

    return (
        <header className='header'>
            <h1 style={{ color: 'black', backgroundColor: 'white'}}>{ title }</h1>
            <p style={paragraphyStyles}>This developer here is { x ? name : 'Unknown' }.</p>
            <Button color='black' title='Add' onClick={onClick}/>
        </header>
    )
}

Header.defaultProps =  {
    title: "Abi Seth React Application"
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

const paragraphyStyles = {
    color: 'blue',
    fontFamily: 'Fira Code'
}

export default Header
