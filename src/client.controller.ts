import { clientService } from "./client.service";
import { Controller, Get, Body, Post } from "@nestjs/common";
import { clientDTO } from "./client.dto";
import { clientEntity } from "./client.enty";
import { plainToClass } from "class-transformer";


@Controller('users')
export class clientController {

    constructor(private readonly service: clientService) {
    }

    @Get()
    findAll() {
        return this.service.findAll();
    }

    @Post()
    save(@Body() usersDto: clientDTO) {
        const client = plainToClass(clientEntity, clientDTO);
        return this.service.save(client);

    }

}