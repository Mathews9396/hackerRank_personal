/*
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 *
 * Sample Input:
 * 11
 * middle-Outz
 * 2
 *
 * Output:
 * okffng-Qwvb
 */

function caesarCipher(s, k) {
  // Write your code here
  let cipherString =''
  if(k%26 ==0) return s;
  else if(k>26) k=k%26;
  for (let char of s) {
    let charCode = char.charCodeAt(0);
    if (charCode >= 97 && charCode <= 122) {
      charCode += k;
      if (charCode > 122) charCode -= 26;
    } 
    else if (charCode >= 65 && charCode <= 90) {
      charCode += k;
      if (charCode > 90) charCode -= 26;
    }
    cipherString += String.fromCharCode(charCode);    
  }
  return cipherString;
}

let string = "!m-rB`-oN!.W`cLAcVbN/CqSoolII!SImji.!w/`Xu`uZa1TWPRq`uRBtok`xPT`lL-zPTc.BSRIhu..-!.!tcl!-U",
  cipherNo = 62;
const result = caesarCipher(string, cipherNo);
console.log(`cipherString - ${result}`);
// let output = 'okffng-Qwvb'
let output = '!w-bL`-yX!.G`mVKmFlX/MaCyyvSS!CSwts.!g/`He`eJk1DGZBa`eBLdyu`hZD`vV-jZDm.LCBSre..-!.!dmv!-E'

result == output ? console.log(`working fine`) : console.log('Fix code');



//test case 6
//90
//!m-rB`-oN!.W`cLAcVbN/CqSoolII!SImji.!w/`Xu`uZa1TWPRq`uRBtok`xPT`lL-zPTc.BSRIhu..-!.!tcl!-U
//62
//!w-bL`-yX!.G`mVKmFlX/MaCyyvSS!CSwts.!g/`He`eJk1DGZBa`eBLdyu`hZD`vV-jZDm.LCBSre..-!.!dmv!-E
