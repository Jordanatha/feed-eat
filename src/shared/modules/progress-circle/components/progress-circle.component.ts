import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'progress-circle',
    templateUrl: './progress-circle.component.html',
    styleUrls: ['./progress-circle.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressCircleComponent implements OnChanges {
    @Input() public radius: number = 30;
    @Input() public stroke: number = 4;
    @Input() public progress: number = 40;
    @Input() public strokeColor: string = 'blue';
    @Input() public textColor: string = 'black';

    public normalizedRadius: number;
    public circumference: number;
    public strokeDashoffset: number;
    public textSize: number;

    public ngOnChanges(props: SimpleChanges): void {
        const { radius, stroke, progress } = props;

        if (
            (progress && progress.currentValue !== progress.previousValue) ||
            (radius && radius.currentValue !== radius.previousValue) ||
            (stroke && stroke.currentValue !== stroke.previousValue)
        ) {
            const radiusValue = (radius && radius.currentValue) || this.radius;
            const strokeValue = (stroke && stroke.currentValue) || this.stroke;
            const progressValue = (progress && progress.currentValue > 100 ? 100 : progress.currentValue) || this.progress;

            this.textSize = radiusValue / 2 - 5;

            this.drawCircle(radiusValue, strokeValue, progressValue);
        }
    }

    private drawCircle(radius: number, stroke: number, progress: number): void {
        this.normalizedRadius = radius - stroke * 2;
        this.circumference = this.normalizedRadius * 2 * Math.PI;
        this.strokeDashoffset = this.circumference - (progress / 100) * this.circumference;
    }
}
