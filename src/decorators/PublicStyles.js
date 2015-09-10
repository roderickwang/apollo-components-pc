import Extend from '../lib/extend'

export default DecoratedComponent => {
    DecoratedComponent.prototype.publicStyles = function () {
        let styles = {
            fontBolder: {
                fontWight: 'bolder',
                textAlign: 'right'

            },
            formLabel: {
                textAlign: 'right'
            },
            th: {
                width: '10%',
                textAlign: 'center',
                backgroundColor: '#eee'
            },
            thead: {
                backgroundColor: '#e4e4e4'
            },
            td: {
                border: 'none',
                textAlign: 'center',
                fontSize: '14px'
            },
            tr: {
                border: '1px rgb(228, 228, 228) solid'
            },
            createA: {
                cursor: 'pointer'
            },
            closeBtn: {
                float: 'right',
                marginTop: '-5px'
            },
            span: {
                paddingLeft: '7px',
            },
            row: {
                height: '50px',
                lineHeight: '37px'
            },
            textCenter: {
                textAlign: 'center'
            },
            shop2Title: {
                display: 'inline-block',
                marginLeft: '30px',
                marginTop: '5px',
                fontWight: '100',
                color: '#337ab7',
                fontSize: '14px'
            },
            a: {
                cursor: 'pointer'
            },
            addA: {
                paddingLeft: 10,
                cursor: 'pointer'
            },
            cusDate: {
                fontSize: '11px',
                borderRadius: '10px',
                backgroundColor: '#CDE0FC',
                textAlign: 'center',
                display: 'inline-block',
                marginLeft: '15px',
                paddingLeft: '5px',
                paddingRight: '5px',
                position: 'relative',
                marginBottom: 5,
                width: '100px',
                padding: 5,
                lineHeight: '14px'
            },
            delCusDate: {
                position: 'absolute',
                border: 'solid 2px',
                float: 'right',
                borderRadius: 10,
                top: -5,
                right: -5,
                cursor: 'pointer',
                backgroundColor: 'white'
            },
            red: {
                color: 'red'
            },
            col: {
                marginTop: 10
            },
            pager: {
                float: 'right'
            }
        };
        return styles;
    }

    DecoratedComponent.prototype.mergeStyle = function () {
        let styles = this.publicStyles();
        var args = Array.prototype.slice.call(arguments, 0);
        var base = styles;
        for (var i = 0; i < args.length; i++) {
            if (args[i]) {
                Object.keys(args[i]).forEach((key) => {
                    base[key] = args[i][key];
                });
            }
        }

        return base;
    }
}