function getDaysAmount(month, year) {
    const months = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ];

    const monthIndex = months.indexOf(month);

    if (monthIndex === -1) {
        return 'error';
    }

    const lastDayOfMonth = new Date(year, monthIndex + 1, 0).getDate();

    return lastDayOfMonth;
}