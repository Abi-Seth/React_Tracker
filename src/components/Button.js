import PropTypes from 'prop-types';

const Button = ({ color, title, onClick }) => {
    // const onClick = () => {
    //     alert('Ready to add new item!')
    // }

    return (
        <div>
            <button onClick={onClick} style={{ backgroundColor: color }} className='btn'>{ title }</button>
        </div>
    )
}

Button.defaultProps = {
    color: 'black',
    title: 'Add'
}

Button.propTypes = {
    color: PropTypes.string,
    title: PropTypes.string,
    onClick: PropTypes.func
}

export default Button
