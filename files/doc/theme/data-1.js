'use strict';

const Service = require('egg').Service;
const moment = require('moment');

class DataService extends Service {
  constructor(ctx) {
    super(ctx);

    this.db = ctx.app.mysql;
    this.table = 'app';
  }

  /**
   * theme summary api
   */
  async summary() {
    const { db } = this;
    const valid = await db.query("SELECT COUNT(1) as count from theme where version is null  or version = '0.0.0'");
    const total = await db.query("SELECT COUNT(1) as count from theme");
    return {
      valid: valid[0].count,
      total: total[0].count,
    };
  }

  /**
   * get theme total，add，active 
   */
  async getThemeInfo(start, end) {
    const { db } = this;
    const total = [];
    const added = [];
    const active = [];
    while(end++ < start) {
      const base = moment().subtract(end, 'days').format('YYYY-MM-DD');
      const baseMonth = moment().subtract(end+30, 'days').format('YYYY-MM-DD');
  
      const startTime = base + ' 00:00:00';
      const endTime = base + ' 23:59:59';
      // calculate daily active
      const startMonth = baseMonth + ' 00:00:00';
      const endMonth = base + ' 23:59:59'
 
      const temp1 = await db.query("SELECT COUNT(DISTINCT(theme_id)) as count FROM theme_publish WHERE gmt_modified >= ? and gmt_modified <= ? GROUP BY theme_id HAVING count(theme_id)>2",[startMonth, endMonth]);
      const temp2 = await db.query("SELECT COUNT(1) as count FROM theme WHERE gmt_create >= ? and gmt_create <= ?",[startTime, endTime]);
      const temp3 = await db.query("SELECT COUNT(1) as count FROM theme WHERE gmt_create <= ?",[endTime]);

      active.push({date: base, count: JSON.stringify(temp1) === '[]' ? 0: temp1[0].count});
      added.push({data: base, count: JSON.stringify(temp2) === '[]' ? 0: temp2[0].count});
      total.push({data: base, count: JSON.stringify(temp3) === '[]' ? 0: temp3[0].count});

    }
    return {
      total,
      active,
      added
    }
  }

   /**
   * publish status : success,fail,progress,timeout
   */
  async publishStatus(start, end) {
    const { db } = this;
    const success =[];
    const fails = [];
    const progress = [];
    const timeouts = [];
    while(end++ < start) {
      const base = moment().subtract(end, 'days').format('YYYY-MM-DD');
      const startTime = base + ' 00:00:00';
      const endTime = base + ' 23:59:59';
      const temp = await db.query("SELECT status, COUNT(1) as count FROM theme_publish WHERE gmt_modified >= ? and gmt_modified <= ? GROUP BY status ",[startTime, endTime]);
      const status = [0, 0, 0, 0];
    
      for(let i=0;i<temp.length; i++) {
        switch(temp[i].status) {
          case 'success': //0
            status[0] = 1;
            success.push({date: base, count: temp[i].count});
            break;
          case 'fail': // 1
            status[1] = 1;
            fails.push({date: base, count: temp[i].count});
            break;
          case 'progress': //2
            status[2] = 1;
            progress.push({date: base, count: temp[i].count});
            break;
          case 'timeout': //3
            status[3] = 1;
            timeouts.push({date: base, count: temp[i].count});
            break;
          default:
            break;
        }
      }

      for(let i=0; i<4; i++) {
        let obj = {count: 0};
        switch(i) {
          case 0:
            !status[i]&&success.push({date: base, ...obj});
            break;
          case 1:
            !status[i]&&fails.push({date: base, ...obj});
            break;
          case 2:
            !status[i]&&progress.push({date: base, ...obj});
            break;
          case 3:
            !status[i]&&timeouts.push({date: base, ...obj});
            break;
          default:
            break;
        }
      }
    }
    return {
      success,
      fails,
      progress,
      timeouts
    }
  }
  
}

module.exports = DataService;
