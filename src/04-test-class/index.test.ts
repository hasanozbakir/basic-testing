// Uncomment the code below and write your tests
import { getBankAccount, InsufficientFundsError, SynchronizationFailedError, TransferFailedError } from '.';

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    // Write your test here
    const account = getBankAccount(100);
    expect(account.getBalance()).toBe(100);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    // Write your test here
    const account = getBankAccount(100);
    expect(() => account.withdraw(200)).toThrow(InsufficientFundsError);
    
  });

  test('should throw error when transferring more than balance', () => {
    // Write your test here
    const account = getBankAccount(100);
    const anotherAccount = getBankAccount(50);
    expect(() => account.transfer(200, anotherAccount)).toThrow(InsufficientFundsError);
    
  });

  test('should throw error when transferring to the same account', () => {
    // Write your test here
    const account = getBankAccount(100);
    expect(() => account.transfer(50, account)).toThrow(TransferFailedError);    
  });

  test('should deposit money', () => {
    // Write your test here
    const account = getBankAccount(100);
    account.deposit(20);
    expect(account.getBalance()).toBe(120);
    
  });

  test('should withdraw money', () => {
    // Write your test here
    const account = getBankAccount(100);
    account.withdraw(30);
    expect(account.getBalance()).toBe(70);
  });

  test('should transfer money', () => {
    // Write your test here
    const account = getBankAccount(100);
    const anotherAccount = getBankAccount(100);
    account.transfer(50, anotherAccount);
    expect(account.getBalance()).toBe(50);
    expect(anotherAccount.getBalance()).toBe(150);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    // Write your tests here
    const account = getBankAccount(100);
    jest.spyOn(account, 'fetchBalance').mockResolvedValue(100); 
    await expect(account.fetchBalance()).resolves.toBe(100);
  });

  test('should set new balance if fetchBalance returned number', async () => {
    // Write your tests here
    const account = getBankAccount(100);
    jest.spyOn(account, 'fetchBalance').mockResolvedValue(200);
    await account.synchronizeBalance();
    expect(account.getBalance()).toBe(200);
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    // Write your tests here
    const account = getBankAccount(100);
    jest.spyOn(account, 'fetchBalance').mockResolvedValue(null); 
    await expect(account.synchronizeBalance()).rejects.toThrow(SynchronizationFailedError);
  });
});
