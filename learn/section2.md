1. React Hook Form : useForm
- register: giúp đăng ký giá trị đầu vào hặc hconj và xác thực theo các biểu mẫu

- handleSubmit: Hàm này sẽ nhận giá trị của form nếu xác thực form thành công
    + SubmitHandler: callback thành công
    + SubmitErrorHandler: callback error
- reset: reset lại toàn bộ trạng thái của form, tham chiếu. Cho phép cài đặt lại trạng thái của from
- formState: chứa toàn bộ trạng thái của form. Nó giúp bạn ghi lại những tương tác của user đối với form

2. useContext
- Là một cách để quản lý state trên toàn bộ, có thể sử dụng chung với useState
- Context là một cơ chế cho phép chia sẻ dữ liệu giữa các thành phần con mà không cần truyền props qua nhiều tầng:
    + Context.Provider: cho phép cung cấp giá trị cho context và bao bọc các thành phần con bên trong nó. Truyền dữ liệu thông qua thuộc tính "value". Khi context thay đổi thì sẽ tựu động render lại các thành con bên trong provider

3. useReducer
- Là 1 hook để quản lý tráng thái của 1 component bằng cách sử dụng mô hình reducer
- const [state, dispatch] = useReducer(reducer, initialState)
    + reducer(state,action): action là 1 đối tượng chưa thông in sự kiện xảy ra
    + initialState: là state ban đầu của component
    + Trả về state là trạng thái hiện tại của component
    + dispatch: là 1 hàm để gửi các action để thay đổi state

4. useRef
- Là một hook dùng để tạo 1 tham chiếu(reference) đến 1 phần tử hoặc 1 giá trị trong component
- useRef cho phép truy cập và thay đổi giá trị tham chiếu mà không xảy ra việc render lại component

5. Link và navLink
- Link:là một thành phần cung cấp bởi React Router để tạo liên kết giữa các trang trong ứng dụng React.
- navLink: là một thành phần tương tự như Link, nhưng thêm một số tính năng bổ sung. Nó cho phép bạn tạo liên kết có thể được tùy chỉnh dựa trên trạng thái của liên kết, chẳng hạn như đánh dấu liên kết hiện tại khi người dùng đang ở trang đó.
    + Thuộc tính activeClassName được sử dụng để chỉ định lớp CSS sẽ được thêm vào liên kết khi nó được coi là "active" (đang được truy cập).