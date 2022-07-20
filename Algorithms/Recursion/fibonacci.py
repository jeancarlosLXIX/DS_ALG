#Given a number N return the index value of the Fibonacci sequence, where the sequence is:

#0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
#the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

#For example: fibonacciRecursive(6) should return 8

def fibonacci_r(n):
    if n < 2: return n

    return fibonacci_r(n-1) + fibonacci_r(n-2)

def fibonacci(index):
    first_number = 0
    second_number = 1
    if index == 0:
        return first_number
    if index == 1:
        return second_number
    for i in range(2,index +1):
        third_number = first_number + second_number
        first_number = second_number
        second_number = third_number
    return third_number



n = 6
print(fibonacci(n))
print(fibonacci_r(n))