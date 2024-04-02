import { notificator } from "../private_general_functions.js";

$(document).ready(() => {
    $('#signOut').click(() => {
        document.location.href = 'welcome_page.html'
    });
    const vietnamData = JSON.parse(data);
    const provinceNumber = 48; //Đà Nẵng
    const districtNumber = 494; //Ngũ Hành Sơn
    const townNumber = 20290; //Hòa Hải

    function setDefaultValue() {
        listProvinces(vietnamData, provinceNumber);
        listDistricts(vietnamData, provinceNumber, districtNumber);
        listTowns(vietnamData, provinceNumber, districtNumber, townNumber);
    }

    function listProvinces(data, defaultValue = -1) {
        let province = $('#province');
        if (province.val() == '-1') {
            province.empty();
            province.append('<option value="-1">Chọn tỉnh thành</option>');
        }
        if (defaultValue != -1) {
            for (let index = 0; index < data.length; index++) {
                const element = data[index];
                if (element.code == defaultValue) {
                    province.append(`<option value="${element.code}" selected>${element.name}</option>`);
                }
                else {
                    province.append(`<option value="${element.code}">${element.name}</option>`);
                }
            }
        }
        else {
            for (let index = 0; index < data.length; index++) {
                const element = data[index];
                province.append(`<option value="${element.code}">${element.name}</option>`);
            }
        }
    }

    function listDistricts(data, provinceCode, defaultValue = -1) {
        let district = $('#district');
        district.empty();
        district.append('<option value="-1">Chọn quận/huyện</option>');
        if (defaultValue != -1) {
            for (let index = 0; index < data.length; index++) {
                const provinceElement = data[index];
                if (provinceElement.code == provinceCode) {
                    for (let jndex = 0; jndex < provinceElement.districts.length; jndex++) {
                        const districtElement = provinceElement.districts[jndex];
                        if (districtElement.code == defaultValue) {
                            district.append(`<option value="${districtElement.code}" selected>${districtElement.name}</option>`);
                        }
                        else {
                            district.append(`<option value="${districtElement.code}">${districtElement.name}</option>`);
                        }
                    }
                }
            }
        }
        else {
            for (let index = 0; index < data.length; index++) {
                const provinceElement = data[index];
                if (provinceElement.code == provinceCode) {
                    for (let jndex = 0; jndex < provinceElement.districts.length; jndex++) {
                        const districtElement = provinceElement.districts[jndex];
                        district.append(`<option value="${districtElement.code}">${districtElement.name}</option>`);
                    }
                }
            }
        }
    }

    function listTowns(data, provinceCode, districtCode, defaultValue = -1) {
        let town = $('#town');
        town.empty();
        town.append('<option value="-1">Chọn phường/xã</option>');
        if (defaultValue != -1) {
            for (let index = 0; index < data.length; index++) {
                const provinceElement = data[index];
                if (provinceElement.code == provinceCode) {
                    for (let jndex = 0; jndex < provinceElement.districts.length; jndex++) {
                        const districtElement = provinceElement.districts[jndex];
                        if (districtElement.code == districtCode) {
                            for (let yndex = 0; yndex < districtElement.wards.length; yndex++) {
                                const wardElement = districtElement.wards[yndex];
                                if (wardElement.code == defaultValue) {
                                    town.append(`<option value="${wardElement.code}" selected>${wardElement.name}</option>`);
                                }
                                else {
                                    town.append(`<option value="${wardElement.code}">${wardElement.name}</option>`);
                                }
                            }
                        }
                    }
                }
            }
        }
        else {
            for (let index = 0; index < data.length; index++) {
                const provinceElement = data[index];
                if (provinceElement.code == provinceCode) {
                    for (let jndex = 0; jndex < provinceElement.districts.length; jndex++) {
                        const districtElement = provinceElement.districts[jndex];
                        if (districtElement.code == districtCode) {
                            for (let yndex = 0; yndex < districtElement.wards.length; yndex++) {
                                const wardElement = districtElement.wards[yndex];
                                town.append(`<option value="${wardElement.code}">${wardElement.name}</option>`);
                            }
                        }
                    }
                }
            }
        }
    }

    function setNewValue() {
        let provinceValue = null;
        let districtValue = null;
        let townValue = null;

        let district = $('#district');
        let town = $('#town');

        let currentProvinceValue = $('#province').val();
        let currentDistrictValue = $('#district').val();

        //Detect when change Town
        $('#town').change(function () {
            let townSelectedValue = $('#town').val();
            townValue = townSelectedValue;
        });

        //Detect when change District
        $('#district').change(() => {
            let districtSelectedValue = $('#district').val();
            if (districtSelectedValue == '-1') {
                districtValue = null;
                town.empty();
                town.append('<option value="-1">Chọn phường/xã</option>');
            }
            else {
                districtValue = districtSelectedValue;
            }

            if (districtSelectedValue != '-1' && $('#town').val() != '-1') {
                town.empty();
                town.append('<option value="-1">Chọn phường/xã</option>');
                districtValue = districtSelectedValue;
            }

            if (districtValue != null) {
                listTowns(vietnamData, currentProvinceValue, districtValue);
                $('#town').change(function () {
                    let townSelectedValue = $('#town').val();
                    townValue = townSelectedValue;
                });
            }
        });

        //Detect when change Province
        $('#province').change(function () {
            let provinceSelectedValue = $(this).val();
            if (provinceSelectedValue == '-1') {
                provinceValue = null;
                district.empty();
                district.append('<option value="-1">Chọn quận/huyện</option>');
                town.empty();
                town.append('<option value="-1">Chọn phường/xã</option>');
            }
            else {
                provinceValue = provinceSelectedValue;
            }

            if (provinceSelectedValue != '-1' && $('#town').val() != '-1') {
                district.empty();
                district.append('<option value="-1">Chọn quận/huyện</option>');
                town.empty();
                town.append('<option value="-1">Chọn phường/xã</option>');
                provinceValue = provinceSelectedValue;
            }

            if (provinceValue != null) {
                listDistricts(vietnamData, provinceValue);
                $('#district').change(function () {
                    let districtSelectedValue = $('#district').val();
                    if (districtSelectedValue == '-1') {
                        districtValue = null;
                        town.empty();
                        town.append('<option value="-1">Chọn phường/xã</option>');
                    }
                    else {
                        districtValue = districtSelectedValue;
                    }

                    if (districtSelectedValue != '-1' && $('#town').val() != '-1') {
                        town.empty();
                        town.append('<option value="-1">Chọn phường/xã</option>');
                        districtValue = districtSelectedValue;
                    }

                    if (districtValue != null) {
                        listTowns(vietnamData, provinceValue, districtValue);
                        $('#town').change(function () {
                            let townSelectedValue = $('#town').val();
                            townValue = townSelectedValue;
                        });
                    }
                });
            }
        });
    }

    setDefaultValue();

    $('#updateButton').click(() => {
        if ($('#name, #contact, #address').attr('disabled') !== undefined) {
            $('#updateButton').text('Confirm');
            $('#updateButton').removeClass('btn-outline-primary').addClass('btn-outline-alternate');
            $('#name, #contact, #address, #province, #district, #town').removeAttr('disabled');
            // resetCurrentValue();
            setNewValue();
        }
        else {
            if (($('#province').val() == '-1') || ($('#district').val() == '-1') || ($('#town').val() == '-1')) {
                notificator('Lỗi!', 'Vui lòng nhập địa chỉ', 'error');
            }
            else {
                $('#updateButton').removeClass('btn-outline-alternate').addClass('btn-outline-primary');
                $('#updateButton').text('Update');
                $('#name, #contact, #address, #province, #district, #town').attr('disabled', 'true');
                console.log('Updated: ', $('#address').val(), $('#province').val(), $('#district').val(), $('#town').val());
            }
        }
    });
});