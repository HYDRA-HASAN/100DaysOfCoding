const str = "Hello, World!";
const vowels = ["a", "e", "i", "o", "u"];

for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    
    if (vowels.includes(char)) {
        console.log(`Found the first vowel: ${char}`);
        break;
    }
}