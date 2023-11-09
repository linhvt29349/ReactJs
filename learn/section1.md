1. React (ReactJs) là bộ thư viện viets bằng ngôn ngữ JavaScript dùng để phát triển các ứng dụng UI(User interface) được phát triển bởi các lập trình viên Facebook
- React có thể chạy được cả trên môi trường client lẫn server
- Khác nhau giữa React và React Native
    + React: - Xây dựng các ứng dụng sử dụng JavaScript
            - Sử dụng HTML và luồng cú pháp của nó
            - Hoạt đọng tốt với CSS để tạo biểu và hoạt ảnh
    + React Native: - Xây duengj các ứng dụng di động đa nền tảng như: android, ios
                    - Sử dụng cú pháp React Native
                    - Sử dụng API động để tạo hoạt ảnh cho các thành phần của ứng dụng
2. JSX (Javascript XML) là cú pháp mở rộng cho JavaScript viết theo kiểu XML
    - Sử dụng JSX để React để mô tả UI
    - JSX cho phép kết nối HTML và JS trong cùng 1 source
    - Kiểu XML là ngôn ngữ đánh dấu mở rộng. XML có chức năng truyền dữ liệu và mô tả nhiều loại dữ liệu khác nhau. Tác dụng chính của XML là đơn giản hóa việc chia sẻ dữ liệu giữa các nền tảng và các hệ thống được kết nối thông qua mạng Internet.

3. Component  là một khối code độc lập , có thể tái sử dụng, chia UI thành nhiều phần nhỏ
- Component được viết theo 2 loại chính:function vad class
    + Function component là:
        + 1 hàm Javascript hoặc ES6
        + trả về 1 React element 
        + nhận props làm tham số nếu cần
    + Class component là:
        + 1 class ES6
        + có thể nhận props nếu cần
        + có thể maintain data của nó với state
        + phải có 1 method render() trả về 1 React element hoặc null

4. Props là hệ thống gửi dữ liệu từ parent component đến child component
- Mục tiêu là để tùy chỉnh hoặc cấu hình child component


5. Lifecycle của mỗi component có 3 giai đoạn:
- Mounting: kết xuất JSX thành DOM
    + constructor() được tạo trước hết
    + render() bắt buộc luôn được gọi
    + componentDidMount() được gọi 1 lần trong lifecycle, được gọi sau khi component được rendered
- Updating: khi component được cập nhật
    + render() được gọi khi componet được cập nhật
    + componentDidUpdate() được gọi sau khi component được updated
- Unmounting:
    + Componet được xóa khỏi DOM
    + Kết thúc lifecycle của componet

6. This trong React
- Trong class componet: this không được định nghĩa mặc định vì vậy các function thông thường this không còn là object

7. Uncontrolled input: giống như input HTML truyền thống
- Để viết uncontrolled component
    + Không cần viết xử lý sự kiện cho mỗi lần cập nhật state(ví dụ thay đổi giá trị trong input)
    + Sử dụng ref để truy xuất giá trị của form từ DOM.
- Ref trong react có 2 bước
    + Tạo ref và gnas nó cho 1 phần tử HTML
    + Tạo 1 tham chiếu đối tượng đến ref
- Controlled component được liên kết đến 1 giá trị và nhứng thay đổi của nó sẽ được xử lý bằng cách sử dụng lệnh callblacks