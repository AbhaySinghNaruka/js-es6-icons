/*
- Milestone 1 -
	Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.
- Milestone 2 -
	Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
- Milestone 3 -
	Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
*/




const arrIcons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

const eleIconsContainer = document.querySelector('#icons-container');
const eleSelect = document.querySelector('#type-filter');


// stampare le card delle icone
populatedSelect(arrIcons, eleSelect);
renderIcons(arrIcons, eleIconsContainer);
eleSelect.addEventListener('change', () => renderIcons(arrIcons.filter(objIcon => )))

// FUNCTIONS
function renderIcons(arrData, eleContainer) { // arrData fa riferimento a renderIcons che a sua volta fa riferimento a arrIcons 
	arrData.forEach(objIcon => eleContainer.innerHTML += generateCard(objIcon));

	/* for (let i =0; i < arrData.length; i++) {
		const objIcon = arrData[i];
		eleIconsContainer.innerHTML += generateCard(objIcon);
	} 
			usare il for così è uguale al forEach scritto sopra
	*/
}

function generateCard(objData) {
	return `
		<div class="box">
			<i class=${objData.family} ${objData.prefix}${obj.Data.name} style="color:blue"></i>
			<div class="title">${objData.name}</div>
		</div>
	`;
} 
/*
posso anche scrivere ${objData.family + objData.prefix + obj.Data.name} e per mettere uno spazio tra family-prefix-name faccio:
" ${objData.family + ' ' + objData.prefix + ' ' + obj.Data.name} ""
*/


function populatedSelect(arrData, eleSelect) {
	// estrapolare i type dall'array
	const arrTypes = [];
	arrData.forEach(objIcon => {
		if (!arrTypes.includes(objIcon.type)) {
			arrTypes.push(objIcon.type);
		}
	});
	console.log(arrTypes);


	// aggiungere le options per ciasun tipo
	arrTypes.forEach(type => eleSelect.innerHTML += `<option value="${type}">${type}</option>`)
	
}