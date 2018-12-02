import React, {Fragment} from 'react';
import styled from 'styled-components';

const HeaderStructure = () => {
	return (
		<Fragment>
			<span>Sylviet Weeding Photo Share</span>
		</Fragment>
	)
}

const Header = styled(HeaderStructure)`
	text-align: center;
	height: 100px;
	background: ${(props) => props.theme.black};
	color: ${(props) => props.theme.white};
`;

export default Header;