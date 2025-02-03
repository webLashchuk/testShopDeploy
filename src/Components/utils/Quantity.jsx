import s from './Quantity.module.scss';
import '../../core/Utils.scss';
import icons from '../../assets/img/icons.svg'

const Quantity = ({ value, increment, decrement }) => {

  return (
    <div>
      <label className="visually-hidden" htmlFor="quantity-input">Set the quantity</label>
      <div className={s.quantity}>
        <button
          className={`${s.button} ${s.buttonIncrement}`}
          onClick={decrement} 
          aria-label="Decrease quantity"
        >
            <svg className={`${s.icon}`}  width="25" height="25">
                <use href={icons + "#icon-minus"} />
            </svg>
        </button>

        <input 
          id="quantity-input"
          className={s.screen} 
          type="text" 
          value={value}
          readOnly
          aria-live="polite"
        />

        <button
          className={`${s.button} ${s.buttonIncrement}`}
          onClick={increment} 
          aria-label="Increase quantity"
        >
            <svg className={`${s.icon}`}  width="25" height="25">
                <use href={icons + "#icon-plus"} />
            </svg>
        </button>
      </div>
    </div>
  );
};

export default Quantity;