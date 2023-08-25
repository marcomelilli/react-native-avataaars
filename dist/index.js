import React from "react";
import { View } from "react-native";
export var Avatar = React.memo(function (props) {
    var size = props.size;
    return (React.createElement(View, { style: { width: 100, height: 100, backgroundColor: "yellow" } }));
});
