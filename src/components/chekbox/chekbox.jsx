import React from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import { useDispatch } from 'react-redux'; // dispatch pour appelé un action
import './styles.css';
import { updateTodo } from '../../app/store';
const CheckboxDemo = ({isDone,id}) => { // isDone,id jbnaha m store.js fl app
  const dispatch = useDispatch() // dispatch pour appelé une action
  return (
  <form> {/*Checkbox.Root jebnaha m lébréré Radix */}
<div style={{ display: 'flex', alignItems: 'center' }}> {/* updatetodo jebnaha m reducers t3 store.js */} 
<Checkbox.Root checked={isDone} onCheckedChange={()=>dispatch(updateTodo(id))} // id c'est un payload data (wch nmedo comme paramétre)
className="CheckboxRoot" defaultChecked id="c1"> 
<Checkbox.Indicator className="CheckboxIndicator">
          <CheckIcon/>
        </Checkbox.Indicator>
      </Checkbox.Root>
    </div>
  </form>
);
}
export default CheckboxDemo;