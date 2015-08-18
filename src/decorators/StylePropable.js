import getDisplayName from '../lib/getDisplayName';
import {React,Component} from 'react';
import AutoPrefix from '../lib/auto-prefix';
import Extend from '../lib/extend';

export default DecoratedComponent => class StylePropableDecorator extends Component {
    static displayName = `StylePropable(${getDisplayName(DecoratedComponent)})`;
    static DecoratedComponent = DecoratedComponent;

    propTypes:{
        style: React.PropTypes.object
        }


    mergeStyle() {
        var args = Array.prototype.slice.call(arguments, 0);
        var base = args[0];
        for (var i = 1; i < args.length; i++) {
            if (args[i]) {
                base = Extend(base, args[i]);
            }
        }

        return base;
    }


    /**
     * loops through all properties defined in the first argument, so overrides
     * of undefined properties will not take place.
     */
    mergeAndPrefix() {
        var mergedStyles = this.mergeStyles.apply(this, arguments);
        return AutoPrefix.all(mergedStyles);
    }
}