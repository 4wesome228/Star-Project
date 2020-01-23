import React, { Component } from "react";
import SwapiServcie from "../../services/swapi-service";
import "./item-details.css";
import Spinner from "../spinner/spinner";

export default class itemDetails extends Component {
  swapiService = new SwapiServcie();

  state = {
    itemDetails: null,
    imageUrl: null,
    loading: true
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

    this.setState({ loading: true });
    if (itemId) {
      getData(itemId).then(itemDetails =>
        this.setState(loading => {
          return {
            itemDetails,
            imageUrl: getImageUrl(itemDetails),
            loading: false
          };
        })
      );
    } else return;
  };

  render() {
    const { itemDetails, imageUrl, loading } = this.state;
    if (!itemDetails || loading) return <Spinner />;
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
