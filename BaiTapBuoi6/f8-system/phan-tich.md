Câu 1: Selector nào có độ ưu tiên cao nhất trong CSS?
Trong CSS Inline style có độ ưu tiên cao nhất.


Câu 2: Nếu một phần tử HTML có cả h1, .title, và #main cùng set color — selector nào thắng? Tại sao?
Selector #main (ID selector) sẽ thắng.
Tại sao? Vì theo hệ thống tính điểm Specificity của CSS:
Tag selector (h1) có điểm là: 1
Class selector (.title) có điểm là: 10
ID selector (#main) có điểm là: 100
Điểm của ID là cao nhất trong 3 loại này, do đó trình duyệt sẽ ưu tiên áp dụng màu được set trong #main.

Câu 3: Nếu bạn thêm style="color: pink" trực tiếp vào phần tử ở Câu 2, kết quả thay đổi như thế nào?
Kết quả chữ sẽ đổi thành màu hồng (pink).


Câu 4: Tại sao theme.css có thể override style từ base.css? Điều kiện để override thành công là gì?
theme.css có thể override được base.css là nhờ vào tính Cascading (Xếp chồng) của CSS. Khi hai selector có cùng độ ưu tiên (cùng điểm Specificity), quy tắc nào được trình duyệt đọc sau cùng sẽ chiến thắng.
Điều kiện để override thành công:

Thẻ <link href="css/theme.css"> phải được đặt bên dưới (sau) thẻ <link href="css/base.css"> trong phần <head> của file HTML.

Selector được viết trong theme.css phải có điểm Specificity lớn hơn hoặc bằng selector tương ứng ở base.css.

Câu 5: Trong project của bạn, có hai phần tử đều dùng class .title nhưng hiển thị màu khác nhau. Giải thích tại sao.
Hai phần tử dùng chung class .title nhưng có màu khác nhau là do chúng chịu tác động của các Selector khác có độ ưu tiên cao hơn, hoặc kết hợp bộ chọn khác nhau.
Ví dụ ở trang HOME:

Thẻ <h1 class="title" id="main"> sẽ mang màu của #main vì ID (điểm 100) mạnh hơn Class .title (điểm 10).

Thẻ <h2 class="title"> không có ID, nên nó sẽ nhận màu của class .title.

Câu 6: Phần tử nào trong project của bạn có CSS phức tạp nhất? Liệt kê các selector tác động lên nó và giải thích selector nào thắng cuối cùng.
Phần tử có CSS phức tạp nhất nằm ở trang DASHBOARD (dashboard/index.html), cụ thể là phần tử:
<h1 class="title" id="special" style="color: blue">DASHBOARD</h1>

Các selector tác động lên phần tử này bao gồm:

Tag selector: h1 (trong External CSS base.css)

Class selector: .title (trong External CSS base.css và theme.css)

ID selector: #special (trong External CSS base.css và theme.css)

Internal CSS: Được viết trong cặp thẻ <style> của chính file dashboard/index.html (chứa các bộ chọn nhắm vào h1, .title, #special).

Inline style: style="color: blue" viết trực tiếp trên thẻ.

Selector thắng cuối cùng:
Inline style sẽ là người chiến thắng cuối cùng và quyết định màu sắc của chữ DASHBOARD. Mặc dù phần tử bị bủa vây bởi Internal CSS, External CSS, ID và Class, nhưng điểm Specificity của Inline Style 1000 là quyền lực tuyệt đối, đè bẹp hoàn toàn tất cả các selector còn lại.