/**
 * Created by roderickWang on 8/13/15.
 */
import React, { Component, PropTypes } from 'react';
import PublicStyles from '../decorators/PublicStyles'
import {Button,Input,Grid,Row,Col,Modal,Glyphicon} from 'react-bootstrap';
import extend from 'extend'

export default class SideNav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            navMenu: props.navMenu.navMenu,
            selectIndex: null,
            hoverIndex: null
        }
    }

    static proTypes = {
        navMenu: PropTypes.array
    };

    render() {
        const list = this.state.navMenu;
        let styles = this.getStyles();
        return (

            <ol style={{padding:0}}>
                {
                    list.map((menu1l, index)=> {
                            if (menu1l.children == null) {
                                return (
                                    <a style={{textDecoration:'none'}} href={menu1l.path}>
                                        <li style={extend(false,this.selectStyle(index),styles.noStyleLi)}
                                            key={index}
                                            onClick={this.selectNav.bind(this,index)}
                                            onMouseOver={this.hover.bind(this,index)}
                                            onMouseOut={this.leave.bind(this,index)}
                                            >

                                            {menu1l.text}

                                        </li>
                                    </a>
                                )
                            } else {
                                return (
                                    <div key={index}>
                                        <li style={styles.noStyleLi} key={index}
                                            onClick={this.changeNavHide.bind(this,index)}
                                            >
                                            {menu1l.text}
                                            <span style={{float:'right',marginTop:'12px'}}>
                                                <Glyphicon bsSize='xsmall'
                                                           glyph={menu1l.hide?'chevron-right':'chevron-down'}

                                                    />
                                            </span>
                                        </li>
                                        <ol style={{padding:0,display:menu1l.hide?'none':'block'}}>
                                            {
                                                menu1l.children.map((menu2l, index2)=> {
                                                    return (
                                                        <a style={{textDecoration:'none'}} href={menu2l.path}>
                                                            <li
                                                                style={extend(false,this.selectStyle(index+','+index2),styles.noStyleLi,{paddingLeft:'35px'})}
                                                                key={index+','+index2}
                                                                onClick={this.selectNav.bind(this,index+','+index2)}
                                                                onMouseOver={this.hover.bind(this,index+','+index2)}
                                                                onMouseOut={this.leave.bind(this,index+','+index2)}
                                                                >
                                                                {menu2l.text}

                                                            </li>
                                                        </a>
                                                    )
                                                })
                                            }
                                        </ol>
                                    </div>
                                )
                            }
                        }
                    )
                }
            </ol>
        )
    }

    selectStyle(path) {
        if (path == this.state.selectIndex) {
            return {
                background: '#3565AD',
                color: '#fff'
            }
        }

        if (path == this.state.hoverIndex) {
            return {
                background: '#BCE8F1',
                color: '#000'
            }
        }

        return {
            background: '',
            color: '#000'
        }
    }

    selectNav(index) {
        this.setState({
            selectIndex: index
        })
    }

    changeNavHide(index) {
        let newNav = this.state.navMenu;
        newNav[index].hide = !this.state.navMenu[index].hide;
        this.setState({
            navMenu: newNav
        });
    }

    hover(index) {
        this.setState({
            hoverIndex: index
        });
    }

    leave() {
        this.setState({
            hoverIndex: null
        });
    }


    getStyles() {
        let styles = {
            noStyleLi: {
                listStyle: 'none',
                cursor: 'pointer',
                borderBottom: '1px solid #ebebeb',
                height: '42px',
                lineHeight: '42px',
                paddingLeft: '28px',
                width: '180px'
            }
        }
        return styles;
    }
}
