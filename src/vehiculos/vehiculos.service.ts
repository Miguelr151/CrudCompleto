import { Injectable } from '@nestjs/common';
import { Vehiculo } from './vehiculo.entity';
import { CreateVehiculoDto } from './dto/create-vehiculo.dto';


@Injectable()
export class VehiculosService {
  private vehiculos: Vehiculo[] = [
    {
      id: 1,
      marca: 'Toyota',
      modelo: 'Corolla',
      año: 2020,
      kilometraje: 35000,
      color: 'Blanco',
      tipo_combustible: 'Gasolina',
      transmision: 'Automática',
    },
  ];

  private idCounter = 2; // porque ya hay un vehículo con id 1

  create(createDto: CreateVehiculoDto) {
    const nuevoVehiculo = {
      id: this.idCounter++,
      ...createDto,
    };
    this.vehiculos.push(nuevoVehiculo);
    return nuevoVehiculo;
  }

  findAll(): Vehiculo[] {
    return this.vehiculos;
  }

  findOne(id: number): Vehiculo {
    return this.vehiculos.find(v => v.id === id);
  }

  update(id: number, data: Partial<Vehiculo>): Vehiculo {
    const vehiculo = this.findOne(id);
    if (vehiculo) {
      Object.assign(vehiculo, data);
    }
    return vehiculo;
  }

  remove(id: number): boolean {
    const index = this.vehiculos.findIndex(v => v.id === id);
    if (index > -1) {
      this.vehiculos.splice(index, 1);
      return true;
    }
    return false;
  }
}