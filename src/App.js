import React, { Component } from 'react';
import './App.css';
import Modal from './components/Modal';
import Button from './components/Button';
import Checkbox from './components/Checkbox';

class App extends Component {
  state = {
    show: false,
    products: [
      {
        product: 'Liability insurance',
        price: 66.35,
        id: 1,
        isChecked: false
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

  onChange = id => {
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

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div className="container">
        <div className="content">
          <h1> Car insurance </h1>
          <p>Take good care of your beloved car and purchase an insurance.</p>
          <Modal show={this.state.show} handleClose={this.hideModal}>
            <h2> Select the insurance</h2>
            <form>
              {this.state.products.map(product => (
                <label
                  key={product.id}
                  className={product.isChecked ? 'selected' : ''}
                >
                  <span className="product-title">{product.product}</span>{' '}
                  <span>{product.price}€</span>
                  <Checkbox
                    name="isChecked"
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
          </Modal>

          <Button
            variant="primary"
            onClick={() => {
              this.showModal();
            }}
          >
            See more
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
