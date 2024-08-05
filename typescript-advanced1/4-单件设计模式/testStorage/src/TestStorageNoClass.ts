/**
 * 问题：直接使用localStorage.setItem或localStorage.getItem会有什么影响
 *
 * 1.代码零散
 * 2. 可读性差，不能一下子顾名思义
 * 3. 对后期的维护产生影响
 * 4. JSON.stringify,JSON.parse可以直接放在类中，这样写，减少开发工作量
 */
