import { AppContext } from '../context/AppContext';
import {useContext} from 'react';

const DigitButton = ({digit,classtype}) => {

    const {budget,setBudget} = useContext(AppContext);


    const digitClick = (digit) =>{
        if(digit=="AC"){
            setBudget("");
        } else if(digit=="="){

                try{
                    setBudget(eval(budget).toString());
                }
                catch(e){
                    setBudget("Error");
                }
            

        } else if(digit=="DEL"){
            let str = budget;
            str = str.slice(0, -1); 
            setBudget(str)
        }
        else{
            setBudget(budget + digit );
        }
    }
        return(<>

            <button className={classtype} onClick={() => digitClick(digit)}>{digit}</button>
        
        </>)
}

export default DigitButton;