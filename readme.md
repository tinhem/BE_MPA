# Run server:
npm start

# Các API auth:
method: post <br>
http://localhost:8080/api/user/register/:id            tạo tài khoản nhân viên: truyền id point<br>
http://localhost:8080/api/user/register-leader/:id      tạo tài khoản nhân viên: truyền id point<br>
http://localhost:8080/api/user/login                   đăng nhập tài khoản nhân viên<br>
http://localhost:8080/api/user/admin                   đăng nhập admin<br>
http://localhost:8080/api/user/gathering-point-leader   đăng nhập trưởng điểm TK<br>
http://localhost:8080/api/user/head-of-transaction-point     đăng nhập trưởng điểm GD<br>
http://localhost:8080/api/user/edit-state/:id               cập nhật trạng thái user(role: leader mới cập nhật được)<br>
http://localhost:8080/api/user/logout                      Đăng xuất (xóa token đang đăng nhập)<br><br>

method: get<br>
http://localhost:8080/api/user/all-users              lấy toàn bộ user<br>
http://localhost:8080/api/user/all-leader              lấy toàn bộ leader<br><br>

method: put<br>
http://localhost:8080/api/user/edit-user              chỉnh sửa user<br><br>

# Các API point:
method: post<br>
http://localhost:8080/api/point                tạo point mới<br><br>

method: get<br>
http://localhost:8080/api/point               lấy toàn bộ point<br>
http://localhost:8080/api/point/:id           lấy point theo id<br><br>

# Các API order:
method: post<br>
http://localhost:8080/api/order              tạo order mới <br>
http://localhost:8080/api/order/update              cập nhật trạng thái đơn hàng<br><br>

method: get <br>
http://localhost:8080/api/order             lấy toàn bộ order<br><br>
http://localhost:8080/api/order/:id         lấy order theo id


