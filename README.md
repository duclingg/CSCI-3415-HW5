# Homework 5: Tiny Mart
Justin Hoang  
CSCI 3415  

## Part 1
1. Modern programming languages do not include the `goto` unconditional branch command because it is considered harmful. Its main issue is that it creates unreadable code (sphaghetti code). `goto` statements move the execution control to a place in the program specified by the `goto` statement, which can make it hard to trace where code is executed.  
The articles say that `goto` statements are best used selectively for clean error handling paths, reducing duplication, avoiding unreadble deep nesting, and maintain high performance. The articles do not recommend using `goto`'s for random jumps without careful thought.  

2. The key design issues for counter-controller loop statements are:
- the type/scope of the loop control variable
- If the loop control variable and loop parameters can be changed inside the loop body itself, and how that would affect the loop control
- how the loop parameters should be evaluated: only once or for every iteration
- the value of the loop control variable after execution of the loop (valid or invalid)  
```python
for i in range(n):
    i += 1 
    # can you change (increment in this case) be changed within the loop?
    # if so, how does it affect the loop itself?
```

3. Pass-by-reference is perferred over pass-by-value in C++ because pass-by-reference is more efficient. Only a reference is passed, which is faster because it doesn't create a copy of the object, rather it uses the reference to the object in memory which uses almost no extra memory. However, a known drawback of pass-by-reference is that the function can modify the original object and can lead to bugs. This can be mitigated by using const with pass-by-reference, enforcing that the function cannot modify the object.  

4. Variadic arugments in Python is where the actual argument is a list of values, and the corresponding formal paramter is a name with an asterik (*arg), or two asterisks (**kw) for keyowrd arguments (dictionary). It allows a function to accept an arbitrary number of arguments.
```python
def function(*args, **kwargs):
    print("Positional arguments (args):", args) # passes non-keyworded arguments, collected in a tuple
    print("Keyword arguments (kwargs):", kwargs) # passes keyworded arguments, collected in a dictionary

function(1, 2, 3, name='Alice', age: 30)
# Positional arguments (args): (1, 2, 3)
# Keyword arguments (kwargs): {'name': 'Alice', 'age': 30}
```  

5. Coroutines are subprograms that have multiple entires for non-preemptive mulitasking, allowing execution to be suspended and resumed. Coroutines are called quasi-concurrent execution because like concurrency (asynchronous) execution, coroutine executes the subprograms one at a time--the execution is interleaved, but not overlapped. It gives the illusion of concurrent execution, but only one coroutine runs at a time. You can implement coroutines in Python by using the keyowrd `yield`, or using the library `asyncio`.  

6. The four pillars of OOP:
Encapsulation:  
The bundling of data (attributes) and methods inside a class while restricting direct acess to object data.  
```typescript
class BankAccount {
    private balance: number; // balance number is private, cannot be accessed outside the class

    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
        }
    }

    getBalance(): number {
        return this.balance;
    }
}

const acounnt = new BankAccount(1000);
account.deposit(500);
console.log(account.getBalance()); // 1500
account.balance = 10000; // Error: balance is private
```  
Abstraction:  
Only providing essential information about the data to the outside world, hiding the background details and/or implementation of an object.  
```typescript
abstract class Vehicle {
    abstract move(): void;

    // startEngine implementation hidden
    startEngine(): void { 
        console.log("Engine started");
    }
}

class Car extends Vehicle {
    move(): void {
        console.log("Car is driving");
    }
}

const car = new Car();
car.startEngine(); // "Engine started"
car.move(); // "Car is driving"
```   
Inheritance:  
Allowing a class to reuse methods and attributes from another class, reducing code duplication, and enabling hierarchical organization.  
```typescript
class Animal {
    eat(): void {
        console.log("Animal is eating");
    }
}

class Dog extends Animal {
    bark(): void {
        console.log("Dog is barking");
    }
}

const dog = new Dog();
dog.eat(); // "Animal is eating"
dog.bark(); // "Dog is barking"
```   
Polymorphism:  
Allows objects of different classes to be treated as objects of a common superclass. It allows one interface to be used for different underlying forms (data types or classes).  
```typescript
class Bird extends Animal {
    eat(): void {
        console.log("Bird is pecking at food");
    }
}

function feedAnimal(animal: Animal): void {
    animal.eat();
}

const animals: Animal[] = [new Dog(), new Bird()];

animals.forEach(feedAnimal);
// "Animal is eating" (Dog)
// "Bird is pecking at food" (Bird)
```  