1. country from all region using the filter function:

// Creating the xml http request 

let xhr = new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v2/all");     //Object url
let obj1;
xhr.onload=function(){
    if(xhr.status>=200 && xhr.status<300)
    {
         obj1=JSON.parse(this.response);
         var new_reg=obj1.filter(obj1=>obj1.region) //Usinng the filter function
         var new_region=obj1.map((obj1)=>obj1.region)
         console.log(new_region);
    }

}
xhr.send();

Output: //  I  got all region from country

    ['Asia', 'Europe', 'Europe', 'Africa', 'Oceania', 'Europe', 'Africa', 'Americas', 'Polar', 
    'Americas', 'Americas', 'Asia', 'Americas', 'Oceania', 'Europe', 'Asia', 'Americas', 'Asia', 
    'Asia', 'Americas', 'Europe', 'Europe', 'Americas', 'Africa', 'Americas', 'Asia', 'Americas', 
    'Americas', 'Europe', 'Africa', 'Antarctic Ocean', 'Americas', 'Africa', 'Americas', 'Americas', 
    'Americas', 'Asia', 'Europe', 'Africa', 'Africa', 'Asia', 'Africa', 'Americas', 'Africa', 'Americas',
    'Africa', 'Africa', 'Americas', 'Asia', 'Oceania', 'Oceania', 'Americas', 'Africa', 'Africa', 'Africa',
    'Oceania', 'Americas', 'Europe', 'Americas', 'Americas', 'Europe', 'Europe', 'Europe', 'Africa', 'Americas', 
    'Americas', 'Americas', 'Africa', 'Americas', 'Africa', 'Africa', 'Europe', 'Africa', 'Americas', 'Europe',
    'Oceania', 'Europe', 'Europe', 'Americas', 'Oceania', 'Africa', 'Africa', 'Africa', 'Asia', 'Europe', 'Africa', 
    'Europe', 'Europe', 'Americas', 'Americas', 'Americas', 'Oceania', 'Americas', 'Europe', 'Africa', 'Africa', 
    'Americas', 'Americas', 'Antarctic', 'Europe', …]




2. Print the population of less than 200000 using filter function:

// Creating the xml http request 

let xhr = new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v2/all");     //Object url
let obj1;
xhr.onload=function(){
    if(xhr.status>=200 && xhr.status<300)
    {
         obj1=JSON.parse(this.response);
         var new_region=obj1.filter((obj1)=>obj1.population<200000) //Usinng the filter function
         var new_population=new_region.map((obj1)=>obj1.population)
         console.log(new_population);
    }

}
xhr.send();

Output:

Population: //I got 62 length of country on output

(62) [28875, 55197, 77265, 13452, 1000, 97928, 106766, 63903, 17408, 0, 3000, 300,      
        30237, 106290, 65720, 2072, 550, 18100, 155014, 71991, 2563, 48865, 140, 33691,
        56367, 112519, 168783, 62999, 0, 451, 85032, 100800, 119446, 38137, 59194, 
        115021, 39244, 4922, 10834, 1470, 2302, 57557, 18092, 56, 9417, 4255, 53192,
        183629, 38659, 6069, 110947, 198410, 33938, 98462, 40812, 30, 2562, 1411, 105697,38718, 11792, 11750]
        

3. Print the country from all name,capital,flag using forEach loop:

// Creating the xml http request 

let xhr = new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v2/all");     //Object url
let obj1;
xhr.onload=function(){
    if(xhr.status>=200 && xhr.status<300)
    {
         obj1=JSON.parse(this.response);
        obj1.forEach (all_data=>{                       //Using the forEach loop
            console.log(`                               
            Name: ${all_data.name}
            Capital: ${all_data.capital}
            Flag: ${all_data.flag}
            `)
        }) 
    }

}
xhr.send();

Output: //I got 250 data Only print the some example data here

Name: Afghanistan
Capital: Kabul
Flag: https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg
 
Name: Åland Islands
Capital: Mariehamn
Flag: https://flagcdn.com/ax.svg

Name: Albania
Capital: Tirana
Flag: https://flagcdn.com/al.svg
 
Name: Algeria
Capital: Algiers
Flag: https://flagcdn.com/dz.svg

Name: American Samoa
Capital: Pago Pago
Flag: https://flagcdn.com/as.svg

Name: Andorra
Capital: Andorra la Vella
Flag: https://flagcdn.com/ad.svg
 
Name: Angola
Capital: Luanda
Flag: https://flagcdn.com/ao.svg

Name: Anguilla
Capital: The Valley
Flag: https://flagcdn.com/ai.svg
 
Name: Antarctica
Capital: undefined
Flag: https://flagcdn.com/aq.svg

Name: Antigua and Barbuda
Capital: Saint John's
Flag: https://flagcdn.com/ag.svg


4.Print the all countries popultion:

// Creating the xml http request

let xhr = new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v2/all");     //Object url
let obj1;
xhr.onload=function(){
    if(xhr.status>=200 && xhr.status<300)
    {
         obj1=JSON.parse(this.response);
        var new_population=obj1.reduce((accu,popu)=>{   //used reduce functoin here
            return accu+popu.population
        },0)
        console.log(new_population)
    }

}
xhr.send();


Output: //This  is all countries population

7759438109


5. Print the Us doller currencies:

let xhr = new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v2/all");     //Object url
let obj1;
xhr.onload=function(){
    if(xhr.status>=200 && xhr.status<300)
    {
         obj1=JSON.parse(this.response);
        var new_currrency=obj1.filter((obj1)=>obj1.alpha2Code==="US")   //Used the filter function
        var total_currency=new_currrency.map((obj1)=>{                  //Used the map function
            return {
                Dollar: obj1.currencies
            }
        })
        console.log(total_currency);
    }

}
xhr.send();

Output: //These are used the Us Dollar

code: "USD"
name: "United States dollar"
symbol: "$"
