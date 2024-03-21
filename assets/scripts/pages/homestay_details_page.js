$(document).ready(() => {
    $('#signOut').click(() => {
        document.location.href = 'welcome_page.html'
    });

    function jsonProcessor(data, target) {
        const getEntries = target.split('.');
        if (getEntries[0] === 'true') {
            let provinces = [];
            for (let index = 0; index < data.length; index++) {
                const real_data = data[index].name;
                provinces.push(data[index].code + '.' + real_data);
            }
            return provinces;
        }
        if (getEntries[0] !== 'null' && getEntries[1] === 'true') {
            let districts = [];
            for (let index = 0; index < data.length; index++) {
                const city = data[index].name;
                if (city.includes(getEntries[0])) {
                    const districtsOfCity = data[index].districts;
                    for (let jndex = 0; jndex < districtsOfCity.length; jndex++) {
                        const real_data = districtsOfCity[jndex].name;
                        districts.push(districtsOfCity[jndex].code + '.' + real_data);
                    }
                    return districts;
                }
            }
        }
        if (getEntries[0] !== 'null' && getEntries[1] !== 'null' && getEntries[2] === 'true') {
            let wards = [];
            for (let index = 0; index < data.length; index++) {
                const city = data[index].name;
                if (city.includes(getEntries[0])) {
                    const districtsOfCity = data[index].districts;
                    for (let jndex = 0; jndex < districtsOfCity.length; jndex++) {
                        const district = districtsOfCity[jndex].name;
                        if (district.includes(getEntries[1])) {
                            const wardsOfDistrict = districtsOfCity[jndex].wards;
                            for (let yndex = 0; yndex < wardsOfDistrict.length; yndex++) {
                                const real_data = wardsOfDistrict[yndex].name;
                                wards.push(wardsOfDistrict[yndex].code + '.' + real_data);
                            }
                            return wards;
                        }
                    }
                }
            }
        }
    }

    function setDefaultValue() {
        let vietnamData = JSON.parse(data);
        const prodvinceDefault = 'Đà Nẵng';
        const districtDefault = 'Ngũ Hành Sơn';
        const wardDefault = 'Hoà Hải';

        const city = jsonProcessor(vietnamData, 'true.null.null');
        for (let index = 0; index < city.length; index++) {
            const element = city[index];
            if (element.includes(prodvinceDefault)) {
                $('#province').append(`<option value="${element.split('.')[0]}" selected>${element.split('.')[1]}</option>`);
            }
            else {
                $('#province').append(`<option value="${element.split('.')[0]}">${element.split('.')[1]}</option>`);
            }
        }

        let provinceOptions = $('#province').find('option');
        const district = jsonProcessor(vietnamData, `${prodvinceDefault}.true.null`);
        for (let index = 0; index < provinceOptions.length; index++) {
            const elementProvince = provinceOptions[index];
            if (elementProvince.innerHTML.includes(prodvinceDefault)) {
                for (let jndex = 0; jndex < district.length; jndex++) {
                    const elementDistrict = district[jndex];
                    if (elementDistrict.split('.')[1].includes(districtDefault)) {
                        $('#district').append(`<option value="${elementDistrict.split('.')[0]}" selected>${elementDistrict.split('.')[1]}</option>`);
                    }
                    else {
                        $('#district').append(`<option value="${elementDistrict.split('.')[0]}">${elementDistrict.split('.')[1]}</option>`);
                    }
                }
            }
        }

        let districtOptions = $('#district').find('option');
        const ward = jsonProcessor(vietnamData, `${prodvinceDefault}.${districtDefault}.true`);
        for (let index = 0; index < districtOptions.length; index++) {
            const elementDistrict = districtOptions[index];
            if (elementDistrict.innerHTML.includes(districtDefault)) {
                for (let jndex = 0; jndex < ward.length; jndex++) {
                    const elementWard = ward[jndex];
                    if (elementWard.split('.')[1].includes(wardDefault)) {
                        $('#town').append(`<option value="${elementWard.split('.')[0]}" selected>${elementWard.split('.')[1]}</option>`);
                    }
                    else {
                        $('#town').append(`<option value="${elementWard.split('.')[0]}">${elementWard.split('.')[1]}</option>`);
                    }
                }
            }
        }
    }

    function setNewValue() {
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
    }

    function resetCurrentValue() {
        $('#province, #district, #town').empty();
        $('#province').append('<option value="-1">Chọn tỉnh thành</option>');
        $('#district').append('<option value="-1">Chọn quận/huyện</option>');
        $('#town').append('<option value = "-1"> Chọn phường/xã </option>');
    }


    setDefaultValue();

    $('#updateButton').click(() => {
        if ($('#name, #contact, #address').attr('disabled') !== undefined) {
            $('#updateButton').text('Confirm');
            $('#updateButton').removeClass('btn-outline-primary').addClass('btn-outline-alternate');
            $('#name, #contact, #address, #province, #district, #town').removeAttr('disabled');
            resetCurrentValue();
            setNewValue();
        }
        else {
            if (($('#province').val() === '-1') && ($('#district').val() === '-1') && ($('#town').val() === '-1')) {
                toastr.options.closeMethod = 'fadeOut';
                toastr.options.closeDuration = 300;
                toastr.options.closeEasing = 'swing';
                toastr.options.timeOut = 2000;
                toastr.options.showMethod = 'slideDown';
                // toastr.options.hideMethod = 'slideUp';
                toastr.options.closeMethod = 'slideUp';
                toastr.options.preventDuplicates = true;
                toastr.error('Vui lòng chọn địa chỉ của chi nhánh.', 'Lỗi!');
            }
            else {
                $('#updateButton').removeClass('btn-outline-alternate').addClass('btn-outline-primary');
                $('#updateButton').text('Update');
                $('#name, #contact, #address, #province, #district, #town').attr('disabled', 'true');
            }
        }
    });
});