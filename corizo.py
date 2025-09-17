# Program to find the average of unknown number of inputs
numbers = [] 
print("Enter numbers one by one. Type 'q' to stop:")
while True:
    user_input = input("Enter a number (or 'q' to quit): ")
    
    if user_input.lower() == 'q':  
        break
    try:
        num = float(user_input)  
        numbers.append(num)
    except ValueError:
        print("Invalid input, please enter a number or 'q' to quit.")

if len(numbers) > 0:
    average = sum(numbers) / len(numbers)
    print(f"\nYou entered {len(numbers)} numbers.")
    print(f"Average = {average}")
else:
    print("No numbers entered.")
