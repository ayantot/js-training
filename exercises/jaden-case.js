'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */
const jadenCase = (string) => {
    return string
      .split(' ')
      .map(word => {
        return word[0].toUpperCase() + word.slice(1)
      })
      .join(' ')
  }

//* Begin of tests
const assert = require('assert')
assert.strictEqual(jadenCase("bonjour bienvenue chez nous"), "Bonjour Bienvenue Chez Nous")
// End of tests */
