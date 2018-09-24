import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MyElem from './MyElem'
import registerServiceWorker from './registerServiceWorker';
import MySection from './MySection';
import MyButton from './MyButton';


ReactDOM.render(<App> <MyElem></MyElem></App>, document.getElementById('root'));
registerServiceWorker();

ReactDOM.render((
  <MySection>
    <MyButton>My Button Text</MyButton>
  </MySection>
  ),
  document.getElementById('ex')

);



ReactDOM.render((<div> 
    <button />
    <code> Koooo </code>
    <input />
    <p> Muuuu </p>
    <pre> 123 </pre>
    <select>
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
    </select>
   
</div>
), document.getElementById('app'));