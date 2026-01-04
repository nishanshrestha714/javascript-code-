
Name	Description 

at()-	Returns an indexed character from a string
charAt()-	Returns the character at a specified index (position)
charCodeAt()-	Returns the Unicode of the character at a specified index
codePointAt()-	Returns the Unicode value at an index (position) in a string
concat()-	Returns two or more joined strings
constructor	Returns the string's constructor function
endsWith()-	Returns if a string ends with a specified value
fromCharCode()-	Returns Unicode values as characters
includes()-	Returns if a string contains a specified value
indexOf()-	Returns the index (position) of the first occurrence of a value in a string
isWellFormed()-	Returns true if a string is well formed
lastIndexOf()-	Returns the index (position) of the last occurrence of a value in a string
length	Returns the length of a string
localeCompare()-	Compares two strings in the current locale
match()-	Searches a string for a value, or a regular expression, and returns the matches
matchAll()-	Searches a string for a value, or a regular expression, and returns the matches
padEnd()	-Pads a string at the end
padStart()-	Pads a string from the start
prototype	Allows you to add properties and methods to an object
repeat()-	Returns a new string with a number of copies of a string
replace()-	Searches a string for a pattern, and returns a string where the first match is replaced
replaceAll()--	Searches a string for a pattern and returns a new string where all matches are replaced
search()-	Searches a string for a value, or regular expression, and returns the index (position) of the match
slice()-	Extracts a part of a string and returns a new string
split()-	Splits a string into an array of substrings
startsWith()-Checks whether a string begins with specified characters
substr()-	Deprecated. Use substring() or slice() instead.
substring()-	Extracts characters from a string, between two specified indices (positions)
toLocaleLowerCase()-	Returns a string converted to lowercase letters, using the host's locale
toLocaleUpperCase()-	Returns a string converted to uppercase letters, using the host's locale
toLowerCase()-	Returns a string converted to lowercase letters
toString()-	Returns a string or a string object as a string
toUpperCase()-	Returns a string converted to uppercase letters
toWellFormed()-	Returns a string where "lone surrogates" are replaced with the Unicode replacement character
trim()-	Returns a string with removed whitespaces
trimEnd()-	Returns a string with removed whitespaces from the end
trimStart()--	Returns a string with removed whitespaces from the start
valueOf()-	Returns the primitive value of a string or a string object

NaN	Represents a "Not-a-Number" value
toFixed(x)	Formats a number with x numbers of digits after the decimal point
toLocaleString()	Converts a number into a string, based on the locale settings
toPrecision(x)	Formats a number to x length
toString()	Converts a number to a string
valueOf()	Returns the primitive value of a number


&	AND	Sets each bit to 1 if both bits are 1
|	OR	Sets each bit to 1 if one of two bits is 1
^	XOR	Sets each bit to 1 if only one of two bits is 1
~	NOT	Inverts all the bits
<<	Zero fill left shift	Shifts left by pushing zeros in from the right and let the leftmost bits fall off
>>	Signed right shift	Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off
>>>	Zero fill right shift	Shifts right by pushing zeros in 


 // with example 
 5 & 1	1	0101 & 0001	 0001
5 | 1	5	0101 | 0001	 0101
~ 5	10	 ~0101	 1010
5 << 1	10	0101 << 1	 1010
5 ^ 1	4	0101 ^ 0001	 0100
5 >> 1	2	0101 >> 1	 0010
5 >>> 1	2	0101 >>> 1	 0010


What is JavaScript BigInt?
BigInt is a JavaScript data type for handling and storing big integer values.

BigInt allows you to work with integers larger than the limit of Numbers.

BigInt can represent an integer of any size, limited only by available memory.