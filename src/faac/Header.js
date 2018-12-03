import React, {Fragment} from 'react';
import styled from 'styled-components';
const HeaderContainer = styled.div`
	text-align: center;
	height: 60px;
	vertical-align: middle;
	background: ${(props) => props.theme.black};
	color: ${(props) => props.theme.white};
`;

const Header = () => {
	return (
		<HeaderContainer>
			<span>Sylviet Weeding Photo Share</span>
		</HeaderContainer>
	)
}



export default Header;