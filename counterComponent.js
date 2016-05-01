import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ToolbarAndroid,
  TouchableHighlight
} from 'react-native';

const styles = StyleSheet.create({
	container:{
		flex: 1,
		alignItems: 'center'
	},
	text:{
		fontSize: 20
	},
	button:{
		backgroundColor: '#009688',
		borderWidth: 1,
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'stretch',
		height: 50,
		borderRadius: 3,
		margin: 20
	},
	cancelButton:{
		backgroundColor: '#fff'
	},
	buttonText:{
	    color: '#fff',
	    textAlign: 'center',
	    fontWeight: 'bold',
	    flex: 1,
	    fontSize: 20,
	},
	toolbar:{
		alignSelf: 'stretch',
		height : 50,
		backgroundColor: '#009688',
		    textAlign: 'center',
		    fontWeight: 'bold',
		    flex: 1,
		    fontSize: 20,
	},
});
export default class counterComponent extends Component{

	constructor(props){
		super(props);

		this.state = {
		value: 0
		}
		
}
	onIncrement(){
		this.setState({
		value: this.state.value + 1
		});
}
	onDecrement(){
		this.setState({
		value: this.state.value - 1
		});
}

	render(){
		return(
		<View style = { styles.container }>
		<ToolbarAndroid style = {styles.toolbar}
			title = "Counter Demo"/>

		<Text style = {styles.text}>{this.state.value}</Text>
		<TouchableOpacity
			style = {styles.button}
			onPress = {this.onIncrement.bind(this)}>
			<Image
			source={require('image!ic_add_white_24dp')}/>
		</TouchableOpacity>
		<TouchableHighlight
			style = {styles.button}
			onPress = {this.onDecrement.bind(this)}
			>
			<Text style = {styles.buttonText}>Decrement</Text>
		</TouchableHighlight>
		</View>
		);
	}
}
