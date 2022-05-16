import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todayDate = new Date();



  bajajFinance:stock = {
    stockName : 'Bajaj Finance',
    companyInfo:'Bajaj Finance is mainly engaged in the business of lending. BFL has a diversified lending portfolio across retail, SME and commercial customers with a significant presence in urban and rural India. It also accepts public and corporate deposits and offers variety of financial services products to its customers.(Source : 202003 Annual Report Page',
    openPrice:3600,
    last:3800,
    lotSize:0,
    volume:780000,
    vwmp:3860,
   }

   infosys:stock = {
    stockName : 'Infosys',
    companyInfo:'Infosys Limited is a provider of consulting, technology, and next-generation digital services, enabling clients to execute strategies for their digital transformation. They help their clients in the digitization of processes, migration to cloud-based technologies, workplace transformation, business model transformation, enhanced cybersecurity controls, and cost structure optimization in IT. ',
    openPrice:1500,
    last:1400,
    lotSize:0,
    volume:7180000,
    vwmp:1560,
   }

   hdfc:stock = {
    stockName : 'HDFC',
    companyInfo:'The Housing Development Finance Corporation Limited (HDFC) was amongst the first to receive an in principle approval from the Reserve Bank of India (RBI) to set up a bank in the private sector. HDFC Bank is a publicly held banking company, the bank was incorporated in August 1994 in the name of HDFC Bank Limited, with its registered office in Mumbai, India. It is engaged in providing a range of banking and financial services including retail banking, wholesale banking and treasury operations. It is promoted by HDFC Ltd',
    openPrice:1400,
    last:1350,
    lotSize:0,
    volume:850000,
    vwmp:1260,
   }

   stockArr:stock[] = [this.bajajFinance,this.infosys,this.hdfc];


  
}


interface stock
{
  stockName : string ;
  companyInfo:string;
  openPrice:number;
  last:number;
  lotSize:number;
  volume:number;
  vwmp:number;
  
}
