import { TitleCasePipe } from '@angular/common';
import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name: 'ProperCase'
})
export class SummaryPipe implements PipeTransform{
    transform(value: string, args?: any){
        if(!value)return null;
        let titleCaser = new TitleCasePipe();
        let propositions = ["of","the","a","is"];
        let words = value.split(' ');
        
        let outWords = new Array();
        
        words.forEach(word => {
            let outWord = "";
            if(!(propositions.includes(word.toLowerCase())))
                outWord = titleCaser.transform(word);
            else
                outWord = word.toLowerCase();         

            outWords.push(outWord)

        })
        return outWords.join(" ");
    }
}