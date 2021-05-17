# Minimum Number of Manipulations required to make two Strings
# Anagram Without Deletion of Character


# Given two strings s1 and s2, we need to find the minimum number of manipulations 
# required to make two strings anagram without deleting any character. 

# Note:- 
# The anagram strings have same set of characters, sequence of characters can be different.

# Examples: 

# Input : 
#        s1 = "aba"
#        s2 = "baa"
# Output : 0
# Explanation: Both String contains identical characters

# Input :
#        s1 = "ddcf"
#        s2 = "cedk"
# Output : 2
# Explanation : Here, we need to change two characters
# in either of the strings to make them identical. We 
# can change 'd' and 'f' in s1 or 'e' and 'k' in s2.


# Assumption: Length of both the Strings is considered similar



# Python3 Program to find minimum number
# of manipulations required to make two strings identical
 
# Counts the no of manipulations required
def countManipulations(s1, s2):
     
    count = 0
 
    # store the count of character
    char_count = [0] * 26
     
    for i in range(26):
        char_count[i] = 0
 
    # iterate though the first String
    # and update count
    for i in range(len( s1)):
        char_count[ord(s1[i]) -
                   ord('a')] += 1
 
    # iterate through the second string
    # update char_count.
    # if character is not found in
    # char_count then increase count
    for i in range(len(s2)):
        char_count[ord(s2[i]) - ord('a')] -= 1
         
    for i in range(26):
        if char_count[i] != 0:
            count += abs(char_count[i])
         
 
    return count
 
# Driver code
if __name__ == "__main__":
 
    s1 = "ddcf"
    s2 = "cedk"
     
    print(countManipulations(s1, s2))
 
# This code is contributed by ita_c
