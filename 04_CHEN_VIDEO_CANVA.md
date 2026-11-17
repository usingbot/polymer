# CHÈN LOOP VÀO CANVA — GIỮ QUYỀN ĐIỀU KHIỂN CỦA NGƯỜI NÓI

## Hiện trạng gói bàn giao

Gói này chứa bản thiết kế và đặc tả. Các MP4 trong manifest là TÊN ĐẦU RA YÊU CẦU, không phải video đã render. Chỉ chèn những file Codex thực sự đã xuất và đã xem kiểm tra.

## Thao tác

1. Mở thiết kế dạng Presentation, không đổi toàn bộ thành một video chạy tự động.
2. Tải lên MP4 đúng clip, đợi upload hoàn tất rồi đặt trong panel của slide tương ứng. Đừng kéo thành background toàn trang.
3. Di chuyển/xóa chỉ phần minh họa tĩnh bên trong panel được thay. Giữ lại tiêu đề, công thức và ảnh ví dụ nằm ngoài panel. Riêng slide 6–7, công thức phản ứng nằm trong panel: chỉ thay khi clip đã có công thức 2D ổn định đầy đủ theo prompt, không chỉ có mô hình 3D. Poster PNG là bản dự phòng khi không dùng video.
4. Chọn video → Edit (Chỉnh sửa) → Playback (Phát lại) → bật **Play automatically** và **Play on repeat**. Tên giao diện có thể theo ngôn ngữ tài khoản.
5. Để âm lượng 0; file đã yêu cầu không có audio stream. Dùng chế độ trình chiếu điều khiển thủ công, KHÔNG chọn Autoplay cho cả bộ slide.
6. Thử giữ yên từng slide video ít nhất ba vòng, sau đó bấm sang rồi quay lại. Xác nhận nó tự phát lại và không làm trang tự nhảy.
7. Thử đúng laptop, trình duyệt, mạng và máy chiếu định dùng. PDF là tài liệu lời dẫn/bản tĩnh, không mang theo video loop.

Hai công tắc của video khác với chế độ Autoplay của toàn bộ bài trình chiếu. Nếu Playback không xuất hiện, kiểm tra loại thiết kế có đang dùng video timeline hay không. Canva ghi nhận các lựa chọn này có thể không hiện trong thiết kế sử dụng video timeline.

Nguồn xác minh: Canva Help Center, “Adjust video playback: autoplay, loop, or speed”, https://www.canva.com/help/adjust-video-playback/ ; “Presentation modes”, https://www.canva.com/help/presentation-modes/ .

## Vị trí và tỉ lệ

Deck gốc bàn giao là 13.333 × 7.5 inch, tỉ lệ 16:9. Tọa độ panel (left, top, width, height) là inch, theo `video_manifest.json`. Dùng tỉ lệ 16:9, không kéo méo. Vị trí trên Canva sau nhập có thể cần điều chỉnh rất nhỏ vì font/bộ chuyển đổi.

| Slide | File | Panel (inch) |
|---|---|---|
| 02 | `S02_FiberChains_loop.mp4` | 6.050, 2.080, 6.550, 3.684 |
| 05 | `S05_Nylon66_loop.mp4` | 6.050, 2.080, 6.550, 3.684 |
| 06 | `S06_Capron_loop.mp4` | 5.050, 2.100, 7.500, 4.219 |
| 07 | `S07_Nitron_loop.mp4` | 5.050, 2.100, 7.500, 4.219 |
| 08 | `S08_CellulosePaths_loop.mp4` | 6.050, 2.080, 6.550, 3.684 |
| 10 | `S10_Microfibers_loop.mp4` | 6.050, 2.080, 6.550, 3.684 |

## Khi video lỗi ngay trước giờ trình bày

Thay bằng poster PNG hoặc giữ sơ đồ tĩnh đã có. Bạn vẫn trình bày được toàn bộ kiến thức vì nội dung chính và công thức không phụ thuộc việc video có chạy hay không. Không dành thời gian đứng lớp sửa renderer hoặc mạng.
