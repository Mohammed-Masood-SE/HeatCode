//let invalidQnCounter = 10000 // inclusive

let questions = [
    {
        leetNumber:217,
        leetLink:"https://leetcode.com/problems/contains-duplicate/description/",
        difficulty:"Easy",
        questionName:"Contains Duplicate",
        question:"Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
        answer:`def containsDuplicate(nums):
        map = {}
        for i in nums:
            if i in map:
                return True 
            else:
                map[i] = 1
        return False`,
        tip:"Use a map to find if number exists in map"
    },
    {
        leetNumber:242,
        leetLink:"https://leetcode.com/problems/valid-anagram/description/",
        difficulty:"Easy",
        questionName:"Valid Anagram",
        question:"Given two strings s and t, return true if t is an anagram of s, and false otherwise.An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.",
        answer:`def isAnagram(s,t):
        if len(s) != len(t):
            return False 
        mapS = {}
        for i in s:
            if i in mapS:
                mapS[i] += 1
            else:
                mapS[i] = 1
        
        mapT = {}
        for i in t:
            if i in mapT:
                mapT[i] += 1
            else:
                mapT[i] = 1
        
        for i in mapS:
            if i in mapS and i in mapT:
                if mapS[i] != mapT[i]:
                    return False 
            else:
                return False
        return True`,
        tip:"Use 2 maps to see if equal amount of letters exist in both maps"
    },
    {
        leetNumber:1,
        leetLink:"https://leetcode.com/problems/two-sum/description/",
        difficulty:"Easy",
        questionName:"Two Sum",
        question:"Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
        answer:`def twoSum(nums, target):
        diffMap = {}
        for i in range(len(nums)):
            diff = target-nums[i] 
            if diff in diffMap:
                return [diffMap[diff],i]
            else:
                diffMap[nums[i]] = i`,
        tip:"Use a map that stores the difference (target - nums[i])"
    },
    {
        leetNumber:49,
        leetLink:"https://leetcode.com/problems/group-anagrams/description/",
        difficulty:"Medium",
        questionName:"Group Anagrams",
        question:"Given an array of strings strs, group the anagrams together. You can return the answer in any order. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.",
        answer:`def groupAnagrams(strs):
        map = {}
        for i in strs:
            sortedStr = ''.join(sorted(i))
            if sortedStr not in map:
                map[sortedStr] = [i]
            else:
                map[sortedStr].append(i)
        
        return list(map.values())`,
        tip:"Sort each word , and store in a map , ex : {'aet':[eat,tea]}"
    },
    {
        leetNumber:347,
        leetLink:"https://leetcode.com/problems/top-k-frequent-elements/description/",
        difficulty:"Medium",
        questionName:"Top K Frequent Elements",
        question:"Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.",
        answer:`def topKFrequent(nums, k):
        arr = []
        freq = {}
        for i in nums:
            arr.append(False)
            if i in freq:
                freq[i] +=1
            else:
                freq[i] = 0
        
        for i in freq:
            if arr[freq[i]]:
                arr[freq[i]].append(i)
            else:
                arr[freq[i]] = [i]
        
        top = len(arr)-1
        topKArr = []
        while k > 0:
            while top>=0 and k >0 and arr[top]:
                topKArr.append(arr[top].pop())
                k-=1
            top-=1
        return topKArr`,
        tip:"Create an array of arrays of the input arr length , at each frequency of a number add it into array of arrays ex:[1,1,2,3] -> [[2,3],[1],[],[]]"
    },
    {
        leetNumber:10000,
        leetLink:"https://neetcode.io/problems/string-encode-and-decode",
        difficulty:"Medium",
        questionName:"String Encode and Decode",
        question:"Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings. Please implement encode and decode",
        answer:`def encode(strs):
        sentence = ""
        for i in strs:
            sentence += "#"+str(len(i)) + i
        return sentence
    
    def decode(sentence):
        words = []
        L = 0
        while L < len(sentence):
            while sentence[L] != "#":
                L+=1
            L+=1
            start = L
            while sentence[L] in "0123456789":
                L+=1
            number = int(sentence[start:L])
            word = ""
            for i in range(number):
                word+= sentence[L]
                L+=1
            words.append(word)
        return words`,
        tip:"You Need Help If You Looked At The Tip"
    },
    {
        leetNumber:238,
        leetLink:"https://leetcode.com/problems/product-of-array-except-self/description/",
        difficulty:"Medium",
        questionName:"Product of Array Except Self",
        question:"Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]. The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer. You must write an algorithm that runs in O(n) time and without using the division operation.",
        answer:`def productExceptSelf(nums):
        output = [1]
        #Prefix
        prefix = 1
        for i in range(0,len(nums)-1):
            prefix *= nums[i]
            output.append(prefix)
        #Postfix
        postfix = 1
        for i in range(len(nums)-1,-1,-1):
            output[i] *= postfix
            postfix *= nums[i]
        return output`,
        tip:"Compute prefix , Compute postfix Done."
    },
    {
        leetNumber:36,
        leetLink:"https://leetcode.com/problems/valid-sudoku/description/",
        difficulty:"Medium",
        questionName:"Valid Sudoku",
        question:`Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
        1.Each row must contain the digits 1-9 without repetition.
        2.Each column must contain the digits 1-9 without repetition.
        3.Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
        Note:
        A Sudoku board (partially filled) could be valid but is not necessarily solvable.
        Only the filled cells need to be validated according to the mentioned rules.`,
        answer:`def isValidSudoku(board):
        rows = {i : {} for i in range(9)}
        cols = {i : {} for i in range(9)}
        squares = {(i,j): {} for i in range(3) for j in range(3)}
    
        for r in range(9):
            for c in range(9):
                if board[r][c] == ".":
                    continue
                if (board[r][c] in rows[r] or
                    board[r][c] in cols[c] or
                    board[r][c] in squares[(r//3,c//3)]):
                    return False
                rows[r][board[r][c]] = 1
                cols[c][board[r][c]] = 1
                squares[(r//3,c//3)][board[r][c]] = 1
        
        return True`,
        tip:"i // 3"
    },
]

export default questions