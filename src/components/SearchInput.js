/**
 * Created by roderickWang on 7/28/15.
 */
import React, { Component, PropTypes } from 'react';
import {Input,Overlay} from 'react-bootstrap';
import LinkedStateMixin from '../decorators/LinkedStateMixin'

@LinkedStateMixin
export default
class SearchInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            text: '',
            id: '',
            listKey: props.listKey || 'value',
            listText: props.listText || 'text',
            overlaySelected: 0
        };

    }

    static proTypes = {
        placeholder: PropTypes.string,
        select: PropTypes.func,
        list: PropTypes.array,
        loadList: PropTypes.func,
        listKey: PropTypes.string,
        listText: PropTypes.string
    }

    toggle(event) {
        this.focus = true;

        this.setState({
            text: event.target.value,
            id: ''
        });

        //increase effective
        if (event.target.value != '') {
            clearInterval(this.requesting);
            this.requesting = setTimeout((function (target) {
                this.props.loadList(target.value);

            }).bind(this, event.target), 500);

        }
    }


    hover(event) {
        //event.target.style.background = '#fff';
        this.setState({
            overlaySelected: event.target.dataset.name.substring(4)
        })
    }

    leave(event) {
        //event.target.style.background = '';
    }

    select(city, close) {
        this.setState({
            text: city[this.state.listText],
            id: city[this.state.listKey]
        });
        if (close) {
            this.setState({
                show: false
            })
        }

        this.props.select(city[this.state.listKey]);
    }

    onBlur() {
        this.focus = false;
        setTimeout(()=>this.setState(
            {show: false}
        ), 300)
    }

    keyPress(event) {
        if (event.key == "ArrowDown") {
            let max = this.props.list.length;
            if (this.state.overlaySelected == undefined) {
                this.setState({
                    overlaySelected: '0'
                });
            } else if (this.state.overlaySelected < (max - 1 < 4 ? max - 1 : 4)) {
                this.setState({
                    overlaySelected: parseInt(this.state.overlaySelected) + 1
                })
            }


        } else if (event.key == "ArrowUp") {
            if (this.state.overlaySelected > 0) {
                this.setState({
                    overlaySelected: parseInt(this.state.overlaySelected) - 1
                })
            }

        } else if (event.key == "Enter") {
            this.select(this.props.list[this.state.overlaySelected], true);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.list.length > 0 && this.focus) {
            let find = nextProps.list.filter(city=> {
                return city[this.state.listText] == this.state.text;
            });
            if (find.length > 0) {
                nextProps.select(find[0][this.state.listKey]);
            } else {
                nextProps.select('');
            }
            this.setState({
                show: true
            });
        } else {
            // nextProps.select('');
            this.setState({
                show: false
            });
        }
    }

    overlayItemStyle(i) {
        if (i == this.state.overlaySelected) {
            return {paddingLeft: 10, background: '#fff', cursor: 'pointer'}
        }
        return {paddingLeft: 10, cursor: 'pointer'};
    }

    renderOverlay() {
        let result = [];
        var list = this.props.list;
        if (list) {
            let max = list.length < 5 ? list.length : 5;
            this.max = max;
            for (let i = 0; i < max; i++) {
                let item = list[i];
                result.push(
                    <div ref={'over'+i} style={this.overlayItemStyle(i)}
                         onMouseOver={::this.hover} onMouseLeave={this.leave}
                         onClick={this.select.bind(this,item,true)}
                         key={item[this.state.listKey]}
                         data-name={'over'+i}
                        >
                        {item[this.state.listText]}
                    </div>
                );
            }
        }

        return result;
    }


    render() {
        const style = {
            position: 'absolute',
            backgroundColor: '#EEE',
            boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
            border: '1px solid #CCC',
            borderRadius: 3,
            marginLeft: 15,
            marginTop: 0,
            padding: 10,
            zIndex: 10,
            width: '94%'
        };
        return (
            <div>
                <Input ref='target' type='text'
                       placeholder={this.props.placeholder}
                       onChange={::this.toggle}
                       onFocus={::this.toggle}
                       onBlur={::this.onBlur}
                       value={this.state.text}
                       onKeyDown={::this.keyPress}/>

                <Overlay

                    show={this.state.show}
                    onHide={() => this.setState({ show: false })}
                    placement="bottom"
                    container={this}
                    target={ props => React.findDOMNode(this.refs.target)}
                    >
                    <div style={style}>
                        {this.renderOverlay()}
                    </div>
                </Overlay>
            </div>
        );
    }
}
