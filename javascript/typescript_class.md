# OOP

## Theory

1. **Class**: A class is a blueprint for creating objects. It defines the properties (attributes) and behaviors (methods) that objects of that class will have.

2. **Object**: An object is an instance of a class. It represents a specific instance of the class, with its own set of values for the properties defined by the class.

3. **Encapsulation**: Encapsulation is the bundling of data (attributes) and methods (functions) that operate on the data into a single unit, typically a class. It hides the internal state of an object from the outside world and only exposes a controlled interface for interacting with the object.

4. **Inheritance**: Inheritance is a mechanism by which a class can inherit properties and methods from another class called the superclass or base class. It promotes code reuse and establishes a hierarchy among classes.

5. **Polymorphism**: Polymorphism means the ability of objects to take on different forms or respond to messages or method calls in different ways based on their type or class hierarchy. It allows objects of different classes to be treated as objects of a common superclass.

6. **Abstraction**: Abstraction is the process of simplifying complex reality by modeling classes appropriate to the problem and ignoring unnecessary details. It focuses on what an object does rather than how it does it.

7. **Method**: A method is a function defined within a class that operates on the data members of the class. It encapsulates behavior associated with the objects of the class.

8. **Property/Attribute**: A property or attribute is a piece of data associated with a class or object. It represents the state of the object and defines its characteristics.

9. **Constructor**: A constructor is a special method that is automatically called when an instance of a class is created. It is used to initialize the object's state and set up any necessary resources.

10. **Instance Variable**: An instance variable is a variable declared within a class but outside of any method. Each instance of the class (object) has its own copy of the instance variables.

## Code

```typescript
// Class definition
class Animal {
    // Properties
    protected name: string;
    
    // Constructor
    constructor(name: string) {
        this.name = name;
    }
    
    // Method
    public makeSound(): void {
        console.log(`${this.name} makes a sound`);
    }
}

// Inheritance
class Dog extends Animal {
    private breed: string;
    
    // Constructor
    constructor(name: string, breed: string) {
        super(name); // Calling superclass constructor
        this.breed = breed;
    }
    
    // Method overriding
    public makeSound(): void {
        console.log(`${this.name} barks`);
    }
}

// Creating objects
const animal = new Animal("Generic Animal");
const dog = new Dog("Buddy", "Labrador");

// Encapsulation and Abstraction
animal.makeSound(); // Output: Generic Animal makes a sound
dog.makeSound(); // Output: Buddy barks
```

Explanation:

1. **Class**: We define two classes, `Animal` and `Dog`, representing animals and dogs respectively.

2. **Object**: We create objects `animal` and `dog` using the `new` keyword followed by the class name.

3. **Encapsulation**: The `name` property in the `Animal` class is declared as `protected`, encapsulating it within the class and making it accessible to subclasses like `Dog`.

4. **Inheritance**: The `Dog` class extends the `Animal` class, inheriting its properties and methods. This demonstrates the concept of inheritance.

5. **Polymorphism**: We override the `makeSound()` method in the `Dog` class to provide a specialized behavior for dogs. This is an example of polymorphism, where the same method behaves differently in different contexts.

6. **Abstraction**: The `Animal` and `Dog` classes provide an abstraction for generic animals and specific dogs respectively. The implementation details are hidden behind clear interfaces.

7. **Method**: Both classes have methods (`makeSound()`) that define behavior associated with the objects of the class.

8. **Property/Attribute**: The `name` and `breed` properties represent the state of the objects (animals and dogs) respectively.

9. **Constructor**: Both classes have constructors that initialize the object's state when they are created.

10. **Instance Variable**: `name` and `breed` are instance variables specific to each object created from the `Animal` and `Dog` classes respectively.
