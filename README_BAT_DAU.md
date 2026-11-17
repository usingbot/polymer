# BẮT ĐẦU TỪ ĐÂY

## Gói này có gì?

- `01_PROMPT_CODEX_MASTER.md`: brief kỹ thuật và sáng tạo đầy đủ.
- `02_PROMPTS_TUNG_BUOC.md`: bốn prompt dán lần lượt vào Codex.
- `03_NOI_DUNG_DA_CHOT.md`: kiến thức và giới hạn nguồn.
- `04_CHEN_VIDEO_CANVA.md`: cách chèn, phát lặp và điều khiển slide bằng tay.
- `video_manifest.json`: sáu video cần tạo, đúng tên/slide/thời lượng.
- `presentation_plan.json`: lời dẫn, mốc phút, thao tác và cảnh báo mỗi slide.
- `sources/`: ba ảnh SGK do bạn cung cấp.
- PDF lời dẫn, PPTX có thể chỉnh sửa và PDF bản tĩnh của slide được đặt cùng gói khi đóng gói hoàn chỉnh.

## Việc bạn làm trước

Kiểm tra nhãn ba món quần áo. Ghi A/B/C, thành phần và tỷ lệ đúng nhãn. Không có nhãn thì nói rõ chưa xác định thành phần, không dùng món đó làm chứng cứ cho một loại tơ. Chuẩn bị bấm chuyển slide, không tự chạy theo thời gian.

Giải nén toàn bộ gói. Mở thư mục này bằng Codex (local project hoặc IDE/CLI có quyền đọc thư mục). Đọc `02_PROMPTS_TUNG_BUOC.md` và dán Prompt A. Trong Codex chỉ dán đường dẫn tới file là chưa đủ nếu ứng dụng chưa được cấp quyền đọc thư mục.

Sản xuất theo thứ tự A → xem mẫu → B → C → D. Đây là cách kiểm soát hình thức và độ đúng trước khi render hàng loạt. Không cần tự đọc toàn bộ lệnh kỹ thuật trong master prompt; Codex sẽ đọc file đó.

## Trạng thái và giả định

Đây là gói brief, không phải source Remotion đã hoàn thành. Chưa render sáu MP4. Thời lượng bài nói 12 phút là phương án tập thử, chưa phải giới hạn do cô xác nhận. Các mốc phút không tự áp vào Canva. Bản Canva cũ không được coi là đã ghi đè cho đến khi có thông báo lưu thành công. Bản dựng mới được đặt riêng để kiểm tra và duyệt.

Nguồn hướng dẫn Codex: OpenAI / ChatGPT Learn, “Open a local project in Codex”, https://learn.chatgpt.com/training/codex-lab/index.html?step=project .

## Bản Canva đã lưu

Bản cải tiến riêng: https://www.canva.com/d/IQi3MWq_1OLB59r
Design ID: DAHbLjaPHNI. Canva đã xác nhận nhập thành công 17 trang dạng presentation; đã kiểm tra lại nội dung và ghi chú ở các trang 1, 6, 7, 10, 17.

Bản gốc DAHbLTms9mU vẫn giữ nguyên. Phiên chỉnh nháp slide mở đầu đã hủy, không ghi đè. Lý do chuyển sang bản riêng: ảnh xem trước của phiên sửa trực tiếp không tải được để kiểm tra. PDF slide và PPTX đã được render/kiểm tra cục bộ; chưa xác nhận tính đồng nhất từng pixel sau chuyển đổi Canva.

`*_layout_reference.png` trong sources là ảnh tham khảo panel tĩnh, không phải video hoặc kết quả mô hình 3D. Các `.mp4` vẫn chưa render.
