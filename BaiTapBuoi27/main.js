//API URL
const API_URL = "http://localhost:3000/customers";

let customers = [];
let editingId = null;

const tableBody = document.getElementById('customer-table-body');

const popupToggle = document.getElementById('popup-toggle');
const popupTitle = document.getElementById('popup-title');
const companyNameInput = document.getElementById('company-name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const taxIdInput = document.getElementById('tax-id');
const addressInput = document.getElementById('address');

const btnSave = document.getElementById('btn-save');
const searchInput = document.querySelector('.search-input');


//Formatting badge
function getStatusBadge(status) {
    const statusText = status || 'Pending';
    switch (statusText.toLowerCase()) {
        case 'active':
            return `<span class="badge badge-active">Kích hoạt</span>`;
        case 'inactive':
            return `<span class="badge" style="background-color: var(--danger-bg); color: var(--danger);">Khóa</span>`;
        default:
            return `<span class="badge" style="background-color: #f1f5f9; color: var(--text-muted);">Chờ duyệt</span>`;
    }
}
//Data render
function renderCustomers(data) {
    if (data.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="7" style="text-align: center; color: var(--text-muted); padding: 32px;">
                    Không tìm thấy khách hàng nào.
                </td>
            </tr>`;
        return; //base case
    }
    tableBody.innerHTML = data.map(cust => `
        <tr>
            <td style="font-weight: 500;">${cust.id}</td>
            <td>
                <div class="customer-info">
                    <span class="customer-name">${cust.companyName}</span>
                    <span class="customer-email">${cust.email || '—'}</span>
                </div>
            </td>
            <td>${cust.phone || '—'}</td>
            <td>${cust.taxId || '—'}</td>
            <td>${cust.address || '—'}</td>
            <td>${getStatusBadge(cust.status)}</td>
            <td class="actions">
                <span class="action-icon edit-btn" data-id="${cust.id}" title="Chỉnh sửa">✎</span>
                <span class="action-icon delete delete-btn" data-id="${cust.id}" title="Xóa">🗑</span>
            </td>
        </tr>
    `).join('')
    // Sau khi render xong, chúng ta đăng ký sự kiện click cho nút Sửa và Xóa vừa tạo
    registerRowEvents();
}
async function fetchCustomers() {
    try {
        const respone = await fetch(API_URL);
        if (!respone.ok) throw new Error('Cannot fetch data');
        customers = await respone.json();
        renderCustomers(customers);

    } catch (error) {
        console.error('Failed when fetch data', error);
        alert('Some thing goes wrong');

    }

}

//Reset input form
function resetForm() {
    companyNameInput.value = ''
    emailInput.value = '';
    phoneInput.value = '';
    taxIdInput.value = '';
    addressInput.value = '';
    editingId = null;
    popupTitle.textContent = 'Customer Details';
}

//Open/close popup 
function openPopup() {
    popupToggle.checked = true;
}

function closePopup() {
    popupToggle.checked = false;
    resetForm(); //call reset
}
// Theo dõi nếu người dùng tắt popup bằng cách click ra ngoài hoặc bấm Cancel
popupToggle.addEventListener('change', (e) => {
    if (!e.target.checked) {
        resetForm();
    }
});

//Click save customer
//1. Read form and check validation basic
//2. Check editingId, if null => post, else put or patch along with editingId
btnSave.addEventListener('click', async () => {
    const companyName = companyNameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const taxId = taxIdInput.value.trim();
    const address = addressInput.value.trim();

    //Basic validate
    if (!companyName) {
        alert('Please fullfill the company name');
        companyNameInput.focus();
        return;
    }
    const payload = {
        companyName,
        email,
        phone,
        taxId,
        address,
        status: editingId ? (customers.find(c => c.id === editingId)?.status || 'Active') : 'Active'
        // Giữ nguyên trạng thái nếu đang sửa, hoặc đặt mặc định là 'Active' nếu thêm mới
    };
    try {
        if (editingId) {
            //Update
            const respone = await fetch(`${API_URL}/${editingId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...payload, id: editingId })
            });
            if (!respone.ok) throw new Error('Update failed');
            alert('Updating Successfully');

        }
        else {
            //Create
            const newId = `CUST-${String(Date.now()).slice(-3)}`;
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...payload, id: newId })
            });
            if (!response.ok) throw new Error('Thêm mới thất bại');
            alert('Thêm mới khách hàng thành công!');
        }
        closePopup();
        fetchCustomers(); // Tải lại danh sách mới
    }
    catch (error) {
        console.error('Lỗi khi lưu thông tin:', error);
        alert('Không thể lưu thông tin khách hàng. Vui lòng kiểm tra lại.');
    }

});

function registerRowEvents() {
    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            const targetCustomer = customers.find(c => c.id === id);
            if (targetCustomer) {
                // Điền dữ liệu vào form
                companyNameInput.value = targetCustomer.companyName;
                emailInput.value = targetCustomer.email || '';
                phoneInput.value = targetCustomer.phone || '';
                taxIdInput.value = targetCustomer.taxId || '';
                addressInput.value = targetCustomer.address || '';

                // Đánh dấu id đang chỉnh sửa
                editingId = id;
                // Thay đổi tiêu đề Popup và mở Popup lên
                popupTitle.textContent = 'Cập nhật thông tin khách hàng';
                openPopup();
            }
        });

    });
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', async () => {
            const id = btn.getAttribute('data-id');
            const targetCustomer = customers.find(c => c.id === id);
            if (confirm(`Bạn có chắc chắn muốn xóa khách hàng "${targetCustomer?.companyName || id}" không?`)) {
                try {
                    const response = await fetch(`${API_URL}/${id}`, {
                        method: 'DELETE'
                    });
                    if (!response.ok) throw new Error('Xóa thất bại');
                    alert('Đã xóa khách hàng thành công!');
                    fetchCustomers(); // Tải lại danh sách
                } catch (error) {
                    console.error('Lỗi khi xóa:', error);
                    alert('Có lỗi xảy ra khi xóa khách hàng.');
                }
            }
        });
    });
}
searchInput.addEventListener('input', (e) => {
    const keyword = e.target.value.toLowerCase().trim();

    // Lọc theo Tên công ty, Email hoặc Số điện thoại
    const filtered = customers.filter(cust => {
        return (
            cust.companyName.toLowerCase().includes(keyword) ||
            (cust.email && cust.email.toLowerCase().includes(keyword)) ||
            (cust.phone && cust.phone.includes(keyword))
        );
    });

    renderCustomers(filtered);
});


// Khởi chạy khi tài liệu được tải xong
document.addEventListener('DOMContentLoaded', () => {
    fetchCustomers();
});
