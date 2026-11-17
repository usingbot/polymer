# POLYMER — Codex Cloud handoff

Mục tiêu: dựng 6 video loop cho thuyết trình Hóa học 12 về TƠ.

## Tình trạng thực tế
- Đây là **starter Remotion có thể mở rộng**, KHÔNG PHẢI bản sao đầy đủ của project `polymer` nằm trên máy người dùng.
- `src/root.tsx` hiện mới đăng ký `PolymerExplainer` (demo 18 giây). Composition `S02_FiberChains` trong project cũ CHƯA có trong bộ nguồn này.
- `reference/S02_FiberChains_loop_v1_NEEDS_REWORK.mp4` là video MP4 người dùng gửi để chỉ ra lỗi: hoạt cảnh phẳng, chậm, không có câu chuyện hình ảnh; **KHÔNG được xem là sản phẩm cuối**.
- `01_PROMPT_CODEX_MASTER.md`, `03_NOI_DUNG_DA_CHOT.md`, `video_manifest.json` là tài liệu chính.
- `sources/sgk_*.png` là 3 ảnh SGK người dùng cung cấp, làm chuẩn tham chiếu.
- `presentation/` chứa slide và PDF đã được chuẩn bị.

## Kiểm tra nhanh
```bash
cd /workspace/polymer
node --version && npm --version
npm install
npm run studio
```
Nếu một công cụ khác cần ngắt chạy studio cho render thì dùng tiến trình riêng, hoặc chỉ mở studio để kiểm tra rồi đóng khi cần.

## Video output
- Render theo `video_manifest.json` và tên composition/file xuất ghi trong tài liệu.
- Tất cả loop phải hình thành từ frame-based animation, không phụ thuộc thời gian thực; clip loop phải nối đầu-cuối mượt.
- Kiểm tra thực tế bằng frame sample, các khoảng frame liền kề trước/sau điểm nối, và preview 3 vòng.
- Không can thiệp Canva.

## Vấn đề khoa học cần giữ
- Nylon-6,6: nhóm amide, công thức mắt xích đúng theo SGK.
- Capron: ε-caprolactam mở vòng; không animate polymer quay ngược về monomer nhằm loop.
- Nitron: phân biệt C=C ban đầu với nhóm nitrile C≡N được giữ lại.
- Chất thải vi sợi: nói đúng về vi sợi nhựa từ vải tổng hợp, không khẳng định mọi loại tơ đều phát thải vi nhựa.

## Nếu user có project local gốc
Nên ưu tiên source project local nếu được bổ sung về sau. Khi chưa có, hãy xây dựng mới từ starter này và báo rõ để user biết.
