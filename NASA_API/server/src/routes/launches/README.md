leetcode
check overlap


class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
        result = []

        for i in range(len(intervals)):
            if newInterval[1] < intervals[i][0]:
                result.append(newInterval)
                return result + intervals[i:]
            elif newInterval[0] > intervals[i][1]:
                result.append(intervals[i])
            else:
                newInterval =[min(newInterval[0], intervals[i][0]), max(newInterval[1], intervals[i][1])]

        result.append(newInterval)
        return result



        
class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
    from typing import List

    def is_overlap(a: List, b: List) -> bool:
        return a[0] <= b[1] and b[0] <= a[1]
    
    
    def merge_overlap(a: List[int], b: List[int]) -> List[int]:
        return [min(a[0], b[0]), max(a[1], b[1])]
    
    
    def merge(intervals: List[List[int]]) -> List[List[int]]:
        merge = [intervals[0]]
        for i in intervals[1:]:
            if is_overlap(merge[-1], i):
                merge[-1] = (merge_overlap(merge[-1], i))
            else:
                merge.append(i)
        return merge