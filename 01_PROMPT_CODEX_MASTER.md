# PROMPT CHÍNH CHO CODEX — TƠ / POLYMER SCIENCE LOOPS

Bạn là technical director và motion designer cho một bài thuyết trình Hóa học 12 bằng tiếng Việt. Hãy thực sự xây dựng project và xuất video bằng Remotion + Three.js/React Three Fiber, không chỉ mô tả kế hoạch.

## 0. Đầu vào và ranh giới công việc

Đọc `README_BAT_DAU.md`, `03_NOI_DUNG_DA_CHOT.md`, `video_manifest.json`, `presentation_plan.json` và ba ảnh trong `sources/`. Xem trực tiếp hình công thức trong ảnh, không chỉ dựa vào nhận dạng chữ. Các file sources/*_layout_reference.png là sơ đồ tĩnh dùng tham khảo bố cục và màu, KHÔNG phải mẫu video 3D đã hoàn thành; vẫn phải kiểm tra cấu trúc theo SGK. Đọc kỹ năng Remotion đã cài nếu có, nhất là 3D, markup, compositions, studio và render. Thư mục này là brief bàn giao, KHÔNG phải một project Remotion đã được dựng hoặc kiểm thử.

Chỉ tạo SIX standalone loops đúng manifest; KHÔNG tạo một bộ phim 12 phút, không giọng đọc, không nhạc, không phụ đề bám thời gian. Không tự chỉnh Canva, không phát hành công khai tài liệu hoặc upload nguồn ra hosting bên ngoài. Giữ nguyên các file nguồn. Nếu trong thư mục đã có project Remotion thật, đọc cấu trúc, package.json và các thay đổi chưa commit trước khi sửa. Không xóa/ghi đè dự án cũ. Nếu chỉ có brief, tạo project trong thư mục con `fiber-loops/`.

Được phép render/export MP4 và PNG vào thư mục output của project. Thực hiện theo giai đoạn người dùng yêu cầu; nếu chỉ được giao clip S02 thì chưa render cả sáu clip.

## 1. Bối cảnh trình chiếu bắt buộc

Bài nói dự kiến 12 phút, do người thật nói và bấm chuyển slide. Mở đầu là ba món quần áo thật, KHÔNG có opening video. Cô yêu cầu: kiến thức, ví dụ minh họa, tác hại và biện pháp khắc phục. Kiến thức bám ba ảnh SGK đã cung cấp; môi trường là phần mở rộng có nguồn EEA/EC. Người thuyết trình có thể dừng tại một slide 30 giây hoặc hai phút. Vì vậy mỗi video phải xem được từ bất kỳ thời điểm nào và lặp không gây hiểu sai; mọi khái niệm chính phải luôn hiện hoặc có công thức tĩnh riêng trên slide.

## 2. Hướng mỹ thuật

Phong cách science visualization sạch, dễ giải thích trong lớp, không sci-fi phô trương. Bảng màu thống nhất với deck: nền panel #093F49; teal #086E7B; trắng ngà #F5FAFB; cyan #AEE3E6; vàng nhấn #F5C85D. Nền toàn bộ video đặc màu #093F49, không trong suốt; không letterbox. Không phụ thuộc texture ngoài mạng. Mô hình có ánh sáng mềm, chiều sâu vừa đủ, hình khối rõ. Không fog dày, bloom quá mức, đốm sao, tia laser, flare, hạt lơ lửng trang trí hoặc ống nghiệm vô nghĩa.

Nội dung video được đặt trong một panel khoảng nửa slide; vì vậy cỡ chữ trong video 1920×1080 phải lớn, nhãn chính khoảng 60–80 px, phụ không dưới 44 px. Nhãn ít, đứng yên, tiếng Việt có dấu. Giữ vùng an toàn ít nhất 100 px mỗi cạnh. Không đốt tiêu đề slide, đánh số slide hay đoạn văn vào video. Ưu tiên giữ công thức dưới dạng text/vector đọc được. Nylon-6,6 có công thức riêng ngoài panel. Ở capron và nitron, hai phía phản ứng nằm trong panel: video xuất ra phải luôn giữ công thức 2D và nhãn tương ứng hiển thị ổn định, không chỉ có các quả cầu 3D. Không làm mất phần công thức khi người dùng thay sơ đồ tĩnh bằng video. Vẫn xuất poster rõ để thay video khi máy trình chiếu lỗi.

## 3. Chuyển động và vòng lặp

Mọi animation lấy thời gian từ `useCurrentFrame()` và `useVideoConfig()`. Dùng `<ThreeCanvas width={width} height={height}>` của `@remotion/three` cho 3D. KHÔNG dùng `useFrame()`, `requestAnimationFrame`, `Date.now`, elapsed wall-clock, setInterval hoặc CSS animation để chạy hình. Không dùng `Math.random()` không seed. Chuyển động phải deterministic khi render frame riêng lẻ hoặc seek ngược. `<Sequence>` nằm trong ThreeCanvas phải có `layout="none"` nếu dùng.

Với clip N frame, ưu tiên phase `2*Math.PI*frame/N`; dùng sin/cos hoặc quỹ đạo tuần hoàn cho vị trí, camera và ánh sáng. Trạng thái logic frame N phải khớp frame 0, nhưng file thực tế chỉ xuất frame 0..N-1, không nhân đôi frame 0 vào cuối. Kiểm tra cả vận tốc qua đường nối, không chỉ hai ảnh đầu/cuối. Độ khác giữa frame N-1 và frame 0 phải phù hợp một bước chuyển động bình thường, không ép chúng giống tuyệt đối rồi gây đứng hình.

Không fade-to-black/white ở đầu cuối. Không intro/outro, không nhãn hiện rồi biến mất theo thời gian. Camera nghiêng nhẹ, không xoay 360 độ khiến cấu trúc quan trọng quay khuất. Nhãn luôn billboard hoặc vẽ SVG 2D overlay, không xoay theo phân tử.

Đặc biệt: KHÔNG đảo chiều phản ứng hóa học để làm loop. Với capron/nitron, chất đầu và sản phẩm có thể cùng hiện ổn định; chỉ highlight/mũi tên chạy một chiều. Hạt di chuyển trong sơ đồ môi trường chỉ tái sinh ngoài vùng thấy được. Không để vi sợi đã được lọc tự bay ngược ra nước.

## 4. Nguyên tắc chính xác Hóa học

SGK là nguồn ưu tiên cho bài này. Không thay nội dung sách bằng kiến thức ngoài mà không ghi rõ. Không tự phát minh cấu trúc nguyên tử, hóa trị, góc liên kết, cơ chế hoặc số liệu. Nếu không đủ thông tin cho một mô hình ball-and-stick đáng tin, dùng sơ đồ ký hiệu/đoạn mạch 3D và công thức 2D chính xác; ghi “Mô hình minh họa”. Một sơ đồ rõ và đúng tốt hơn một phân tử 3D đẹp nhưng sai.

- Tơ: mạch polymer dùng làm tơ THƯỜNG không phân nhánh, sắp xếp song song. Không diễn giải tất cả đều thẳng tuyệt đối.
- Nylon-6,6: `[-NH-(CH2)6-NH-CO-(CH2)4-CO-]n`. Nhóm amide là `-CO-NH-`; carbonyl có C=O. Không dựng nylon-6 rồi gọi nylon-6,6.
- Capron: `[-NH-(CH2)5-CO-]n`. Monomer ε-caprolactam có vòng 7 thành viên: 1 N và 6 C, trong đó 1 carbonyl C và 5 CH2. Không thêm nước là sản phẩm của sơ đồ trùng hợp mở vòng trong SGK. Không tuyên bố đây là mô phỏng cơ chế đầy đủ.
- Nitron: `n CH2=CH-CN → [-CH2-CH(CN)-]n`. Nhóm nitrile `C≡N` giữ nguyên; liên kết C=C của monomer mới là vị trí được đối chiếu khi tạo mạch. Không nối qua đầu N của nitrile để dựng mạch chính.
- Visco: cấu trúc phân tử giống cellulose theo SGK.
- Cellulose acetate: ảnh SGK ghi `[C6H7O2(OH)(OOCCH3)2]n` và `[C6H7O2(OOCCH3)3]n`. Giữ ký hiệu theo ảnh nguồn; khi làm sơ đồ giải thích, chỉ cần nhãn “2 hoặc 3 nhóm acetate/mắt xích”. Không tự sửa công thức trong nguồn hoặc dựng cơ chế hóa học mới.
- Môi trường: phân biệt vi sợi với vi nhựa; không phải mọi vi sợi đều là nhựa. Không bịa % lọc, khối lượng phát thải, mức độc, xếp hạng “xanh”. Không vẽ tái chế 100% hoặc nói sợi tự nhiên luôn vô hại.

## 5. Thiết lập kỹ thuật

Kiểm tra Node/npm và dependencies hiện có. Cài các phiên bản React, R3F, three và Remotion tương thích theo tài liệu chính thức hiện hành, giữ các gói `remotion`/`@remotion/*` đồng bộ phiên bản, lưu lockfile. Không cài “latest” đè bừa dự án đang chạy. Nếu không có project, tạo scaffold Remotion phù hợp trong `fiber-loops/`, mở Studio ngay khi chạy được để người dùng xem thử. Không dừng ở việc dựng giao diện xem trước.

TypeScript, component riêng cho mỗi clip, common palette/camera/lights và các hàm motion dùng chung. Cấu trúc gợi ý: `src/Root.tsx`, `src/clips/`, `src/components/`, `src/chemistry/`, `src/theme.ts`, `public/`, `out/`, `qa/`. Mọi file nguồn trong brief dùng đường dẫn tương đối; không hardcode `/mnt/data` hay đường dẫn máy người tạo brief.

Nếu WebGL không render, chẩn đoán phiên bản, cấu hình Chromium và renderer theo tài liệu Remotion hiện hành, rồi render một still kiểm tra. Không tự chuyển sang nền đen hoặc giả báo thành công. Có thể hạ tessellation/shadows để render ổn định; không hy sinh cấu trúc đúng. Tài liệu tham khảo chính thức: https://www.remotion.dev/docs/three-canvas và https://www.remotion.dev/docs/three .

## 6. Đặc tả từng clip

### S02_FiberChains — slide 02

- File: `S02_FiberChains_loop.mp4`; 10 giây, 300 frame, 30 fps.
- Mục tiêu: Giúp người xem phân biệt một mạch polymer với bó nhiều mạch tương đối song song.
- Bố cục: Three.js: 5–7 đường mạch dài gần song song; mỗi mạch gồm các đơn vị lặp bằng hình capsule đơn giản. Không giả đây là mô hình nguyên tử của cellulose. Góc nghiêng nhỏ, ánh sáng mềm; toàn bộ bó luôn ở trong khung. Tối đa hai nhãn cố định: “Một mạch polymer”, “Nhiều mạch song song”.
- Chuyển động: Dao động hình học rất nhỏ theo sin/cos tuần hoàn; không gom từ hỗn loạn rồi bung ra ở cuối. Camera không bay xuyên rồi reset. Không bẻ đứt mạch.
- Kiểm tra nội dung: Mô hình sơ đồ, không theo tỉ lệ. Giữ chữ “thường” trong lời dẫn về mạch không phân nhánh. Không vẽ nhánh hóa học tùy tiện.
- Nguồn: SGK-1.

### S05_Nylon66 — slide 05

- File: `S05_Nylon66_loop.mp4`; 10 giây, 300 frame, 30 fps.
- Mục tiêu: Nhìn được đoạn mạch polyamide và vùng –CO–NH– mà không mất công thức chuẩn trên slide.
- Bố cục: Three.js: một đoạn mạch ngắn đủ 2 mắt xích nylon-6,6. Bản 2D chuẩn luôn được giữ trên slide, không đưa công thức thành một vật thể xoay khó đọc. Mã màu nguyên tử có chú giải nếu dùng ball-and-stick. Có thể dùng mô hình đoạn mạch ký hiệu thay cho ball-and-stick nếu không bảo đảm đúng hóa trị.
- Chuyển động: Góc yaw dao động khoảng ±8 độ, roll rất nhỏ. Hai vùng amide sáng nhẹ đồng thời hoặc một vùng cố định; không lần lượt chuyển chủ đề ngoài nhịp nói.
- Kiểm tra nội dung: Mắt xích [-NH-(CH2)6-NH-CO-(CH2)4-CO-]n. Đếm đủ carbon trong mỗi đoạn. Carbonyl C=O, N có H và hai liên kết mạch; không tạo mạch vòng hay nối sai N–N. Không dựng cơ chế trùng ngưng mới vì ảnh SGK không trình bày.
- Nguồn: SGK-2.

### S06_Capron — slide 06

- File: `S06_Capron_loop.mp4`; 12 giây, 360 frame, 30 fps.
- Mục tiêu: Nhìn rõ chất vòng và mạch sản phẩm của phản ứng trùng hợp mở vòng.
- Bố cục: Hai cấu trúc cùng tồn tại trong toàn bộ vòng lặp: trái ε-caprolactam; phải đoạn capron. Vòng gồm 1 N và 6 C, một C là carbonyl và năm CH2. Một mũi tên 2D sang phải, nhãn “Trùng hợp mở vòng” đứng yên. Vẽ bằng SVG/Remotion nếu mô hình 3D làm công thức khó đọc.
- Chuyển động: Dùng một vệt highlight chạy dọc mũi tên một chiều. Vệt hết ở cuối rồi xuất hiện lại từ đầu ở trạng thái mờ; chất phản ứng và sản phẩm không biến ngược. Sản phẩm chỉ nghiêng/rung nhẹ tuần hoàn. Không chạy clip xuôi rồi reverse.
- Kiểm tra nội dung: Sơ đồ tổng quát, không phải cơ chế. Mắt xích [-NH-(CH2)5-CO-]n; t° như ảnh nguồn; không thêm sản phẩm nước hay chất xúc tác không có nguồn.
- Nguồn: SGK-2.

### S07_Nitron — slide 07

- File: `S07_Nitron_loop.mp4`; 10 giây, 300 frame, 30 fps.
- Mục tiêu: So sánh C=C ở monomer với mạch sản phẩm; giữ nguyên nhóm nitrile.
- Bố cục: Trái monomer CH2=CH–C≡N; phải 2–3 mắt xích polyacrylonitrile. Công thức 2D nCH2=CH–CN → [-CH2-CH(CN)-]n đi cùng sơ đồ (nhãn t°, xt, p). Không hiển thị CN như một liên kết đôi tùy tiện. Các nhãn đứng yên.
- Chuyển động: Highlight C=C và vị trí mạch chính tương ứng, dùng hai vùng sáng nhẹ có cùng chu kỳ. Không chuyển CN sang vị trí khác. Camera biên độ nhỏ, không xoay 360 độ.
- Kiểm tra nội dung: Liên kết C≡N giữ nguyên. Mỗi mắt xích có một nhóm nitrile gắn ở carbon CH của mạch. Không nhầm nitrile với amide.
- Nguồn: SGK-2.

### S08_CellulosePaths — slide 08

- File: `S08_CellulosePaths_loop.mp4`; 10 giây, 300 frame, 30 fps.
- Mục tiêu: Giải thích cùng nguồn cellulose nhưng visco và cellulose acetate không được đồng nhất.
- Bố cục: Sơ đồ 2D Remotion: “Cellulose tự nhiên” chia hai nhánh cùng hiện rõ đến “Visco” và “Cellulose acetate”. Dưới visco: “Cấu trúc phân tử giống cellulose”; dưới acetate: “2 hoặc 3 nhóm acetate/mắt xích”. Không thêm phương trình sản xuất chi tiết chưa có trong SGK.
- Chuyển động: Các đường dẫn có điểm sáng chuyển động chậm tuần hoàn, toàn bộ nhãn và cấu trúc ổn định. Không thay nhau giấu nhánh khiến người nói bị ép thời gian.
- Kiểm tra nội dung: Đây là sơ đồ nguồn gốc/chế biến, không phải một phương trình phản ứng đơn. Giữ công thức chi tiết theo nguồn ở phụ lục; không dựng mô hình nguyên tử cellulose giả để trang trí.
- Nguồn: SGK-2, SGK-3.

### S10_Microfibers — slide 10

- File: `S10_Microfibers_loop.mp4`; 12 giây, 360 frame, 30 fps.
- Mục tiêu: Minh họa một đường phát thải vi sợi nhựa và giới hạn của xử lý nước thải.
- Bố cục: Vải tổng hợp → giặt → công đoạn xử lý → nước môi trường. Một số đoạn sợi bị giữ ở bộ phận thu gom, một số tiếp tục. Dòng chảy sang phải. Nhãn nhỏ: “Sơ đồ minh họa, không biểu thị tỉ lệ thực tế”. Không hạt nhựa ăn vào cơ thể hoặc cảnh sức khỏe gây sợ hãi.
- Chuyển động: Các hạt di chuyển theo đường lặp định trước, chỉ tái sinh ngoài vùng nhìn; vật thể quần áo/máy giặt/bộ phận xử lý đứng yên. Không để hạt được lọc tự bay ngược vào nước để reset.
- Kiểm tra nội dung: Chỉ ghi vi sợi nhựa cho sợi tổng hợp. Không ghi mọi vi sợi là vi nhựa. Không hiện con số tỷ lệ lọc/khối lượng/phát thải. Xử lý giảm chứ không khẳng định loại bỏ 100%.
- Nguồn: EEA-1, EEA-2.

## 7. Đầu ra và nghiệm thu bắt buộc

Mỗi composition đúng 1920×1080, 30fps, thời lượng đúng manifest. Xuất MP4 H.264, yuv420p, KHÔNG audio; nền đặc. Chất lượng phù hợp trình chiếu 1080p; ưu tiên nét hơn cố ép dung lượng nhỏ. Xuất thêm poster PNG 1920×1080, cùng tên gốc `_poster.png`. Không dùng GIF làm bản trình chiếu chính. Tạo contact sheet các frame 0%, 25%, 50%, 75%, cuối và một video preview lặp ba vòng để nhìn đường nối.

Thực hiện typecheck/build và test deterministic frame nếu hạ tầng cho phép. Kiểm tra công thức/đếm nguyên tử từ dữ liệu topology, đối chiếu lại ảnh SGK. Xem ảnh render thực tế, không chỉ đọc code. Kiểm tra: clipping, nhãn đè nhau, chữ Việt, bond order, sai nhánh, nhảy camera, nhấp nháy, lỗi màu, đường nối loop.

Dùng ffprobe hoặc công cụ tương đương kiểm tra duration, fps, 1920×1080, pixel format và không có audio stream. Báo chính xác kiểm thử nào đã chạy, kiểm thử nào chưa chạy và lỗi còn lại. Không gọi một file “hoàn thành” nếu chưa thực sự tồn tại hoặc chưa render xong. Không lặp lại việc render video hỏng mà không sửa nguyên nhân.

Cung cấp `out/video_manifest.completed.json` với đường dẫn thật, composition ID, thời lượng, frame, kích thước, poster, slide đích; `qa/QA_REPORT.md`; lệnh chạy Studio, render từng composition và render tất cả. README tiếng Việt hướng dẫn thay clip trong Canva theo `04_CHEN_VIDEO_CANVA.md`. Không hứa tự chèn vào Canva nếu không có quyền và công cụ phù hợp.

## 8. Cách bắt đầu

Tóm tắt thật ngắn các ràng buộc quan trọng đã đọc. Kiểm tra thư mục. Nếu người dùng chưa chỉ định giai đoạn, dựng S02 đầu tiên, xuất MP4/poster/preview loop ba vòng và báo kết quả kiểm thử. Giữ palette và component đủ dùng cho năm clip còn lại. Không hỏi lại về mục tiêu, thời lượng, màu hoặc giọng đọc: chúng đã được chốt ở đây. Chỉ hỏi khi thiếu nguồn bắt buộc hoặc có quyết định ảnh hưởng quyền truy cập/ghi đè tài liệu.
