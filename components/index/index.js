let $ = document;
let quoteSpan = $.querySelector("#quote-spn");
let quotePerson = $.querySelector("#quote-person");
let quotes = [

  { id: 1, quoteText: "A different language is a different vision of life.", author: "Federico Fellini" },

  { id: 2, quoteText: "The limits of my language mean the limits of my world.", author: "Ludwig Wittgenstein" },

  { id: 3, quoteText: "Language is the road map of a culture. It tells you where its people come from and where they are going.", author: "Rita Mae Brown" },

  { id: 4, quoteText: "To have another language is to possess a second soul.", author: "Charlemagne" },

  { id: 5, quoteText: "Change your language and you change your thoughts.", author: "Karl Albrecht" },

  { id: 6, quoteText: "Knowledge of languages is the doorway to wisdom.", author: "Roger Bacon" },

  { id: 7, quoteText: "Language is not a genetic gift, it is a social gift. Learning a new language is becoming a member of the club – the community of speakers of that language.", author: "Frank Smith" },

  { id: 8, quoteText: "Learn a new language and get a new soul.", author: "Czech Proverb" },

  { id: 9, quoteText: "With languages, you are at home anywhere", author: "Edward De Waal" },

  { id: 10, quoteText: "Learning never exhausts the mind.", author: "Leonardo da Vinci" },

  { id: 11, quoteText: "Communication – the human connection – is the key to personal and career success.", author: "Paul J. Meyer" },

  { id: 12, quoteText: "It is astonishing how much enjoyment one can get out of a language that one understands imperfectly.", author: "Basil Lanneau Gildersleeve" },

  { id: 13, quoteText: "Language shapes the way we think, and determines what we can think about.", author: "Benjamin Lee Whorf" },

  { id: 14, quoteText: "Learning is a treasure that will follow its owner everywhere.", author: "Chinese Proverb" },

  { id: 15, quoteText: "To learn a language is to have one more window from which to look at the world.", author: "Chinese Proverb" },

  { id: 16, quoteText: "You live a new life for every new language you speak. If you know only one language, you live only once.", author: "Czech Proverb" },

  { id: 17, quoteText: "I love commuting between languages just like I love commuting between cultures and cities.", author: "Elif Safak" },

  { id: 18, quoteText: "Learning another language is not only learning different words for the same things, but learning another way to think about things.", author: "Flora Lewis" },

  { id: 19, quoteText: "The most intimate temper of a people, its deepest soul, is above all in its language.", author: "Jules Michelet" },

  { id: 20, quoteText: "The joy of knowing a foreign language is inexpressible. I find it really difficult to express such joy in my mother tongue.", author: "Munia Khan" },

]

function randomeQuoteHandler(randomNum) {
  let quoteRandomeTxt = quotes[randomNum].quoteText;
  let quoteRandomeAuthor = quotes[randomNum].author;
  quoteSpan.innerHTML = quoteRandomeTxt;
  quotePerson.innerHTML = quoteRandomeAuthor;
}

window.addEventListener("load", () => {
  let randomNum = Math.floor(Math.random() * 20);
  randomeQuoteHandler(randomNum);
})