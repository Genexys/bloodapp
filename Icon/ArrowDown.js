import React from 'react';
import Svg, {
    Path,
G
} from 'react-native-svg';


const ArrowDown = ({width, height}) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 9.743 11.591">
        <G transform="translate(9.372 -6.188) rotate(90)">
            <Path d="M0,0,5,4.5,0,9" transform="translate(12.031)" fill="none" stroke="#3b84be" stroke-miterlimit="10" stroke-width="1"/>
            <Path d="M0,1.5H10.844" transform="translate(6.188 3)" fill="none" stroke="#3b84be" stroke-miterlimit="10" stroke-width="1"/>
        </G>
    </Svg>
);

export default ArrowDown;
