'use  strict';  //  eslint-disable-line
/**
  *  retcode开放接口请求封装
  *  数据均以日为维度进行捞取，并在过滤后将数据结果存入数据库.
  */
//  import  moment  from  'moment';
//  import  {  projects  }  from  'Constant';

import  {  maintainer, datas, prdatas }    from  '../constant/index'
import urllib from 'urllib'
import inquirer from 'inquirer'
import chalk from 'chalk'

const util = require('../util/index');

/*  istanbul  ignore  next  */
module.exports  =  (app)  =>  {
    class  HandleService  extends  app.Service  {

    * handleIssuegithub() {
        // console.log('-handleIssuegithub-')
        // console.log(datas);
        // console.log(datas.length)

        const url = 'https://github.com/alibaba-fusion/next/issues/assigned/'
        const labelUrl = "https://github.com/alibaba-fusion/next/issues?"
        const prURL = "https://github.com/alibaba-fusion/next/pulls/"

        let map = new Map();
        let owers = {}
        let person = maintainer;
        for(let key in person) {
            let value = person[key].githubId;
            owers[value] = {
                "githubId": value,
                "issueCount": [0, 0], // 0未解决 ,1是解决
                "nikename": person[key].cname,
                "issueUrl": `${url}${value}`,
                "resolve": 0, //每周完成的issue
                "overMouth": 0, //超过一个月以上的issue
                "label": 0, // 未打标的issue  打标只分配给负责人，不分配给参与这
                "labelUrl": `${labelUrl}q=is:open+is:issue+assignee:${value}+no:label`,
                pr:{
                    "count": 0,
                    "resolve": 0, // 每周提交的pr数
                    "url": `${prURL}${value}`, //每个人所以的url
                    "urls": [], //对应每一个url
                    "reviwer": [], //此人合并y
                    "user": '', //提交pr的人
                    "state": [], // pr的状态 成功或失败
                    "stateDesc":[]// 每条pr 成功或失败的描述
                }
            };
            for(let componentName of person[key].components) {
                let lowerName = componentName.replace("-","").toLowerCase();
                map.set(lowerName, value)
            }
        }

        const status = {
            'closed': 0,
            'open': 1,
        }
        // console.log(owers);
        // const datas = yield util.getIssuesFromGithub({ state: 'all' });
        
        console.log(datas.length);
        console.log('+++++++');
        let today = new Date()
        const reg = /\[(.*?)\]/i
        for(let index in datas) {

            if(datas[index].title.includes('Weekly Digest')) {
                continue;
            }

            const {user: {login}, state, title, labels, assignees, closed_at} = datas[index];
            let closedAt = new Date(closed_at)
            let isLatWeek = 0;
            let isOverMonth = 0;
            let isLabel = 0;
            let day = 0;
            if(!status[state]) { //关闭的issue
                day = (today - closedAt)/(1000*60*60*24);
                // console.log(day );
                // console.log('-------------');
                isLatWeek = day && day >=0 && day<=7? 1: 0
            } else { //打开的issue
                // day = (today - closedAt)/(1000*60*60*24);
                // isOverMonth = status[state] && day && day>=31 ? 1: 0; 
                // console.log(item.labels);
                // console.log(item.labels.length);
                // console.log(component)
                // console.log(title)
                // console.log('-------------');
                isLabel = JSON.stringify(labels) == "[]" ? 1 : 0
                // console.log(labels == "[]")
                // console.log(labels)
            }



            // console.log(datas[index].state) // state
            // console.log(datas[index].html_url.includes('issues'))
            if(datas[index].html_url.includes('issues')) {
                // console.log(datas[index].title) // 标题
                // console.log(datas[index].html_url)
                // console.log('----log----')
                if(datas[index].assignees.length === 0) {
                    // console.log(datas[index].title.match(reg), state)
                    let names = title.match(reg);
                    let name = names ? names[1].toLowerCase(): "";
                    let duty = "";
                    if(map.has(name)) {
                        duty = map.get(name)
                        console.log('duty');
                        console.log(duty);
                        console.log(duty, login, state, title);
                        console.log('+_______+');

                        owers[duty].issueCount[status[state]] += 1;
                        owers[duty].resolve += isLatWeek;
                        owers[duty].overMouth += isOverMonth;
                        owers[duty].label += isLabel;
                    
                    }else {
                        // 命令不规范的
                        // console.log(title)
                        // console.log('console');
                    }
                } else {
                    assignees.forEach(item => {
                        let name = item.login;
                        owers[name].issueCount[status[state]] += 1;
                        owers[name].resolve += isLatWeek;
                        owers[name].overMouth += isOverMonth;
                        owers[name].label += isLabel;

                        // console.log(item.login)
                    })
                }
                // console.log(datas[index].title)

                //Weekly Digest
                // console.log()
            }else { // 一周内pr的处理 
                // console.log(title);
                // console.log(datas[index].user)
                if(owers[login]) {
                    owers[login].pr.resolve  += isLatWeek;
                }
            }
        }
        // console.log(owers)

        // yield this.getPullRequest(owers, map) 

        return {owers, map};

    }

    * getPullRequestStatus(url) {
        const result = yield urllib.request(url, {
            method: 'GET' 
        });
        const datas = JSON.parse(result.data);
        
 
        if(datas[0].state == 'failure') {
            return false;
        }
 
        return true;
    }

    * getPullRequest(owers, map) {
        // const URL = 'https://api.github.com/repos/alibaba-fusion/next/pulls'
        // const result = yield urllib.request(URL, {
        //     method: 'GET' 
        // });
        // const datas = JSON.parse(result.data);
        const datas = prdatas;
        // console.log(datas);
        const lists = [...map.keys()];

        for(let item in datas) {
            // console.log(datas[item].title.match(/\((.*?)\)/g) ) // title
            
            // const duty = lists.find((component) => datas[item].title.toLowerCase().includes(component));
            // console.log(duty);
            // console.log(map.get(duty))
            // console.log('++++')
            // console.log(datas[item].user)
            const { user: {login}, html_url, title, requested_reviewers, assignees, _links } = datas[item]
            // console.log(_links.statuses.href)
        

            if(owers[login]) {

                // const prState = yield this.getPullRequestStatus(_links.statuses.href);
                // console.log(prState);
                // // console.log('===log===');
                // owers[login].pr.state.push( prState )
                // owers[login].pr.stateDesc.push( description )

                if(requested_reviewers.length !== 0) {
                    owers[login].pr.count += 1;
                    owers[login].pr.urls.push(html_url);
                    owers[login].pr.user = login;
                    owers[login].pr.reviwer.push(requested_reviewers.map(item => item.login))
                }else if(assignees.length !== 0)  {
                    owers[login].pr.count += 1;
                    owers[login].pr.urls.push(html_url);
                    owers[login].pr.user = login;
                    owers[login].pr.reviwer.push(assignees.map(item => item.login))
                }else {
                    // 根据提pr的人，去让他指定审核人
                    // const duty = lists.find((component) => title.toLowerCase().includes(component));
                    //const reg = /\[(.*?)\]/i

                    owers[login].pr.count += 1;
                    owers[login].pr.urls.push(html_url);
                    owers[login].pr.user = login;
                    owers[login].pr.reviwer.push(["no"])
                    // console.log(duty)
                    // console.log('ppppp')
                    // if(map.has(duty)) {
                    //     let name = map.get(duty);
                    //     owers[name].pr.reviwer.push(["no"])
                    // }
                }
            }
            // console.log(owers['jdkahn'].pr.reviwer)
            // console.log('zzzzzzz')
            // if(map.get(duty)) {
            //     owers[map.get(duty)].pr.count += 1;
            //     owers[map.get(duty)].pr.urls.push( datas[item].html_url);
            //     owers[map.get(duty)].pr.user =  datas[item].user.login;
            //     console.log(datas[item].requested_reviewers.map(item => item.login))
            //     console.log('+++++++++++')
            // }
            
            // console.log(datas[item].user.login) // 提pr的 

            // 根据标题寻找 这个pr是谁负责的
            // console.log(datas[item].html_url) // pr的url
            // console.log(datas[item]._links.statuses.href) // pr的状态  success/failure
            // pr是否reviwe   依据 requested_reviewers数组
            // if(datas[item].requested_reviewers.length !== 0){
            //     console.log(datas[item].requested_reviewers[0].login);  
            // } 
            // console.log('-----------')
        }
        // console.log(owers['guanpu'].pr.reviwer)
    }

    * sendDingding() {

        // console.log(issues.length);
        const dingtalks = [
            // Fusion 使用讨论群
            // 'https://oapi.dingtalk.com/robot/send?access_token=6d354e4faaf14939b90c19cfd93fba71a51786ca3295731e2379f947d2b5a046',
            // 'https://oapi.dingtalk.com/robot/send?access_token=4b7cd22b753a891ecfe4d2afd615c38f9b5cc39596cfa8beafbb8f17805f9cc7'
            // 'https://oapi.dingtalk.com/robot/send?access_token=11f9260db2a92f7e816f55b858514004a84687860fd54e7944635d57eaa51679'
            'https://oapi.dingtalk.com/robot/send?access_token=105b56e17e3c3a258ab2a7d2f2fc592e6b21f1c93d6892d9a0841f8c0f538374'
        ];
        // const {owers, map} = yield this.handleIssue()
             

        // const data1 = yield util.getPullRequestFromGithub({ state: 'all' })
        // console.log(data1.length)
        // console.log('--------')
        // yield this.handleIssuegithub()

        const result = yield inquirer.prompt([{
            name: 'sync',
            type: 'confirm',
            default: true,
            message: chalk.green.bold('是否同步发布信息到钉钉群')
        }]);
        if (!result.sync) {
            console.log('无返回数据。');
            // logger.success('不发就不发吧~');
            return;
        }

        let dingContent = `### [公告] issue 分配  \n\n`;
        let dingContentPR = `> **[公告] pr 分配**  \n\n`;

        const  {owers, map}  = yield this.handleIssuegithub()
        // console.log('---up---')
        yield this.getPullRequest(owers, map) 
        // console.log(owers);
        // console.log('----------')
        //  yield this.getPullRequestList(datas, map)
        // yield this.getPullRequest(owers, map) 
        // console.log(owers)
        // console.log(datas);
        let weekdayNames = [];
        let weekdayNamesPR = [];
        let max = -1;
        let maxPR = -1;
        let week = new Date().getDay();
        week = 1;
        
        for(let item in owers) {
            const {nikename, issueCount, issueUrl, label, resolve, labelUrl, pr} = owers[item];

            if(resolve > max) {
                max = resolve;
                weekdayNames = [];
                weekdayNames.push(nikename);
            }else if(resolve == max) {
                weekdayNames.push(nikename);
            }

            if(pr.resolve > maxPR) {
                maxPR = pr.resolve;
                weekdayNamesPR = [];
                weekdayNamesPR.push(nikename);
                
            }else if(pr.resolve == maxPR) {
                weekdayNamesPR.push(nikename);
            }

            // console.log(datas[item])
            // console.log(datas[item].nikename);
            // console.log(datas[item].pr.count)
            console.log(pr.reviwer);
            console.log('aaaaaa');
            // const reviwers = `[${pr.count}](${pr.url}) 需审核${pr.urls.map((item, index)=> ` [${index+1} ${pr.state[index]? '通过':'未通过' }](${item}): ${pr.reviwer[index].map(v => owers[v] ? owers[v].nikename : "无审核人" ) }`  ) }`
            const reviwers = `[${pr.count}](${pr.url}) 需审核${pr.urls.map((item, index)=> ` [${index+1}](${item}): ${pr.reviwer[index].map(v => owers[v] ? owers[v].nikename : "无" ) }`  ) }`
            if(week === 1){
                // dingContent +=  `### ${nikename} \n  * 上周解决${resolve}个issue ${pr.resolve}个pr 未解决[${issueCount[1]}](${issueUrl}) 未打标[${label}](${labelUrl}) 提交pr数${pr.count!=0 ? reviwers: "0" }\n`
                dingContent +=  `* ${nikename} ${resolve!=0 ? `上周已解决${resolve}` : ''}  issue数[${issueCount[1]}](${issueUrl}) 未打标数[${label}](${labelUrl})\n`
                if(pr.resolve !== 0 && pr.count !== 0) {
                    dingContentPR += `* ${nikename} 上周已提交${pr.resolve} 当前pr数${reviwers}\n`
                }else if(pr.resolve !==0){
                    dingContentPR += `* ${nikename} 上周已提交${pr.resolve} \n`
                }else if(pr.count !== 0) {
                    dingContentPR += `* ${nikename} 当前pr数${reviwers}\n`
                }
            }else{
                // dingContent +=  `### ${nikename} \n  * 未解决[${issueCount[1]}](${issueUrl}) 未打标[${label}](${labelUrl}) 提交pr数${pr.count!=0 ? reviwers: "0" }\n`
                dingContent +=  `- ${nikename} issue数[${issueCount[1]}](${issueUrl}) 未打标数[${label}](${labelUrl}) \n`
                if(pr.count !== 0) {
                    dingContentPR += `${nikename} pr数${reviwers}\n`
                }
            }
            // dingContent +=  `### ${datas[item].nikename}\n * 未解决[${datas[item].issueCount[1]}](),未打标[${datas[item].label}](), 需审查pr数[${parseInt(Math.random()*10)}]() \n`
            // dingContent +=  `### ${nikename}\n * 未解决[${issueCount[1]}](${issueUrl}),未打标[${label}](${labelUrl}) \n`


            // dingContent +=  `- ${datas[item].nikename}: 最近一周解决${datas[item].resolve} 未解决${datas[item].issueCount[1]},[未打标${datas[item].label}](${datas[item].labelUrl}), 超过一个月未解决${datas[item].overMouth}, 查看[${datas[item].nikename}](${datas[item].issueUrl})的issue. pr数量${datas[item].pr.urls.length==0 ? 0: datas[item].pr.urls.map((item, index)=> `[${index+1}](${item})`  )} \n`
        }


        // dingContent +=  `### ${datas[item].nikename} \n  * 一周解决${parseInt(Math.random()*10)}个issue 未解决[${parseInt(Math.random()*10)}]() 未打标[${parseInt(Math.random()*10)}]()  \
        // 需审核pr数[${parseInt(Math.random()*10)}]() \n\n`
        if(week === 1){
            dingContent += `\n查看issue，请点击[fusion-data](http://fusion-data.alibaba.net/issue)或[github](https://github.com/alibaba-fusion/next/issues)\n\n 恭喜${weekdayNames.join(',')}同学解决iusse最多，大家再接再厉～～～`
            dingContentPR += `\n查看pr，请点击[github](https://github.com/alibaba-fusion/next/pulls)\n\n恭喜${weekdayNamesPR.join(',')}同学解决pr最多，大家再接再厉～～～` + '<font face="黑体">我是黑体字</font>'
        }else {
            dingContent  += '* 查看issue，请点击[fusion-data](http://fusion-data.alibaba.net/issue)或[github](https://github.com/alibaba-fusion/next/issues)'
            dingContentPR  += '* 查看pr，请点击[github](https://github.com/alibaba-fusion/next/pulls)'
        }
        // console.log(dingContent);

        // 在过去一周解决

   

        for (let i = 0; i < dingtalks.length; i++) {
            const url = dingtalks[i];
            yield urllib.request(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            content: JSON.stringify({
                msgtype: 'markdown',
                'markdown': {
                'title':'issue提醒',
                'text': dingContent
                }
            })
            });

            yield urllib.request(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            content: JSON.stringify({
                msgtype: 'markdown',
                'markdown': {
                'title':'pr提醒',
                'text': dingContentPR
                }
            })
            });
        }


        console.log('Push to ding talk successfully!');
    }
   }
 
  return HandleService;
 
}