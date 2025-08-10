import express, { Request, Response } from "express";
import Books from "../Data";

// TASK 1:
// write a controller (function) to fetch all books in Data
// if there is an error, return a 500 status code with a message: Internal Server Error
// hint: use try-catch block >> to catch errors

const getAllBooks = (req: Request, res: Response) => {};

// TASK 2:
// write a controller (function) to fetch a book by ID from Data
// if the book is not found, return a 404 status code with a message: book not found!
// hint: use try-catch block >> to catch errors
const getBookByID = (req: Request, res: Response) => {};

//TASK 3:
// write a controller (function) to create a new book, and add it to the Data
// if the book is created successfully, return a 201 status code with the newly created book
// if there is an error, return a 500 status code with a message: Internal Server Error
// JSOON body should contain:
// title (string), author(string), genre (string), publishedYear (number)
// hint: use try-catch block >> to catch errors
const createBook = (req: Request, res: Response) => {};

// Bonus Challenge 1:
// Implement a controller to update a book by ID, Method: PUT, route: "/:id"
// If the book is not found, return a 404 status code with a message: book not found!
// If the book is updated successfully, return a 200 status code with the updated book

// Bonus Challenge 2:
// Implement a controller to delete a book by ID, Method: DELETE, route: "/:id"
// If the book is not found, return a 404 status code with a message: book not found!
// If the book is deleted successfully, return a  message: Book deleted successfully

export { getAllBooks, getBookByID, createBook };
