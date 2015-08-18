import React, { Component, PropTypes } from 'react';

export default class RadioTabGroup extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    defaultValue: PropTypes.number.isRequired,
    toToSelect: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);
  }

  getStyles () {
    return {
          radioItem: {
            marginTop: "10px"
          },
          span: {
            display:"inline-block",
            padding:"5px",
            marginLeft: "10px"
          },
          chked: {
            display:"inline-block",
            padding:"5px",
            marginLeft: "15px",
            backgroundColor: "#3167af",
            color: "white"
          },
          label: {
            width:"60px",
            textAlign:"right"
          }
      };
  }
  setValue(e) {
    let data = {},
        value = e.target.getAttribute("value");
    data[this.props.name] = value ? parseInt(value) : null;
    this.props.toToSelect(data);
  }

  render() {
    let styles = this.getStyles();
    return (
      <div style={styles.radioItem}>
      <label style={styles.label}>{this.props.label}</label>
        {
          this.props.value.map(option =>
            <span style={this.props.defaultValue !== option.value ? styles.span : styles.chked}
                  value={option.value}
                  onClick={::this.setValue}>{option.text}
            </span>
          )
        }
      </div>
    );
  }
}
