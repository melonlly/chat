import { Controller, Get, Req, Redirect, Query, Param, Post, Body } from '@nestjs/common';
import { AppService } from '../services/App';
import { Request } from 'express'
import { Cat } from 'src/dtos/Cat';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  // 获取请求对象 Request
  @Get()
  getHello(@Req() request: Request): string {
    // console.log(request)
    return this.appService.getHello();
  }

  // 获取Query参数
  @Get('/query')
  getQuery(@Query('version') v = 0.0): string {
    return `Query参数：${ v }`
  }

  // 获取路由参数
  @Get('/route/:id')
  getParams(@Param() params): string {
    return `路由参数 id：${ params.id }`
  }

  // 重定向（默认状态码 302）
  @Get('/baidu')
  @Redirect('http://www.baidu.com/')
  goToBaidu() {}

  // post创建一个dto
  @Post('/cat/add')
  addCat(@Body() cat: Cat): string {
    console.log(cat)
    return JSON.stringify(cat)
  }

}
