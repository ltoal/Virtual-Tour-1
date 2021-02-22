//Virtual Tour React 360

var React = require('react.js');
var React360 = require('react-360.js');
// import {
//   AppRegistry,
//   Environment,
//   StyleSheet,
//   Text,
//   View,
//   VrButton,
// } from 'react-360';

class Background extends React.Component {
  constructor(props) {
    super();
    Environment.setBackgroundImage(props.uri, { format: props.format });
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.uri !== this.props.uri ||
      nextProps.format !== this.props.format
    ) {
      Environment.setBackgroundImage(nextProps.uri, { format: nextProps.format });
    }
  }

  render() {
    return null;
  }
}

class Slideshow extends React.Component {
  state = {
    index: 0,
  };

  _prevPhoto = () => {
    let next = this.state.index - 1;
    if (next < 0) {
      next += this.props.photos.length;
    }
    this.setState({
      index: next,
    });
  };

  _nextPhoto = () => {
    this.setState({
      index: this.state.index + 1,
    });
  };

  render() {
    const current = this.props.photos[
      this.state.index % this.props.photos.length
    ];
    return (
      <View style={styles.wrapper}>

        <Background uri={current.uri} format={current.format} />
        <View style={styles.controls}>
          <Text style={styles.TitleText}> IH 3D Slider</Text>
          <VrButton onClick={this._prevPhoto} style={styles.button}>
            <Text style={styles.buttonText}>{'<'}</Text>
          </VrButton>
          <View>
            <Text style={styles.title}>{current.title}</Text>
          </View>
          <VrButton onClick={this._nextPhoto} style={styles.button}>
            <Text style={styles.buttonText}>{'>'}</Text>
          </VrButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 600,
    width: 1000,
  },
  controls: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 600,
    padding: 10,
  },
  title: {
    color: '#ffffff',
    textAlign: 'left',
    fontSize: 36,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#c0c0d0',
    borderRadius: 5,
    width: 40,
    height: 44,
  },
  buttonText: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 30,
    fontWeight: 'bold',
  },
  titleText: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 34,
    fontWeight: 'bold',
  },
});

AppRegistry.registerComponent('Slideshow', () => Slideshow);

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    ...options,
  });
