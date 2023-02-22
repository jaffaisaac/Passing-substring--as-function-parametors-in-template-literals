 function outPut( Literal , ...substitutions){
    result ="";
    for(let i =0; i<substitutions.length; i++){
        result += Literal[i] + substitutions[i]
    }
    result += Literal[Literal.length -1];
    return result;
 }
 const name =`jaffa`, language =`javaScript`;
 const Text =`Hi ,my name is ${name} and i love  ${language}`;

 console.log(Text);