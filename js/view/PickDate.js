import React from 'react';
import {requireNativeComponent, View} from 'react-native';


let iface = {
    name: 'PickDateView',
    propTypes: {
        setYear: React.PropTypes.string,
        setMonth: React.PropTypes.string,
        //回调
        onChange: React.PropTypes.func,
        ...View.propTypes  //支持View组件的所有属性
    }
}

var RCTPickDateView = requireNativeComponent('PickDateView', iface);


export default RCTPickDateView;