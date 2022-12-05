const inputEl = document.querySelector('[data-length="6"]');
const numberOfCharacters = +inputEl.dataset.length;

inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
	const currentNumberCharacters = event.currentTarget.value.length;
	const isEmpty = event.currentTarget.value == 0;

	if (isEmpty || currentNumberCharacters !== numberOfCharacters) {
		inputEl.classList.add("invalid");
	} else {
		inputEl.classList.add("valid");
	}
}
