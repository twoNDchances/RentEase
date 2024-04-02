// Get last five months for Chart
export function getAbbreviatedMonthNames(startDate) {
    let currentDate = new Date();
    let months = [];

    while (startDate <= currentDate) {
        let monthAbbreviated = startDate.toLocaleString('default', { month: 'short' });
        let year = startDate.getFullYear();
        months.push(`${monthAbbreviated}/${year}`);

        startDate.setMonth(startDate.getMonth() + 1);
    }

    return months;
}

// Image previewer
export function imagePreviewer(photoLoaderID, imageLoaderID, attrType) {
    const photoInp = $(photoLoaderID);
    let file;
    photoInp.change(function () {
        file = this.files[0];
        if (file) {
            let reader = new FileReader();
            reader.onload = function (event) {
                let imageURL = event.target.result;
                if (attrType === 'HTML') {
                    $(imageLoaderID).attr("src", imageURL);
                }
                else if (attrType === 'CSS') {
                    $(imageLoaderID).css('background-image', 'url(' + imageURL + ')');
                }
            };
            reader.readAsDataURL(file);
        }
    });
}

// Notificator
export function notificator(title, message, type) {
    toastr.options.closeMethod = 'fadeOut';
    toastr.options.closeDuration = 300;
    toastr.options.closeEasing = 'swing';
    toastr.options.timeOut = 2000;
    toastr.options.showMethod = 'slideDown';
    toastr.options.hideMethod = 'slideUp';
    toastr.options.preventDuplicates = true;
    if (type == 'info') {
        toastr.info(message, title);
    }
    if (type == 'success') {
        toastr.success(message, title);
    }
    if (type == 'warning') {
        toastr.warning(message, title);
    }
    if (type == 'error') {
        toastr.error(message, title);
    }
}