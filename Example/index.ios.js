/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Component,
  View,
  Text
} = React;

var Radio = require('react-native-radio-button-classic');
var Option = Radio.Option;

var styles = StyleSheet.create({
  title: {
    fontSize: 18
  },
  description: {
    fontSize: 14,
    color: 'gray'
  }
});

class Item extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var { title, description } = this.props;

    return (
      <View style={{ paddingTop: 7, paddingLeft: 10 }}>
        <Text style={styles.title}>{ title }</Text>
        <Text style={styles.description}>{ description }</Text>
      </View>
    );
  }
}

class Example extends Component {
  constructor(props) {
    super(props);

    this.state = {
      optionSelected: 1
    }
  }

  onSelect(index) {
    this.setState({
      optionSelected: index + 1
    });
  }

  render() {
    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <Radio onSelect={this.onSelect.bind(this)} defaultSelect={this.state.optionSelected - 1}>
          <Option color="gray" selectedColor="#008BEF">
            <Item title="First Options" description="This is your First Option"/>
          </Option>
          <Option color="gray" selectedColor="#008BEF">
            <Item title="Second Options" description="This is your Second Option"/>
          </Option>
          <Option color="gray" selectedColor="#008BEF">
            <Item title="Third Options" description="This is your thrid Option"/>
          </Option>
        </Radio>

        <View style={{ paddingTop: 40 }}>
          <Text>You have selected option {this.state.optionSelected}</Text>
        </View>
      </View>
    );
  }
}


AppRegistry.registerComponent('Example', () => Example);
