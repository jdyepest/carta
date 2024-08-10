class BankAccount:
    def __init__(self, account_holder, initial_balance=0):
        """
        Constructor to initialize a bank account.

        :param account_holder: str - Name of the account holder
        :param initial_balance: float - Initial balance of the account
        """
        self.account_holder = account_holder
        self.balance = initial_balance

    def deposit(self, amount):
        """
        Method to deposit money into the account.

        :param amount: float - Amount to deposit
        :return: None
        """
        if amount > 0:
            self.balance += amount
            print(f"Deposited {amount:.2f}. New balance is {self.balance:.2f}.")
        else:
            print("Deposit amount must be positive.")

    def withdraw(self, amount):
        """
        Method to withdraw money from the account.

        :param amount: float - Amount to withdraw
        :return: None
        """
        if 0 < amount <= self.balance:
            self.balance -= amount
            print(f"Withdrew {amount:.2f}. New balance is {self.balance:.2f}.")
        else:
            print("Invalid withdrawal amount or insufficient funds.")

    def check_balance(self):
        """
        Method to check the current balance of the account.

        :return: float - Current balance
        """
        print(f"The current balance is {self.balance:.2f}.")
        return self.balance


