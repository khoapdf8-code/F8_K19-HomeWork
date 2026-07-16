import { v4 as uuidv4 } from 'uuid';


//Observer Pattern Interfaces
export interface Observer {
  readonly id: string;
  receiveNoti(message: string): void;
}

export interface Subject {
  attach(observer: Observer): void;
  detach(id: string): void;
  notify(id: string, message: string): void;
}


//Entities (classes)
export class Customer {
  public readonly id: string;
  public name: string;
  public tax: string;
  public address: string;

  constructor(name: string, tax: string, address: string, id?: string) {
    this.id = id ?? uuidv4();
    this.name = name;
    this.tax = tax;
    this.address = address;
  }
}

export class Employee implements Observer {
  public readonly id: string;
  public name: string;

  constructor(name: string, id?: string) {
    this.id = id ?? uuidv4();
    this.name = name;
  }

  public receiveNoti(message: string): void {
    console.log(`[${this.id}] - [${this.name}] received notification: ${message}`);
  }
}

export class Project {
  public readonly id: string;
  public customerId: string;
  public employeeId: string;

  constructor(customerId: string, employeeId: string, id?: string) {
    this.id = id ?? uuidv4();
    this.customerId = customerId;
    this.employeeId = employeeId;
  }
}

//Services - use Singleton Pattern
export class CustomerService {
  private static instance: CustomerService | null = null;
  private customers: Customer[] = [];

  private constructor() {}

  public static getInstance(): CustomerService {
    if (!CustomerService.instance) {
      CustomerService.instance = new CustomerService();
    }
    return CustomerService.instance;
  }

  // Clear for testing purposes
  public clear(): void {
    this.customers = [];
  }

  public create(customer: Omit<Customer, "id">): Customer {
    const newCustomer = new Customer(customer.name, customer.tax, customer.address);
    this.customers.push(newCustomer);
    return newCustomer;
  }

  public updateById(id: string, data: Partial<Customer>): Customer | null {
    const customer = this.customers.find(c => c.id === id);
    if (!customer) return null;

    if (data.name !== undefined) customer.name = data.name;
    if (data.tax !== undefined) customer.tax = data.tax;
    if (data.address !== undefined) customer.address = data.address;

    return customer;
  }
}

export class EmployeeService {
  private static instance: EmployeeService | null = null;
  private employees: Employee[] = [];

  private constructor() {}

  public static getInstance(): EmployeeService {
    if (!EmployeeService.instance) {
      EmployeeService.instance = new EmployeeService();
    }
    return EmployeeService.instance;
  }

  // Clear for testing purposes
  public clear(): void {
    this.employees = [];
  }

  public create(employee: Omit<Employee, "id" | "receiveNoti">): Employee {
    const newEmployee = new Employee(employee.name);
    this.employees.push(newEmployee);
    return newEmployee;
  }

  public findById(id: string): Employee | null {
    return this.employees.find(e => e.id === id) ?? null;
  }

  public updateById(id: string, data: Partial<Omit<Employee, "receiveNoti">>): Employee | null {
    const employee = this.findById(id);
    if (!employee) return null;

    if (data.name !== undefined) {
      employee.name = data.name;
    }

    return employee;
  }
}

export class ProjectService implements Subject {
  private static instance: ProjectService | null = null;
  private projects: Project[] = [];
  private employeeService: EmployeeService;
  
  // List of attached observers
  private observers: Observer[] = [];

  // Dependency Injection through Constructor
  private constructor(employeeService: EmployeeService) {
    this.employeeService = employeeService;
  }

  public static getInstance(employeeService: EmployeeService): ProjectService {
    if (!ProjectService.instance) {
      ProjectService.instance = new ProjectService(employeeService);
    }
    return ProjectService.instance;
  }

  // Clear for testing purposes
  public clear(): void {
    this.projects = [];
    this.observers = [];
  }

  // Observer Pattern methods
  public attach(observer: Observer): void {
    if (!this.observers.some(obs => obs.id === observer.id)) {
      this.observers.push(observer);
    }
  }

  public detach(id: string): void {
    this.observers = this.observers.filter(obs => obs.id !== id);
  }

  public notify(id: string, message: string): void {
    const observer = this.observers.find(obs => obs.id === id);
    if (observer) {
      observer.receiveNoti(message);
    }
  }

  // CRUD Business operations
  public create(project: Omit<Project, "id">): Project {
    const newProject = new Project(project.customerId, project.employeeId);
    this.projects.push(newProject);

    // Look up employee and register as observer, then notify
    const employee = this.employeeService.findById(project.employeeId);
    if (employee) {
      this.attach(employee);
      this.notify(project.employeeId, "Bạn vừa được gán vào dự án mới.");
    }

    return newProject;
  }

  public updateById(id: string, data: Partial<Project>): Project | null {
    const project = this.projects.find(p => p.id === id);
    if (!project) return null;

    const oldEmployeeId = project.employeeId;

    // Update fields
    if (data.customerId !== undefined) project.customerId = data.customerId;
    if (data.employeeId !== undefined) project.employeeId = data.employeeId;

    // Notify if employee changed
    if (data.employeeId !== undefined && data.employeeId !== oldEmployeeId) {
      const newEmployee = this.employeeService.findById(data.employeeId);
      if (newEmployee) {
        this.attach(newEmployee);
        this.notify(data.employeeId, "Bạn đã được chuyển giao phụ trách dự án này.");
      }
    }

    return project;
  }
}

// ==========================================
// 3. TEST CASES RUNNER (HUMAN-STYLE LOGS)
// ==========================================

function runTests() {
  const customerService = CustomerService.getInstance();
  const employeeService = EmployeeService.getInstance();
  const projectService = ProjectService.getInstance(employeeService);

  // Clear services before running
  customerService.clear();
  employeeService.clear();
  projectService.clear();

  console.log("================= RUNNING TESTS =================");

  // Test Case 1: Tạo Customer
  console.log("\n--- Test Case 1: Tạo Customer ---");
  const customer = customerService.create({
    name: "Công ty Cổ phần F8",
    tax: "0109123456",
    address: "Tòa nhà F8, Hà Nội"
  });
  console.log("Customer created successfully:", customer);
  console.log("Has automatic ID?", customer.id !== undefined);

  // Test Case 2: Cập nhật Customer
  console.log("\n--- Test Case 2: Cập nhật Customer ---");
  const updatedCustomer = customerService.updateById(customer.id, {
    address: "Số 8 Tôn Thất Thuyết, Cầu Giấy, Hà Nội"
  });
  console.log("Customer updated address:", updatedCustomer);

  // Test Case 3: Tạo Employee
  console.log("\n--- Test Case 3: Tạo Employee ---");
  const emp1 = employeeService.create({ name: "Đăng Khoa" });
  const emp2 = employeeService.create({ name: "Bảo Trâm" });
  console.log("Employee 1:", emp1);
  console.log("Employee 2:", emp2);
  console.log("Are IDs different?", emp1.id !== emp2.id);

  // Test Case 4: Tìm Employee
  console.log("\n--- Test Case 4: Tìm Employee ---");
  const foundEmp = employeeService.findById(emp1.id);
  console.log("Found Employee 1:", foundEmp);
  const notFoundEmp = employeeService.findById("non-existent-id");
  console.log("Finding non-existent employee:", notFoundEmp); // expected: null

  // Test Case 5: Tạo Project
  console.log("\n--- Test Case 5: Tạo Project ---");
  console.log("Creating project and assigning to Employee 1...");
  const project = projectService.create({
    customerId: customer.id,
    employeeId: emp1.id
  });
  console.log("Project created:", project);

  // Test Case 6: Đổi nhân viên phụ trách Project
  console.log("\n--- Test Case 6: Đổi nhân viên phụ trách Project ---");
  console.log("Updating project assignment to Employee 2...");
  const updatedProject = projectService.updateById(project.id, {
    employeeId: emp2.id
  });
  console.log("Project updated:", updatedProject);

  // Test Case 7: Cập nhật Project nhưng không đổi Employee
  console.log("\n--- Test Case 7: Cập nhật Project nhưng không đổi Employee ---");
  console.log("Updating customerId only (should NOT trigger receiveNoti)...");
  const updatedProject2 = projectService.updateById(project.id, {
    customerId: "new-customer-id-999"
  });
  console.log("Project updated (no notification expected):", updatedProject2);

  // Test Case 8: Cập nhật dữ liệu không tồn tại
  console.log("\n--- Test Case 8: Cập nhật dữ liệu không tồn tại ---");
  const fakeId = "00000000-0000-0000-0000-000000000000";
  console.log("Update fake Customer:", customerService.updateById(fakeId, { name: "Fake" }));
  console.log("Update fake Employee:", employeeService.updateById(fakeId, { name: "Fake" }));
  console.log("Update fake Project:", projectService.updateById(fakeId, { customerId: fakeId }));

  // Test Case 9: Tạo Project với employeeId không tồn tại
  console.log("\n--- Test Case 9: Tạo Project với employeeId không tồn tại ---");
  console.log("Creating project with non-existent employee ID...");
  const projectFakeEmp = projectService.create({
    customerId: customer.id,
    employeeId: "fake-employee-id-uuid"
  });
  console.log("Project created (no error, no notification):", projectFakeEmp);
  console.log("\n=================================================");
}

// Run the test runner
runTests();
