const PaymentRequest = {
  name: "Đề nghị chi",
  attribute: {
    code: "Mã kế hoạch",
    name: "Tên kế hoạch",
    type: "Hình thức công tác",
    user_id: "Người lập kế hoạch",
    plan_type: "Loại kế hoạch",
    contact_id: "Đầu mối tạm ứng",
    amount: "Tổng tiền tạm ứng",
    start_time: "Ngày bắt đầu",
    end_time: "Ngày kết thúc",
    start_country_id: "Quốc gia xuất phát",
    start_province_id: "Tỉnh/thành phố xuất phát",
    start_district_id: "Quận/huyện xuất phát",
    end_country_id: "Quốc gia điểm đến",
    end_province_id: "Tỉnh thành phố điểm đến",
    end_district_id: "Quận/huyện điểm đến",
    quantity: "Số lượng người được tạm ứng theo kế hoạch",
    status: "Trạng thái",
    description: "Mô tả",
    approved_id: "Người phê duyệt",
    approved_note: "Ghi chú khi phê duyệt",
    plan_official_list: "Danh sách cán bộ đi công tác",
    plan_partner_list: "Danh sách đối tác",
    location_destination: "Điểm đi",
    plan_official_with_road_list: "Danh sách cán bộ công tác theo lộ trình",
    location_arrival: "Điểm đến",
    back: "Quay lại",
    update: "Cập nhật",
    check_money: "Kiểm tra ngân sách",
    with_employee: "Theo nhân viên",
    with_road: "Theo cung đường",

    purpose_id: "Mục đích công tác",
    program_id: "Chương trình hoạt động",
    department_require_id: "Đơn vị yêu cầu",
    user_require_id: "Người yêu cầu",
    department_process_id: "Đơn vị thực hiện",
    user_process_id: "Người thực hiện",

    from_department: "Đơn vị đi",
    to_department: "Đơn vị đến",
  },
  status: {
    1: "Khởi tạo",
    2: "Đang phê duyệt",
    3: "Đã phê duyệt",
    4: "Từ chối",
  },
  type: {
    1: "Nội địa",
    2: "Nước Ngoài",
  },
  title: {
    general_information: "Thông tin chung",
    official_info: "Thông tin cán bộ",
    road_info: "Thông tin lộ trình",
    cost_estimate: "Dự toán chi phí",
    advance_request: "Đề nghị tạm ứng",
    plan_confirm: "Xác nhận công tác",
    plan_end: "Kết thúc công tác",
    plan_pay: "Hồ sơ thanh toán",
    official_info_add: "Thêm nhân viên",
    partner_info_add: "Thêm đối tác",
  },
  button: {
    official_info_add: "Thêm nhân viên",
    partner_info_add: "Thêm đối tác",
  },
  staff_official: {
    unit: "Đơn vị",
    code_staff: "Mã nhân viên",
    full_name: "Họ tên",
    gender: "Giới tính",
    bank: "Ngân hàng",
    bank_account: "Tài khoản",
    numberPhone: "SĐT",
    email: "Email",
  },
  partner_official: {
    full_name: "Họ tên",
    organ_unit: "Cơ quan đơn vị",
    numberPhone: "SĐT",
    email: "Email",
    position_group: "Nhóm chức vụ",
  },
};
export default PaymentRequest;
