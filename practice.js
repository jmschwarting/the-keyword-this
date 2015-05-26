//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      // .this allows you to use any object that is passed into a function without creating params

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      // implicit - 
      // explicit
      // new (Binding?)
      ???

  // 3) What is the difference between call and apply?

      // Call allows you to pass in params one by one, whereas apply allows  you to pass in an ARRAY of arguments.

  // 4) What does .bind do?

      // Forever binds the "this" keyword to whatever you set in the .bind function


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. 
  //*Don't use 'user' instead use the 'this' keyword*

var user = {
  username: 'jms',
  email: 'jms@g',
  getUsername: function () {
    return this.username;
  }
};

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

user.getUsername();

//Next problem

// Write the function definitions which will make the following function invocations function properly.

var prius = Car('Toyota', 'Prius', 2011);
var mustang = Car('Ford', 'Mustang', 2013);

var Car = function (make, model, year) {
  var car = {
    make: make,
    model: model,
    year: year
  }
}

///////////////////////////////////////////  WHUUUUUUT  ///////////////////////////////////////////////////////////////////

var prius = {
  make: 'Toyota',
  model: 'Prius',
  year: 2011,
  move: 0,
  moveCar: function () {
    this.move = this.move + 10;
    return this.move;
  }
}

var mustang = {
  make: 'Ford',
  model: 'Mustang',
  year: 2013,
  move: 0,
  moveCar: function () {
    this.move = this.move + 10;
    return this.move;
  }
}

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments prius' move property by 10. Returns the new move property.

//Hint, you'll need to write a moveCar function which is added to every object that is being returned from the Car function. 
//You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the write object 
//(prius vs mustang).

var prius = {
  make: 'Toyota',
  model: 'Prius',
  year: 2011,
  move: 0,
  moveCar: function () {
    this.move = this.move + 10;
    return this.move;
  }
}

var mustang = {
  make: 'Ford',
  model: 'Mustang',
  year: 2013,
  move: 0,
  moveCar: function () {
    this.move = this.move + 10;
    return this.move;
  }
}

//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will 
//allow for you to call the getYear function with the prius then the mustang objects being the focal objects. 
//*Don't add getYear as a property on both objects*.

getYear.call(mustang);






//New Problem



var user = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getUsername = function(){
  console.log(this.username);
};

setTimeout(getUsername.call(user), 3000);

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername 
//function return?

  // Nothing. "this" isn't being set anywhere.

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  // Nothing.

//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.