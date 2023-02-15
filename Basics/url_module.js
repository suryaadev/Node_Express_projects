import url from "url";
//

const myURL = new URL("https://tntad.rohitsurya.com");
myURL.pathname = "/a/b/x";
myURL.search = "?dd=AAA";
myURL.hash = "#lasun";


console.log(myURL)