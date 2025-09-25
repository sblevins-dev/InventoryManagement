import { Component, OnInit } from '@angular/core';

export interface Supplier {
  id: string;
  name: string;
  contactName: string;
  phone: string;
  email: string;
  preferred: boolean;
  notes?: string;
}

export const SUPPLIERS: Supplier[] = [
  {
    id: 'SUP-001',
    name: 'Acme Supplies',
    contactName: 'John Doe',
    phone: '555-123-4567',
    email: 'john.doe@acmesupplies.com',
    preferred: true,
    notes: 'Reliable and fast delivery'
  },
  {
    id: 'SUP-002',
    name: 'Global Parts',
    contactName: 'Jane Smith',
    phone: '555-987-6543',
    email: 'jane.smith@globalparts.com',
    preferred: false,
    notes: 'Occasional delays'
  },
  {
    id: 'SUP-003',
    name: 'SupplyCo',
    contactName: 'Mike Johnson',
    phone: '555-555-1212',
    email: 'mike@supplyco.com',
    preferred: true
  }
];


@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrl: './suppliers.component.css'
})
export class SuppliersComponent implements OnInit {
  suppliers = SUPPLIERS;

  ngOnInit(): void {
    this.suppliers = SUPPLIERS;
  }
}
