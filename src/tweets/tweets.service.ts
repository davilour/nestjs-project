import { Injectable } from '@nestjs/common';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { UpdateTweetDto } from './dto/update-tweet.dto';
import { TweetsModule } from './tweets.module';
import { type } from 'os';
import { Tweet } from './entities/tweet.entity';

@Injectable()
export class TweetsService {
  constructor(private TweetsModule: typeof Tweet) {}

  create(createTweetDto: CreateTweetDto) {
    return 'This action adds a new tweet';
  }

  findAll() {
    return `This action returns all tweets`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tweet`;
  }

  update(id: number, updateTweetDto: UpdateTweetDto) {
    return `This action updates a #${id} tweet`;
  }

  remove(id: number) {
    return `This action removes a #${id} tweet`;
  }
}
