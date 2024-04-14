/**
 * @returns{Promise<Object>} quote information
 */
const fetchQuote = async () =>{
    const res = await fetch("https://api.breakingbadquotes.xyz/v1/quotes")
    //console.log(res);
    const data = await res.json();
    //console.log(data[0]);
    return data;
}


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingBadApp = async (element) => {
    console.log("Breaking Bad App");

    document.querySelector('#app-title').innerHTML = "Breaking Bad App"

    element.innerHTML = "Loading...";

    //await fetchQuote();
    const quoteLabel = document.createElement('blockquote')
    const authLabel = document.createElement('h3')
    const nextQuoteButton = document.createElement('button');
    
    nextQuoteButton.innerHTML = 'Next Quote'

    const renderQuote = async (data) =>  {
        data = await fetchQuote();
        quoteLabel.innerHTML = data[0].quote;
        authLabel.innerHTML = data[0].author;
        element.replaceChildren(quoteLabel, authLabel, nextQuoteButton);
    }


    fetchQuote()
        .then(renderQuote);

    nextQuoteButton.addEventListener('click',(event) =>{
        console.log("presiono boton");
        element.innerHTML = "Loading..."
        fetchQuote()
        .then(renderQuote);
    })
}