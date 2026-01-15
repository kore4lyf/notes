# RUST

## Installation

**Windows**:

**Linux**:

**Add rust to ENV variable**:
```sh
source "$HOME/.cargo/env"
```

Confirm Installation:

```sh
rustc --version

```

## Construction of compiler for Rust

- View version

```sh
rustc --version
```

- Compile and generate binary files

```sh
rustc -0
```

```sh
rustc -o output_filename filename.rs
```

- Compile and generate library files

```sh
rustc --crate-type lib filename.rs
```

### Cargo: a package management tool for rust

I implicitly compiles with rustc.

Order:

- Create: cargo new --lib project-name creates a new rust library project

```sh
# SYNTAX (Executable)
cargo new project_name

# SYNTAX (Library)
 cargo new --lib project-name
```

- Build: Build the project (Generate binary executable files or library files)

```sh
cargo build
```

cargo build is an unoptimised build

```sh
cargo build --release
```

release is an optimised build/release of build.

- Detection:

```sh
cargo check
```

- Run/Test

```sh
#RUN
cargo run

# TEST
cargo test
```

### Cargo.toml dependencies

```toml
[package]
name = "hello_world"
version = "0.1.0"
edition = "2024"

[dependencies]

[build-dependencies]

[dev-dependencies]
```

## Variables and Immutability

- Rust supports type inference, but you can also specify the type of a variable explicitly.

```rs
let x: i32 = 5;
```

- Variable names use SnakeCase, while enumeration and sturcture names use PascalCase.
If a variabe isnot use you can use put an underscore in the front to eliminate a warining.

- Casting a value to a different type

```rs
let a = 3.1;
let b = a as i32;
```

- Print variables

```sh
println!("val: {}", x);
println!("val: {x}");
```

**IMMUTABLE**:
In rust data is immutable by default.

To make a variable immutable by default, you need to explicitly declare it using mut keyword.

```rs
let mut y = 10;
y = 20
```

**SHADOWING**:
Rust allows you to shadow a variable, which means **you can declare a new variable withe the same name as an existing variable**.
This effectively hides the previous variable.

Can change value
Can change type
Can change mutablility

```rs
fn main() {
  // Immutability and naming

  let _nice_count = 100;
  let _nice_number: i64 = 54;

  // nice_count = 23 // cannot assign twice to immutable variable

  // Declare variable
  let mut _count = 3;
  let _count = 4;

  let x = 5;
  
  // Shadowing x
  {
    // Namespace
    let x = 10;
    println!("inner x : {}", x); // inner x : 10
  } // internal x is destroyed

  println!("outter x : {}", x); // outter x : 5

  let x: &str = "hello"; // Redeclaring

  println!("New x : {x}") // New x : hello


}
```

### Constants const and static variables

### Const

- The value of a constant must be a constant expression known at compile time, and the type and value must be specified.
In Rust the value of a constant is directly embedded in the generated machine code, instead of performing character replacement.

- Constants names and static variables must be all capitalized, with underscores between words.

- Constants are block scoped, they are only visible within the scope where they are declared.

### Static

- Unlike const constants, static variables are allocated memory at runtime

- It is not immuatable and can be modified using unsafe

- The life cycle of a static variable is the running time of the entire program

```rs
static MY_STATIC: i32 = 42
static mut MY_MUT_STATIC: i32 = 42

// const
const HOUR: usize = 3_600;
const DAY: usize = 24 * HOUR;

{
  const SE: usize = 1_000;
  println!("{SE}");
}

// println!("{SE}") // Error: Does not exists
println("{}", DAY);

// MY_STATIC = 2 // Error: Cannot be modified.
println("{MY_STATIC}");

unsafe {
  MY_MUT_STATIC = 30
  println("{MY_MUT_STATIC}"); // Can only print within unsafe block
}
// println("{MY_MUT_STATIC}"); // The use of a mutable static is unsafe and requires usafe function or block
```

### Basic Data Types

- Integer tyoes are inferred to be i32 by default
  - i8
  - i16
  - i32
  - i64
  - i128

- Ubsigned Integer Types
  - u8
  - u16
  - u32
  - u64
  - u128

- Platform-specific Integer Type (Rust will infer the number size for you)
  - usize
  - isize

- Float Types
  - f32 abd f64
  - Try to use f64 unless you know yhe margins need space

- Boolean
  - true
  - false

- Character Types
  - Best supports Unicode characters
  - Single quote are used to indicate char types
  

### Tuples and Arrays

Similarities:
1. Tuples and arrays both compound types, while Vec and Map are collection types.
2. Tuples and arrays have fixed length

- Tuples of different types of data types

- Arrays of the same data types

#### Arrays

Arrays homogeneous collections of fixed length.

Creation: 
[a, b, c]
[value: size]

- Get element `arr[index]`

- Get the length `arr.len()`

#### Tuple
Tuples are heterogenous collections of fixed length.

Empty Tuples()
default return value for a function.

Get element from Tuple
- tup.index
- No len()

