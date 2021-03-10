# Password Generator

## Purpose

A password generator where the user can select the criteria to include

## Description / Process Flow

- The user clicks "Generate Password" and enters a length between 8 - 128 characters
- The input is validated, and failing will re-initialize the input
- An empty array is generated based on the length of the desired password
- The user selects whether to include lowercase, uppercase, numeric, or special characters
- The empty array is divided into equal segments for each selected criteria to include
- If any remainder, it is added to the final criteria group
- Each segment is populated with random characters of their definition
- The individual segments are joined back into one array
- The joined array is randomly shuffled

## Process animation

![password](https://user-images.githubusercontent.com/69044956/110496125-2dc81f00-80c3-11eb-895f-791a1ebc4a64.gif)

## Results

- The user is presented with a password of their own length, with their own selected criteria
- Due to the nature of how it is generated, no after generation validation is required, as all selections are guaranteed to be included

## Built With

- JavaScript

## Website
https://primalorb.github.io/password_generator/
