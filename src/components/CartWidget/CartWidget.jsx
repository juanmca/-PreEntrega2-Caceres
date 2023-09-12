
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import  "./CartWidget.css";


const CartWidget = () => {
  return (
    <div className='cartEstilo'><FontAwesomeIcon icon={faCartShopping} />
<em className='numeroEstilo'>0</em>
    </div>
  )
}

export default CartWidget; 