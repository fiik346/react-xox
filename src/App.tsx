import { useState, useEffect} from 'react'
import './App.css'
import Square from './components/square'

function App() {
	const defaultValue = [null,null,null,null,null,null,null,null,null]
	const [value, setValue] = useState(defaultValue)
	const [disable, setDisable] = useState(false)
	const [lastValue, setLastValue] = useState("")
	const handleValue = (e:any, i: number) => {
		let result = value.map((item,index) => {
		 if(index === i){
				return e
			} else {
				return item
			}
		})
		setValue(result)
		setLastValue(e)
	}

	function reset(){
		setValue(defaultValue)
		setDisable(false)
	}
		
	function check(first:number, second:number, third:number){
		if(value[first] && value[first] === value[second] && value[first] === value[third]) {
			alert(`${value[first] == "o" ? "Player 1": "Player 2"} Won the Game`)
			return true
		} else {
			return
		}
	}

	function checkResult(){
		if(check(0, 1, 2) || check(0, 3, 6,) || check(0, 4, 8) || check(1, 4, 7) || check(2, 4, 6) || check(2, 5, 8) || check(3, 4, 5) || check(6, 7, 8)) {
			setDisable(true) 
			return true
		}
	}

	useEffect(() => {
		checkResult()
	}, [value])

  return (
		<div style={{
			marginLeft: "auto",
			height: "100vh",
			marginRight: "auto",
			display: "flex",
			flexWrap: "wrap",
			alignItems: "center",
			justifyContent: "center",
			maxWidth: "320px",
		}}>
			<div style={{
				display: "grid",
				width: "100%",
				gridTemplateColumns: "1fr 1fr 1fr",
				gap: "10px"
			}}>
				{value.map((_,i)=><Square key={i} value={value[i]} lastValue={lastValue} callback={(e:string) => handleValue(e,i)} disable={disable}/>)}
			</div>

			<button onClick={()=>reset()}>Reset Game</button>
		</div>
  )
}

export default App
