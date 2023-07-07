import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quetzal'
})
export class QuetzalPipe implements PipeTransform {

  transform(value: number): string {
    // Aquí puedes implementar la lógica para convertir el valor a la moneda Quetzal
    // y retornar el valor transformado
    // Por ejemplo, si el símbolo de la moneda es "Q" y el valor tiene dos decimales:
    return `Q${value.toFixed(2)}`;
  }

}
