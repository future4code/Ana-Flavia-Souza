import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/40/50'}
          fotoPost={'https://picsum.photos/240/150'}
        />
        <Post
          nomeUsuario={'leticia'}
          fotoUsuario={'https://picsum.photos/30/50'}
          fotoPost={'https://picsum.photos/230/150'}
        />
        <Post
          nomeUsuario={'agda'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/250/150'}
        />
      </div>
    );
  }
}

export default App;
