
//[id , brand , model , type , pricePerDay, available]
carBooking =[
        [1,'Toyota', 'Corolla' , 'Sedan' ,50 ,10],
        [2,'Honda', 'Civic' , 'Sedan' ,55 ,8],
        [3,'Ford', 'Mustang' , 'Sports Car' ,80 ,5],
        [4,'Jeep', 'Wrangler' , 'SUV' ,70 ,7],
        [5,'Nissan', 'Altima' , 'Sedan' ,45 ,12]
];
//1)print all car brands
console.log(` all car brands`);
for(car of carBooking){
    console.log(car[1]);
}
//2)prnt total number of car available 
console.log(`total number of car is : ${car.length}`);

console.log(`-------------------`);

//3)prnt 7 cars details
console.log('car details');
carBooking.filter(car=>car[2]=="car").forEach(car=>console.log(car));

console.log(`-------------------`);

//4)prnt cars with price per day grtr than 60
console.log(`cars with price per day grtr than 60`);

for(let cars of carBooking){
    if(cars[4]>60){
        console.log(cars);
    }
}
console.log(`-------------------`);

//5)prnt details of 'jeep wrangler'
console.log(`details of 'jeep wrangler'`);
detail=carBooking.find(car=>car[1]=="Jeep");
console.log(detail);
console.log(`-------------------`);


//6)sort cars based on the descenting order of the price per day
console.log(`descenting order of the price per day`);
carBooking.sort((car1,car2)=>car2[4]-car1[4])
console.log(carBooking);
console.log(`-------------------`);

//7)sort cars based on ascending ordr of available cars 
console.log(`ascending ordr of available cars`);
carBooking.sort((car1,car2)=>car1[5]-car2[5])
console.log(carBooking);
console.log(`-------------------`);

//8)find the car with the most avilable cars
console.log(`car with the most avilable cars`);
available=carBooking.sort((car1,car2)=>car2[5]-car1[5])
console.log(available[0][1]);
console.log(`-------------------`);

//9)caculate the revenue if all the cars are ented for a day 

//10)count the number of sedan cars



console.log(`-------------------`);

//11)prnt all unique car brands
console.log(` unique car brands`);
for(car of carBooking){
    console.log(car[1]);
}
console.log(`------------------------------------`);
//12)find the total number of available cars for all time
console.log(`total number of available cars for all time`);
total=carBooking.map(car=>car[5]).reduce((tot1,tot2)=>tot1+tot2)
console.log(total);

console.log(`-------------------------`);
//13)find the car with least availablity
console.log(`the car with least availablity`);
least=carBooking.reduce((car1,car2)=>car1[5]<car2[5]?car1:car2)
console.log(least[1]);

//14)check if there is any car with a price per day exactly 55
