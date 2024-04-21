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
    }

]

export default questions