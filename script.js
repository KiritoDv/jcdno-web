function copyclip() {
	const mcip = "jcdno.co";
	navigator.clipboard
		.writeText(mcip)
		.then(() => {
			console.log("Text copyed to clipboard!");
		})
		.catch((error) => {
			console.log("Error al copiar el texto: ", error);
		});
}
