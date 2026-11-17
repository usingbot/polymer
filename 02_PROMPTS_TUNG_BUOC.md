# CÁC PROMPT DÁN LẦN LƯỢT VÀO CODEX

Đặt toàn bộ gói đã giải nén trong thư mục mà Codex có thể đọc. Dùng một cuộc hội thoại trong cùng project để giữ bối cảnh. Không cần dán toàn bộ kịch bản lên mỗi lần.

## Prompt A — dựng mẫu đầu tiên
```text
Đọc 01_PROMPT_CODEX_MASTER.md, 03_NOI_DUNG_DA_CHOT.md, video_manifest.json và ba ảnh SGK trong sources/. Thực hiện GIAI ĐOẠN A: tạo/kiểm tra project, mở Remotion Studio, dựng riêng S02_FiberChains rồi xuất S02_FiberChains_loop.mp4, poster PNG và preview ba vòng. Tôi cho phép render các file đó. Không chỉ lập kế hoạch; không dựng cả sáu clip lúc này. Báo đường dẫn file thật, kết quả kiểm tra đường nối và các điểm chưa đạt. Không sửa hoặc upload lên Canva.
```

Xem mẫu S02: phải đọc được hình khi thu nhỏ còn nửa slide, không có nhấp nháy và không có “bay vào rồi reset”. Nếu chưa vừa ý, mô tả đúng lỗi nhìn thấy; không tiếp tục sản xuất hàng loạt khi mẫu còn sai.

## Prompt B — ba clip Hóa học
```text
Giữ hệ thiết kế của S02 đã duyệt. Thực hiện GIAI ĐOẠN B theo 01_PROMPT_CODEX_MASTER.md: dựng và render S05_Nylon66, S06_Capron, S07_Nitron, mỗi clip có MP4, poster và preview ba vòng. Kiểm tra trực tiếp công thức với sources/sgk_02_cac_loai_to.png. Ưu tiên đúng topology/hóa trị; nếu ball-and-stick không kiểm chứng được thì dùng mô hình ký hiệu rõ ràng, không đoán. Không đảo chiều phản ứng để làm loop. Báo từng file thực tế và từng kiểm tra đã chạy.
```

## Prompt C — cellulose và môi trường
```text
Thực hiện GIAI ĐOẠN C: dựng và render S08_CellulosePaths và S10_Microfibers theo manifest. Giữ hai nhánh visco/acetate luôn hiện, không bịa phương trình sản xuất. Phần vi sợi là sơ đồ môi trường tham khảo EEA, không số liệu định lượng, không mọi vi sợi đều là nhựa, không mô phỏng lọc 100%. Xuất MP4, poster, preview ba vòng và kiểm tra tính liên tục.
```

## Prompt D — kiểm tra và đóng gói
```text
Kiểm tra toàn bộ sáu video theo mục nghiệm thu của 01_PROMPT_CODEX_MASTER.md. Chạy typecheck/build, kiểm tra metadata video và xem contact sheet/preview thực tế. Rà lại số carbon, vòng caprolactam, C=C và C≡N, tiếng Việt, chữ bị cắt, đường nối loop, fps, kích thước, âm thanh. Sửa lỗi phát hiện được rồi render lại clip bị lỗi. Đóng gói source code, lockfile, README, MP4, poster, video_manifest.completed.json và QA_REPORT.md. Ghi rõ việc nào chưa kiểm thử; không báo “tất cả đạt” chỉ dựa trên code.
```

## Prompt chỉnh nhịp (chỉ dùng sau khi thật sự thấy video quá nhanh)
```text
Giữ nguyên nội dung Hóa học, topology và vị trí nhãn. Giảm biên độ chuyển động camera 40%, chuyển động mô hình 30%; giữ nhãn đứng yên. Duy trì thời lượng đúng manifest và loop liền mạch. Render lại các clip bị ảnh hưởng, so sánh preview trước/sau. Không thay bằng slow-motion làm sai fps hoặc thêm đoạn đứng hình ở cuối.
```
