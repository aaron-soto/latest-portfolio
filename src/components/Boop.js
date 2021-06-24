import { animated } from "react-spring";
import { useBoop } from "../hooks/useBoop";

export const Boop = ({ children, ...boopConfig }) => {
	const [style, trigger] = useBoop(boopConfig);

	return (
		<animated.span onMouseEnter={trigger} style={style}>
			{children}
		</animated.span>
	);
};

// export const Boop = ({ children, ...boopConfig }) => {
// 	const [style, trigger] = useBoop(boopConfig);

// 	const btnStyle = {
// 		width: "150px",
// 		height: "50px",
// 		display: "flex",
// 		justifyContent: "flex-end",
// 		alignItems: "center",
// 		margin: "20px auto",
// 		backgroundColor: "dodgerBlue",
// 		border: "none",
// 		outline: "none",
// 		borderRadius: "5px",
// 		color: "#FFFFFF",
// 		padding: 10,
// 		cursor: "pointer",
// 	};

// 	const spanStyle = {
// 		marginRight: "auto",
// 		fontSize: "16px",
// 		fontWeight: 600,
// 	};

// 	const iconStyle = {
// 		...style,
// 	};

// 	return (
// 		<button onMouseEnter={trigger} style={btnStyle}>
// 			<span style={spanStyle}>Click Me</span>
// 			<animated.span style={iconStyle}>{children}</animated.span>
// 		</button>
// 	);
// };
