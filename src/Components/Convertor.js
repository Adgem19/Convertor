import React from "react";
import { View, StyleSheet, TextInput, Button, Text } from "react-native";
import { connect } from "react-redux";
import { asyncGetExchangeRates } from "../redux/asyncActionCreator";

class Convertor extends React.Component {

  state = {
    convertorUsd:'',
    convertorEur:'',
    validationUSD: false,
    validationEUR: false
  }

  componentDidMount() {
    this.props.asyncGetExchangeRates();
  }

  onChangeUSD = (event) => {
    let count = event.nativeEvent.text
    if(!Number(count)) {
      this.setState({ ...this.state, validationUSD : true})
    } else {
    this.setState({ ...this.state, validationUSD : false, convertorUsd : (Number(count) / Number(this.props.USD)).toFixed(2)})
  }
  };

  onChangeEUR = (event) => {
    let count = event.nativeEvent.text
    if(!Number(count)) {
      this.setState({ ...this.state, validationEUR : true})
    } else {
    this.setState({ ...this.state, validationEUR : false, convertorEur: (Number(count) / Number(this.props.EUR)).toFixed(2)})
    }
  };

  render() {
    return (
      <View>
        <Text>{this.state.validationUSD ? 'введите число' : ''}</Text>
        <Text>rub --> usd = { this.state.convertorUsd > 0 ? this.state.convertorUsd + ' $': ''}</Text>
        <TextInput
          style={styles.input}
          name="text"
          onChange={this.onChangeUSD}
          placeholder="укажите значение"
        />
        
        <Text>{this.state.validationEUR ? 'введите число' : ''}</Text>
        <Text>rub --> eur = { this.state.convertorEur > 0 ? this.state.convertorEur + ' €': ''} </Text>
        <TextInput
          style={styles.input}
          name="text"
          onChange={this.onChangeEUR}
          placeholder="укажите значение"
        />

      </View>
    );
  }
}
const styles = StyleSheet.create({
  input: {
    width: 150,
    borderColor: "blue",
    borderBottomWidth: 2,
    marginBottom: 10,
  },
  button: {
    margin: 90,
  },
});

const mapStateToProps = (state) => {
  return {
    USD: state.USD,
    EUR: state.EUR,
  };
};

export default connect(mapStateToProps, {asyncGetExchangeRates})(Convertor);
