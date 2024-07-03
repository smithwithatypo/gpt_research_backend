import { Problem } from '../models/problem';

const problems: Map<number, Problem> = new Map();

problems.set(0,{
    problemID: 0,
    summary: "Find duplicates in array",
    categories: ["Array", "HashMap", "HashSet"],
    problem:  "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
    example1: "Input: nums = [1,2,3,1] Output: true",
    example2: "Input: nums = [1,2,3,4] Output: false",
    example3: "Input: nums = [1,1,1,3,3,4,3,2,4,2] Output: true",
});
problems.set(1,{
    problemID: 1,
    summary: "Is Anagram",
    problem: 'Given two strings s and t, return true if t is an anagram of s, and false otherwise. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.',
    categories: ['HashMap', 'String'],
    example1: 'Input: s = "anagram", t = "nagaram" Output: true',
    example2: 'Input: s = "rat", t = "car" Output: false'
});
problems.set(2,{
    problemID: 2,
    summary: "Two Sum",
    problem: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.',
    categories: ['Array', 'HashMap'],
    example1: 'Input: nums = [2,7,11,15], target = 9 Output: [0,1]',
    example2: 'Input: nums = [3,2,4], target = 6 Output: [1,2]',
    example3: 'Input: nums = [3,3], target = 6 Output: [0,1]'
});
problems.set(3,{
    problemID: 3,
    summary: "Valid Palindrome",
    problem: 'A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers. Given a string s, return true if it is a palindrome, or false otherwise.',
    categories: ['Array', 'Two Pointers'],
    example1: 'Input: s = "A man, a plan, a canal: Panama"    Output: true',
    example2: 'Input: s = "race a car"   Output: false',
    example3: 'Input: s = " "    Output: true'
});
problems.set(4,{
    problemID: 4,
    summary: "Valid parentheses",
    categories: ["Stack", "String"],
    problem:  "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.  /n input string is valid if: /n Open brackets must be closed by the same type of brackets. Open brackets must be closed in the correct order. Every close bracket has a corresponding open bracket of the same type.",
    example1: "Input: s = '()' Output: true",
    example2: "Input: s = '()[]{}' Output: true",
    example3: "Input: s = '(]' Output: false",
});


export default problems;
