class Employee:
    def __init__(self, name, salary, increment):
        self.name = name
        self.salary = salary
        self.increment = increment 

    @property
    def updated_salary(self):
        """Calculate updated salary after increment"""
        return self.salary + (self.salary * self.increment / 100)

    def __str__(self):
        return f"Employee: {self.name}, Salary: {self.salary}, Increment: {self.increment}%"


# Example 
emp1 = Employee("John", 50000, 10)
print(emp1)  
print("Updated Salary:", emp1.updated_salary)
