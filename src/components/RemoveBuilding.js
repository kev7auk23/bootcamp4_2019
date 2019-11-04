import React from 'react';

class RemoveBuilding extends React.Component {
    
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        if (window.confirm("Are you sure you want to remove listing?")) {
            this.props.removedBuildingsUpdate();
            this.props.selectedUpdate(0);
        }
    }
    
    render() {
        const { selectedBuilding } = this.props;
        var removeButton = '';
        if (selectedBuilding > 0)
            removeButton = (
                <div className="form-group">
                        <input  type="submit"
                                value="Remove Building"
                                className="btn btn-primary"
                                onClick={this.onClick}
                                />
                </div>
            )
        return (
            <div>
                {removeButton}
            </div>
        )
    }
}

export default RemoveBuilding;