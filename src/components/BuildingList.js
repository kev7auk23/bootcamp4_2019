import React from 'react';

class BuilingList extends React.Component {
	render() {
		const { data, filterText, selectedUpdate, addedBuildings } = this.props;

		const buildingList = data
			.filter(directory => {
				//removes items that do not match current filter text
				return directory.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
						|| directory.code.toLowerCase().indexOf(filterText.toLowerCase()) >= 0;
			})
			.map(directory => {
				return (
					<tr key={directory.id}
						onClick={() => selectedUpdate(directory.id)}
						>
						<td>{directory.code} </td>
						<td>{directory.name} </td>
					</tr>
				);
		});
		const addedBuildingList = addedBuildings
			.filter(directory => {
				//removes items that do not match current filter text
				return directory.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
						|| directory.code.toLowerCase().indexOf(filterText.toLowerCase()) >= 0;
			})
			.map(directory => {
				return (
					<tr key={directory.id}
						onClick={() => selectedUpdate(directory.id)}
						>
						<td>{directory.code} </td>
						<td>{directory.name} </td>
					</tr>
				)
		});
		return (
			<tbody>
				{buildingList}
				{addedBuildingList}
			</tbody>
		)
	}
}
export default BuilingList;
