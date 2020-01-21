import React, { Component } from "react";
import SwapiServcie from "../../services/swapi-service";
import "./item-details.css";

export default class itemDetails extends Component {
  swapiService = new SwapiServcie();

  state = {
    itemDetails: null,
    imageUrl: null
  };

  componentDidMount() {
    this.updateItemDetails(this.props.itemId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItemDetails(this.props.itemId);
    }
  }

  updateItemDetails = itemId => {
    const { getData, getImageUrl } = this.props;

    if (itemId) {
      getData(itemId).then(itemDetails =>
        this.setState((state, props) => {
          console.log(props);
          return {
            itemDetails,
            imageUrl: getImageUrl(itemDetails)
          };
        })
      );
    } else return;
  };

  render() {
    const { itemDetails, imageUrl } = this.state;
    if (!itemDetails) return <span>Select item from a list !</span>;

    const { name } = itemDetails;

    return (
      <div className="person-details card">
        <div className="image-container">
          <img className="person-image" src={imageUrl} alt="item" />
        </div>
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {React.Children.map(this.props.children, child => {
              return React.cloneElement(child, { itemDetails });
            })}
          </ul>
        </div>
      </div>
    );
  }
}
