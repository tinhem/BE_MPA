# Run server:
npm start

# Các API auth:
method: post
http://localhost:8080/api/user/register/:id            tạo tài khoản nhân viên: truyền id point
http://localhost:8080/api/user/register-leader/:id      tạo tài khoản nhân viên: truyền id point
http://localhost:8080/api/user/login                   đăng nhập tài khoản nhân viên
http://localhost:8080/api/user/admin                   đăng nhập admin
http://localhost:8080/api/user/gathering-point-leader   đăng nhập trưởng điểm TK
http://localhost:8080/api/user/head-of-transaction-point     đăng nhập trưởng điểm GD
http://localhost:8080/api/user/edit-state/:id               cập nhật trạng thái user(role: leader mới cập nhật được)
http://localhost:8080/api/user/logout                      Đăng xuất (xóa token đang đăng nhập)

method: get
http://localhost:8080/api/user/all-users              lấy toàn bộ user
http://localhost:8080/api/user/all-leader              lấy toàn bộ leader

method: put
http://localhost:8080/api/user/edit-user              chỉnh sửa user

# Các API point:
method: post
http://localhost:8080/api/point                tạo point mới

method: get
http://localhost:8080/api/point               lấy toàn bộ point
http://localhost:8080/api/point/:id           lấy point theo id

# Các API order:
method: post
http://localhost:8080/api/order              tạo order mới 
http://localhost:8080/api/order/update              cập nhật trạng thái đơn hàng

method: get 
http://localhost:8080/api/order             lấy toàn bộ order
http://localhost:8080/api/order/:id         lấy order theo id


