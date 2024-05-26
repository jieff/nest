import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Wish, WishSchema} from './wish/wish'
import { WishesService } from './wishes.service';
import { WishesController } from './wishes.controller';
//teste
@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Wish.name,
                schema: WishSchema
            }
        ])
    ],
    exports: [],
    controllers: [WishesController],
    providers: [WishesService]
})
export class WishesModule {}
