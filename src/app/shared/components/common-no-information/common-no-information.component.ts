import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-common-no-information',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './common-no-information.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommonNoInformationComponent {
  @Input() message: string = '¡No se encontró información!';
  @Input() subMessage: string = '¡Cuando exista información, aparecerá aquí.!';
}
