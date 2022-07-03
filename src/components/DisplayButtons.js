import DigitButton from "./DigitButton";
import { AppContext } from '../context/AppContext';
import { useContext} from 'react';

const DisplayButtons = () => {

    const {budgets,setBudgets} = useContext(AppContext);

 
    return(<>
   
    <DigitButton digit="AC"  classtype="span-2 dbutton"></DigitButton>
        <DigitButton digit="DEL"  classtype="dbutton"></DigitButton>
        <DigitButton digit="÷"  classtype="dbutton"></DigitButton>
        <DigitButton digit="1"  classtype="lbutton"></DigitButton>
        <DigitButton digit="2" classtype="lbutton"></DigitButton>
        <DigitButton digit="3" classtype="lbutton"></DigitButton>
        <DigitButton digit="*" classtype="dbutton"></DigitButton>
        <DigitButton digit="4" classtype="lbutton"></DigitButton>
        <DigitButton digit="5" classtype="lbutton"></DigitButton>
        <DigitButton digit="6" classtype="lbutton"></DigitButton>
        <DigitButton digit="+" classtype="dbutton"></DigitButton>
        <DigitButton digit="7" classtype="lbutton"></DigitButton>
        <DigitButton digit="8" classtype="lbutton"></DigitButton>
        <DigitButton digit="9" classtype="lbutton"></DigitButton>
        <DigitButton digit="-" classtype="dbutton"></DigitButton>
        <DigitButton digit="." classtype="lbutton"></DigitButton>
        <DigitButton digit="0" classtype="lbutton"></DigitButton>
        <DigitButton digit="=" classtype="span-2 equal"></DigitButton>
    </>)
}

export default DisplayButtons;