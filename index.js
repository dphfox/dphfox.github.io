let discordCopyLink = document.querySelector("#discord-copy-link");

discordCopyLink.addEventListener("click", () => {
	navigator.clipboard.writeText("Elttob#4603");
	discordCopyLink.classList.add("copied");
	setTimeout(() => {
		discordCopyLink.classList.remove("copied");
	}, 100);
});