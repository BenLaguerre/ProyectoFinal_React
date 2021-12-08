import React from 'react';


class listaLechonesGustados extends React.Component {
	//Realmente era lo ue había en Angular (Solo he añadido lo del estado)
	constructor(props) {
		super(props);
		this.state = {
			response: '',
		    arrayLikes: [],
			currentBook: null
		};
	}

    // --------------------
	// SERVICIOS CON AXIOS
	// --------------------

	//Como queremos que se carguen al arrancar el componente, usamos este método
	componentDidMount() {
		axios.get(`http://localhost:8000/`).then((res) => {
			const books = res.data;
			this.setState({ books });
		});
	}