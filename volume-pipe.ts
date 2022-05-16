import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'StockVolume'
})
export class VolumePipe implements PipeTransform
{
 
    transform(value: any) {
        if(value>999 && value<999999)
        {
            let newValue = value/1000;
            return newValue+'k';
        }
        else if(value>999999)
        {
            let newValue = value/1000000;
            return newValue+'M'
        }
        else return value;
    }

    
}
