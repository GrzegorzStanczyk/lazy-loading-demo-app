export interface Client {
    Id: number;
    FirstName: string;
    LastName: string;
    Company: Company;
}

export interface Company {
    Name: string;
    NIP: string;
    Address: string;
}
