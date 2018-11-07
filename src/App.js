import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';
import Checkbox from './components/Checkbox';

import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    border: '0'
  }
};

Modal.setAppElement('#root');

class App extends Component {
  state = {
    modalIsOpen: true,
    products: [
      {
        product: 'Liability insurance',
        price: 66.35,
        id: 1,
        isChecked: true
      },
      {
        product: 'Repairs expenses insurance',
        price: 83.49,
        id: 2,
        isChecked: false
      },
      {
        product: 'Destruction insurance',
        price: 83.49,
        id: 3,
        isChecked: false
      }
    ]
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  onChange = id => {
    console.log(id);
    this.setState({
      products: this.state.products.map(product => {
        if (product.id === id) {
          return {
            ...product,
            isChecked: !product.isChecked
          };
        } else {
          return product;
        }
      })
    });
  };

  render() {
    console.log(this.state.products[0]);
    return (
      <div className="container">
        <div className="content">
          <h1> Car insurance </h1>
          <p>Take good care of your beloved car and purchase an insurance.</p>
          <Button variant="primary" onClick={this.openModal}>
            See more
          </Button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Modal"
          >
            <h2> Select the insurance</h2>
            <form>
              {this.state.products.map(product => (
                <label
                  key={product.id}
                  className={product.isChecked ? 'selected' : ''}
                >
                  <span className="product-title">{product.product}</span>
                  <span>{product.price}€</span>
                  <Checkbox
                    name={product.product}
                    type="checkbox"
                    checked={product.isChecked}
                    onChange={() => this.onChange(product.id)}
                  />
                </label>
              ))}
            </form>

            <div className="selected-items">
              <p>
                Total{' '}
                <span>
                  {this.state.products
                    .filter(product => product.isChecked)
                    .map(product => product.price)
                    .reduce((a, b) => a + b, 0)
                    .toFixed(2)}
                  €
                </span>
              </p>
            </div>
            <Button variant="secondary" onClick={this.closeModal}>
              Done
            </Button>
          </Modal>
        </div>
      </div>
    );
  }
}

export default App;
