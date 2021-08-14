import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-algorithms',
  templateUrl: './algorithms.component.html',
  styleUrls: ['./algorithms.component.css']
})
export class AlgorithmsComponent implements OnInit {
  txtToProcess: string;
  someInformation: Array<string>;
  constructor() {
    this.txtToProcess = "Your text goes here so write anything that you want";
    this.someInformation = new Array<string>();
  }

  ngOnInit(): void {
  }
  processText() {
    //check if the given text is empty 
    if (this.txtToProcess == "") {
      alert('Please enter some text');
    } else {
      this.someInformation.push(`Sentence: ${this.txtToProcess}`);
      let chunks: Array<any> = this.txtToProcess.split(' ');
      let totalWords = chunks.length;
      let message = `Total Words in Your string are: ${totalWords}`;
      let wordMap: Map<string, number> | undefined = this.countRepeatedWords(this.txtToProcess);
      let highestCountWord:any = this.findHighestCountWord(wordMap);
      this.someInformation.push(message);
      if(highestCountWord.count==1){
        message = 'All the words are of same frequency :)';
      }else{
        message = `The highest count word is [ ${highestCountWord.word} ] and it's count is [ ${highestCountWord.count} ]`;
      }
      this.someInformation.push(message);
    }
  }
  clearText(){
    try {
      if(confirm("Are you sure you want to clear text?")){
        this.txtToProcess = "";
      }
      
    } catch (error) {
      console.log(error.message);
    }
  }
  findHighestCountWord(wordMap: Map<string, number>|undefined) {
    try {
      if (wordMap !== undefined) {
        let highestValue: number = 0;
        let word: string = "";
        for (let key of wordMap.keys()) {
          let count: number | undefined = wordMap.get(key);
          if (count !== undefined) {
            if (count > highestValue) {
              highestValue = count;
              word = key;
            }
          }
        }
        return {
          "word":word,
          "count":highestValue
        }
      }else{
        return undefined;
      }

    } catch (error) {
      console.log(error.message);
      return undefined;

    }
  }
  countRepeatedWords(sentence: string) {
    try {
      let words: Array<string> = sentence.split(" ");
      let wordMap: Map<string, number> = new Map();

      for (let i = 0; i < words.length; i++) {
        //search for the word in the wordmap
        if (wordMap.has(words[i])) {
          //get the count of the word and do increment in that
          let wordCount: number | undefined = wordMap.get(words[i]);
          if (wordCount !== undefined) {
            wordMap.set(words[i], wordCount + 1);
          }
        } else {
          wordMap.set(words[i], 1);
        }
      }
      return wordMap;
    } catch (error) {
      console.log(error.message);
      return undefined;

    }

  }

}
