def factorial_r(n):
    if n >= 1:
        return n * factorial_r(n-1)
    else:
        return 1

def factorial(n):
    total = 1

    while(n):
        total *= n
        n -= 1
    
    return total


print("Recursive ",factorial_r(5))
print("Iterable ",factorial(5))
