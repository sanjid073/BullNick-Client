import styled from 'styled-components';

export const BlackBox = styled.div`
	background-color: #080a0e;
	padding: 50px;
`;

export const Description = styled.p`
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 10px;
	line-height: 150%;
	min-width: 220px;
	/* or 15px */

	color: #ffffff;
`;

export const FooterLink = styled.span`
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 150%;

	/* identical to box height, or 21px */

	color: #ffffff;

	&:hover {
		color: #8ec640;
	}
`;

export const LinkTitle = styled.h3`
	font-family: Poppins;
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 150%;

	/* identical to box height, or 21px */

	color: #ffffff;
`;

export const Line = styled.hr`
	border: 0.5px solid #777777;
	margin-top: 20px;
	margin-bottom: 20px;
`;

export const Copyright = styled.p`
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 10px;
	line-height: 150%;

	/* identical to box height, or 15px */

	color: #ffffff;
`;

export const Social = styled.div`
	h3 {
		font-style: normal;
		font-weight: 600;
		font-size: 14px;
		line-height: 150%;

		/* identical to box height, or 21px */
		text-align: center;

		color: #ffffff;
	}
    .icons{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
    }
	.icons img {
		transform: scale(1.2);
		margin-right: 10px;
	}
`;
