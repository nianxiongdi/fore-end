
## 概述
据统计，截止到2017年3月，大概有1300多万视障人士，有不同程度对网络的需求，对于网站无障碍支持，也是我们共同努力的事情。核心需求是网站的无障碍评估和不符合无障碍规则的标签，进行定位并说明问题。

## 业内无障碍工具

名称 | [axe](https://www.deque.com/axe/) | [lighthouse](https://developers.google.com/web/tools/lighthouse/) | [web.dev](https://web.dev/measure) |
-- | ------ | -------- | -------- |
说明 | 对于使用[浏览器插件](https://www.deque.com/axe/)，开发者运行axe插件，就可以对访问性自动化测试。| Google开发的检测工具，对网站性能评测，开源的自动化工具，用于改进网络应用的质量。开发者可以在chrome扩展程序运行或者命令行运行。chrome扩展插件为用户提供友好的界面，让用户去查看报告。 |web.dev是基于lighthouse,对网站进行的评估,只需要在此[网站](https://web.dev/measure)输入要评估的网址即可，点击运行就可以得到性能、无障碍、SEO和最佳实践的评分。 |
状态 | 这里基于浏览器调查|基于浏览器插件，对页面进行评估或基于node环境评估，这里选择是浏览器调查|不需要安装浏览器插件，直接在[网站](https://web.dev/measure)输入开发者要评估的网站即可，即可知道得分。|
功能 | 1. 对检测的无障碍问题进行分类，所有issue、冲突、需要手动review等 <br />2. 开发者可以选择查看冲突的问题，当你点击每个冲突条目的时候，axe给予解决办法，并且可以定位到html的具体位置 <br />3. 基于axe-core库|1. 可以对性能、无障碍、SEO和最佳实践进行评估，分别给出评估的分数，并给出评估的条目。以无障碍为例，对于不符合无障碍规说明问题的原因并给予定位到html上或给予解决的办法。 <br /> 2. 运行浏览器lighthouse插件，可以选择对页面进行无障碍评估，只需要在当前页面运行lighthouse插件即可，生成评估报告，评估的过程请点击[这里](https://github.com/GoogleChrome/lighthouse/blob/c780dfac1efac2e3debe6ebd7958d48cf2e42721/docs/architecture.md)。报告¬¬可以保持为html或json等。 |1.开发者输入需要评测的url, 就可以对性能、无障碍、SEO和最佳实践进行评估，并给出评估得分。<br />2. 可以对报告进行查看或保存为html或json等。| 
规则 |  axe支持可访问性规则84条(这里是axe-core的库)，完整列表请[点击](https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md)，以下列举部分:<br /> 1.页面的标签id唯一<br />2.关于role和aria的使用(role是否合法，role和aria需保持对于关系等)<br />3.使用alt为图片提供可替代文本<br />4.确保音频元素有字幕<br />5.确保不使用闪烁的元素<br />6.每个页面至少有一种方式用户跳过导航<br />7.符合颜色对比度<br />8.元素dl元素结构化<br />9.每个html文档要有title<br />10.确保表单字段没有多个标签元素<br />11.确保iframe的title不为空<br />12．每个html标签要指定lang且有效<br />13.input要有描述的文本<br />14.每个表单元素要有label<br />15.链接对颜色颜色依赖<br />16.链接要有描述文本<br />17视频要有题目或说明<br />|基于axe-core的，具体规则请点击[这里](https://dequeuniversity.com/rules/axe/3.2/),从lighthouse的代码上看，在评估的时候对axe30多条规则进行评估，具体请[参考](https://github.com/GoogleChrome/lighthouse/tree/c780dfac1efac2e3debe6ebd7958d48cf2e42721/lighthouse-core/audits/accessibility)。以下对部分规则进行列举：<br />1.页面的标签id唯一，不能够重复<br />2.关于role和aria的使用<br />3.音频有字幕，视频有字幕或描述<br />4.butto要有描述文字<br />5.每个页面至少有一种方式用户跳过导航<br />6. 符合颜色对比度<br />7. 正确使用dl,li，td,th等结构化元素<br />8. 每个html文档要有title<br />9. 每个html标签要指定lang且有效<br />10.图片要有alt描述<br />11.确保<input type="image">有可替代文本<br />12.frame要有title<br />13. 每个表单元素要有label<br />14.链接要有描述文本<br />15.不能使用<meta http-equiv="refresh"> ，可以使用<meta name="viewport"><br />16.p标签不能用做标题<br />17.确保tabindex不大于0<br />|和lighthouse基本一致，请[参考](https://web.dev/lighthouse-accessibility)这里|
环境 | [Chrome](https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US)、[Firefox](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/)、[Android](https://play.google.com/store/apps/details?id=com.deque.axe.android) |[Chrome](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk)、[node](https://github.com/GoogleChrome/lighthouse)|基于[网站](https://web.dev/measure)，输入评估url即可|
优点 | 可以对不符合无障碍的元素进行定位，列举可能解决方案 |若对无障碍进行改造，可以让开发者知道，无障碍改造前后是否合理，lighthouse会给予评分 |不需要安装浏览器插件，就可以对网站改造前后作出对比，即可对页面进行评估，给出评分。| 
缺点 | 可以列举一些无障碍的问题，不能对页面进行无障碍评估，比如：评分 |Lighthouse支持对网站评估的规则有限，30多条，请[查看](https://github.com/GoogleChrome/lighthouse/tree/c780dfac1efac2e3debe6ebd7958d48cf2e42721/lighthouse-core/audits/accessibility)|可以对不符合无障碍规则的条目进行查看，无法定位到具体的html上，适合做报告。|


