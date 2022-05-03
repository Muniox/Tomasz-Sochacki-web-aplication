const url = "http://google.com";

url.startsWith("http"); //true
url.startsWith("HTTP"); //false

//najlepsze zastosowanie

url.toLowerCase().startsWith("http"); //true

//przyjmuje jako 2 parametr index znaku od którego ma rozpocząć poszukiwanie

url.startsWith("google"); //true
url.startsWith("google", 7); //true

//alternatywą jest zastosowanie wyrażeń regularnych

/^http/i.test(url); //true

//metoda ends with jest bardzo podobna, przyjmuje 2 parametr, który określa indeks znaku, od którego
//należy zignoworwwać dalszą część ciągu

url.endsWith(".", 14); //true
url[14]; //"c"

url.endsWith("google", 13); //true
url[13]; //"."

// metody nie modyfikują ciągu
