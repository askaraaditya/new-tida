function jalankanScriptF12() {
    console.log("Ekstensi Aktif: Mencari opsi Tidak...");

    // 1. Kode F12 kamu: Memilih opsi "Tidak" atau "tidak"
    document.querySelectorAll('input[type="radio"][value*="Tidak"], input[type="radio"][value*="tidak"]').forEach(input => {
        input.click();
    });

    // 2. Kode F12 kamu: Memilih opsi terakhir di setiap grup radiogroup
    document.querySelectorAll('div[role="radiogroup"]').forEach(group => {
        const options = group.querySelectorAll('input[type="radio"]');
        if(options.length > 0) {
            options[options.length - 1].click();
        }
    });
}

// Menjalankan script saat halaman selesai loading
jalankanScriptF12();

// Opsional: Jalankan lagi setelah 2 detik jika form munculnya lambat (seperti di HP)
setTimeout(jalankanScriptF12, 2000);
