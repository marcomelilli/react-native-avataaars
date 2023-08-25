import React from "react";
import { View } from "react-native";
// import { PixelRatio } from "react-native";
// import * as ReactDOM from 'react-dom';
// import Image from "react-native-remote-svg";
// import { Avatar as AvatarReact, Piece as PieceReact } from "avataaars";

export interface Props {
  avatarStyle: string;
  size: number;
  topType?: string;
  accessoriesType?: string;
  hairColor?: string;
  facialHairType?: string;
  facialHairColor?: string;
  clotheType?: string;
  clotheColor?: string;
  graphicType?: string;
  eyeType?: string;
  eyebrowType?: string;
  mouthType?: string;
  skinColor?: string;
  pieceType?: string;
  pieceSize?: string;
}

export const Avatar = React.memo((props: Props) => {
  const { size } = props;
  return (
    <View style={{ width: 100, height: 100, backgroundColor: "yellow" }} />
    // <Image
    // 	source={{
    // 		uri: `data:image/svg+xml;utf8,${ReactDOMServer.renderToString(
    // 			<AvatarReact
    // 				style={{
    // 					width: PixelRatio.getPixelSizeForLayoutSize(
    // 						size
    // 					),
    // 					height: PixelRatio.getPixelSizeForLayoutSize(
    // 						size
    // 					)
    // 				}}
    // 				{...props}
    // 			/>
    // 		)}`
    // 	}}
    // 	style={{
    // 		width: size,
    // 		height: size
    // 	}}
    // />
  );
});

// export const Piece = React.memo((props: Props) => {
// 	const { pieceSize } = props;
// 	return (
// 		<Image
// 			source={{
// 				uri: `data:image/svg+xml;utf8,${ReactDOMServer.renderToString(
// 					<PieceReact {...props} />
// 				)}`
// 			}}
// 			style={{
// 				width: Number(pieceSize),
// 				height: Number(pieceSize)
// 			}}
// 		/>
// 	);
// });
