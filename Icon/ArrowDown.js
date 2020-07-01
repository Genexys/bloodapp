import React from 'react';
import Svg, {
    Path,
} from 'react-native-svg';


const ArrowUp = ({width, height}) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 14.92 14.92">
        <Path id="arrow-next" d="M0,10.05H10.05V0" transform="translate(0 7.46) rotate(-45)" fill="none" stroke="#014f80" stroke-width="1"/>
    </Svg>
);

export default ArrowUp;
