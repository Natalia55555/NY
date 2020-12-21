import './InformBlock.css';
import Inputs from '../Inputs/Inputs';
import Draggable from '../Draggable/Draggable';
import Bg from '../Bg/Bg';



function InformBlock(){

  return (      
   <div className='main_block'>
     <div className='left_block' id='elem'>
       <div className='left_block_text'>
      
       </div>
     </div>
     <div className='right_block'>
       <p>1. Выберете фон</p>
       <Bg />  кнопка2  кнопка3  
       <p>2. Перетащите стикеры на открытку</p>  
       <Draggable />
       <p>3. Добавьте текст</p>  
       <Inputs/>    
     </div>
   </div>

  );
};

export default InformBlock;

