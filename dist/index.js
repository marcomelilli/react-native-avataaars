var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from "react";
import { View } from "react-native";
import ReactDOMServer from "react-dom/server";
import Image from "react-native-remote-svg";
import { Piece as PieceReact } from "avataaars";
export var Avatar = React.memo(function (props) {
    var size = props.size;
    return (React.createElement(View, { style: { width: 100, height: 100, backgroundColor: 'yellow' } }));
});
export var Piece = React.memo(function (props) {
    var pieceSize = props.pieceSize;
    return (React.createElement(Image, { source: {
            uri: "data:image/svg+xml;utf8,".concat(ReactDOMServer.renderToString(React.createElement(PieceReact, __assign({}, props))))
        }, style: {
            width: Number(pieceSize),
            height: Number(pieceSize)
        } }));
});
