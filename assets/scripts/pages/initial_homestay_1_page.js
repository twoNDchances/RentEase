$(document).ready(() => {
    $('#signOut').click(() => {
        document.location.href = 'welcome_page.html'
    });

    $(function () {
        apiProvince = (prodvince) => {
            let district;

            prodvince.forEach(element => {
                $('#province').append(`<option value="${element.code}">${element.name}</option>`)
            });
            $('#province').change(function () {
                $('#district').html('<option value="-1">Chọn quận/huyện</option>')
                $('#town').html('<option value = "-1"> Chọn phường/xã </option>')
                let value = $(this).val();
                $.each(prodvince, function (index, element) {
                    if (element.code == value) {
                        district = element.districts;
                        $.each(element.districts, function (index, element1) {
                            $('#district').append(`<option value="${element1.code}">${element1.name}</option>`)
                        });

                    }
                });
            });
            $('#district').change(function () {
                $('#town').html('<option value = "-1"> Chọn phường/xã </option>')
                let value = $(this).val();
                $.each(district, function (index, element) {
                    if (element.code == value) {
                        element.wards.forEach(element1 => {
                            $('#town').append(`<option value="${element1.code}">${element1.name}</option>`)
                        });
                    }
                });
            });
        };
        prodvince = JSON.parse(data);
        apiProvince(prodvince);
    });

    const form = document.getElementById('initial-form');
    const submitter = document.getElementById('initial-button');
    const formData = new FormData(form, submitter);
    for (const [key, value] of formData) {
        console.log(`${key}: ${value}\n`);
    }
    const para = new URLSearchParams(formData);
    console.log(para.toString());
    // changerMonitor('#province');
});

// function changerMonitor(field) {
//     $(field).on('input', () => {
//         if ($(field).val()) {
//             console.log('true');
//             return true;
//         }
//         else {
//             console.log('false');
//             return false;
//         }
//     });
// }