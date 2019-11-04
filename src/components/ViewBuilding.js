import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		const { data, selectedBuilding } = this.props;
		const buildingSelected = data
			.filter(directory => {
				//removes items that do not match current filter text
				return directory.id === selectedBuilding;
		});
		console.log(buildingSelected);
		var codeInfo, nameInfo, addressInfo, latInfo, longInfo, displayInfo = '';
		if (buildingSelected.length > 0)
		{
			codeInfo = buildingSelected[0].code;
			nameInfo = buildingSelected[0].name;
			if (buildingSelected[0].address != null)
			{
				addressInfo = buildingSelected[0].address;
			}
			if (buildingSelected[0].coordinates != null)
			{
				latInfo = buildingSelected[0].coordinates.latitude;
				longInfo = buildingSelected[0].coordinates.longitude;
			}
			console.log(codeInfo);
			displayInfo = (
				<ul>
						<li>Code:{' '}{codeInfo}</li>
						<li>Name:{' '}{nameInfo}</li>
						<li>Address:{' '}{addressInfo}</li>
						<li>Lat:{' '}{latInfo}</li>
						<li>Long:{' '}{longInfo}</li>
				</ul>
			);
		}
		return (
			<div>
				<p>
					<i>Click on a name to view more information</i>
				</p>
				<div>
					{displayInfo}
				</div>
			</div>
		);
	}
}
export default ViewBuilding;
