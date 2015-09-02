/**
 * Created by roderickWang on 8/13/15.
 */
import React, { Component, PropTypes } from 'react';
import publicStyle from '../decorators/PublicStyles.js'
import extend from 'extend'
import { bindActionCreators } from 'redux';
import {Table,Pagination,Input} from 'react-bootstrap';

@publicStyle
export default
class DataGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: 1,
            pageSize: props.pageSizes[0]
        };
        this.tableWidth = this.caculTabWidth(props.titles);
        this.styles = this.mergeStyle();
    }

    static proTypes = {
        titles: PropTypes.array.isRequired,
        hasPager: PropTypes.bool,
        maxButtons: PropTypes.num,
        totalCount: PropTypes.num,
        pageSizes: PropTypes.array,
        onSelect: PropTypes.func
    };

    render() {
        const styles = this.styles;
        const {titles} = this.props;
        return (
            <div style={{overflow:'auto'}} ref='container'>
                <Table striped bordered condensed hover style={{width:this.tableWidth}}>
                    <thead style={styles.thead}>
                    <tr>
                        {titles.map(title=><th style={{width:title.width, textAlign: 'center'}}>{title.text}</th>)}
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.children}
                    </tbody>
                </Table>
                {this.getPager()}
            </div>
        );
    }

    getPager() {
        const {maxButtons,onSelect,totalCount,pageSizes,hasPager} =this.props;
        const styles = this.styles;
        let pageTotal = this.getTotalPage();
        let {pageSize} = this.state;
        if (hasPager && pageTotal != 0) {
            return (
                <div style={{paddingTop:0,paddingBottom:0,textAlign:'right'}}>
                    <Pagination
                        style={{display:pageTotal==0?'none':'inline-block',height:'3px'}}
                        prev
                        next
                        first
                        last
                        ellipsis
                        items={pageTotal}
                        maxButtons={ pageTotal> maxButtons ? maxButtons:pageTotal}
                        activePage={this.state.activePage}
                        onSelect={this.select.bind(this)}/>
                    <span style={styles.span}>{`共${totalCount}条记录`}</span>
                    <span style={styles.span}>每页</span>

                    <div style={{display:'inline-block',width:'60px',marginLeft:'2px',marginRight:'2px'}}>
                        <Input type='select' value={this.state.pageSize}
                               onChange={this.selectPageSize.bind(this)}>
                            {pageSizes.map(page=>
                                    <option value={page}>{page}</option>
                            )}
                        </Input>
                    </div>
                    <span>条</span>
                    <span style={styles.span}>{`共${pageTotal}页`}</span>
                </div>
            );
        }
    }

    select(event, select) {
        const {onSelect} =this.props;
        this.setState({
            activePage: select.eventKey
        });
        onSelect({
            pageIndex:select.eventKey,
            pageSize:this.state.pageSize
        })
    }

    getTotalPage() {
        const {totalCount} = this.props;
        let {pageSize}=this.state;
        return Math.ceil(totalCount / pageSize);
    }

    selectPageSize(event) {
        const {onSelect} =this.props;
        let pageSize = parseInt(event.target.value);
        this.setState({
            pageSize: pageSize
        });
        onSelect({
            pageIndex:this.state.activePage,
            pageSize:pageSize
        })
    }

    caculTabWidth(titles) {
        return titles.reduce(function (prev, current) {
            prev += parseFloat(/(\d*)/.exec(current.width)[0]);
            return prev;
        }, 0)
    }
}

DataGrid.defaultProps = {
    hasPager: false,
    pageSizes: [10, 20, 50],
    maxButtons: 5
}