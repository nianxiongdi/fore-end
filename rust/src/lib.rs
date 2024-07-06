use wasm_bindgen::prelude::*;
use wasm_bindgen_test::*;

#[wasm_bindgen]
pub fn add(a: u32, b: u32) -> u32 {
    a + b
}

#[wasm_bindgen]
pub fn aaa(a: u32, b: u32) -> u32 {
    a + b
}

#[cfg(test)]
mod tests {
    use super::*;
    use wasm_bindgen_test::*;

    wasm_bindgen_test_configure!(run_in_browser);

    #[wasm_bindgen_test]
    fn test_add() {
        assert_eq!(add(1, 2), 13);
        assert_eq!(add(10, 20), 30);
    }
}
 
// https://www.levenx.com/issues/running-a-wasm-file-in-node-js-hbmgcy

// https://juejin.cn/post/7269958378478633012


// https://github.com/Qinsuyan/rust-wasm-test/tree/main

// https://medium.com/@GetInRhythm/how-to-publish-a-command-line-tool-to-npm-3325b272ffe7

// https://github1s.com/infinyon/node-bindgen/blob/master/nj-cli/src/init/mod.rs