import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import styled from 'styled-components';
import Loading from './Loading';
import PhotoList from './PhotoList';

const MainColumn = styled.div`
  max-width: 1150px;
  margin: 0 auto;
`;

const defaultHistory = createBrowserHistory();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      loading: true,
      error: false
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/photos?_limit=10")
      .then(result => result.json())
      .then(photos => {
        this.setState({
          photos: photos,
          loading: false
        });
      })
      .catch(() => {
        this.setState({ loading: false, error: true });
      });
  }

  render() {
    const {
      photos,
      loading,
      error,
    } = this.state;

    if (loading) {
      return <Loading />;
    }

    if (error) {
      return (
        <MainColumn>
          Sorry, but the photos list is unavailable right now
        </MainColumn>
      );
    }

    return (
      <Router history={this.props.history || defaultHistory}>
        <MainColumn>
          <PhotoList
            photos={photos}
          />
        </MainColumn>
      </Router>
    );
  }
}

export default App;
