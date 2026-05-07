# Giải bài tập buổi 18

## Bài 1: 

### Đoạn code bài toán

```javascript
const student = {
  name: 'hoang',
  parent: {
    name: 'bo hoang'
  }
}

const mentor = { ...student }

mentor.name = 'bang'
mentor.parent.name = 'bo bang'

console.log(student)
console.log(mentor)
```

### Trả lời

- `student.name` KHÔNG bị đổi (vẫn là `'hoang'`).
- `student.parent.name` CÓ bị đổi (thành `'bo bang'`).

### Giải thích

Khi sử dụng toán tử spread (`...student`), JavaScript thực hiện **Shallow Copy** (sao chép nông).

- Với `name` (giá trị nguyên thủy), nó tạo ra một bản sao độc lập.
- Với `parent` (object), nó chỉ sao chép địa chỉ ô nhớ (**Reference**).

Do đó, `student.parent` và `mentor.parent` trỏ về cùng một nơi. Khi thay đổi thuộc tính bên trong `mentor.parent`, ta đang chỉnh sửa object gốc.

## Bài 2: 
### Đoạn code bài toán

```javascript
const student = {
  name: 'hoang',
  parent: {
    name: 'bo hoang'
  }
}

const mentor = JSON.parse(JSON.stringify(student))

mentor.parent.name = 'bo bang'

console.log(student)
console.log(mentor)
```

### Trả lời

- `student.parent.name` KHÔNG bị ảnh hưởng (vẫn là `'bo hoang'`).

### Giải thích

Cách làm `JSON.parse(JSON.stringify(student))` tạo ra một **Deep Copy** (sao chép sâu).

Toàn bộ object `student` được biến thành một chuỗi văn bản, sau đó parse lại thành một object hoàn toàn mới trong bộ nhớ, cắt đứt mọi liên kết **Reference**. Vì `mentor` là một bản sao độc lập hoàn toàn, việc thay đổi nó không tác động đến `student`.

## Bài 3:

### Đoạn code bài toán

```javascript
const students = [
  { name: 'a' },
  { name: 'b' }
]

const newStudents = [...students]

newStudents[0].name = 'z'

console.log(students)
console.log(newStudents)
```

### Trả lời

- Bản thân mảng (địa chỉ của mảng mới) là độc lập.
- Phần tử bên trong CÓ bị thay đổi (`students[0].name` sẽ thành `'z'`).

### Giải thích

Toán tử spread (`[...students]`) tạo ra một mảng mới theo kiểu **Shallow Copy**.

Tuy nhiên, các phần tử bên trong mảng là các object, nên spread chỉ copy **Reference** của các object đó vào mảng mới. Do đó `newStudents[0]` và `students[0]` đều trỏ về chung object `{ name: 'a' }`. Khi chỉnh sửa, cả 2 bên đều thay đổi.

## Bài 4: 

### Đoạn code bài toán

```javascript
const user = {
  name: 'hoang',
  address: {
    city: 'HN',
    location: {
      lat: 123
    }
  }
}

const newUser = { ...user }

newUser.address.location.lat = 999

console.log(user.address.location.lat)
```

### Trả lời

- Kết quả `console.log`: `999`.

### Giải thích

`const newUser = { ...user }` chỉ thực hiện **Shallow Copy** ở cấp độ ngoài cùng.

Càng đi sâu vào trong (như thuộc tính `address` hay `location`), chúng đều là object con và chỉ được sao chép **Reference**. Cả `user` và `newUser` đều dùng chung object `address`. Do đó, lệnh gán `newUser.address.location.lat = 999` đã cập nhật trực tiếp vào bộ nhớ chung, khiến `user` cũng bị thay đổi theo.
