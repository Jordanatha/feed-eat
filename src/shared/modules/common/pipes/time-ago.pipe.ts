import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'timeAgo',
    pure: true,
})
export class TimeAgoPipe implements PipeTransform {
    public transform(value: string) {
        const d = new Date(value);
        const now = new Date();
        const seconds = Math.round(Math.abs((now.getTime() - d.getTime()) / 1000));
        const minutes = Math.round(Math.abs(seconds / 60));
        const hours = Math.round(Math.abs(minutes / 60));
        const days = Math.round(Math.abs(hours / 24));
        const months = Math.round(Math.abs(days / 30.416));
        const years = Math.round(Math.abs(days / 365));

        if (Number.isNaN(seconds)) {
            return '';
        } else if (seconds <= 45) {
            return 'beberapa detik yang lalu';
        } else if (seconds <= 90) {
            return 'semenit yang lalu';
        } else if (minutes <= 45) {
            return minutes + ' menit yang lalu';
        } else if (minutes <= 90) {
            return 'sejam yang lalu';
        } else if (hours <= 22) {
            return hours + ' jam yang lalu';
        } else if (hours <= 36) {
            return 'sehari yang lalu';
        } else if (days <= 25) {
            return days + ' hari yang lalu';
        } else if (days <= 45) {
            return 'sebulan yang lalu';
        } else if (days <= 345) {
            return months + ' bulan yang lalu';
        } else if (days <= 545) {
            return 'setahun yang lalu';
        } else {
            return years + ' tahun yang lalu';
        }
    }
}
