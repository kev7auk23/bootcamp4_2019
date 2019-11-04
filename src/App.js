import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';
import RemoveBuilding from './components/RemoveBuilding';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.removedBuildingsUpdate = this.removedBuildingsUpdate.bind(this);

    this.state = {
      filterText: '',
      selectedBuilding: 0,
      addedBuildings: [],
      removedBuildings: [],
      numberOfAddedBuildings: 0
    };
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      filterText: value
    });
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({
      selectedBuilding: id
    });
  }

  addedBuildingsUpdate(newBuilding) {
    newBuilding.id = newBuilding.id + this.state.numberOfAddedBuildings;
    this.setState({
      numberOfAddedBuildings: this.state.numberOfAddedBuildings + 1
    });
    this.state.addedBuildings.push(newBuilding);
  }

  removedBuildingsUpdate() {
    this.state.removedBuildings.push(this.state.selectedBuilding);
    console.log(this.state.removedBuildings);
  }
  render() {
    
    return (
      <div className="container-fluid">
        <div style={{marginTop: 20}} >
          <h1 className="text-center">UF Directory App</h1>
        </div>

        <Search filterText={this.state.filterText}
                filterUpdate={this.filterUpdate.bind(this)}
                />
        <main>
          <div className="row">
            <div className="col">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <td>
                        <b>Code</b>
                      </td>
                      <td><b>Building</b></td>
                    </tr>
                  </thead>
                  <BuildingList
                    data={this.props.data}
                    filterText={this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                    addedBuildings={this.state.addedBuildings}
                    removedBuildings={this.state.removedBuildings}
                  />
                </table>
              </div>
            </div>
            <div className="col">
              <div  className="alert-primary container-fluid"
                    style={{paddingTop: 20, paddingBottom: 6}}>
                <ViewBuilding
                  selectedBuilding={this.state.selectedBuilding}
                  data={this.props.data}
                  addedBuildings={this.state.addedBuildings}
                  />
                <RemoveBuilding
                  selectedBuilding={this.state.selectedBuilding}
                  selectedUpdate={this.selectedUpdate.bind(this)}
                  removedBuildings={this.state.removedBuildings}
                  removedBuildingsUpdate={this.removedBuildingsUpdate}
                  />
              </div>
              <AddBuilding
                addedBuildingsUpdate={this.addedBuildingsUpdate.bind(this)}
              />
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
