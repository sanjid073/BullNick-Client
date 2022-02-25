import styled from 'styled-components';

export const OrderBox = styled.div`
	width: 400px;

	background: #ffffff;
	padding: 30px;
	/* 4-10-15% */
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
	border-radius: 15px;
	@media (max-width: 768px) {
		width: 100%;
		margin-bottom: 2rem;
	}
`;

export const OrderBoxHeader = styled.h3`
	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	text-align: center;
	line-height: 23px;
	color: #171c27;
`;

export const Line = styled.hr`
	width: 320px;
	height: 0px;
	border: 1px solid #c1c1c1;
	margin: 25px auto;
`;

export const OrderInfoText = styled.h4`
	font-family: 'Roboto', sans-serif;
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 21px;
	padding-bottom: 10px;
	/* identical to box height */

	/* Color/Black 171C27 */
	color: #171c27;
`;
export const OrderInfoTextGreen = styled.h4`
	font-family: 'Roboto', sans-serif;
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 21px;

	/* identical to box height */

	/* Color/Green 8EC640 */
	color: #8ec640;
`;

export const OrderInputTitle = styled.h4`
	font-family: Poppins;
	font-style: normal;
	font-weight: 500;
	font-size: 22px;
	line-height: 150%;

	/* identical to box height, or 33px */
	letter-spacing: 0.01em;

	/* Color/Black 171C27 */
	color: #171c27;

	/* Inside auto layout */
	flex: none;
	order: 0;
	flex-grow: 0;
	margin: 0px 10px;
`;
export const OrderBoxInput = styled.input`
	width: 100%;
	height: 60px;
	text-align: center;
	background: #fafafa;
	border: 1.5px solid #c1c1c1;
	box-sizing: border-box;
	border-radius: 10px;
`;

export const OrderBoxTitleText = styled.h2`
	font-family: Poppins;
	font-style: normal;
	font-weight: 500;
	font-size: 22px;
	line-height: 150%;
	padding-top: 70px;
	/* identical to box height, or 33px */
	letter-spacing: 0.01em;

	/* Color/Black 171C27 */
	color: #171c27;

	/* Inside auto layout */
	flex: none;
	order: 0;
	flex-grow: 0;
	margin: 0px 10px;
`;

export const SuccessTitle = styled.h2`
	font-family: Bebas Neue;
	font-style: normal;
	font-weight: normal;
	font-size: 60px;
	line-height: 72px;

	/* identical to box height */
	text-align: center;
	text-transform: uppercase;

	/* Color/Black 171C27 */
	color: #171c27;
`;
export const SuccessSubTitle = styled.p`
	font-family: Poppins;
	font-style: normal;
	font-weight: 500;
	font-size: 22px;
	line-height: 33px;
	text-align: center;

	/* Color/Black 171C27 */
	color: #171c27;
`;

export const OrderConfirmImage = styled.img`
	margin: 100px auto;
	display: block;
`;

export const OrderConfirmTitle = styled.h2`
	font-family: Poppins;
	font-style: normal;
	font-weight: 600;
	font-size: 22px;
	line-height: 33px;

	/* Color/Black 171C27 */
	color: #171c27;
`;
export const OrderConfirmText = styled.p`
	font-family: Poppins;
	margin-top: 10px;
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 27px;
	color: #000000;
	span {
		font-weight: bold;
	}
`;

export const PaymentIcon = styled.div`
	background: #ffffff;
	border: 1.53304px solid #d9d9d9;
	box-sizing: border-box;
	border-radius: 9.19822px;
	width: 100px;
	height: 70px;
	padding: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
`;
