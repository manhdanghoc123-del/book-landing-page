// Xử lý sự kiện đăng ký nhận tài liệu
document.addEventListener('DOMContentLoaded', function() {
    const downloadForm = document.getElementById('downloadForm');
    
    if (downloadForm) {
        downloadForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput && emailInput.value) {
                alert('Cảm ơn bạn! Link tải sách đã được gửi tới email: ' + emailInput.value);
                emailInput.value = '';
            }
        });
    }
});
