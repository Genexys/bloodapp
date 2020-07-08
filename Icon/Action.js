import React from 'react';
import Svg, {
    Path,
    G,
    ClipPath,
    Rect,
    Defs
} from 'react-native-svg';


const Action = ({width, height}) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 19 26.501">
        <Defs>
            <ClipPath id="clip-path">
                <Rect width="19" height="26.501" fill="none"/>
            </ClipPath>
        </Defs>
        <G id="Action_1" data-name="Action 1" clip-path="url(#clip-path)">
            <Path id="action" d="M19,26.5H0V7.5H7v1H1v17H18V8.5H12v-1h7v19ZM10,17H9V1.886L5.714,5.178,5,4.469,9.469,0,14,4.469l-.714.709L10,1.94V17Z" transform="translate(0 0.001)" fill="#ffffff"/>
        </G>
    </Svg>

);

export default Action;
