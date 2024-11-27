let quotesArray = [
	{
		quote: "“Be yourself; everyone else is already taken.”",
		auther: "― Oscar Wilde",
	},
	{
		quote: "“So many books, so little time.”",
		auther: "― Frank Zappa",
	},
	{
		quote:
			"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
		auther: "― Albert Einstein",
	},
	{
		quote: "“A room without books is like a body without a soul.”",
		auther: "― Marcus Tullius Cicero",
	},
	{
		quote: "“You only live once, but if you do it right, once is enough.”",
		auther: "― Mae West",
	},
	{
		quote: "“Be the change that you wish to see in the world.”",
		auther: "― Mahatma Gandhi",
	},
	{
		quote: "“If you tell the truth, you don't have to remember anything.”",
		auther: "― Mark Twain",
	},
	{
		quote: "“A friend is someone who knows all about you and still loves you.”",
		auther: "― Elbert Hubbard",
	},
];

function getRendomIndex() {
	randomIndex = Math.floor(Math.random() * quotesArray.length);
	return randomIndex;
}
function displayQuote() {
	getRendomIndex();
	document.getElementById("quoteOutput").innerText =
		quotesArray[randomIndex].quote;
	document.getElementById("autherOutput").innerText =
		quotesArray[randomIndex].auther;
	randomIndex = Math.floor(Math.random() * quotesArray.length);
}
