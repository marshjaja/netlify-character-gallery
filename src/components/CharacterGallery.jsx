import React from "react";
import characterData from "../data/characterData.json";
import Character from "./Character";
// This component should show characters defined in src/data/characterData.json
// It should render each character as a Character component

function CharacterGallery() {
	console.log(characterData);
	return (
		<div>
			{characterData.map((character) => (
				<Character
					key={character.id}
					name={character.name}
					img={character.imgUrl}
					imgAlt={character.name}
					spouse={character.spouse}
					birth={character.birth}
					death={character.death}
					race={character.race}
					realm={character.realm}
				/>
			))}
		</div>
	);
}

export default CharacterGallery;
