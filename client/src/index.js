import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles/main.scss'
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './redux/store.js'
import store from './redux/store.js'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
	<React.StrictMode>
		<ReduxProvider store={store}>
			<PersistGate persistor={persistor} loading={null}>
				<App />
			</PersistGate>
		</ReduxProvider>
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
