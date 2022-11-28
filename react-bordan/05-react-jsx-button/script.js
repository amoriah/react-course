const App = (props) => {
	const [buttonText, setButtonText] = React.useState(props.buttonText);
	const [className, setClassName] = React.useState('app');

	const onButtonClick = () => {
		setButtonText('Hello from React');
		setClassName('green-btn');
	}

	return (
		<div className="app">
			<button className={className} onClick={onButtonClick}>{buttonText}</button>
		</div>
	)
}

const container = document.getElementById('app')
const root = ReactDOM.createRoot(container);
root.render(<App buttonText="Click me" />);
