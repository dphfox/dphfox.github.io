let discordCopyLink = document.querySelector("#discord-copy-link");

discordCopyLink.addEventListener("click", () => {
	navigator.clipboard.writeText("Elttob#0001");
	discordCopyLink.classList.add("copied");
	setTimeout(() => {
		discordCopyLink.classList.remove("copied");
	}, 100);
});
