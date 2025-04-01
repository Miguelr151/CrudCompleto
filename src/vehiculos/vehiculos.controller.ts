import {Controller,Get,Post,Body,Param,Delete,Put,} from '@nestjs/common';
  import { VehiculosService } from './vehiculos.service';
  import { CreateVehiculoDto } from './dto/create-vehiculo.dto';
  import { UpdateVehiculoDto } from './dto/update-vehiculo.dto';
  
  @Controller('vehiculos')
  export class VehiculosController {
    constructor(private readonly vehiculosService: VehiculosService) {}
  
    @Post()
    create(@Body() createDto: CreateVehiculoDto) {
      return this.vehiculosService.create(createDto);
    }
  
    @Get()
    findAll() {
      return this.vehiculosService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.vehiculosService.findOne(+id);
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() updateDto: UpdateVehiculoDto) {
      return this.vehiculosService.update(+id, updateDto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.vehiculosService.remove(+id);
    }
  }
  