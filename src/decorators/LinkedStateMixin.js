import getDisplayName from '../lib/getDisplayName';
import {React,Component} from 'react';
import ReactLink from '../lib/ReactLink'
import ReactStateSetters from '../lib/ReactStateSetters'

export default DecoratedComponent => {
    DecoratedComponent.prototype.linkState = function (key) {
        return new ReactLink(
            this.state[key],
            ReactStateSetters.createStateKeySetter(this, key)
        );
    }

    /**
     * Notify store via action register by registerAction function.
     * @param path The deep path of store. example : favor.discount.ratio
     * @param value The change value
     */
    DecoratedComponent.prototype.notifyDeepValue = function (path, value) {
        let Pathes = path.split('.')

    }


}