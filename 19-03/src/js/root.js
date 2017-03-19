import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import reducer from './reducers';
export default class Root extends React.Component {

inc(){
	return {type :'ADD'};
}

dec(){
	return {type: 'SUB'};
}

componentDidMount(){
	//初始化，传递的参数是 reducer
	var store = createStore(reducer);

	console.log(store.getState());

	store.dispatch(this.inc());
	console.log(store.getState());

	store.dispatch(this.inc());
	console.log(store.getState());

	store.dispatch(this.dec());
	console.log(store.getState());

}

render() {
		return (
			<div>
				REDUX
			</div>
		);
	};
}

ReactDOM.render(<Root/>, document.getElementById('mainContainer'));
