  export default function OOP(){
  class Dict { 
    private words: Words; 
    constructor() { 
      this.words = {}; 
    } 
    add(word: Word) { 
      if (!this.words[word.term]) { 
        this.words[word.term] = word.def; 
      } 
    } 
    find(term: string) { 
      return this.words[term]; 
    } 
    rmv(term: string) { 
      delete this.words[term]; 
    } 
    update(oldTerm: string, newTerm: string) { 
      if (this.words.hasOwnProperty(oldTerm)) { 
        this.words[newTerm] = this.words[oldTerm]; 
        delete this.words[oldTerm]; 
      } 
    } 
    size() { 
      return Object.keys(this.words).length; 
    } 
    all() { 
      for (let [key, value] of Object.entries(this.words)) { 
        console.log(`${key}: ${value}`); 
      }
    } 
    static hello(){
      return 'hello'
    }
  }

  type Words = {
    [key:string]:string|string[]
  }

  class Word{
    constructor(public term: string, public def: string | string[]) {} 
    toString() { 
      console.log(`${this.term}: [뜻] ${this.def}`); 
    } 
    addDef(newDef: string) { 
      if (typeof this.def === "string") { 
        this.def = [this.def, newDef]; 
      } 
      else { 
        this.def = [...this.def, newDef]; 
      } 
    } 
    updateDef(oldDef: string, newDef: string) { 
    if (typeof this.def === "string") { 
      if (oldDef === this.def) this.def = newDef; 
          } 
      else { 
        this.def.filter((val) => val !== oldDef);
        this.def.push(newDef); 
      } 
    } 
  }

  const dict=new Dict
  const kimchi = new Word("kimchi", "한국의 음식"); 
  dict.add(kimchi)
  console.log(
    dict.find("kimchi"),
    Dict.hello()
  )
}