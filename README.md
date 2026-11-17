# TƠ — Microstructure Motion (Remotion + Three.js)

Đoạn minh họa 18 giây, không có lời thoại. Thiết kế cho bài thuyết trình Hóa 12 **Vật liệu polymer / III. Tơ**; dùng làm clip mở vấn đề hoặc chuyển từ trang khái niệm sang phân loại.

## Công nghệ
- Remotion v4: dựng timeline, keyframe, text, khung hình 1920×1080@30fps.
- `@remotion/three` + Three.js + React Three Fiber: mô phỏng các mạch polymer trong không gian 3D.
- Mọi chuyển động lấy `useCurrentFrame()`, có thể tua timeline để xem lại.

## Chạy trên máy có Node.js và internet
```bash
npm install
npm run studio
# Xem và kiểm tra composition PolymerExplainer
npm run render
```
MP4 sẽ nằm ở `out/to-polymer-3d.mp4`. File không có narration vì người thuyết trình sẽ nói trực tiếp; có thể thêm lời đọc và hiệu ứng âm thanh sau.

## Kịch bản 18 giây
- **00:00–00:03** 3 chất liệu cotton / len / nylon; hỏi vì sao khác tính chất.
- **00:03–00:09** zoom sang nhiều mạch polymer kéo dài, định hướng theo trục sợi.
- **00:09–00:14** nhóm mạch được tô 3 màu để gợi cellulose / protein / polyamide.
- **00:14–00:18** trở lại câu hỏi thực tế và nối vào phần giải thích của người nói.

## Lời dẫn của người trình bày
> Ba loại vải đều được tạo thành từ sợi, nhưng vì sao chúng khác nhau? Để trả lời, ta phóng đại vào cấu trúc vật liệu. Các phân tử polymer tạo thành những chuỗi dài và có thể định hướng theo trục sợi. Đặc điểm polymer — cellulose, protein hay polyamide — góp phần quyết định tính chất và ứng dụng của vật liệu. Vậy vì sao cotton hút ẩm tốt, còn nylon thường nhanh khô?

## Vị trí chèn vào Canva
Đặt ngay sau slide tiêu đề hoặc thay cho slide khái niệm dài dòng; trên Canva chọn `Tải lên` -> upload `.mp4` -> kéo vào slide và đặt autoplay nếu muốn. Khi trình chiếu, có thể dừng sau 18 giây rồi tiếp tục giải thích.

## Lưu ý khoa học
Đây là **mô hình khái niệm** minh họa chuỗi polymer và định hướng mạch, không phải mô hình cấu tạo nguyên tử chính xác. 3 màu chỉ gắn nhãn 3 họ vật liệu; không diễn tả chính xác tất cả liên kết, độ kết tinh hay vi cấu trúc của từng loại sợi.

## Lưu ý phát triển
Trong môi trường tạo bộ nguồn này không cài sẵn npm dependencies và không truy cập được npm registry, nên bộ code chưa được chạy render bằng Remotion tại đây. Có thể cài và render từ máy tính có internet.
