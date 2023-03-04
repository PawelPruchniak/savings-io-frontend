export interface UserAccount {
  currency: string;
  totalBalance: number;

  subAccountsIds: string[];
}

export interface Account {
  accountId: string;
  name: string;
  description: string;
  accountType: string;
}

export interface SavingsAccount extends Account {
  currency: string;
  balance: number;
}
