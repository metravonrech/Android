import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View, Dimensions, Text } from 'react-native';
import { evaluate } from 'mathjs'

import Display from '../components/Display';
import Button from '../components/Button';
import ButtonRow from '../components/ButtonRow';

function isLandscape() {
  const dim = Dimensions.get("screen")
  return dim.width >= dim.height
}

class Home extends Component{
  constructor() {
    super();
    this.state = {
      current: '',
      isLandscape: false,
    };

    Dimensions.addEventListener("change", () => {
      isLandscape() ?
        this.setState({...this.state, isLandscape: true}) :
        this.setState({...this.state, isLandscape: false})
    });
  }


  handlePress(value) {
    const { current } = this.state
    const length = current.length;
    const specialSymbols = ['(', ')', 'sin(', 'cos(', 'tan(', 'sqrt(', 'PI'];
    if (
      isNaN(Number.parseInt(value))
      && isNaN(Number.parseInt(current[length - 1]))
      && (current[length - 1] !== '(' && current[length - 1] !== ')')
    ) {
      if (specialSymbols.includes(value)){
        this.handleCalculation(value);
      }
    } else {
      this.handleCalculation(value);
    }
  };

  resetForm() {
    this.setState(
      defaultState
    );
  }

  calculateResult() {
    let result;
    try {
      result = evaluate(this.state.current).toString()
    } catch (e) {
      result = "Error"
    }
    this.setState({
      current: result,
    });
  }

  handleCalculation(value) {
    switch (value) {
      case '+/-':
        this.setState(({current}) => ({
          current: `${current * -1}`,
        }));
        break;
      case '%':
        this.setState(({current}) => ({
          current: `${current / 100}`,
        }));
        break;
      case '^2':
        this.setState(({current}) => ({
          current: `${current}^2`,
        }));
        break;
      case 'PI':
        this.setState(({current}) => ({
          current: `${current}${Math.PI}`,
        }));
        break;
      default:
        this.setState(({current}) => ({
          current: `${current}${value}`
        }))
    }
  };

  render() {
    const darkColor = '#444';
    const lightColor = '#9e9e9e';
    const accentColor = '#ffa500';
    const lightText = '#fff';
    const darkText = '#000';
    const {current, isLandscape} = this.state;

    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Display text={current}/>
          <ButtonRow>
            <Button text={'C'} color={darkText} backgroundColor={lightColor} onPress={() => this.resetForm()}/>
            <Button text={'+/-'} color={darkText} backgroundColor={lightColor} onPress={() => this.handlePress('+/-')}/>
            <Button text={'%'} color={darkText} backgroundColor={lightColor} onPress={() => this.handlePress('%')}/>
            {
              isLandscape &&
              (
                <>
                  <Button text={'sin(x)'} color={lightText} backgroundColor={darkColor}
                          onPress={() => this.handlePress('sin(')}/>
                  <Button text={'cos(x)'} color={lightText} backgroundColor={darkColor}
                          onPress={() => this.handlePress('cos(')}/>
                </>
              )
            }
            <Button text={'÷'} color={lightText} backgroundColor={accentColor} wide={isLandscape && true}
                    onPress={() => this.handlePress('/')}/>
          </ButtonRow>
          <ButtonRow>
            <Button text={'7'} color={lightText} backgroundColor={darkColor} onPress={() => this.handlePress(7)}/>
            <Button text={'8'} color={lightText} backgroundColor={darkColor} onPress={() => this.handlePress(8)}/>
            <Button text={'9'} color={lightText} backgroundColor={darkColor} onPress={() => this.handlePress(9)}/>
            {
              isLandscape &&
              (
                <>
                  <Button text={'tan(x)'} color={lightText} backgroundColor={darkColor}
                          onPress={() => this.handlePress('tan(')}/>
                  <Button text={'PI'} color={lightText} backgroundColor={darkColor}
                          onPress={() => this.handlePress('PI')}/>
                </>
              )
            }
            <Button text={'x'} color={lightText} backgroundColor={accentColor} wide={isLandscape && true}
                    onPress={() => this.handlePress('*')}/>
          </ButtonRow>
          <ButtonRow>
            <Button text={'4'} color={lightText} backgroundColor={darkColor} onPress={() => this.handlePress(4)}/>
            <Button text={'5'} color={lightText} backgroundColor={darkColor} onPress={() => this.handlePress(5)}/>
            <Button text={'6'} color={lightText} backgroundColor={darkColor} onPress={() => this.handlePress(6)}/>
            {
              isLandscape &&
              (
                <>
                  <Button
                    text={'square2'}
                    color={lightText}
                    backgroundColor={darkColor}
                    onPress={() => this.handlePress('^2')}
                  />
                  <Button
                    text={'squaren'}
                    color={lightText}
                    backgroundColor={darkColor}
                    onPress={() => this.handlePress('^')}
                  />
                </>
              )
            }
            <Button text={'-'} color={lightText} backgroundColor={accentColor} wide={isLandscape && true}
                    onPress={() => this.handlePress('-')}/>
          </ButtonRow>
          <ButtonRow>
            <Button text={'1'} color={lightText} backgroundColor={darkColor} onPress={() => this.handlePress(1)}/>
            <Button text={'2'} color={lightText} backgroundColor={darkColor} onPress={() => this.handlePress(2)}/>
            <Button text={'3'} color={lightText} backgroundColor={darkColor} onPress={() => this.handlePress(3)}/>
            {
              isLandscape &&
              (
                <>
                  <Button text={'root'} color={lightText} backgroundColor={darkColor}
                          onPress={() => this.handlePress('sqrt(')}/>
                  <Button text={'x!'} color={lightText} backgroundColor={darkColor}
                          onPress={() => this.handlePress('!')}/>
                </>
              )
            }
            <Button text={'+'} color={lightText} backgroundColor={accentColor} wide={isLandscape && true}
                    onPress={() => this.handlePress('+')}/>
          </ButtonRow>
          <ButtonRow>
            <Button text={'0'} color={lightText} backgroundColor={darkColor} wide='true'
                    onPress={() => this.handlePress(0)}/>
            <Button text={'.'} color={lightText} backgroundColor={darkColor} onPress={() => this.handlePress('.')}/>
            {
              isLandscape &&
              (
                <>
                  <Button text={'('} color={lightText} backgroundColor={darkColor}
                          onPress={() => this.handlePress('(')}/>
                  <Button text={')'} color={lightText} backgroundColor={darkColor}
                          onPress={() => this.handlePress(')')}/>
                </>
              )
            }
            <Button text={'='} color={lightText} backgroundColor={darkColor} wide={isLandscape && true}
                    onPress={() => this.calculateResult()}/>
          </ButtonRow>
        </View>
      </SafeAreaView>
    );
  };
};

const defaultState = {
  current: '',
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    paddingRight: 50,
    paddingLeft: 50,
  }
});

export default Home;
