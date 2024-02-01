import React from "react";

function Character({ name, img, spouse, birth, race, realm, death }) {
	// const char = character;
	return (
		<>
			<div>
				<h2>{name}</h2>
				<img src={img} alt={name} />
				<ul>
					<li>Date of Birth: {birth}</li>
					<li>Date of Death: {death}</li>
					<li>Race: {race}</li>
					<li>Realm: {realm}</li>
					<li>Spouse: {spouse}</li>
				</ul>

				{/* <h2>{list}</h2> */}
			</div>
		</>
	);
}

export default Character;
