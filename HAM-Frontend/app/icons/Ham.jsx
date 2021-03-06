import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/SvgIcon';

let Ham = (props) => (
    <SvgIcon {...props}>
        <path id="XMLID_7_" d="M21.103,3.85c-0.7,0-1.337,0.272-1.81,0.716l-0.001-0.001c0.449-0.474,0.725-1.114,0.725-1.819
	c0-1.462-1.185-2.647-2.647-2.647c-1.462,0-2.647,1.185-2.647,2.647c0,0.997,0.552,1.866,1.367,2.317l-1.737,1.753l-0.015-0.015
	c0,0-5.009-2.594-11.17,1.917C-1.028,11.792-0.426,16,2.973,19.814c3.31,3.714,8.242,5.756,11.63,1.813
	c5.592-6.509,2.585-12.109,2.585-12.109L17.116,9.45l1.664-1.68c0.45,0.82,1.321,1.375,2.322,1.375c1.462,0,2.647-1.185,2.647-2.647
	C23.75,5.035,22.565,3.85,21.103,3.85z M10.99,22.041c-1.09,1.096-3.995-0.024-6.487-2.503s-3.649-5.397-2.558-6.494
	c1.09-1.096,4.015,0.044,6.507,2.523S12.081,20.944,10.99,22.041z"/>
        <ellipse id="XMLID_35_" transform="matrix(-0.709 -0.7052 0.7052 -0.709 -1.585 34.7493)" cx="6.377" cy="17.702" rx="2.644" ry="1.498"/>
    </SvgIcon>
)
Ham = pure(Ham);
Ham.displayName = 'Ham';
Ham.muiName = 'SvgIcon';

export default Ham;