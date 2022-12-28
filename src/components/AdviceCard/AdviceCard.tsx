import { useState } from 'react';
import Button from "../Button/Button";
import IconDivider from '../../assets/icons/ic_divider_center.svg';
import IconDice from '../../assets/icons/ic_dice_blue.svg';

interface Advice {
  id: number;
  advice: string;
}

const AdviceCard = () => {
  const [advice, setAdvice] = useState({} as Advice);

  const onDiceClick = async () => {
    try {
      const res = await fetch('https://api.adviceslip.com/advice');
      const data = await res.json();
    
      setAdvice({
        id: data.slip.id,
        advice: data.slip.advice,
      });
    } catch(err) {
      console.log(err);

      setAdvice({
        id: 0,
        advice: 'Sorry, we can\'t get an advice for you right now. Please try again later.',
      });
    }
  }

  return (
    <div className='adviceCard'>
      <h4 className='adviceCard__title u-mb-24'>{
        advice.id ? `ADVICE #${advice.id}` : null
      }</h4>
      <p className='adviceCard__text u-mb-40-24'>
        { advice.advice ? `“${advice.advice}”` : 'Click on the dice to get an advice' }
      </p>
      <div className='divider u-mb-40-32'>
        <hr/>
        <div className='divider__icon'>
          <img src={IconDivider} alt='divider icon'/>
        </div>
      </div>
      <div className='customBtn'>
        <Button content={<img src={IconDice} alt='search other advice'/>} onBtnClick={onDiceClick}/>
      </div>
    </div>
  )
};

export default AdviceCard;