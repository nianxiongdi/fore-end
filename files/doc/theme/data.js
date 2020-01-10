'use strict';

// 模块引入
const Controller = require('egg').Controller;
  
/**
 * fusion data
 */
class DataController extends Controller {
  
  /**
   * theme summary api
   */
  async summary() {
    const { ctx, service } = this;
    try {
      const result =  await service.data.summary();
      ctx.body = {
        success: true,
        data: result
      }
      return ;
    } catch(e) {
      ctx.logger.error(e);
      ctx.body = {
        success: false,
      }
    }
  }

  /**
   * get theme total，add，active
   */
  async getThemeInfo() {
    const { ctx, service } = this;
    const { start = 7, end = 0 } = ctx.query;
    try {
      const result = await service.data.getThemeInfo(start, end);
      ctx.body = {
        success: true,
        data: result
      }
    } catch(e) {
      ctx.logger.error(e);
      ctx.body = {
        success: false,
      }
    }
    
  }

  /**
   * publish status : success,fail,progress,timeout
   */
  async publishStatus() {
    const { ctx, service } = this;
    const { start = 7, end = 0 } = ctx.query;
    try {
      const result = await service.data.publishStatus(start, end);
      ctx.body = {
        success: true,
        data: result
      }
    } catch(e) {
      ctx.logger.error(e);
      ctx.body = {
        success: false,
      }
    }
  }

}

module.exports = DataController;
