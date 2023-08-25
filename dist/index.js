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
import { renderToString } from "react-dom/server";
import Image from "react-native-remote-svg";
import { Piece as PieceReact } from "avataaars";
export var Avatar = React.memo(function (props) {
    var size = props.size;
    var svgString = renderToString(React.createElement("div", { style: { width: 100, height: 100, backgroundColor: 'pink' } }));
    return (React.createElement(Image, { source: {
            uri: "data:image/svg+xml;utf8,".concat(encodeURIComponent(svgString)),
        }, style: {
            width: size,
            height: size,
        } }));
});
export var Piece = React.memo(function (props) {
    var pieceSize = props.pieceSize;
    var svgString = renderToString(React.createElement(PieceReact, __assign({}, props)));
    return (React.createElement(Image, { source: {
            uri: "data:image/svg+xml;utf8,".concat(encodeURIComponent(svgString)),
        }, style: {
            width: Number(pieceSize),
            height: Number(pieceSize),
        } }));
});
