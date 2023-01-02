var countConsistentStrings = (allowed, words)=>{
    var result = 0;
     allowed = new Set(allowed);
    for(let word of words)
        result += isAllowed(word);
    return result;

        function isAllowed(word){
            for(let c of word)
                if(!allowed.has(c))
                    return false;
            return true;
        }
}

console.log(countConsistentStrings( "ab" , ["ad","bd","aaab","baa","badab"]));