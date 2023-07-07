const dailyrecord={
    name: 'Yomi',
    totalMilesCovered: 100,
    totalSteps: 875,
    kmCovered: 500
}
dailyrecord.name='Abayomi'
console.log(dailyrecord);
console.log(typeof(dailyrecord))

  
  function makeUser(name, age) {
    return {
      name: name,
      age: age,
      // ...other properties
    };
  }
  
  let user = makeUser("John", 30);
  console.log(user.age);

  var house={
    bongalow:3,
    duplex : 4,
    flat:{
      bulder:'abyomi',
      architect:'tolu',
    }
  }
  //console.log(house.flat)
  //console.log(house.bongalow)


  const customers_data = {
    'Ben10': [22, 30, 11, 17, 15, 52, 27, 12],
    'Sameer': [5, 17, 30, 33, 40, 22, 26, 10, 11, 45],
    'Zeeshan': [22, 30, 11, 5, 17, 30, 6, 57]
  }
  
  function {
    let count = 0;
    for (let i=0; i<customerOrders.length; i++) {
      if (customerOrders[i] >= 20) {
        count++;
      }
    }
    if (count >= 5) {
      console.log('${customerName} is eligible for Premium Membership');
    } else {
      console.log('${customerName} does not qualify for Premium Membership yet');
    }
  }
  checkMembership('Ben10', customers_data['Ben10']); // Ben10 is eligible for Premium Membership.
checkMembership('Sameer', customers_data['Sameer']); // Sameer is eligible for Premium Membership.
checkMembership('Zeeshan', customers_data['Zeeshan']); // Zeeshan doesn't qualify for Premium Membership yet.
  