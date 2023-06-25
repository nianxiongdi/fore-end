/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
 var timeLimit = function(fn, t) {
	return async function(...args) {
        return Promise.race([
            fn().then((res) =>{
                return {"resolved":res,"time":t}
            }),
            new Promise(reject =>{
                setTimeout(() => {
                    reject(
                        {"rejected":"Time Limit Exceeded","time":t}
                    )
                }, t)
            })
        ])
    }
};


const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
