// i18n Data
const famOptions = {
    id: ["Suami", "Istri", "Anak"],
    en: ["Husband", "Wife", "Child"]
};
const i18n = {
    id: {
        title: "Aplikasi Calon Karyawan",
        subtitle: "Formulir Digital Resmi",
        info_text: "Aplikasi ini mempermudah Anda dalam melamar pekerjaan di Sika Indonesia. Data Anda aman dan hanya digunakan untuk proses seleksi.",
        btn_start: "Mulai Sekarang",
        btn_next: "Lanjut",
        btn_prev: "Kembali",
        btn_download: "Download PDF",
        btn_email_direct: "Kirim via Email",
        label_id: "Bahasa Indonesia",
        label_en: "English",
        step1_title: "Data Pribadi",
        step2_title: "Data Keluarga",
        step3_title: "Pendidikan",
        step4_title: "Pengalaman Kerja",
        step5_title: "Informasi Tambahan",
        step6_title: "Selesai",
        label_name: "Nama Lengkap (Sesuai KTP)",
        label_pob: "Tempat Lahir",
        label_dob: "Tanggal Lahir",
        label_gender: "Jenis Kelamin",
        label_marital: "Status Kawin",
        label_address: "Alamat Lengkap",
        label_phone: "Nomor HP / WhatsApp",
        label_email: "Alamat Email",
        label_pos: "Jabatan yang Dilamar",
        btn_upload_photo: "Unggah Foto",
        label_identity: "No. KTP",
        label_religion: "Agama",
        label_sim: "SIM yang Dimiliki",
        label_sim_none: "Tidak Ada",
        label_social_media: "Akun Sosial Media (IG/LinkedIn)",
        label_blood: "Golongan Darah",
        label_fam_member: "Anggota Keluarga (Pasangan & Anak)",
        label_ortu: "Orang Tua & Saudara Kandung",
        label_school: "Nama Institusi",
        label_year_from: "Dari (Tahun)",
        label_year_to: "Sampai (Tahun)",
        label_major: "Jurusan / Bidang Studi",
        label_language: "Kemampuan Bahasa",
        label_lang_name: "Bahasa",
        label_lang_level: "Tingkat Kemahiran",
        label_company: "Nama Perusahaan",
        label_exp_pos: "Jabatan Terakhir",
        label_reason: "Alasan Berhenti",
        label_social: "Kegiatan Sosial / Organisasi",
        label_reference: "Referensi (Nama & Hubungan)",
        label_emergency: "Kontak Darurat (Nama & No. HP)",
        label_expected_salary: "Gaji yang Diharapkan",
        label_join_date: "Kapan Bisa Mulai Bekerja?",
        label_privacy_consent: "Saya menyetujui kriteria di bawah ini:",
        check_verify: "Saya menyatakan bahwa semua data yang saya isi adalah benar.",
        check_auth: "Saya memberikan izin kepada perusahaan untuk melakukan verifikasi data.",
        finish_text: "Terima kasih! Silakan download hasil aplikasi Anda dalam format PDF dan kirimkan ke HRD.",
        email_info: "Klik tombol di bawah untuk membuka aplikasi email Anda dan mengirim file PDF ke HRD Sika Indonesia.",
        pdf_header_personal: "DATA PRIBADI",
        pdf_header_family: "DATA KELUARGA",
        pdf_header_edu: "RIWAYAT PENDIDIKAN",
        pdf_header_lang: "KEMAMPUAN BAHASA",
        pdf_header_exp: "PENGALAMAN KERJA",
        pdf_header_social: "KEGIATAN SOSIAL",
        pdf_declaration_text: "Saya menyatakan bahwa informasi dalam lamaran ini adalah benar dan lengkap. Saya memberi wewenang kepada perusahaan untuk memverifikasi informasi yang diberikan.",
        pdf_digital_sign: "DISETUJUI SECARA DIGITAL",
        label_fam_name: "Nama",
        label_fam_rel: "Hubungan",
        label_fam_dob: "Lahir",
        label_fam_sex: "Gender",
        label_fam_edu: "Pendidikan",
        label_par_name: "Nama",
        label_par_rel: "Hubungan",
        label_par_edu: "Pendidikan",
        label_exp_comp: "Perusahaan",
        label_exp_pos: "Jabatan",
        label_exp_from: "Dari (Bulan)",
        label_exp_to: "Sampai (Bulan)",
        label_exp_reason: "Alasan Berhenti",
        label_exp_task: "Tugas & Tanggung Jawab",
        label_soc_org: "Organisasi",
        label_soc_act: "Kegiatan",
        label_soc_year: "Tahun",
        label_soc_pos: "Jabatan",
        pdf_th_name: "Nama",
        pdf_th_rel: "Hubungan",
        pdf_th_phone: "No. HP",
        pdf_th_born: "Lahir",
        pdf_th_sex: "Kelamin",
        pdf_th_edu: "Pend.",
        pdf_th_level: "Tingkat",
        pdf_th_inst: "Institusi",
        pdf_th_from: "Dari",
        pdf_th_to: "Sampai",
        pdf_th_major: "Jurusan",
        pdf_th_lang: "Bahasa",
        pdf_th_comp: "Perusahaan",
        pdf_th_pos: "Jabatan",
        pdf_th_reason: "Alasan",
        pdf_th_org: "Organisasi",
        pdf_th_act: "Kegiatan",
        pdf_th_year: "Tahun",
        pdf_th_task: "Tugas & Tanggung Jawab"
    },
    en: {
        title: "Employee Application",
        subtitle: "Official Digital Form",
        info_text: "This application makes it easier for you to apply for a job at Sika Indonesia. Your data is safe and only used for the selection process.",
        btn_start: "Start Now",
        btn_next: "Next",
        btn_prev: "Back",
        btn_download: "Download PDF",
        btn_email_direct: "Send via Email",
        label_id: "Bahasa Indonesia",
        label_en: "English",
        step1_title: "Personal Data",
        step2_title: "Family Data",
        step3_title: "Education",
        step4_title: "Work Experience",
        step5_title: "Additional Info",
        step6_title: "Completion",
        label_name: "Full Name (as per ID)",
        label_pob: "Place of Birth",
        label_dob: "Date of Birth",
        label_gender: "Gender",
        label_marital: "Marital Status",
        label_address: "Full Address",
        label_phone: "Mobile / WhatsApp Number",
        label_email: "Email Address",
        label_pos: "Position Applied For",
        btn_upload_photo: "Upload Photo",
        label_identity: "ID Card Number",
        label_religion: "Religion",
        label_sim: "Driving License (SIM)",
        label_sim_none: "None",
        label_social_media: "Social Media (IG/LinkedIn)",
        label_blood: "Blood Type",
        label_fam_member: "Family Members (Spouse & Children)",
        label_ortu: "Parents & Siblings",
        label_school: "Institution Name",
        label_year_from: "From (Year)",
        label_year_to: "To (Year)",
        label_major: "Major / Field of Study",
        label_language: "Language Proficiency",
        label_lang_name: "Language",
        label_lang_level: "Proficiency Level",
        label_company: "Company Name",
        label_exp_pos: "Last Position",
        label_reason: "Reason for Leaving",
        label_social: "Social Activities / Organization",
        label_reference: "References (Name & Relation)",
        label_emergency: "Emergency Contact (Name & Phone)",
        label_expected_salary: "Expected Salary",
        label_join_date: "Expected Start Date",
        label_privacy_consent: "I agree to the following criteria:",
        check_verify: "I certify that all information provided is true.",
        check_auth: "I authorize the company to verify my data.",
        finish_text: "Thank you! Please download your application in PDF format and send it to HRD.",
        email_info: "Click the button below to open your email client and send the PDF to Sika Indonesia HRD.",
        pdf_header_personal: "PERSONAL DATA",
        pdf_header_family: "FAMILY DATA",
        pdf_header_edu: "EDUCATION HISTORY",
        pdf_header_lang: "LANGUAGE PROFICIENCY",
        pdf_header_exp: "WORK EXPERIENCE",
        pdf_header_social: "SOCIAL ACTIVITIES",
        pdf_declaration_text: "I certify that the information contained in this application is true and complete. I authorize the company to verify any information provided.",
        pdf_digital_sign: "DIGITALLY CHECKED & AGREED",
        label_fam_name: "Name",
        label_fam_rel: "Relation",
        label_fam_dob: "Born",
        label_fam_sex: "Gender",
        label_fam_edu: "Education",
        label_par_name: "Name",
        label_par_rel: "Relation",
        label_par_edu: "Education",
        label_exp_comp: "Company",
        label_exp_pos: "Position",
        label_exp_from: "From (Month)",
        label_exp_to: "To (Month)",
        label_exp_reason: "Reason for Leaving",
        label_exp_task: "Tasks & Responsibilities",
        label_soc_org: "Organization",
        label_soc_act: "Activity",
        label_soc_year: "Year",
        label_soc_pos: "Position",
        pdf_th_name: "Name",
        pdf_th_rel: "Relation",
        pdf_th_phone: "Phone No.",
        pdf_th_born: "Born",
        pdf_th_sex: "Gender",
        pdf_th_edu: "Edu.",
        pdf_th_level: "Level",
        pdf_th_inst: "Institution",
        pdf_th_from: "From",
        pdf_th_to: "To",
        pdf_th_major: "Major",
        pdf_th_lang: "Language",
        pdf_th_comp: "Company",
        pdf_th_pos: "Position",
        pdf_th_reason: "Reason",
        pdf_th_org: "Organization",
        pdf_th_act: "Activity",
        pdf_th_year: "Year",
        pdf_th_task: "Tasks & Responsibilities"
    }
};

let currentLang = 'id';
let currentStep = 1;
const totalSteps = 6;
let uploadedPhotoData = null;
let customLogoData = null;

const maritalOptions = { id: ['Belum Kawin', 'Kawin', 'Cerai'], en: ['Single', 'Married', 'Divorced'] };
const genderOptions = { id: ['Pria', 'Wanita'], en: ['Male', 'Female'] };
const relOptions = { id: ['Ayah', 'Ibu', 'Kakak', 'Adik'], en: ['Father', 'Mother', 'Brother', 'Sister'] };
const eduOptions = ['Belum Sekolah', 'TK', 'SD', 'SMP', 'SMA', 'SMK', 'D1', 'D2', 'D3', 'S1', 'S2', 'S3'];
const mainEduOptions = ['SD', 'SMP', 'SMA', 'SMK', 'D1', 'D2', 'D3', 'S1', 'S2', 'S3'];

const langLevelOptions = {
    id: ['Dasar', 'Menengah', 'Lanjutan', 'Bahasa Ibu (Native)'],
    en: ['Basic', 'Intermediate', 'Advanced', 'Native']
};

document.addEventListener('DOMContentLoaded', () => {
    renderOptions();
    const checks = [document.getElementById('check_verify'), document.getElementById('check_auth')];
    checks.forEach(c => {
        if (c) {
            c.addEventListener('change', () => {
                const btn = document.getElementById('btn-download');
                if (document.getElementById('check_verify').checked && document.getElementById('check_auth').checked) {
                    btn.disabled = false; btn.classList.remove('opacity-50', 'cursor-not-allowed');
                } else {
                    btn.disabled = true; btn.classList.add('opacity-50', 'cursor-not-allowed');
                }
            });
        }
    });

    const religionSelect = document.querySelector('select[name="agama_select"]');
    if (religionSelect) toggleReligion(religionSelect);

    const logoInput = document.getElementById('custom-logo-input');
    if (logoInput) {
        logoInput.addEventListener('change', function (e) {
            if (e.target.files && e.target.files[0]) {
                const reader = new FileReader();
                reader.onload = function (evt) {
                    customLogoData = evt.target.result;
                    ['welcome-logo-img', 'header-logo-img', 'pdf-logo-img'].forEach(id => {
                        const img = document.getElementById(id);
                        if (img) { img.src = customLogoData; img.style.display = 'block'; }
                    });
                    document.querySelectorAll('.sika-text-logo').forEach(el => el.style.display = 'none');
                    alert("Logo berhasil diupdate! Silakan klik 'Download HTML Master' untuk menyimpan perubahan ini.");
                };
                reader.readAsDataURL(e.target.files[0]);
            }
        });
    }
});

function renderOptions() {
    const maritalSelect = document.getElementById('marital-select');
    if (maritalSelect) maritalSelect.innerHTML = maritalOptions[currentLang].map(opt => `<option value="${opt}">${opt}</option>`).join('');

    const genderSelect = document.getElementById('gender-select');
    if (genderSelect) genderSelect.innerHTML = genderOptions[currentLang].map(opt => `<option value="${opt}">${opt}</option>`).join('');

    ['table-pasangan', 'table-ortu', 'table-pendidikan', 'table-kerja', 'table-sosial', 'table-referensi'].forEach(id => {
        const table = document.getElementById(id);
        if (table) {
            table.querySelector(`tbody`).innerHTML = '';
            addRow(id);
        }
    });

    const langTable = document.getElementById('table-bahasa');
    if (langTable) {
        langTable.querySelector(`tbody`).innerHTML = '';
        addRow('table-bahasa', currentLang === 'id' ? 'Indonesia' : 'Indonesian');
        addRow('table-bahasa', currentLang === 'id' ? 'Inggris' : 'English');
    }
}

function handleFileUpload(e, callback) {
    if (e.target.files && e.target.files[0]) {
        const reader = new FileReader();
        reader.onload = function (evt) { callback(evt.target.result); };
        reader.readAsDataURL(e.target.files[0]);
    }
}

function previewPhoto(input) {
    handleFileUpload({ target: input }, (data) => {
        uploadedPhotoData = data;
        const preview = document.getElementById('photo-preview-img');
        if (preview) preview.src = data;
    });
}

function toggleReligion(select) {
    const otherInput = document.getElementById('agama_lain');
    const finalInput = document.getElementById('agama_final');
    if (!otherInput || !finalInput) return;

    if (select.value === 'Lainnya') {
        otherInput.classList.add('show'); otherInput.setAttribute('required', 'true');
        finalInput.value = otherInput.value;
        otherInput.oninput = function () { finalInput.value = this.value; };
    } else {
        otherInput.classList.remove('show'); otherInput.removeAttribute('required');
        finalInput.value = select.value;
    }
}

function setLanguage(lang) {
    currentLang = lang;
    const welcome = document.getElementById('welcome-screen');
    const container = document.getElementById('app-container');
    if (welcome) welcome.style.display = 'none';
    if (container) container.classList.remove('hidden');

    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (i18n[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = i18n[lang][key];
            else el.innerHTML = i18n[lang][key];
        }
    });

    const privacyLink = document.getElementById('privacy-link');
    const globalPrivacyLink = document.getElementById('global-privacy-link');

    if (lang === 'id') {
        if (privacyLink) { privacyLink.href = 'https://idn.sika.com/in/Pemberitahuan-Perlindungan.html'; privacyLink.innerText = 'Pemberitahuan Perlindungan Data'; }
        if (globalPrivacyLink) { globalPrivacyLink.href = 'https://idn.sika.com/in/Pemberitahuan-Perlindungan.html'; globalPrivacyLink.innerText = 'Pemberitahuan Perlindungan Data'; }
    } else {
        if (privacyLink) { privacyLink.href = 'https://idn.sika.com/en/privacy-notice.html'; privacyLink.innerText = 'Privacy Notice'; }
        if (globalPrivacyLink) { globalPrivacyLink.href = 'https://idn.sika.com/en/privacy-notice.html'; globalPrivacyLink.innerText = 'Privacy Notice'; }
    }

    const labels = lang === 'id' ? ['Pribadi', 'Keluarga', 'Pend.', 'Kerja', 'Info', 'Done'] : ['Personal', 'Family', 'Edu', 'Exp', 'Info', 'Done'];
    const pLabels = document.getElementById('progress-labels');
    if (pLabels) pLabels.innerHTML = labels.map(l => `<span>${l}</span>`).join('');

    renderOptions();
    updateUI();
}

function showWelcomeScreen() {
    const welcome = document.getElementById('welcome-screen');
    const container = document.getElementById('app-container');
    if (welcome) welcome.style.display = 'flex';
    if (container) container.classList.add('hidden');
}

function changeStep(n) {
    if (n === 1 && !validateStep(currentStep)) return;
    currentStep += n;
    if (currentStep < 1) currentStep = 1; if (currentStep > totalSteps) currentStep = totalSteps;
    updateUI(); window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateUI() {
    document.querySelectorAll('.step-content').forEach((el, index) => {
        if ((index + 1) === currentStep) el.classList.add('active'); else el.classList.remove('active');
    });

    const prevBtn = document.getElementById('btn-prev');
    if (prevBtn) {
        prevBtn.disabled = currentStep === 1;
        prevBtn.classList.toggle('opacity-50', currentStep === 1);
    }

    const nextBtn = document.getElementById('btn-next');
    const downloadBtn = document.getElementById('btn-download');
    const emailBtn = document.getElementById('btn-email-direct');

    if (currentStep === totalSteps) {
        if (nextBtn) nextBtn.classList.add('hidden');
        if (downloadBtn) {
            downloadBtn.classList.remove('hidden'); downloadBtn.style.display = 'flex';
            if (document.getElementById('check_verify').checked && document.getElementById('check_auth').checked) {
                downloadBtn.disabled = false; downloadBtn.classList.remove('opacity-50', 'cursor-not-allowed');
            } else {
                downloadBtn.disabled = true; downloadBtn.classList.add('opacity-50', 'cursor-not-allowed');
            }
        }
        if (emailBtn) { emailBtn.classList.remove('hidden'); emailBtn.style.display = 'flex'; }
    } else {
        if (nextBtn) { nextBtn.classList.remove('hidden'); nextBtn.style.display = 'flex'; }
        if (downloadBtn) downloadBtn.classList.add('hidden');
        if (emailBtn) emailBtn.classList.add('hidden');
    }
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) progressBar.style.width = `${(currentStep / totalSteps) * 100}%`;
}

function validateStep(step) {
    const activeStep = document.getElementById(`step-${step}`);
    if (!activeStep) return true;

    const requiredInputs = activeStep.querySelectorAll('input[required]:not(.hidden-input:not(.show)), select[required], textarea[required]');
    let valid = true;
    requiredInputs.forEach(input => {
        if (!input.value || (input.type === 'checkbox' && !input.checked)) {
            input.classList.add('border-red-500', 'ring-2', 'ring-red-500'); valid = false;
        } else {
            input.classList.remove('border-red-500', 'ring-2', 'ring-red-500');
        }
    });
    if (!valid) alert(currentLang === 'id' ? "Mohon lengkapi kolom wajib!" : "Please fill in required fields!");
    return valid;
}

function generateOptions(options) { return options.map(opt => `<option value="${opt}">${opt}</option>`).join(''); }

function addRow(tableId, defaultVal = '') {
    const tbody = document.querySelector(`#${tableId} tbody`);
    if (!tbody) return;

    const tr = document.createElement('tr');
    let cols = '';
    if (tableId === 'table-pasangan') {
        const fOpts = famOptions[currentLang].map(o => `<option value="${o}">${o}</option>`).join('');
        cols = `<td><input class="w-full border p-2 rounded" name="fam_name[]"></td><td><select class="w-full border p-2 rounded" name="fam_rel[]">${fOpts}</select></td><td><input type="date" class="w-full border p-2 rounded bg-white" name="fam_dob[]"></td><td><select class="w-full border p-2 rounded bg-white" name="fam_sex[]">${genderOptions[currentLang].map(o => `<option>${o}</option>`).join('')}</select></td><td><select class="w-full border p-2 rounded" name="fam_edu[]">${generateOptions(eduOptions)}</select></td>`;
    } else if (tableId === 'table-ortu') {
        cols = `<td><input class="w-full border p-2 rounded" name="par_name[]"></td><td><select class="w-full border p-2 rounded" name="par_rel[]">${generateOptions(relOptions[currentLang])}</select></td><td><select class="w-full border p-2 rounded" name="par_edu[]">${generateOptions(eduOptions)}</select></td>`;
    } else if (tableId === 'table-pendidikan') {
        cols = `<td><select class="w-24 border p-2 rounded" name="edu_level[]">${generateOptions(mainEduOptions)}</select></td><td><input class="w-full border p-2 rounded" name="edu_school[]"></td><td><input class="w-full border p-2 rounded w-32" name="edu_from[]" type="month"></td><td><input class="w-full border p-2 rounded w-32" name="edu_to[]" type="month"></td><td><input class="w-full border p-2 rounded" name="edu_major[]"></td>`;
    } else if (tableId === 'table-bahasa') {
        cols = `<td><input class="w-full border p-2 rounded" name="lang_name[]" value="${defaultVal}"></td><td><select class="w-full border p-2 rounded" name="lang_level[]">${generateOptions(langLevelOptions[currentLang])}</select></td>`;
    } else if (tableId === 'table-kerja') {
        const lComp = i18n[currentLang]['label_exp_comp'];
        const lPos = i18n[currentLang]['label_exp_pos'];
        const lFrom = i18n[currentLang]['label_exp_from'];
        const lTo = i18n[currentLang]['label_exp_to'];
        const lReason = i18n[currentLang]['label_exp_reason'];
        const lTask = i18n[currentLang]['label_exp_task'];

        cols = `
        <td colspan="5" class="p-0 border-0">
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-2">
                <div class="flex flex-col"><label class="text-[10px] text-gray-500 font-bold ml-1 uppercase">${lComp}</label><input class="w-full border p-2 rounded" name="exp_comp[]"></div>
                <div class="flex flex-col"><label class="text-[10px] text-gray-500 font-bold ml-1 uppercase">${lPos}</label><input class="w-full border p-2 rounded" name="exp_pos[]"></div>
                <div class="flex flex-col"><label class="text-[10px] text-gray-500 font-bold ml-1 uppercase">${lFrom}</label><input class="w-full border p-2 rounded" name="exp_from[]" type="month"></div>
                <div class="flex flex-col"><label class="text-[10px] text-gray-500 font-bold ml-1 uppercase">${lTo}</label><input class="w-full border p-2 rounded" name="exp_to[]" type="month"></div>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-2 mb-2">
                <div class="flex flex-col"><label class="text-[10px] text-gray-500 font-bold ml-1 uppercase">${lReason}</label><input class="w-full border p-2 rounded" name="exp_reason[]"></div>
                <div class="flex flex-col"><label class="text-[10px] text-gray-500 font-bold ml-1 uppercase">${lTask}</label><textarea class="w-full border p-2 rounded min-h-[60px] resize-y" name="exp_task[]" oninput="this.style.height = ''; this.style.height = this.scrollHeight + 'px'"></textarea></div>
            </div>
        </td>`;
    } else if (tableId === 'table-sosial') {
        cols = `<td><input class="w-full border p-2 rounded" name="soc_org[]"></td><td><input class="w-full border p-2 rounded" name="soc_act[]"></td><td><input class="w-full border p-2 rounded w-20" name="soc_year[]" type="number" placeholder="Year"></td><td><input class="w-full border p-2 rounded" name="soc_pos[]"></td>`;
    } else if (tableId === 'table-referensi') {
        cols = `<td><input class="w-full border p-2 rounded" name="ref_name[]"></td><td><input class="w-full border p-2 rounded" name="ref_rel[]"></td><td><input class="w-full border p-2 rounded" name="ref_phone[]"></td>`;
    }
    tr.innerHTML = cols + `<td class="text-center"><button type="button" onclick="this.closest('tr').remove()" class="text-red-500 bg-red-50 p-2 rounded-full w-8 h-8 flex items-center justify-center"><i class="fas fa-times"></i></button></td>`;
    tbody.appendChild(tr);
}

function generatePDF() {
    if (!document.getElementById('check_verify').checked || !document.getElementById('check_auth').checked) {
        alert('Please check all declaration boxes first.'); return;
    }
    const pdfTemplate = document.getElementById('pdf-template');
    pdfTemplate.querySelectorAll('[data-pdf-i18n]').forEach(el => {
        const key = el.getAttribute('data-pdf-i18n');
        if (i18n[currentLang][key]) el.innerText = i18n[currentLang][key];
    });

    // Set PDF Logo to Base64 to prevent Tainted Canvas error
    const pdfLogo = document.getElementById('pdf-logo-img');
    if (pdfLogo) {
        pdfLogo.src = customLogoData ? customLogoData : (typeof SIKA_LOGO_BASE64 !== 'undefined' ? SIKA_LOGO_BASE64 : '');
    }

    const name = document.querySelector('[name="nama"]').value || "Candidate";
    const pdfPhoto = document.getElementById('pdf-photo-img');
    if (uploadedPhotoData) { pdfPhoto.src = uploadedPhotoData; pdfPhoto.style.display = 'block'; } else { pdfPhoto.style.display = 'none'; }

    const genderSelect = document.getElementById('gender-select');
    const pdfGender = document.getElementById('pdf-gender');
    if (genderSelect && pdfGender) pdfGender.innerText = genderSelect.value;

    const pdfMarital = document.querySelector('[data-pdf="status_kawin"]');
    if (pdfMarital) pdfMarital.innerText = document.getElementById('marital-select').value;

    const tmpPob = document.querySelector('[name="tmp_lahir"]');
    const tglLahir = document.querySelector('[name="tgl_lahir"]');
    const pdfTtl = document.querySelector('[data-pdf="ttl"]');
    if (pdfTtl) {
        let ttlStr = "";
        if (tmpPob && tmpPob.value) ttlStr += tmpPob.value;
        if (tglLahir && tglLahir.value) ttlStr += (ttlStr ? ", " : "") + tglLahir.value.split('-').reverse().join('-');
        pdfTtl.innerText = ttlStr;
    }

    document.querySelectorAll('[data-pdf]').forEach(el => {
        const key = el.getAttribute('data-pdf');
        const input = document.querySelector(`[name="${key}"]`);
        if (input && key !== 'status_kawin' && key !== 'ttl' && key !== 'mulai') el.innerText = input.value;
    });

    const mulaiDate = document.querySelector('[name="mulai"]');
    const pdfMulai = document.querySelector('[data-pdf="mulai"]');
    if (mulaiDate && pdfMulai && mulaiDate.value) {
        pdfMulai.innerText = mulaiDate.value.split('-').reverse().join('-');
    }

    ['pasangan', 'ortu', 'pendidikan', 'bahasa', 'kerja', 'sosial', 'referensi'].forEach(t => { copyTableToPDF(`table-${t}`, `pdf-table-${t}`); });

    const element = document.getElementById('pdf-template');
    element.style.display = 'block';

    const opt = {
        margin: [5, 10, 10, 10],
        filename: `Sika_App_${name.replace(/\s+/g, '_')}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, logging: false },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['css', 'legacy'] }
    };

    const btnDownload = document.getElementById('btn-download');
    const originalText = btnDownload.innerHTML;
    btnDownload.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...'; btnDownload.disabled = true;

    html2pdf().set(opt).from(element).save().then(() => {
        element.style.display = 'none'; btnDownload.innerHTML = originalText; btnDownload.disabled = false;
        const emailSect = document.getElementById('email-section');
        if (emailSect) emailSect.classList.remove('hidden');
    }).catch(err => {
        console.error("PDF Error:", err); alert("Gagal membuat PDF. (Error: " + (err.message || err) + ")");
        element.style.display = 'none'; btnDownload.innerHTML = originalText; btnDownload.disabled = false;
    });
}

function sendDirectEmail() {
    const name = document.querySelector('[name="nama"]').value || "Candidate";
    const position = document.querySelector('[name="jabatan"]').value || "Position";
    const subject = `Lamaran Kerja - ${name} - ${position}`;
    let body = `Kepada HRD Sika Indonesia,\n\n` +
        `Dengan ini saya mengirimkan formulir lamaran kerja saya (terlampir) untuk posisi ${position}.\n\n` +
        `CV Komplit diantaranya Surat Lamaran, Ijazah, Surat Keterangan Kerja, KTP, NPWP Akan dibawa ketika datang untuk interview.\n\n` +
        `Terima kasih.\n\n` +
        `Hormat saya,\n${name}`;
    window.location.href = `mailto:hr@id.sika.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function copyTableToPDF(srcId, destId) {
    const srcTable = document.getElementById(srcId);
    const destTable = document.getElementById(destId);
    if (!srcTable || !destTable) return;

    if (srcId === 'table-kerja') {
        copyExpTableToPDF(srcTable, destTable);
        return;
    }

    const srcRows = srcTable.querySelectorAll('tbody tr');
    const destBody = destTable.querySelector('tbody');
    destBody.innerHTML = '';
    srcRows.forEach(row => {
        const inputs = row.querySelectorAll('input, select, textarea');
        let hasData = false; inputs.forEach(i => { if (i.value) hasData = true; });
        if (hasData) {
            const tr = document.createElement('tr');
            tr.style.pageBreakInside = "avoid";
            tr.style.breakInside = "avoid";

            inputs.forEach(i => {
                const td = document.createElement('td');
                td.innerText = i.value;
                tr.appendChild(td);
            });
            destBody.appendChild(tr);
        }
    });
}

function copyExpTableToPDF(srcTable, destTable) {
    const srcRows = srcTable.querySelectorAll('tbody > tr');
    const destBody = destTable.querySelector('tbody');
    destBody.innerHTML = '';

    srcRows.forEach(row => {
        const comp = row.querySelector('[name="exp_comp[]"]');
        const pos = row.querySelector('[name="exp_pos[]"]');
        const from = row.querySelector('[name="exp_from[]"]');
        const to = row.querySelector('[name="exp_to[]"]');
        const reason = row.querySelector('[name="exp_reason[]"]');
        const task = row.querySelector('[name="exp_task[]"]');

        if (comp && comp.value) {
            const tr1 = document.createElement('tr');
            tr1.style.pageBreakInside = "avoid";

            tr1.innerHTML = `
                <td class="font-bold">${comp.value}</td>
                <td>${pos ? pos.value : ''}</td>
                <td>${from && from.value ? from.value : ''}</td>
                <td>${to && to.value ? to.value : ''}</td>
                <td>${reason ? reason.value : ''}</td>
            `;
            destBody.appendChild(tr1);

            if (task && task.value) {
                const tr2 = document.createElement('tr');
                tr2.style.pageBreakInside = "avoid";
                const labelTask = i18n[currentLang]['pdf_th_task'] || "Tugas & Tanggung Jawab";
                tr2.innerHTML = `
                    <td colspan="5" class="text-left bg-gray-50 italic text-[10px]">
                        <span class="font-bold text-gray-700">${labelTask}:</span><br/>
                        ${task.value.replace(/\n/g, '<br/>')}
                    </td>
                `;
                destBody.appendChild(tr2);
            }
        }
    });
}

function copyEmbedCode() {
    const copyText = document.querySelector(".code-block");
    if (!copyText) return;
    copyText.select(); copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value); alert("Kode Embed disalin ke clipboard!");
}

function downloadMasterHTML() {
    const docClone = document.documentElement.cloneNode(true);
    if (customLogoData) {
        ['welcome-logo-img', 'header-logo-img', 'pdf-logo-img'].forEach(id => {
            const img = docClone.querySelector(`#${id}`);
            if (img) { img.src = customLogoData; img.removeAttribute('onerror'); img.style.display = 'block'; }
        });
        docClone.querySelectorAll('.sika-text-logo').forEach(el => el.style.display = 'none');
    }
    const setupPanel = docClone.querySelector('#setup-panel'); if (setupPanel) setupPanel.remove();
    const htmlContent = "<!DOCTYPE html>\n" + docClone.outerHTML;
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = "Sika_Application_Master_Logo_Updated.html";
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
}

function showInstructions() {
    const modal = document.getElementById('info-modal');
    if (modal) modal.classList.remove('hidden');
}

function resetForm() {
    if (confirm('Apakah Anda yakin ingin menghapus semua data?')) {
        const form = document.getElementById('employeeForm');
        if (form) form.reset();
        uploadedPhotoData = null;
        const preview = document.getElementById('photo-preview-img');
        if (preview) preview.src = "https://via.placeholder.com/120x150?text=FOTO";
        currentStep = 1; updateUI(); window.scrollTo(0, 0);
    }
}
