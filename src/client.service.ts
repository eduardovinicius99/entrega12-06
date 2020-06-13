import { clientEntity } from "./client.enty";
import { Injectable } from '@nestjs/common';





@Injectable()

export class clientService {

    client: Array<clientEntity> = [];
    async findAll(){
        return this.client;
    }
    
    async save(client: clientEntity) {
        this.client.push(client);
    
    }
}