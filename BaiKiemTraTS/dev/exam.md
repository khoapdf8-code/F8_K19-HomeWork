Đề bài
Mục tiêu
Xây dựng chương trình quản lý Khách hàng (Customer), Nhân viên (Employee) và Dự án (Project) bằng TypeScript.
Dữ liệu chỉ cần lưu tạm trong bộ nhớ (Array), chưa cần sử dụng cơ sở dữ liệu.

1. Xây dựng các Entity (Interface/Class)
Customer
Tạo interface hoặc class gồm các thuộc tính:
id: string (UUID, tự động sinh)
name: string
tax: string (Mã số thuế)
address: string

Employee
Tạo class gồm:
Thuộc tính
id: string (UUID, tự động sinh)
name: string
Phương thức
receiveNoti(message: string): void

Khi được gọi, phương thức này sẽ in ra console theo định dạng:
[Employee ID] - [Employee Name] received notification: [message]


Project
Tạo interface hoặc class gồm:
id: string (UUID, tự động sinh)
customerId: string (ID của khách hàng)
employeeId: string (ID của nhân viên phụ trách)

2. Xây dựng các Service
Mỗi Service sẽ tự quản lý dữ liệu bằng một mảng (Array).
CustomerService
create(customer: Omit<Customer, "id">): Customer
Tạo mới khách hàng.
Tự động sinh id.
Trả về Customer vừa tạo.
updateById(id: string, data: Partial): Customer | null
Tìm khách hàng theo id.
Cập nhật các thông tin được truyền vào.
Nếu không tìm thấy thì trả về null.

EmployeeService
create(employee: Omit<Employee, "id" | "receiveNoti">): Employee
Tạo mới nhân viên.
Tự động sinh id.
Trả về Employee vừa tạo.
findById(id: string): Employee | null
Tìm nhân viên theo id.
Nếu tìm thấy thì trả về Employee.
Nếu không tìm thấy thì trả về null.
updateById(id: string, data: Partial): Employee | null
Tìm nhân viên theo id.
Cập nhật thông tin.
Nếu không tìm thấy thì trả về null.

ProjectService
ProjectService phải nhận EmployeeService thông qua constructor (Dependency Injection).
create(project: Omit<Project, "id">): Project
Tạo mới Project.
Tự động sinh id.
Lưu vào danh sách.
Tìm nhân viên phụ trách bằng employeeId.
Nếu tìm thấy, gọi:
employee.receiveNoti("Bạn vừa được gán vào dự án mới.");

updateById(id: string, data: Partial): Project | null
Tìm Project theo id.
Cập nhật thông tin.
Nếu có thay đổi employeeId:
Tìm nhân viên mới.
Nếu tìm thấy, gọi:
employee.receiveNoti("Bạn đã được chuyển giao phụ trách dự án này.");

Nếu không tìm thấy Project thì trả về null.

3. Yêu cầu kỹ thuật
Sử dụng TypeScript với strict mode.
Khai báo đầy đủ kiểu dữ liệu cho thuộc tính, tham số và kiểu trả về của tất cả các hàm.
Dữ liệu chỉ lưu trong bộ nhớ bằng Array.
id phải được tự động sinh bằng UUID.

4. Test Case
Sau khi hoàn thành, hãy viết đoạn code kiểm thử để thực hiện các trường hợp sau:
Test Case 1: Tạo Customer
Tạo một Customer mới.
Kiểm tra Customer được tạo thành công và có id.

Test Case 2: Cập nhật Customer
Cập nhật địa chỉ của Customer.
Kiểm tra dữ liệu đã được cập nhật.

Test Case 3: Tạo Employee
Tạo 2 Employee.
Kiểm tra mỗi Employee có id khác nhau.

Test Case 4: Tìm Employee
Tìm Employee theo id.
Trả về đúng Employee.
Thử tìm với id không tồn tại, kết quả phải là null.

Test Case 5: Tạo Project
Tạo một Project với customerId và employeeId hợp lệ.
Kiểm tra Project được tạo thành công.
Kiểm tra console hiển thị thông báo:
[Employee ID] - [Employee Name] received notification: Bạn vừa được gán vào dự án mới.


Test Case 6: Đổi nhân viên phụ trách Project
Cập nhật employeeId sang một Employee khác.
Kiểm tra Project được cập nhật.
Kiểm tra Employee mới nhận được thông báo:
[Employee ID] - [Employee Name] received notification: Bạn đã được chuyển giao phụ trách dự án này.


Test Case 7: Cập nhật Project nhưng không đổi Employee
Chỉ cập nhật customerId.
Không được gọi receiveNoti().

Test Case 8: Cập nhật dữ liệu không tồn tại
Thực hiện các thao tác sau với một id không tồn tại:
CustomerService.updateById()
EmployeeService.updateById()
ProjectService.updateById()
Kết quả mong đợi:
null


Test Case 9 (Khuyến khích)
Tạo Project với employeeId không tồn tại.
Kết quả mong đợi:
Project vẫn được tạo (nếu không yêu cầu validate).
Không phát sinh lỗi.
Không có thông báo được gửi tới Employee.

