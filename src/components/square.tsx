
export default function Square({value,lastValue,callback,disable}:{value:string | null, lastValue: any, callback:any,disable: boolean}){
	const handleValue = () => {
		if(value == null && !disable){
			lastValue === "o" ? callback("x") : callback("o")
		}
	}
	return (
		<div style={{
			border: "2px solid #000",
			borderRadius: "7px",
			color: "red",
			height: "100px",
			width: "100px",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			fontSize: "32px",
			textTransform: "uppercase",
			fontWeight: "bold",
			cursor: value || disable ? "not-allowed" : "pointer"
		}}
			onClick={()=>handleValue()}
		>{value}</div>
	)
}
