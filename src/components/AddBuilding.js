import React from 'react';

class AddBuilding extends React.Component {

    constructor(props) {
        super(props);

        this.onChangeCode = this.onChangeCode.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeLatitude = this.onChangeLatitude.bind(this);
        this.onChangeLongitude = this.onChangeLongitude.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            code: '',
            name: '',
            address: '',
            coordinates: {
                latitude: '',
                longitude: ''
            }
        }
    }
    onChangeCode(e) {
        this.setState({
            code: e.target.value
        });
    }
    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }
    onChangeAddress(e) {
        this.setState({
            address: e.target.value
        });
    }
    onChangeLatitude(e) {
        e.persist();
        this.setState(prevState => ({
            coordinates: {
                ...prevState.coordinates,
                latitude: e.target.value
                
            }
        }));
    }
    onChangeLongitude(e) {
        e.persist();
        this.setState(prevState => ({
            coordinates: {
                ...prevState.coordinates,
                longitude: e.target.value
            }
        }));
    }
    onSubmit(e) {
        e.preventDefault();
        console.log(this.state.coordinates.latitude);
        const newBuilding = {
            code: this.state.code,
            name: this.state.name,
            address: this.state.address,
            coordinates: {
                latitude: this.state.coordinates.latitude,
                longitude: this.state.coordinates.longitude   
            },
            id: 149
        };
        this.props.addedBuildingsUpdate(newBuilding);

        this.setState({
            code: '',
            name: '',
            address: '',
            coordinates: {
                latitude: '',
                longitude: ''
            }
        })
    }
    
    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Add New Building Location</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Code: </label>
                        <input  type ="text"
                                className="form-control"
                                value={this.state.code}
                                onChange={this.onChangeCode}
                                />
                    </div>
                    <div className="form-group">
                        <label>Name: </label>
                        <input  type ="text"
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Address: </label>
                        <input  type ="text"
                                className="form-control"
                                value={this.state.address}
                                onChange={this.onChangeAddress}
                                />
                    </div>
                    <div className="form-group">
                        <label>Latitude: </label>
                        <input  type ="text"
                                className="form-control"
                                value={this.state.coordinates.latitude}
                                onChange={this.onChangeLatitude}
                                />
                    </div>
                    <div className="form-group">
                        <label>Longitude: </label>
                        <input  type ="text"
                                className="form-control"
                                value={this.state.coordinates.longitude}
                                onChange={this.onChangeLongitude}
                                />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Building" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}

export default AddBuilding;