import { Problem } from "../models/problem";

const problems: Map<number, Problem> = new Map();

/*  TEMPLATE

problems.set(0,{
    problemID: 0,
    summary: "",
    categories: [],
    problem:  ``,
    example1: '',
    example2: '',
    example3: '',
});

*/

problems.set(0, {
  problemID: 0,
  summary: "Find duplicates in array",
  categories: ["Array", "HashMap", "HashSet"],
  problem:
    "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
  example1: "Input: nums = [1,2,3,1] Output: true",
  example2: "Input: nums = [1,2,3,4] Output: false",
  example3: "Input: nums = [1,1,1,3,3,4,3,2,4,2] Output: true",
});
problems.set(1, {
  problemID: 1,
  summary: "Is Anagram",
  problem:
    "Given two strings s and t, return true if t is an anagram of s, and false otherwise. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.",
  categories: ["HashMap", "String"],
  example1: 'Input: s = "anagram", t = "nagaram" Output: true',
  example2: 'Input: s = "rat", t = "car" Output: false',
});
problems.set(2, {
  problemID: 2,
  summary: "Two Sum",
  problem:
    "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.",
  categories: ["Array", "HashMap"],
  example1: "Input: nums = [2,7,11,15], target = 9 Output: [0,1]",
  example2: "Input: nums = [3,2,4], target = 6 Output: [1,2]",
  example3: "Input: nums = [3,3], target = 6 Output: [0,1]",
});
problems.set(3, {
  problemID: 3,
  summary: "Valid Palindrome",
  problem:
    "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers. Given a string s, return true if it is a palindrome, or false otherwise.",
  categories: ["Array", "Two Pointers"],
  example1: 'Input: s = "A man, a plan, a canal: Panama"    Output: true',
  example2: 'Input: s = "race a car"   Output: false',
  example3: 'Input: s = " "    Output: true',
});
problems.set(4, {
  problemID: 4,
  summary: "Valid parentheses",
  categories: ["Stack", "String"],
  problem:
    "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.  /n input string is valid if: /n Open brackets must be closed by the same type of brackets. Open brackets must be closed in the correct order. Every close bracket has a corresponding open bracket of the same type.",
  example1: "Input: s = '()' Output: true",
  example2: "Input: s = '()[]{}' Output: true",
  example3: "Input: s = '(]' Output: false",
});
problems.set(5, {
  problemID: 5,
  summary: "Buy and Sell Stock",
  categories: ["Sliding window", "Array"],
  problem:
    "You are given an array prices where prices[i] is the price of a given stock on the i-th day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.",
  example1: "Input: prices = [10,1,5,6,7,1]  Output: 6",
  example2: "Input: prices = [10,8,7,5,2]  Output: 0",
});
problems.set(6, {
  problemID: 6,
  summary: "Longest Palindromic Substring",
  categories: ["Array", "Sliding window"],
  problem:
    "Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.",
  example1: "Input: s = 'babad' Output: 5",
  example2: "Input: s = 'cbbd' Output: 1",
  example3: "Input: s = 'abcdef' Output: 0",
});
problems.set(7, {
  problemID: 7,
  summary: "Meeting Schedule",
  problem:
    "Given an array of meeting time intervals, find the minimum number of conference rooms required.",
  categories: ["Array", "Sliding window"],
  example1: "Input: intervals = [[0, 30],[5, 10],[15, 20]] Output: 2",
  example2: "Input: intervals = [[7,10],[2,4]] Output: 1",
});
problems.set(8, {
  problemID: 8,
  summary: "Last Stone Weight",
  problem: `
  You are given an array of integers stones where stones[i] represents the weight of the ith stone.

  We want to run a simulation on the stones as follows:

  At each step we choose the two heaviest stones, with weight x and y and smash them togethers
  If x == y, both stones are destroyed
  If x < y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
  Continue the simulation until there is no more than one stone remaining.

  Return the weight of the last remaining stone or return 0 if none remain.`,
  categories: ["Heap"],
  example1: "Input: stones = [2,3,6,2,4]  Output: 1",
  example2: "Input: stones = [1,2] Output: 1",
});
problems.set(9, {
  problemID: 9,
  summary: "Task Scheduler",
  categories: ["Heap"],
  problem:  `
  You are given an array of CPU tasks tasks, where tasks[i] is an uppercase english character from A to Z. You are also given an integer n.

  Each CPU cycle allows the completion of a single task, and tasks may be completed in any order.

  The only constraint is that identical tasks must be separated by at least n CPU cycles, to cooldown the CPU.

  Return the minimum number of CPU cycles required to complete all tasks.`,
  example1: 'Input: tasks = ["X","X","Y","Y"], n = 2   Output: 5',
  example2: 'Input: tasks = ["A","A","A","B","C"], n = 3   Output: 9',
});
problems.set(10,{
  problemID: 10,
  summary: "Maximize Distance to Closest Person",
  categories: ["Array"],
  problem:  `
  You are given an array representing a row of seats where seats[i] = 1 represents a person sitting in the ith seat, and seats[i] = 0 represents that the ith seat is empty (0-indexed).

  There is at least one empty seat, and at least one person sitting.

  Alex wants to sit in the seat such that the distance between him and the closest person to him is maximized. 

  Return that maximum distance to the closest person.`,
  example1: 'Input: seats = [1,0,0,0,1,0,1]  Output: 2',
  example2: 'Input: seats = [1,0,0,0]   Output: 3',
});
problems.set(11,{
  problemID: 11,
  summary: "Reorganize String",
  categories: ["Heap"],
  problem:  `
  Given a string s, rearrange the characters of s so that any two adjacent characters are not the same.

  Return any possible rearrangement of s or return "" if not possible.`,
  example1: 'Input: s = "aab"   Output: "aba"',
  example2: 'Input: s = "aaab"   Output: ""',
});

export default problems;
