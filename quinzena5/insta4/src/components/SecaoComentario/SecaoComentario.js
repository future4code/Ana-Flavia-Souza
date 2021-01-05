import React, {Component} from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	state = {
		textpaulinha: "",
		textleticia: "",
		textagda: ""
	}
	mudapaulinha = (event) => {
    this.setState({ textpaulinha: event.target.value });
  };
	mudaleticia = (event) => {
    this.setState({ textleticia: event.target.value });
  };
	mudaagda = (event) => {
    this.setState({ textagda: event.target.value });
  };
	clicouBotao = () => {
    console.log(this.state);
    this.setState({
			textpaulinha: "",
			textleticia: "",
			textagda: ""
    });
  };

	onChangeComentario() {

	}

	render() {
		return <div className={'comment-container'}>
			<input
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={this.state.textpaulinha}
				onChange={this.mudapaulinha}/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</div>
	}
}
