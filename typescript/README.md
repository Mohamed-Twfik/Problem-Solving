# TypeScript Problem Solving

This directory holds a collection of problem-solving implementations ranging from algorithms and data structures to design patterns, built with TypeScript.

## Structure

The source code is organized primarily inside the `src/` directory. Here is an overview of the modules contained:

- **`src/algorithms/`**: Various algorithm implementations (e.g., sorting, searching).
- **`src/dataStructures/`**: Custom data structure implementations (e.g., Linked Lists, Stacks, Trees).
- **`src/designPatterns/`**: Implementations of common Software Design Patterns.
- **`src/problemSolving/`**: General algorithmic problems and exercises.
- **`src/types/`**: Custom TypeScript types and interfaces used throughout the project.

The compiled JavaScript output is placed in the `dist/` directory.

## Running the Scripts

To run the TypeScript code in this folder, you will first need to compile it to JavaScript, or run it directly using a tool like `ts-node`.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed.

### Option 1: Compiling and Running

1. Compile the TypeScript files using the TypeScript compiler (`tsc`). This will output the equivalent `.js` files in the `dist/` folder according to the configuration in `tsconfig.json`.

```bash
tsc
```

2. Execute the compiled script via Node.js.

```bash
node dist/path/to/compiled_script.js
```

### Option 2: Running directly with `ts-node`

1. Download ts-node

```bash
npm install -g ts-node
```

2. You can directly run a `.ts` file without manual compilation:

```bash
npx ts-node src/path/to/script.ts
```
