'use  strict';  //  eslint-disable-line

import  {  maintainer, datas, prdatas } from  '../constant/index'
import urllib from 'urllib'

const util = require('../util/index');

module.exports  =  (app)  =>  {
    class  HandleService  extends  app.Service  {
    
    // * handleIssueAndPRgithub(url, labelUrl, prURL)
    // https://api.github.com/repos/alibaba-fusion/next/pulls
    // * handleIssuegithub(url, labelUrl, prURL) {

    //     const url = 'https://github.com/alibaba-fusion/next/issues/assigned/'
    //     const labelUrl = "https://github.com/alibaba-fusion/next/issues?"
    //     const prURL = "https://github.com/alibaba-fusion/next/pulls/"

    //     let map = new Map();
    //     let owers = {}
    //     let person = maintainer;
    //     for(let key in person) {
    //         let value = person[key].githubId;
    //         owers[value] = {
    //             "githubId": value,
    //             "issueCount": [0, 0], // 0未解决 ,1是解决
    //             "nikename": person[key].cname,
    //             "issueUrl": `${url}${value}`,
    //             "resolve": 0, //每周完成的issue
    //             "overMouth": 0, //超过一个月以上的issue
    //             "label": 0, // 未打标的issue  打标只分配给负责人，不分配给参与这
    //             "labelUrl": `${labelUrl}q=is:open+is:issue+assignee:${value}+no:label`,
    //             pr:{
    //                 "count": 0,
    //                 "resolve": 0, // 每周提交的pr数
    //                 "url": `${prURL}${value}`, //每个人所以的url
    //                 "urls": [], //对应每一个url
    //                 "reviwer": [], //此人合并y
    //                 "user": '', //提交pr的人
    //                 "state": [], // pr的状态 成功或失败
    //                 "stateDesc":[]// 每条pr 成功或失败的描述
    //             }
    //         };
    //         for(let componentName of person[key].components) {
    //             let lowerName = componentName.replace("-","").toLowerCase();
    //             map.set(lowerName, value)
    //         }
    //     }

    //     const status = {
    //         'closed': 0,
    //         'open': 1,
    //     }
    //     // const datas = yield util.getIssuesFromGithub({ state: 'all' });

    //     let today = new Date()
    //     const reg = /\[(.*?)\]/i
    //     for(let index in datas) {

    //         if(datas[index].title.includes('Weekly Digest')) {
    //             continue;
    //         }
    //         const {user: {login}, state, title, labels, assignees, closed_at} = datas[index];
    //         let closedAt = new Date(closed_at)
    //         let isLatWeek = 0;
    //         let isOverMonth = 0;
    //         let isLabel = 0;
    //         let day = 0;
    //         if(!status[state]) { //关闭的issue
    //             day = (today - closedAt)/(1000*60*60*24);
    //             isLatWeek = day && day >=0 && day<=7? 1: 0
    //         } else { //打开的issue 
    //             isLabel = JSON.stringify(labels) == "[]" ? 1 : 0
    //         }

    //         if(datas[index].html_url.includes('issues')) {
    //             if(datas[index].assignees.length === 0) {
    //                 let names = title.match(reg);
    //                 let name = names ? names[1].toLowerCase(): "";
    //                 let duty = "";
    //                 if(map.has(name)) {
    //                     duty = map.get(name)
    //                     owers[duty].issueCount[status[state]] += 1;
    //                     owers[duty].resolve += isLatWeek;
    //                     owers[duty].overMouth += isOverMonth;
    //                     owers[duty].label += isLabel;
                    
    //                 }
    //             } else {
    //                 assignees.forEach(item => {
    //                     let name = item.login;
    //                     owers[name].issueCount[status[state]] += 1;
    //                     owers[name].resolve += isLatWeek;
    //                     owers[name].overMouth += isOverMonth;
    //                     owers[name].label += isLabel;
    //                 })
    //             }
    //         }else { // 一周内pr的处理 
    //             if(owers[login]) {
    //                 owers[login].pr.resolve  += isLatWeek;
    //             }
    //         }
    //     }


    //     // const datas = prdatas;
    //     for(let item in prdatas) {
    //         const { user: {login}, html_url, requested_reviewers, assignees, _links } = prdatas[item]
    //         if(owers[login]) {
    //             owers[login].pr.count += 1;
    //             owers[login].pr.urls.push(html_url);
    //             owers[login].pr.user = login;
    //             if(requested_reviewers.length !== 0) {
    //                 owers[login].pr.reviwer.push(requested_reviewers.map(item => item.login))
    //             }else if(assignees.length !== 0)  {
    //                 owers[login].pr.reviwer.push(assignees.map(item => item.login))
    //             }else {
    //                 owers[login].pr.reviwer.push(["no"])
    //             }
    //         } 
    //     }

    //     return  owers 
    // }

    * getPullRequest(owers, map) {
        // const URL = 'https://api.github.com/repos/alibaba-fusion/next/pulls'
        // const result = yield urllib.request(URL, {
        //     method: 'GET' 
        // });
        // const datas = JSON.parse(result.data);
        const datas = prdatas;
        for(let item in datas) {
            const { user: {login}, html_url, requested_reviewers, assignees, _links } = datas[item]
            if(owers[login]) {
                owers[login].pr.count += 1;
                owers[login].pr.urls.push(html_url);
                owers[login].pr.user = login;
                if(requested_reviewers.length !== 0) {
                    owers[login].pr.reviwer.push(requested_reviewers.map(item => item.login))
                }else if(assignees.length !== 0)  {
                    owers[login].pr.reviwer.push(assignees.map(item => item.login))
                }else {
                    owers[login].pr.reviwer.push(["no"])
                }
            }
            
        }
    }

    * getRequestDingding(url, dingContent) {
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
    }

    * sendDingding() {

        // console.log(issues.length);
        const dingtalks = [
            // Fusion 使用讨论群
            // 'https://oapi.dingtalk.com/robot/send?access_token=6d354e4faaf14939b90c19cfd93fba71a51786ca3295731e2379f947d2b5a046',
            // 'https://oapi.dingtalk.com/robot/send?access_token=4b7cd22b753a891ecfe4d2afd615c38f9b5cc39596cfa8beafbb8f17805f9cc7'
            'https://oapi.dingtalk.com/robot/send?access_token=11f9260db2a92f7e816f55b858514004a84687860fd54e7944635d57eaa51679',
            // 'https://oapi.dingtalk.com/robot/send?access_token=105b56e17e3c3a258ab2a7d2f2fc592e6b21f1c93d6892d9a0841f8c0f538374'
        ];

        let dingContent = `> **Issues Assign**  \n\n`;
        let dingContentPR = `> ** Pull Request Assign**  \n\n`;

        const prdatas = yield util.getPullRequestFromGithub({ state: 'open' });
        // const datas = yield util.getIssuesFromGithub({ state: 'all' });


        const owers = yield util.handleIssueAndPRgithub(maintainer, datas, prdatas)
        
        // yield this.getPullRequest(owers, map) 
        let week = new Date().getDay();
        
        for(let item in owers) {
            const {nikename, githubId, issueCount, issueUrl, label, resolve, labelUrl, pr} = owers[item];
            
            const reviwers = `[submitted ${pr.count} pr](${pr.url}) \n\n&nbsp;&nbsp; Need to review: ${pr.urls.map((item, index)=> ` [#${item.split("/")[item.split("/").length - 1]}](${item})  ${pr.reviwer[index].map(v => owers[v] ? `@${owers[v].nikename}`: '' ).join('') }`  ) }`
            if(week === -1){
                dingContent +=  `* ${nikename} ${resolve!=0 ? `上周已解决${resolve}` : ''}  待解决issue数[${issueCount[1]}](${issueUrl}) 待打标数[${label}](${labelUrl})\n`
                if(pr.resolve !== 0 && pr.count !== 0) {
                    dingContentPR += `* ${nikename} 上周已提交${pr.resolve} 当前pr数${reviwers}\n`
                }else if(pr.resolve !==0){
                    dingContentPR += `* ${nikename} 上周已提交${pr.resolve} \n`
                }else if(pr.count !== 0) {
                    dingContentPR += `* ${nikename} 当前pr数${reviwers}\n`
                }
            }else{
                dingContent += `* ${nikename}(${githubId}) ${issueCount[1] !== 0 && `[${issueCount[1]} 待处理 Todo](${issueUrl})`} ${label !== 0 && `, [${label} 待打标 To label](${labelUrl})`} \n`

                if(pr.count !== 0) {
                    dingContentPR += `* ${nikename}(${githubId})  ${reviwers}\n`
                }
            }
        }

        dingContent  += '\n查看issue，请点击[fusion-data](http://fusion-data.alibaba.net/issue)或[github](https://github.com/alibaba-fusion/next/issues)'
        dingContentPR  += '\n查看pr，请点击[github](https://github.com/alibaba-fusion/next/pulls)'

        for (let i = 0; i < dingtalks.length; i++) {
            const url = dingtalks[i];
            yield this.getRequestDingding(url, dingContent)
            yield this.getRequestDingding(url, dingContentPR)
        }


        console.log('Push to ding talk successfully!');
    }
   }
 
  return HandleService;
 
}