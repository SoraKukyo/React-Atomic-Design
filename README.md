# Atomic Design System Using React

This repository contains the source code of my React project developed using the Atomic Design Pattern. Here, you can find the complete implementation of atoms, molecules, organisms, templates, and pages. You can find the complete articles regarding the design system here https://bradfrost.com/blog/post/atomic-web-design/

## Atomic Design


Atomic Design is a methodology for creating design systems with five distinct levels:

### Atoms:
Atoms are the basic building blocks of matter. In web interfaces, they are represented by HTML tags such as form labels, inputs, and buttons. Atoms can also include abstract elements like color palettes and fonts.

### Molecules: 
Molecules are groups of atoms bonded together, forming the smallest fundamental units of a compound. Combining atoms into molecules encourages a "do one thing and do it well" mentality, leading to reusable components.

### Organisms: 
Organisms are more complex sections of the interface, created by combining molecules. They represent distinct and relatively complex sections of the application, such as headers, footers, and product grids.

### Templates: 
Templates consist of groups of organisms stitched together to form pages. They provide context to abstract molecules and organisms, showing the design coming together with layout and structure.

### Pages: 
Pages are specific instances of templates, where placeholder content is replaced with real representative content. They are the highest level of fidelity and where most of the testing and reviewing take place.

## Installation and Setup
To run the project locally, follow these steps:

Clone this repository to your local machine.
Navigate to the project directory using the terminal or command prompt.
Install the required dependencies using npm install.
Start the development server with npm start.
Open your web browser and go to http://localhost:3000 to view the application.
