export interface Country {
  name: string;
  flag: string; 
  capital: string;
  region: string; 
}


export let compareRegion = function(country1: Country, country2: Country  ) {  
  if (country1.region > country2.region) { return -1; }  
  if (country1.region < country2.region) {return 1; }  
  return 0;  
}
